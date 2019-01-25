let createCalendarGrid = () => {
    start = moment().startOf("day");
    end = moment().endOf("day");
    diff = end.diff(start, "hour")
    for (let index = 0; index < diff + 1; index++) {
        // Top of the hour
        let option = $("<div>");
        option.addClass("startTime");
        let time = moment().hour(index).minute(0).format("LT");
        option.text(time);
        $("#calendarContainer").append(option);
        // 15 mins into the hour
        option = $("<option>");
        option.addClass("startTime");
        time = moment().hour(index).minute(15).format("LT");
        option.text(time);
        $("#calendarContainer").append(option);
        // 30 mins into the hour
        option = $("<option>");
        option.addClass("startTime");
        time = moment().hour(index).minute(30).format("LT");
        option.text(time);
        $("#calendarContainer").append(option);
        // 45 mins into the hour
        option = $("<option>");
        option.addClass("startTime");
        time = moment().hour(index).minute(45).format("LT");
        option.text(time);
        $("#calendarContainer").append(option);
    };
};
