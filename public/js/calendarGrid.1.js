let createCalendarGrid = () => {
    start = moment().startOf("day");
    end = moment().endOf("day");
    diff = end.diff(start, "hour")
    // Create time labels for first column
    for (let index = 0; index < diff + 1; index++) {
        // Top of the hour
        let sideTimeLabels = $("<div>");
        sideTimeLabels.addClass("row justify-content-end pr-1");
        let timeLabel = moment().hour(index).minute(0).format("LT");
        sideTimeLabels.text(timeLabel);
        sideTimeLabels.attr("height","50px")
        $("#timeLabels").append(sideTimeLabels);
    };
    
    
};

start = moment().startOf("day");
end = moment().endOf("day");
diff = end.diff(start, "hour");

// Create time labels for first column (Only displays top of the hour)
for (let index = 0; index < diff + 1; index++) {
    // Top of the hour
    let sideTimeLabels = $("<div>");
    sideTimeLabels.addClass("row justify-content-end pr-1");
    let timeLabel = moment().hour(index).minute(0).format("LT");
    sideTimeLabels.text(timeLabel);
    sideTimeLabels.attr("style","height: 50px")
    $("#timeLabels").append(sideTimeLabels);
};

// Create Sunday time blocks
for (let index = 0; index < diff + 1; index++) {
    // Top of the hour
    let sundayBlocks = $("<div>");
    sundayBlocks.addClass("row border-top");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
    let blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
    let modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    sundayBlocks.attr("id",modified.replace(" ",""));
    sundayBlocks.attr("style","height: 12.5px")
    $("#sunday").append(sundayBlocks);
    
    sundayBlocks = $("<div>")
    sundayBlocks.addClass("row");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
    blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    sundayBlocks.attr("id",modified.replace(" ",""));
    sundayBlocks.attr("style","height: 12.5px")
    $("#sunday").append(sundayBlocks);
    
    sundayBlocks = $("<div>")
    sundayBlocks.addClass("row");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
    blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    sundayBlocks.attr("id",modified.replace(" ",""));
    sundayBlocks.attr("style","height: 12.5px")
    $("#sunday").append(sundayBlocks);
    
    sundayBlocks = $("<div>")
    sundayBlocks.addClass("row");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
    blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    sundayBlocks.attr("id",modified.replace(" ",""));
    sundayBlocks.attr("style","height: 12.5px")
    $("#sunday").append(sundayBlocks);
};

// Create Saturday time blocks
for (let index = 0; index < diff + 1; index++) {
    // Top of the hour
    let saturdayBlocks = $("<div>");
    saturdayBlocks.addClass("row border-top");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
    let blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
    let modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    saturdayBlocks.attr("id",modified.replace(" ",""));
    saturdayBlocks.attr("style","height: 12.5px")
    $("#saturday").append(saturdayBlocks);
    
    saturdayBlocks = $("<div>")
    saturdayBlocks.addClass("row");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
    blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    saturdayBlocks.attr("id",modified.replace(" ",""));
    saturdayBlocks.attr("style","height: 12.5px")
    $("#saturday").append(saturdayBlocks);
    
    saturdayBlocks = $("<div>")
    saturdayBlocks.addClass("row");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
    blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    saturdayBlocks.attr("id",modified.replace(" ",""));
    saturdayBlocks.attr("style","height: 12.5px")
    $("#saturday").append(saturdayBlocks);
    
    saturdayBlocks = $("<div>")
    saturdayBlocks.addClass("row");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
    blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    saturdayBlocks.attr("id",modified.replace(" ",""));
    saturdayBlocks.attr("style","height: 12.5px")
    $("#saturday").append(saturdayBlocks);
};