// display real clock
// var format;
// function displayClock(){
//     var date = new Date();
//     var hour = date.getHours()
//     var min =  date.getMinutes()
//     var sec = date.getSeconds()
//     format = `${hour} : ${min} : ${sec}`
//     document.getElementById('clock').innerHTML = format;
//     // return format;
// }
// displayClock()
// setInterval(displayClock, 1000)

var format;
function displayClock(){
    var date1 = new Date()
    var date = date1.toLocaleTimeString()
    console.log("🚀 ~ file: app.js:23 ~ displayClock ~ date:", date)
    
    document.getElementById('clock').innerHTML = date
}
setInterval(displayClock, 1000)
