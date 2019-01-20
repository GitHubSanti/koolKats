// Code responsible for creating start date, start time, and end time options
let appriopriateDateTimeDropdowns = () => {
  let start = moment().startOf("Week");
  let end = moment().endOf("Week");
  let diff = end.diff(start, "days");
  for (let index = 0; index < diff + 1; index++) {
      let option = $("<option>");
      option.addClass("startDate");
      let formattedDate = moment().weekday(index).format("MM/DD/YYYY");
      option.text(formattedDate);
      $("#eventStartDate").append(option);
  }

  start = moment().startOf("day");
  end = moment().endOf("day");
  diff = end.diff(start, "hour")
  for (let index = 0; index < diff + 1; index++) {
      // Top of the hour
      let option = $("<option>");
      option.addClass("startTime");
      let time = moment().hour(index).minute(0).format("LT");
      option.text(time);
      $("#eventStartTime").append(option);
      // 15 mins into the hour
      option = $("<option>");
      option.addClass("startTime");
      time = moment().hour(index).minute(15).format("LT");
      option.text(time);
      $("#eventStartTime").append(option);
      // 30 mins into the hour
      option = $("<option>");
      option.addClass("startTime");
      time = moment().hour(index).minute(30).format("LT");
      option.text(time);
      $("#eventStartTime").append(option);
      // 45 mins into the hour
      option = $("<option>");
      option.addClass("startTime");
      time = moment().hour(index).minute(45).format("LT");
      option.text(time);
      $("#eventStartTime").append(option);
  }
  for (let index = 0; index < diff + 1; index++) {
      // Top of the hour
      let option = $("<option>");
      option.addClass("endTime");
      let time = moment().hour(index).minute(0).format("LT");
      option.text(time);
      $("#eventEndTime").append(option);
      // 15 mins into the hour
      option = $("<option>");
      option.addClass("endTime");
      time = moment().hour(index).minute(15).format("LT");
      option.text(time);
      $("#eventEndTime").append(option);
      // 30 mins into the hour
      option = $("<option>");
      option.addClass("endTime");
      time = moment().hour(index).minute(30).format("LT");
      option.text(time);
      $("#eventEndTime").append(option);
      // 45 mins into the hour
      option = $("<option>");
      option.addClass("endTime");
      time = moment().hour(index).minute(45).format("LT");
      option.text(time);
      $("#eventEndTime").append(option);
  }
}

// Empty each input box
let clearForm = () => {
  $("#eventTitle")
      .val("");
  $("#eventOrganizer")
      .val("");
  $("#eventDescription")
      .val("");
}

// Validate inputs and prepare data to be sent to database
let prepareNewEventData = () => {
  let newEvent = {};
  let passDataReq = [];
  if ($("#eventTitle").val().trim() == "") {
      alert("Please give the event a title.")
  } else {
    passDataReq.push(true);
    console.log(passDataReq);
    
      // newEvent.eventTitle = $("#eventTitle").val().trim();
  };
  if ($("#eventOrganizer").val().trim() == "") {
      alert("Please give the event an organizer.")
  } else {
    passDataReq.push(true)
      // newEvent.eventOrganizer = $("#eventOrganizer").val().trim();
  };
  if (moment().format("MM/DD/YYYY") > moment($("#eventStartDate").val().trim(), "MM/DD/YYYY")) {
      alert("Select a new start date. Can't schedule something in the past!")
  } else {
    passDataReq.push(true)
      // newEvent.eventStartDate = $("#eventStartDate").val().trim();
  };

  if ($("#eventStartDate").val().trim() == moment().format("MM/DD/YYYY") && moment().format("LT") > $("#eventStartTime").val().trim()) {
      alert("Select a new start time. Can't schedule something in the past!")
  } else {

      if (moment($("#eventStartTime").val().trim(), "LT") >= moment($("#eventEndTime").val().trim(), "LT")) {
          alert("Please make sure the end time is later than the start time.");
      } else {
    passDataReq.push(true)
          // newEvent.eventStartTime = $("#eventStartTime").val().trim();
      };
  };
  if ($("#eventEndTime").val().trim() == "") {
      alert("Please give the event an end time.")
  } else {
    passDataReq.push(true)
      // newEvent.eventeEndTime = $("#eventEndTime").val().trim();
  };
  if ($("#eventDescription").val().trim() == "") {
      alert("Please give the event a description.")
  } else {
    passDataReq.push(true)
      // newEvent.eventDescription = $("#eventDescription").val().trim();
  };
  // console.log(passDataReq);
  return newEvent;
};

appriopriateDateTimeDropdowns();
clearForm();

// When user clicks 'Add Event' button
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // // let newEvent = prepareNewEventData()  
  // console.log(newEvent);
  
  // Send an AJAX POST-request with jQuery
  // $.post("/api/addEvent", newEvent, function(data,status) {
  //   console.log(status);
  // });

});