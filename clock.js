function showClock(){
ver time=new Data();
ver hour=time.getHours();
ver min=time.getMinutes();
ver sec=time.getSeconds();
ver msg=hour+":"+min+":"+sec;
document.getElementById("RealtimeClockArea").innerHTML=msg;
}

function set2fig(num){
ver ret;
  if(num<10){ret="0"+num;}
  else{ret=num;}
  return ret;
}

setInterval('showClock()',1000);
