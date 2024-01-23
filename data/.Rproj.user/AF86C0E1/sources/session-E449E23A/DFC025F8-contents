library(tidyverse)
library(readr)
library(rstudioapi)

#################

excluded_indicators <- c("homicide-offences", "inward-foreign-direct-investment-fdi", "total-value-of-uk-exports")

#################

areas <- read_csv("./config-data/geography/areas.csv")
areas_geog_level <- read.csv("./config-data/geography/areas-geog-level.csv")

previous_periods <- read_csv("config-data/periods/unique-periods-lookup.csv")
previous_indicators <- read_csv("config-data/indicators/indicators-lookup.csv")[c("id", "topic", "subTopic", "code")]

#################

file_paths <- as.data.frame(list.files("csv-preprocess", pattern="\\.csv$", recursive=TRUE, full.names=TRUE))
colnames(file_paths) <- c("filePath")

file_paths <- file_paths |>
  filter(!grepl("/out/", filePath, fixed = TRUE)) |>
  filter(!grepl("_IDS", filePath, fixed = TRUE))

previous_file_paths <- read.csv("./config-data/file-names-log.csv")

new_file_paths <- file_paths |>
  filter(!filePath %in% previous_file_paths$filePath)

if (nrow(new_file_paths) > 0) {
  
  showDialog("Script not run: update file-names-log", "The script has been aborted because the list of file paths read in from the csv-preprocess folder includes files which were not present when this script was last run. These file paths can be viewed in the previous-file-paths data frame. Please add these file paths to the file-names-log.csv file in the config-data folder and re-run.")
  
  stop("Script execution aborted - update file-names-log.")
  
}

file_paths <- merge(x = file_paths, y = previous_file_paths, by = "filePath", all.x = TRUE) |>
  filter(include == "Y")

###########

combined_data <- data.frame(stringsAsFactors=FALSE)
combined_metadata <- data.frame(stringsAsFactors=FALSE)

for (row in 1:nrow(file_paths)) {
  
  indicator_code <- sub("^.*/", "", str_replace(str_replace(file_paths[row, "filePath"], "csv-preprocess/family-ess-main/", ""),".csv", ""))
  
  if (!indicator_code %in% excluded_indicators) {
    
    indicator_data <- read_csv(file_paths[row, "filePath"], col_types = cols(period = col_character(), Period = col_character()))
    
    names(indicator_data) <- tolower(names(indicator_data))
    names(indicator_data)[names(indicator_data) == "lower confidence interval (95%)"] <- "lci"
    names(indicator_data)[names(indicator_data) == "upper confidence interval (95%)"] <- "uci"
    
    if (!is.na(file_paths[row, "valueField"]) & file_paths[row, "valueField"] != "") {
      
      names(indicator_data)[names(indicator_data) == file_paths[row, "valueField"]] <- 'value'
    }
    
    indicator_data <- indicator_data |>
      mutate(areacd = case_when(
        areacd == "TLB" ~ "E92000001",
        areacd == "TLC" ~ "E12000001",
        areacd == "TLD" ~ "E12000002",
        areacd == "TLE" ~ "E12000003",
        areacd == "TLF" ~ "E12000004",
        areacd == "TLG" ~ "E12000005",
        areacd == "TLH" ~ "E12000006",
        areacd == "TLI" ~ "E12000007",
        areacd == "TLJ" ~ "E12000008",
        areacd == "TLK" ~ "E12000009",
        areacd == "TLL" ~ "W92000004",
        areacd == "TLM" ~ "S92000003",
        areacd == "TLN" ~ "N92000002",
        TRUE ~ areacd
      ))
    
    indicator_data <- indicator_data %>%
      filter(areacd %in% areas$areacd)
    
    metadata_columns <- c("areacd", "unit", "polarity", "variable name", "indicator")
    
    if (!is.na(file_paths[row, "multiIndicatorCategory"]) & file_paths[row, "multiIndicatorCategory"] != "" & !file_paths[row, "multiIndicatorCategory"] %in% metadata_columns) {
      
      metadata_columns <- c(metadata_columns, file_paths[row, "multiIndicatorCategory"])
    }
    
    metadata_columns <- metadata_columns[metadata_columns %in% colnames(indicator_data)]
    
    #bespoke code because some of the Northern Ireland areas accidentally have the variable name left blank - hopefully will be able to     remove for a future release
    if (indicator_code == "gross-median-weekly-pay") {
      
      indicator_data <- indicator_data |>
        mutate(`variable name` = case_when(
          is.na(`variable name`) ~ "Gross median weekly pay",
          TRUE ~ `variable name`
        ))
    }
    
    if (!is.na(file_paths[row, "multiIndicatorCategory"]) & file_paths[row, "multiIndicatorCategory"] != "") {
      
      eval(parse(text = paste0('indicator_data <- indicator_data |> mutate(code = paste0(indicator_code,"-", `', file_paths[row, "multiIndicatorCategory"], '`))')))
      
      eval(parse(text = paste0('indicator_metadata <- indicator_data[, metadata_columns, drop = FALSE] |> mutate(areacd = NULL) |> mutate(code = paste0(indicator_code,"-", `', file_paths[row, "multiIndicatorCategory"], '`)) |> mutate(`', file_paths[row, "multiIndicatorCategory"], '` = NULL) |> unique()')))
      
    } else {
      
      indicator_data <- indicator_data |>
        mutate(code = indicator_code)
      
      indicator_metadata <- indicator_data[, metadata_columns, drop = FALSE] |>
        mutate(areacd = NULL) |>
        mutate(code = indicator_code) |>
        unique()
      
    }
    
    if (!"lci" %in% colnames(indicator_data)) {
      
      indicator_data <- indicator_data |>
        mutate(lci = NA)
      
    }
    
    if (!"uci" %in% colnames(indicator_data)) {
      
      indicator_data <- indicator_data |>
        mutate(uci = NA)
      
    }
    
    indicator_data <- indicator_data[c("areacd", "period", "value", "code", "lci", "uci")]
    combined_data <- rbind(combined_data, indicator_data)
    
    indicator_metadata <- unique(indicator_metadata) 
    combined_metadata <- bind_rows(combined_metadata, indicator_metadata)
  }
}

