

function  waitingTime(waitingTimes  , serialNumber) {

const size=waitingTimes.length;
let sum=0;

if( (Array.isArray(waitingTimes) == true) && (typeof serialNumber=='number') )
{
   
    if(serialNumber >  size ){
      for(const number of waitingTimes){
          sum=sum+number;

      }
      let average_time=Math.round(sum/size);
      let waiting_time = (((serialNumber-1)-size)*average_time);
      return waiting_time;

    }
    
}

else{
    return "Invalid Input" ;
}
}
