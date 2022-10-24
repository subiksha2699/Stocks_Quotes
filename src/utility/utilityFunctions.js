function formatDateobjToTimeString(newdate) {
    var oDate = new Date(newdate);

    var hr = oDate.getHours();
    var min = oDate.getMinutes();

    var am;
    if (hr < 12 && hr >= 0) {
        am = "am"
    } else {
        am = "pm"
    }
    hr = (hr != 0 && hr > 12) ? hr - 12 : (hr == 0) ? 12 : hr;

    if (hr < 10)
        hr = '0' + hr;
    if (min < 10)
        min = '0' + min;
    // var newDate = MM + "/" + dd + "/" + yy;
    var newDate = hr + ":" + min + "" + am;
    return newDate;
}

export const formatDateobjToDateString = (newdate) => {

    var aMonths = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
   
    var oDate = new Date(newdate);
    var dd = oDate.getDate();
    var MM = oDate.getMonth();
    var yy = oDate.getFullYear();
    // var hr = oDate.getHours();
    // var min = oDate.getMinutes();
    // var sec = oDate.getSeconds();
    if (dd < 10) {
        dd = "0" + dd;
    }
    var newDate = dd + "-" + aMonths[MM] + "-" + yy + " " + formatDateobjToTimeString(newdate); 
    return newDate;
}