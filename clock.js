const clock=()=>{
  const d=new Date();
  
  let hour=d.getHours();
  let min=d.getMinutes();
  let sec=d.getSeconds();
  
  hour=hour<10?"0"+hour:hour;
  min=min<10?"0"+min:min;
  sec=sec<10?"0"+sec:sec;
  
  let time='${hour}:${min}:${sec}';
  
  document.querySelector(".clock-time").innerText=time;
};

setInterval(clock,1000}
