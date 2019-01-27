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
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
    blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    sundayBlocks.attr("id",modified.replace(" ",""));
    sundayBlocks.attr("style","height: 12.5px")
    $("#sunday").append(sundayBlocks);

    sundayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
    blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    sundayBlocks.attr("id",modified.replace(" ",""));
    sundayBlocks.attr("style","height: 12.5px")
    $("#sunday").append(sundayBlocks);

    sundayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
    blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    sundayBlocks.attr("id",modified.replace(" ",""));
    sundayBlocks.attr("style","height: 12.5px")
    $("#sunday").append(sundayBlocks);
};


// Create Monday time blocks
for (let index = 0; index < diff + 1; index++) {
    // Top of the hour
    let mondayBlocks = $("<div>");
    mondayBlocks.addClass("row border-top");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 1
    let blockID = moment().weekday(1).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
    let modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    mondayBlocks.attr("id",modified.replace(" ",""));
    mondayBlocks.attr("style","height: 12.5px")
    $("#monday").append(mondayBlocks);
    
    mondayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 1
    blockID = moment().weekday(1).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    mondayBlocks.attr("id",modified.replace(" ",""));
    mondayBlocks.attr("style","height: 12.5px")
    $("#monday").append(mondayBlocks);

    mondayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 1
    blockID = moment().weekday(1).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    mondayBlocks.attr("id",modified.replace(" ",""));
    mondayBlocks.attr("style","height: 12.5px")
    $("#monday").append(mondayBlocks);

    mondayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 1
    blockID = moment().weekday(1).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    mondayBlocks.attr("id",modified.replace(" ",""));
    mondayBlocks.attr("style","height: 12.5px")
    $("#monday").append(mondayBlocks);
};

// Create Tuesday time blocks
for (let index = 0; index < diff + 1; index++) {
    // Top of the hour
    let tuesdayBlocks = $("<div>");
    tuesdayBlocks.addClass("row border-top");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 2
    let blockID = moment().weekday(2).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
    let modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    tuesdayBlocks.attr("id",modified.replace(" ",""));
    tuesdayBlocks.attr("style","height: 12.5px")
    $("#tuesday").append(tuesdayBlocks);
    
    tuesdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 2
    blockID = moment().weekday(2).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    tuesdayBlocks.attr("id",modified.replace(" ",""));
    tuesdayBlocks.attr("style","height: 12.5px")
    $("#tuesday").append(tuesdayBlocks);

    tuesdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 2
    blockID = moment().weekday(2).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    tuesdayBlocks.attr("id",modified.replace(" ",""));
    tuesdayBlocks.attr("style","height: 12.5px")
    $("#tuesday").append(tuesdayBlocks);

    tuesdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 2
    blockID = moment().weekday(2).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    tuesdayBlocks.attr("id",modified.replace(" ",""));
    tuesdayBlocks.attr("style","height: 12.5px")
    $("#tuesday").append(tuesdayBlocks);
};


// Create wednesday time blocks
for (let index = 2; index < diff + 1; index++) {
    // Top of the hour
    let wednesdayBlocks = $("<div>");
    wednesdayBlocks.addClass("row border-top");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 3
    let blockID = moment().weekday(3).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
    let modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    wednesdayBlocks.attr("id",modified.replace(" ",""));
    wednesdayBlocks.attr("style","height: 12.5px")
    $("#wednesday").append(wednesdayBlocks);
    
    wednesdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 3
    blockID = moment().weekday(3).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    wednesdayBlocks.attr("id",modified.replace(" ",""));
    wednesdayBlocks.attr("style","height: 12.5px")
    $("#wednesday").append(wednesdayBlocks);

    wednesdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 3
    blockID = moment().weekday(3).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    wednesdayBlocks.attr("id",modified.replace(" ",""));
    wednesdayBlocks.attr("style","height: 12.5px")
    $("#wednesday").append(wednesdayBlocks);

    wednesdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 3
    blockID = moment().weekday(3).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    wednesdayBlocks.attr("id",modified.replace(" ",""));
    wednesdayBlocks.attr("style","height: 12.5px")
    $("#wednesday").append(wednesdayBlocks);
};




