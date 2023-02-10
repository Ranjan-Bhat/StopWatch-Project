let startFun = document.getElementById("start");
// let stopFun = document.getElementById("stop");
let resetFun = document.getElementById("reset");
let hr,min,sec,count,timer, startCounter;
hr = 0; min=0; sec=0; count=0; timer=false; startCounter=0;
const mainFun = ()=>{
    if(timer === true){
        count++;
        if(count === 100){
            document.getElementById("count").innerText = '00';
            count=0;
            sec++;
            let sec1 = sec;
            if(sec < 10) sec1 = '0'+sec;
            document.getElementById("second").innerText = sec1;
            // if(sec < 10) document.getElementById("second").innerText = '0'+sec;
            // else document.getElementById("second").innerText = sec;
        }
        if(sec === 60){
            sec=0;
            min++;
            let min1 = min;
            if(min < 10) min1 = '0'+min;
            document.getElementById("minute").innerText = min1;
            // if(min < 10) document.getElementById("minute").innerText = '0'+min;
            // else document.getElementById("minute").innerText = min;
        }
        if(min === 60){
            min=0;
            hr++;
            let hr1 = hr;
            if(hr < 10) hr1 = '0'+hr;
            document.getElementById("hour").innerText = hr1;
            // if(hr < 10) document.getElementById("hour").innerText = '0'+hr;
            // else document.getElementById("hour").innerText = hr;
            
        }
        let count1 = count;
        if(count < 10) count1 = '0'+count;
        document.getElementById("count").innerText = count1;
        // if(count < 10) document.getElementById("count").innerText = '0'+count;
        // else document.getElementById("count").innerText = count;
        setTimeout(mainFun,10);
    }
}

startFun.addEventListener('click',()=>{
    startCounter++;
    // console.log("hello start",startCounter);
    // if(startCounter % 2 ==1) {document.getElementById("start").innerHTML = 'Stop'; console.log(document.getElementById("start").value);}
    // else {document.getElementById("start").innerHTML = 'Start'; console.log(document.getElementById("start").value)}
    if(startCounter % 2 === 1){
        document.getElementById("start").innerText = `Stop `;
        timer=true;
        mainFun();
    } else{
        document.getElementById("start").innerText = 'Start';
        timer=false;
        // mainFun();
    }
    
})


resetFun.addEventListener('click',()=>{
    document.getElementById("start").innerText = 'Start';
    startCounter=0;
    timer=false;
    count=00;
    sec=00;
    min=00;
    hr=00;
    document.getElementById("count").innerText = '00';
    document.getElementById("second").innerText = '00';
    document.getElementById("minute").innerText = '00';
    document.getElementById("hour").innerText = '00';
    
})