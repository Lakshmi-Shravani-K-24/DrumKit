
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function (){
this.style.color="skyblue";
var x=this.innerHTML;
  makesound(x);
  buttonanimation(x);
} );
}
document.addEventListener("keydown", function(event){
  console.log(event);
  console.log(event.key);
  var key = event.key;
  makesound(key);
  buttonanimation(key);

});

function makesound(key){

  switch (key) {
    case 'w':
          var  audio= new Audio("sounds/tom-1.mp3");
          audio.play();
            break;
    case 'a':
             var audio= new Audio("sounds/tom-2.mp3");
             audio.play();
            break;
    case 's':
          var  audio= new Audio("sounds/tom-3.mp3");
          audio.play();
             break;
    case 'd':
          var  audio= new Audio("sounds/tom-4.mp3");
          audio.play();
             break;
    case 'j':
          var  audio= new Audio("sounds/crash.mp3");
          audio.play();
            break;
    case 'k':
          var  audio= new Audio("sounds/kick-bass.mp3");
          audio.play();
            break;
    case 'l':
          var  audio= new Audio("sounds/snare.mp3");
          audio.play();
            break;
    default:console.log(x);

  }

}
function buttonanimation(currentbutton){
var activebutton=document.querySelector("."+ currentbutton);
activebutton.classList.add("pressed");

setTimeout(function(){
  activebutton.classList.remove("pressed");
}, 100);

}
