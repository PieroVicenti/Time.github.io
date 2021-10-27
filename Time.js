
function startTime(){
  const today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("demo").innerHTML = h  + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
function checkTime (i){
    if ( i < 10 ) {i = "0" + i}; //add zero infront of number <10
    return i;
}
function hideTime(){ 
    document.getElementById("demo").style.display ="none";
}
function showTime(){ 
    document.getElementById("demo").style.display ="flex";
}
