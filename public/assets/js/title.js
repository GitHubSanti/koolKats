
for(i=0;i<6;i++){
    var dayIndex = moment().subtract(i, 'days').format('dddd');
    if (dayIndex == 'Sunday'){
        var SunDate = moment().subtract(i,'days').format('l');
        $("#sundayHeader").append(SunDate);
        var MonDate = moment().subtract((i-1),'days').format('l')
        $("#mondayHeader").append(MonDate);
        var TueDate = moment().subtract((i-2),'days').format('l')
        $("#tuesdayHeader").append(TueDate);
        var WenDate = moment().subtract((i-3),'days').format('l')
        $("#wednesdayHeader").append(WenDate);
        var ThuDate = moment().subtract((i-4),'days').format('l')
        $("#thursdayHeader").append(ThuDate);
        var FriDate = moment().subtract((i-5),'days').format('l')
        $("#fridayHeader").append(FriDate);
        var SatDate = moment().subtract((i-6),'days').format('l')
        $("#saturdayHeader").append(SatDate);
        var rangbegin = moment().subtract(i,'days').format('LL').split(",")
        var titlepart1 = rangbegin[0];
        var titlepart2 = moment().subtract(i-6,'days').format('LL')
        var title = titlepart1 + "-"+ titlepart2;
        $(".dateHeader").append('<h2>'+title+'  '+'<button type="button" class="btn addButton">Add Event</button>'+'<h2>')
        $("#sundayHeader,#mondayHeader,#tuesdayHeader,#wednesdayHeader,#thursdayHeader,#fridayHeader,#saturdayHeader").addClass("timesBody")
    }
 }