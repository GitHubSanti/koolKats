let create7DayGrid = () => {
    let start = moment().startOf("Week");
    let end = moment().endOf("Week");
    let diff = end.diff(start, "days");
    for (let index = 0; index < diff + 1; index++) {
        let th = $("<th>");
        th.attr("scope","col");
        // th.attr("id",moment().weekday(index).format("MM/DD/YYYY"));
        let tableHeading = moment().weekday(index).format("ddd") + "\n" + moment().weekday(index).format("MM/DD/YYYY"); 
        th.html(tableHeading);
        console.log(tableHeading);
        $("#tableHeading").append(th);
    }
    let extraColHeading = $("<th>");
    extraColHeading.attr("scope","col");
    extraColHeading.html("Can you see this?");
    $("#tableHeading").append(extraColHeading)
};

let getEvents = () => {
    $.get("/api/calendar", (data,status) => {
        console.log(status);
        console.log("Events:");
        console.log(data);
    });
};

create7DayGrid();
console.log("Is this running?");

// getEvents();