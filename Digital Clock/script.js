let hourEle=document.getElementById('hour');
let minuteEle=document.getElementById('minutes');
let secondEle=document.getElementById('seconds');
let ampam=document.getElementById('ampm')

function Updateclock(){
    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    let ampm='AM'
    
    if(h>12){
        h=h-12;
        ampm="PM"
    }

    h= h < 10 ? "0"+ h : h;
    m= m < 10 ? "0"+ m : m;
    s= s < 10 ? "0"+ s : s;

    hourEle.innerText=h;
    minuteEle.innerText=m;
    secondEle.innerText=s;
    ampm.innerText=ampm;

    setTimeout(() => {
        Updateclock();
        
    }, 1000);

}
Updateclock();











