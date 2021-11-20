countEl = document.getElementById("count");

let count = 0;
function decrease(){
     count -= 1;
    countEl.innerText = count;
    document.getElementById("count").style.color="rgb(12, 12, 126)";

}
function increase(){
    count += 1;
    countEl.innerHTML = count;
    document.getElementById("count").style.color="rgb(146, 15, 15)";
    
    
}
 function reset(){
 count -=count;
countEl.innerHTML=count;

document.getElementById("count").style.color="black";
}