rm(indicator_data,  indicator_metadata, file_paths, excluded_indicators, metadata_columns, indicator_code)


#######################

new_indicators <- combined_metadata |>
  filter(!code %in% previous_indicators$code)

if (nrow(new_indicators) > 0) {
  
  showDialog("Script not run: update indicators-lookup", "The script has been aborted because...")
  
  stop("Script execution aborted - update unique-periods-lookup.")
  
}

indicators <- previous_indicators

rm(new_indicators, previous_indicators, combined_metadata)


#######################


periods <- as.data.frame(unique(combined_data$period))
colnames(periods) <- "period"

new_periods <- periods |>
  filter(!period %in% previous_periods$period)

if (nrow(new_periods) > 0) {
  
  showDialog("Script not run: update unique-periods-lookup", "The script has been aborted because the identified set of periods read in from the combined data pulled from the csv files in csv-preprocess includes periods which were not present when this script was last run. These periods can be viewed in the previous-periods data frame. Please add these periods to the unique-periods-lookup.csv file in the config-data/periods folder and re-run.")
  
  stop("Script execution aborted - update unique-periods-lookup.")
  
}

periods <- previous_periods

rm(previous_periods, new_periods)

#######################

unique_period_data <- merge(x = unique(combined_data[c("period", "code")]), y = periods[c("period", "periodGroup")], by = "period", all.x = TRUE)

for (row in 1:nrow(indicators)) {
  
  indicator_code <- indicators[row, "code"][[1]]
  
  filtered_unique_period_data <- filter(unique_period_data, code == indicator_code)
  
  if (length(unique(filtered_unique_period_data$periodGroup)) != 1) {
    
    showDialog("Script not run: multiple period groups for single indicator", paste0("The script has been aborted because the indicator ", indicator_code, " has data for time periods spanning multiple period groups. This needs to be amended as time periods from different period groups cannot be visualised on the same graph. You can check which groups these are by inspecting the filtered_unique_period_data dataframe."))
    
    stop("Script execution aborted - check period groupings.")
    
  }
  
  indicators[row, "periodGroup"] <- filtered_unique_period_data[1, "periodGroup"]
}

rm(unique_period_data, filtered_unique_period_data, indicator_code)

######################

combined_data <- merge(x = combined_data, y = periods[c("period", "xDomainNumb")], by = "period", all.x = TRUE) |>
  mutate(period = NULL)

distinct_periods <- sort(unique(combined_data$xDomainNumb), decreasing = TRUE)

combined_data_with_geog_level <- merge(x = combined_data, y = areas_geog_level, by = "areacd", all.x = TRUE) |>
  filter(!is.na(value))

geog_levels <- unique((areas_geog_level |> filter(level != "other"))$level)

indicators_calculations <- data.frame(stringsAsFactors=FALSE)

for (row in 1:nrow(indicators)) {
  
  indicator_code <- indicators[row, "code"][[1]]
  
  indicator_data <- combined_data_with_geog_level |>
    filter(code == indicator_code)
  
  indicator_periods <- unique(indicator_data$xDomainNumb)
  
  indicators[row, "minXDomainNumb"] <- min(indicator_periods)
  indicators[row, "maxXDomainNumb"] <- max(indicator_periods)
  
  for (geog_level in geog_levels) {
    
    filtered_indicator_data <- indicator_data |> 
      filter(level == geog_level)
    
    for (period in indicator_periods) {
      
      filtered_indicator_data_single_period <- filtered_indicator_data |>
        filter(xDomainNumb == period)
      
      if (nrow(filtered_indicator_data_single_period) > 1) {
        
        indicators_calculations <- rbind(indicators_calculations, data.frame(code=indicator_code, geog_level=geog_level, period=period, med=median(filtered_indicator_data_single_period$value), mad=mad(filtered_indicator_data_single_period$value)))
        
      }
    }
  }
}

rm(distinct_periods, geog_levels, geog_level, indicator_code, indicator_periods, period, row, indicator_data, filtered_indicator_data, filtered_indicator_data_single_period, combined_data_with_geog_level)

#############################

combined_data <- merge(x = indicators[c("id", "code")], y = combined_data, by = "code", all.x = TRUE) |>
  mutate(code = NULL)

#############################


write.csv(combined_data, "./csv/combined-data.csv", row.names = FALSE)
write.csv(indicators, "./config-data/indicators/indicators-lookup.csv", row.names = FALSE)
write.csv(indicators_calculations, "./config-data/indicators/indicators-calculations.csv", row.names = FALSE)

indicators_metadata_for_js <- read_csv("config-data/indicators/indicators-metadata.csv")

indicators_without_metadata <- indicators_calculations |>
  filter(!code %in% indicators_metadata_for_js$code)

if (nrow(indicators_without_metadata) > 0) {
  
  showDialog("Warning: missing metadata", "This script finished executing, but noted that one or more of the indicators does not currently have associated metadata. This means that the app will error when looking for direction on how to plot data for this indicator. The data frame indicators_without_metadata contains the list of these indicators. Please add the corresponding metadata to the indicators-metadata.csv file in the config-data/indicators folder.")
  
}
