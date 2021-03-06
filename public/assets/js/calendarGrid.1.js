// Function to create dynamic calendar and timeslot IDs
let createCalendarGrid = () => {
    start = moment().startOf("day");
    end = moment().endOf("day");
    diff = end.diff(start, "hour");

    for (let index = 0; index < diff + 1; index++) {
        // Top of the hour
        let sideTimeLabels = $("<div>");
        sideTimeLabels.addClass("row justify-content-end pr-1");
        let timeLabel = moment().hour(index).minute(0).format("LT");
        sideTimeLabels.text(timeLabel);
        sideTimeLabels.attr("style", "height: 50px")
        $("#timeLabels").append(sideTimeLabels);
    };

    // Create Sunday time blocks
    for (let index = 0; index < diff + 1; index++) {
        // Top of the hour
        let sundayBlocks = $("<div>");
        sundayBlocks.addClass("row border-top");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
        let blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
        let modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        sundayBlocks.attr("id", modified.replace(" ", ""));
        sundayBlocks.attr("style", "height: 12.5px")
        $("#sunday").append(sundayBlocks);

        sundayBlocks = $("<div>");
        sundayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
        blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        sundayBlocks.attr("id", modified.replace(" ", ""));
        sundayBlocks.attr("style", "height: 12.5px")
        $("#sunday").append(sundayBlocks);

        sundayBlocks = $("<div>");
        sundayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
        blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        sundayBlocks.attr("id", modified.replace(" ", ""));
        sundayBlocks.attr("style", "height: 12.5px")
        $("#sunday").append(sundayBlocks);

        sundayBlocks = $("<div>");
        sundayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 0
        blockID = moment().weekday(0).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        sundayBlocks.attr("id", modified.replace(" ", ""));
        sundayBlocks.attr("style", "height: 12.5px")
        $("#sunday").append(sundayBlocks);
    };

    // Create Monday time blocks
    for (let index = 0; index < diff + 1; index++) {
        // Top of the hour
        let mondayBlocks = $("<div>");
        mondayBlocks.addClass("row border-top");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 1
        let blockID = moment().weekday(1).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
        let modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        mondayBlocks.attr("id", modified.replace(" ", ""));
        mondayBlocks.attr("style", "height: 12.5px")
        $("#monday").append(mondayBlocks);

        mondayBlocks = $("<div>");
        mondayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 1
        blockID = moment().weekday(1).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        mondayBlocks.attr("id", modified.replace(" ", ""));
        mondayBlocks.attr("style", "height: 12.5px")
        $("#monday").append(mondayBlocks);

        mondayBlocks = $("<div>");
        mondayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 1
        blockID = moment().weekday(1).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        mondayBlocks.attr("id", modified.replace(" ", ""));
        mondayBlocks.attr("style", "height: 12.5px")
        $("#monday").append(mondayBlocks);

        mondayBlocks = $("<div>");
        mondayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 1
        blockID = moment().weekday(1).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        mondayBlocks.attr("id", modified.replace(" ", ""));
        mondayBlocks.attr("style", "height: 12.5px")
        $("#monday").append(mondayBlocks);
    };

    // Create Tuesday time blocks
    for (let index = 0; index < diff + 1; index++) {
        // Top of the hour
        let tuesdayBlocks = $("<div>");
        tuesdayBlocks.addClass("row border-top");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 2
        let blockID = moment().weekday(2).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
        let modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        tuesdayBlocks.attr("id", modified.replace(" ", ""));
        tuesdayBlocks.attr("style", "height: 12.5px")
        $("#tuesday").append(tuesdayBlocks);

        tuesdayBlocks = $("<div>");
        tuesdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 2
        blockID = moment().weekday(2).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        tuesdayBlocks.attr("id", modified.replace(" ", ""));
        tuesdayBlocks.attr("style", "height: 12.5px")
        $("#tuesday").append(tuesdayBlocks);

        tuesdayBlocks = $("<div>");
        tuesdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 2
        blockID = moment().weekday(2).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        tuesdayBlocks.attr("id", modified.replace(" ", ""));
        tuesdayBlocks.attr("style", "height: 12.5px")
        $("#tuesday").append(tuesdayBlocks);

        tuesdayBlocks = $("<div>");
        tuesdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 2
        blockID = moment().weekday(2).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        tuesdayBlocks.attr("id", modified.replace(" ", ""));
        tuesdayBlocks.attr("style", "height: 12.5px")
        $("#tuesday").append(tuesdayBlocks);
    };

    // Create wednesday time blocks
    for (let index = 0; index < diff + 1; index++) {
        // Top of the hour
        let wednesdayBlocks = $("<div>");
        wednesdayBlocks.addClass("row border-top");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 3
        let blockID = moment().weekday(3).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
        let modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        wednesdayBlocks.attr("id", modified.replace(" ", ""));
        wednesdayBlocks.attr("style", "height: 12.5px")
        $("#wednesday").append(wednesdayBlocks);

        wednesdayBlocks = $("<div>");
        wednesdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 3
        blockID = moment().weekday(3).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        wednesdayBlocks.attr("id", modified.replace(" ", ""));
        wednesdayBlocks.attr("style", "height: 12.5px")
        $("#wednesday").append(wednesdayBlocks);

        wednesdayBlocks = $("<div>");
        wednesdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 3
        blockID = moment().weekday(3).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        wednesdayBlocks.attr("id", modified.replace(" ", ""));
        wednesdayBlocks.attr("style", "height: 12.5px")
        $("#wednesday").append(wednesdayBlocks);

        wednesdayBlocks = $("<div>");
        wednesdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 3
        blockID = moment().weekday(3).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        wednesdayBlocks.attr("id", modified.replace(" ", ""));
        wednesdayBlocks.attr("style", "height: 12.5px")
        $("#wednesday").append(wednesdayBlocks);
    };

    // Create Thursday time blocks
    for (let index = 0; index < diff + 1; index++) {
        // Top of the hour
        let thursdayBlocks = $("<div>");
        thursdayBlocks.addClass("row border-top");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 4
        let blockID = moment().weekday(4).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
        let modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        thursdayBlocks.attr("id", modified.replace(" ", ""));
        thursdayBlocks.attr("style", "height: 12.5px")
        $("#thursday").append(thursdayBlocks);

        thursdayBlocks = $("<div>");
        thursdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 4
        blockID = moment().weekday(4).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        thursdayBlocks.attr("id", modified.replace(" ", ""));
        thursdayBlocks.attr("style", "height: 12.5px")
        $("#thursday").append(thursdayBlocks);

        thursdayBlocks = $("<div>");
        thursdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 4
        blockID = moment().weekday(4).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        thursdayBlocks.attr("id", modified.replace(" ", ""));
        thursdayBlocks.attr("style", "height: 12.5px")
        $("#thursday").append(thursdayBlocks);

        thursdayBlocks = $("<div>");
        thursdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 4
        blockID = moment().weekday(4).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        thursdayBlocks.attr("id", modified.replace(" ", ""));
        thursdayBlocks.attr("style", "height: 12.5px")
        $("#thursday").append(thursdayBlocks);
    };

    // Create Friday time blocks
    for (let index = 0; index < diff + 1; index++) {
        // Top of the hour
        let fridayBlocks = $("<div>");
        fridayBlocks.addClass("row border-top");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 5
        let blockID = moment().weekday(5).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
        let modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        fridayBlocks.attr("id", modified.replace(" ", ""));
        fridayBlocks.attr("style", "height: 12.5px")
        $("#friday").append(fridayBlocks);

        fridayBlocks = $("<div>");
        fridayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 5
        blockID = moment().weekday(5).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        fridayBlocks.attr("id", modified.replace(" ", ""));
        fridayBlocks.attr("style", "height: 12.5px")
        $("#friday").append(fridayBlocks);

        fridayBlocks = $("<div>");
        fridayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 5
        blockID = moment().weekday(5).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        fridayBlocks.attr("id", modified.replace(" ", ""));
        fridayBlocks.attr("style", "height: 12.5px")
        $("#friday").append(fridayBlocks);

        fridayBlocks = $("<div>");
        fridayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 5
        blockID = moment().weekday(5).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        fridayBlocks.attr("id", modified.replace(" ", ""));
        fridayBlocks.attr("style", "height: 12.5px")
        $("#friday").append(fridayBlocks);
    };

    // Create Saturday time blocks
    for (let index = 0; index < diff + 1; index++) {
        // Top of the hour
        let saturdayBlocks = $("<div>");
        saturdayBlocks.addClass("row border-top");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 6
        let blockID = moment().weekday(6).format("MM/DD/YYYY") + moment().hour(index).minute(0).format("LT");
        let modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        saturdayBlocks.attr("id", modified.replace(" ", ""));
        saturdayBlocks.attr("style", "height: 12.5px")
        $("#saturday").append(saturdayBlocks);

        saturdayBlocks = $("<div>");
        saturdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 6
        blockID = moment().weekday(6).format("MM/DD/YYYY") + moment().hour(index).minute(15).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        saturdayBlocks.attr("id", modified.replace(" ", ""));
        saturdayBlocks.attr("style", "height: 12.5px")
        $("#saturday").append(saturdayBlocks);

        saturdayBlocks = $("<div>");
        saturdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 6
        blockID = moment().weekday(6).format("MM/DD/YYYY") + moment().hour(index).minute(30).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        saturdayBlocks.attr("id", modified.replace(" ", ""));
        saturdayBlocks.attr("style", "height: 12.5px")
        $("#saturday").append(saturdayBlocks);

        saturdayBlocks = $("<div>");
        saturdayBlocks.addClass("row");
        // Responsible for creating unique ID for block (MM/DD/YYYY XX:XX AM|PM) | Weekday 6
        blockID = moment().weekday(6).format("MM/DD/YYYY") + moment().hour(index).minute(45).format("LT");
        modified = blockID.replace(":", "");
        modified = modified.replace("/", "");
        modified = modified.replace("/", "");
        saturdayBlocks.attr("id", modified.replace(" ", ""));
        saturdayBlocks.attr("style", "height: 12.5px")
        $("#saturday").append(saturdayBlocks);
    };
};