// Create Thursday time blocks
for (let index = 0; index < diff + 1; index++) {
    // Top of the hour
    let thursdayBlocks = $("<div>");
    thursdayBlocks.addClass("row border-top");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 4
    let blockID = moment().weekday(4).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
    let modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    thursdayBlocks.attr("id",modified.replace(" ",""));
    thursdayBlocks.attr("style","height: 12.5px")
    $("#thursday").append(thursdayBlocks);
    
    thursdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 4
    blockID = moment().weekday(4).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    thursdayBlocks.attr("id",modified.replace(" ",""));
    thursdayBlocks.attr("style","height: 12.5px")
    $("#thursday").append(thursdayBlocks);

    thursdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 4
    blockID = moment().weekday(4).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    thursdayBlocks.attr("id",modified.replace(" ",""));
    thursdayBlocks.attr("style","height: 12.5px")
    $("#thursday").append(thursdayBlocks);

    thursdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 4
    blockID = moment().weekday(4).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    thursdayBlocks.attr("id",modified.replace(" ",""));
    thursdayBlocks.attr("style","height: 12.5px")
    $("#thursday").append(thursdayBlocks);
};


// Create Friday time blocks
for (let index = 0; index < diff + 1; index++) {
    // Top of the hour
    let fridayBlocks = $("<div>");
    fridayBlocks.addClass("row border-top");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 5
    let blockID = moment().weekday(5).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
    let modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    fridayBlocks.attr("id",modified.replace(" ",""));
    fridayBlocks.attr("style","height: 12.5px")
    $("#friday").append(fridayBlocks);
    
    fridayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 5
    blockID = moment().weekday(5).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    fridayBlocks.attr("id",modified.replace(" ",""));
    fridayBlocks.attr("style","height: 12.5px")
    $("#friday").append(fridayBlocks);

    fridayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 5
    blockID = moment().weekday(5).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    fridayBlocks.attr("id",modified.replace(" ",""));
    fridayBlocks.attr("style","height: 12.5px")
    $("#friday").append(fridayBlocks);

    fridayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 5
    blockID = moment().weekday(5).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    fridayBlocks.attr("id",modified.replace(" ",""));
    fridayBlocks.attr("style","height: 12.5px")
    $("#friday").append(fridayBlocks);
};

// Create Saturday time blocks
for (let index = 0; index < diff + 1; index++) {
    // Top of the hour
    let saturdayBlocks = $("<div>");
    saturdayBlocks.addClass("row border-top");
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 6
    let blockID = moment().weekday(6).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
    let modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    saturdayBlocks.attr("id",modified.replace(" ",""));
    saturdayBlocks.attr("style","height: 12.5px")
    $("#saturday").append(saturdayBlocks);
    
    saturdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 6
    blockID = moment().weekday(6).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    saturdayBlocks.attr("id",modified.replace(" ",""));
    saturdayBlocks.attr("style","height: 12.5px")
    $("#saturday").append(saturdayBlocks);

    saturdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 6
    blockID = moment().weekday(6).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    saturdayBlocks.attr("id",modified.replace(" ",""));
    saturdayBlocks.attr("style","height: 12.5px")
    $("#saturday").append(saturdayBlocks);

    saturdayBlocks = $("<div>")
    // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 6
    blockID = moment().weekday(6).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
    modified = blockID.replace(":","");
    modified = modified.replace("/","");
    modified = modified.replace("/","");
    saturdayBlocks.attr("id",modified.replace(" ",""));
    saturdayBlocks.attr("style","height: 12.5px")
    $("#saturday").append(saturdayBlocks);
};

