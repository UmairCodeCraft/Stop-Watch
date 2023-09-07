var hr=0;
var mint=0;
var sec=0;
var count=0;
var btn;
var a;
let laps=document.querySelector('.laps');
let lap_section=document.querySelector('.lap_section');
var hour="00";
var Mint="00";
var second="00";
var counter="00";  
var Count_Number = 0;


  // star Function:
function start(){
     if(!btn){
      btn=true;
      stopwatch();
     }
  
}

// Stop Button:
function stop(){
    btn=false;
}

// Rest Button:
function Reset(){
    btn=false;
    hr=0;
    mint=0;
    sec=0;
    count=0;
    document.getElementById('count').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('hr').innerHTML="00";

    clearInterval(a);

    
    laps.innerHTML = "";
    Count_Number=0;
    hour="00";
    Mint="00";
    second="00";
    counter="00";  
}



// stopwatch function:
    
function stopwatch(){
    if(btn==true){
     count++;
     if(count==100){
        count=0;
        sec++;
    }
    if(sec==60){
        // count=0;
        mint++;
        sec=0;
    }
     
    if(mint==60){
        hr++;
        mint=0;
    
    }
     hour=hr;
     Mint=mint;
     second=sec;
     counter=count;
    if(hr<10){
      hour='0'+hr;
    }
    if(mint<10){
      Mint='0'+mint;
    }
    if(sec<10){
     second='0'+sec;
    }
    if(count<10){
      counter='0'+count;
    }
    document.getElementById('count').innerHTML=counter;
    document.getElementById('sec').innerHTML=second;
    document.getElementById('min').innerHTML=Mint;
    document.getElementById('hr').innerHTML=hour;

    // return
    const stopwatch={
      countervalue:counter,
    }
}
   a=setTimeout("stopwatch()",10);
}



function lap(){
   
    // stopwatch();
    
    
    let newItem=document.createElement('div');
    newItem.classList.add('lap')
    newItem.innerHTML=`
 
            <span class="lap_number digit1">#${++Count_Number}&#8758</span>
            <span class="digit1">${hour}</span>
            <span class="text1">hr</span>
            <span class="digit1"> ${Mint}</span>
            <span class="text1">min</span>
            <span class="digit1">${second}</span>
            <span class="text1">sec</span>
            <span class="digit1">${counter}</span>
        `
        laps.appendChild(newItem);
        console.log(laps);
        
}
  