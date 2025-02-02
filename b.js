var btn = document.querySelector('#btn');
var red = document.querySelector('#red');
var green = document.querySelector('#green');
var blue = document.querySelector('#blue');
var screen = document.querySelector('#screen');

btn.addEventListener('click', function(){
    var redvalue = red.value;
    var greenvalue = green.value;
    var bluevalue = blue.value;
   
    var rgbvalue = `rgb(${redvalue}, ${greenvalue}, ${bluevalue})`
    screen.style.backgroundColor = rgbvalue;
    screen.innerHTML ='';
})