// Function to grab events for user logged in
let getUserEvents = () => {
    let url = "/api/calendar/" + localStorage.getItem("UserID");
    // Send GET-request with jQuery
    $.get(url, (serverRes => {
        //   window.location.href = "/test";
        serverRes.forEach(e => {
            // Identify where to start modifying
            let idLocatorStart = e.startDate + e.startTime;
            idLocatorStart = idLocatorStart.replace(" ", "");
            idLocatorStart = idLocatorStart.replace(":", "");
            idLocatorStart = idLocatorStart.replace("/", "");
            idLocatorStart = idLocatorStart.replace("/", "");
            idLocatorStart = "#" + idLocatorStart;

            // Identify where to end modifying
            let idLocatorEnd = e.startDate + e.endTime;
            idLocatorEnd = idLocatorEnd.replace(" ", "");
            idLocatorEnd = idLocatorEnd.replace(":", "");
            idLocatorEnd = idLocatorEnd.replace("/", "");
            idLocatorEnd = idLocatorEnd.replace("/", "");
            idLocatorEnd = "#" + idLocatorEnd;

            // Identify the blocks to adjust
            let objectToParse = {};
            objectToParse = $(idLocatorStart).nextUntil($(idLocatorEnd));
            console.log(objectToParse);
            console.log(objectToParse.length);
            // if 15 min block, go ahead and round bottom of container
            if (objectToParse.length == 0) $(idLocatorStart).addClass("rounded-bottom");
            // Modify timeblocks identified
            let startSubString = idLocatorStart.length - 4;
            console.log(idLocatorStart.substring(startSubString,idLocatorStart.length));
            // Add top of the hour border to timeblock where applicable
            if (idLocatorStart.substring(startSubString,idLocatorStart.length) == "00AM" || idLocatorStart.substring(startSubString,idLocatorStart.length) == "00PM" ) {
                $($(idLocatorStart).prev()).addClass("border-bottom");
            };
            $(idLocatorStart).addClass("rounded-top");
            $(idLocatorStart).attr("style", "height: 12.5px; background-color: #ff5722");
            $(idLocatorStart).attr("event-id", e.id);
            createModifiableEvent($(idLocatorStart));
            createPopoverContent($(idLocatorStart),e)
            for (let index = 0; index < objectToParse.length; index++) {
                let element = objectToParse[index];
                $(element).attr("style", "height: 12.5px; background-color: #ff5722");
                $(element).attr("event-id", e.id);
                $(element).removeClass("border-top");
                createModifiableEvent($(element));
                createPopoverContent($(element),e)
                if (index == objectToParse.length - 1) {
                    $(element).removeClass("border-top");
                    $(element).addClass("rounded-bottom");
                    createModifiableEvent($(element));
                    createPopoverContent($(element),e)
                };
            };
        
        });
    }))
};

// Create modifable events
let createModifiableEvent = (divTimeBlock) => {
    $(divTimeBlock).on("click", () => {
        localStorage.setItem("EventID",$(divTimeBlock).attr("event-id"));
        window.location.assign("/modifyEvent");
    })
}
// Create popover and content
let createPopoverContent = (divTimeBlock,content) => {
    // Create hoverable popover to show event details
    $(divTimeBlock).popover({
        trigger: "hover",
        title: content.title,
        // container: "body",
        placement: "bottom",
        content: content.description
    });
}

// Toggle color of event blocks according to light or dark theme
let colorEventBlocksCorrectly = () => {
    // Switch to orange when 'DARK' theme button is selected
    $('#default').click(() => {
        $('[event-id]').css("background-color", $("#title").css("color"));
    });
    // Switch to teal when'LIGHT' theme button is selected
    $('#lightTheme').click(() => {
        $('[event-id]').css("background-color", $("#title").css("color"));
    });
}

createCalendarGrid();
getUserEvents();
colorEventBlocksCorrectly();