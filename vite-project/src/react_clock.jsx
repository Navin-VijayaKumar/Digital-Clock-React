import React,{useState,useEffect} from "react";

function Clock_react()
{
    const [time,setTime]=useState(new Date());


   useEffect(()=>{
    const intervalId=setInterval(()=>{
        setTime(new Date());
   

   },1000);

   return () => {
    clearInterval(intervalId);
   }
   },[]);


function formatTime()
{
    let hours=time.getHours();
    const minutes=time.getMinutes();
    const seconds=time.getSeconds();
    const meridiem=hours>=12 ? "PM" : "AM";
    hours=hours % 12 || 12;

    return `${addzero(hours)}:${addzero(minutes)}:${addzero(seconds)}\n${meridiem}`;
     }


function addzero(number){
    return( number < 10 ? "0":"" )+number;

}


    return(
    <div className="clock-body0">
         <div className="clock">
            <span>{formatTime()}</span>
         </div>
    </div>
    );
}
export default Clock_react;