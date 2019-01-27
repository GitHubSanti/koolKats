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
let makePOSTCall = () => {
  let newEvent = {};
  let passDataReq = [];
  if ($("#eventTitle").val().trim() == "") {
      alert("Please give the event a title.")
  } else {
      passDataReq.push(true);

      newEvent.eventTitle = $("#eventTitle").val().trim();
  };
  if ($("#eventOrganizer").val().trim() == "") {
      alert("Please give the event an organizer.")
  } else {
      passDataReq.push(true)
      newEvent.eventOrganizer = $("#eventOrganizer").val().trim();
  };
  if (moment().format("MM/DD/YYYY") > moment($("#eventStartDate").val().trim()).format("MM/DD/YYYY")) {
      alert("Select a new start date. Can't schedule something in the past!")
  } else {
      passDataReq.push(true)
      newEvent.eventStartDate = $("#eventStartDate").val().trim();
  };

  if ($("#eventStartDate").val().trim() == moment().format("MM/DD/YYYY") && moment().format("LT") > $("#eventStartTime").val().trim()) {
      alert("Select a new start time. Can't schedule something in the past!")
  } else {

      if (moment($("#eventStartTime").val().trim(), "LT") >= moment($("#eventEndTime").val().trim(), "LT")) {
          alert("Please make sure the end time is later than the start time.");
      } else {
          passDataReq.push(true)
          newEvent.eventStartTime = $("#eventStartTime").val().trim();
      };
  };
  if ($("#eventEndTime").val().trim() == "") {
      alert("Please give the event an end time.")
  } else {
      passDataReq.push(true)
      newEvent.eventEndTime = $("#eventEndTime").val().trim();
  };
  if ($("#eventDescription").val().trim() == "") {
      alert("Please give the event a description.")
  } else {
      passDataReq.push(true)
      newEvent.eventDescription = $("#eventDescription").val().trim();
  };
  // Determines whether or not to make a call to the server
  let promise = new Promise((resolve, reject) => {
      // console.log(passDataReq);
      if (passDataReq.length == 6) {
          resolve(newEvent);
      } else {
          reject("Data didn't meet all requirements. Can't create event");
      }
  });

  promise.then((dataToServer) => {
      //  Create unique url to create user specific events
      let url = "/api/addEvent/" + localStorage.getItem("UserID");
      // Send an AJAX POST-request with jQuery
      $.post(url, dataToServer, (serverRes => {
          //   window.location.href = "/test";
          console.log(serverRes);
      }))

  }).catch((err) => {
      console.log("ERROR:" + "\n" + err);
  });
};

appriopriateDateTimeDropdowns();
clearForm();

// Check to see URL
//console.log(window.location.href);


// When user clicks 'Add Event' button
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  makePOSTCall();
});


// *** TO BE CUSTOMISED ***

var style_cookie_name = "style" ;
var style_cookie_duration = 30 ;
var style_domain = "thesitewizard.com" ;

// *** END OF CUSTOMISABLE SECTION ***
// You do not need to customise anything below this line

function switch_style ( css_title )
{

  var i, link_tag ;
  for (i = 0, link_tag = document.getElementsByTagName("link") ;
    i < link_tag.length ; i++ ) {
    if ((link_tag[i].rel.indexOf( "stylesheet" ) != -1) &&
      link_tag[i].title) {
      link_tag[i].disabled = true ;
      if (link_tag[i].title == css_title) {
        link_tag[i].disabled = false ;
      }
    }
    set_cookie( style_cookie_name, css_title,
      style_cookie_duration, style_domain );
  }
}
function set_style_from_cookie()
{
  var css_title = get_cookie( style_cookie_name );
  if (css_title.length) {
    switch_style( css_title );
  }
}
function set_cookie ( cookie_name, cookie_value,
    lifespan_in_days, valid_domain )
{
    console.log(cookie_name)
    var domain_string = valid_domain ?
                       ("; domain=" + valid_domain) : '' ;
    document.cookie = cookie_name +
                       "=" + encodeURIComponent( cookie_value ) +
                       "; max-age=" + 60 * 60 *
                       24 * lifespan_in_days +
                       "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
    
	var cookie_string = document.cookie ;
	if (cookie_string.length != 0) {
		var cookie_array = cookie_string.split( '; ' );
		for (i = 0 ; i < cookie_array.length ; i++) {
			cookie_value = cookie_array[i].match ( cookie_name + '=(.*)' );
			if (cookie_value != null) {
				return decodeURIComponent ( cookie_value[1] ) ;
			}
		}
	}
	return '' ;
}

// Side Bar JS

$(document).ready(function () {

    set_style_from_cookie();
    //  $("#sidebar").mCustomScrollbar({
    //       theme: "minimal"
    //  });
    //switch_style();
    
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

$(document).ready(function () {

    //  $("#sidebar").mCustomScrollbar({
    //       theme: "minimal"
    //  });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

});
