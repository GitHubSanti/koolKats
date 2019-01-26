var calendar = $(".calendar-seriously"); // select the calendar area
var times = [];
var midnight = createTime(12, "AM");
var noon =createtime(12,"PM");
times.push(noon);
times.push(midnight);
generateTimes(1, 11, "AM")

var noon = {
    value: 12,
    timeOfDay: "PM"
}
times.push(noon);



generateTimes(1, 11, "PM");

function generateTimes(start, end, timeOfDay) {
    for(var i = start; i < end; i++) {
        var time= {
            value: i,
            timeOfDay: timeOfDay
        }
        time.push(time);
    }
}

function createTime(value, timeOfDay){
    return {
        value: value,
        timeOfDay: timeOfDay
    }
}

