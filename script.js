var bulb = document.getElementById("bulb");
var button = document.getElementById("button");
var flag = 0;
// 0 = ON, 1 = OFF

function turnOn() {
  if (flag == 0) {
    bulb.style.backgroundColor = "yellow";
    button.innerHTML = "Off";
    flag = 1;
    console.log(flag);
  } else {
    bulb.style.backgroundColor = "white";
    button.innerHTML = "On";
    flag = 0;
    console.log(flag);
  }
}
