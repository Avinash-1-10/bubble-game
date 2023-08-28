function makeBubble(number){
    let pbtm = document.querySelector("#pbtm")
    let clutter = ""
    for(let i =0; i<=number; i++){
        clutter += `<div class="bubble">${Math.floor(Math.random()*10)+1 }</div>`
      }
      pbtm.innerHTML= clutter; 
}

makeBubble(200)

let time = 10;

const interval = setInterval(() => {
    time -= 1;
    if (time <= 0 || time >= 60) {
        clearInterval(interval);
    }
    console.log(time);
}, 1000);


