const enddate = prompt(' "enter in this format : 25 April 2024 10:00 PM" ')
document.querySelector("h3").innerText = enddate ;
let inputs = document.querySelectorAll("input")
console.dir(inputs)
const clock = ()=>{
    const end = new Date(enddate)
    const now = new Date();
    console.log(now) ;
    //console.log(end,now)
    const diff = (end - now)/1000 ; //result will be in milliseconds so 
    //console.log(diff)
    //divide by 1000 to make in seconds
    //console.log(diff) // 
    //convert into dates
    if(diff>0){
    inputs[0].value = Math.floor((diff/86400)) ;
    inputs[1].value = Math.floor((diff/3600)%24) ;
    inputs[2].value = Math.floor((diff/60)%60) ;
    inputs[3].value = Math.floor((diff)%60) ;
    }
    else{
        document.querySelector("h3").innerText = ("THAT DAY IS PASSED AND U R CURRENTLY LEADING THAT TIME BY") ;

        inputs[0].value = Math.floor((diff/86400)) ;
        inputs[1].value = Math.floor((diff/3600)%24) ; // as 1 ghnte m 3600 seconds and ek din m 24 hours
        inputs[2].value = Math.floor((diff/60)%60) ; // as 1 minute m 60 seconds and 1 hour m 60 minutes
        inputs[3].value = Math.floor((diff)%60) ;
    }
}
setInterval(clock , 1000) ;
