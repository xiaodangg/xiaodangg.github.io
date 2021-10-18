window.onload = function () {
  this.radomNum();
};
function radomNum() {
  var num1 = Math.floor(Math.random() * 70).toString();
  var num2 = Math.floor(Math.random() * 80).toString();
  var button = document.getElementsByClassName("pageDialog")[0];
  button.style.position = "absolute";
  num1 = num1 > 60 ? 60 : num1
  button.style.left = num1 + "vw";
  button.style.top = num2 + "vh";
}
function cancleClick() {
  this.radomNum();
  var title1 = document.getElementsByClassName("title1")[0];
  var title2 = document.getElementsByClassName("title2")[0];
  title1.style.display= 'none'
  title2.style.display= 'block'
  
}
function okClick() {
  this.showMainCir()
}
// function onRoundButtonClick(e) {
//   this.radomNum();
//   var showArray = [
//     "点我呀",
//     "点我呀",
//     "点我呀",
//     "快点我呀",
//     "快来点我呀",
//     "点不到呢",
//     "点不到呢",
//     "点不到呢",
//     "有点接近了呢",
//   ];
//   var button = document.getElementsByClassName("roundButtom")[0];
//   var showNum = Math.floor(Math.random() * showArray.length);
//   if (button.textContent === "有点接近了呢") {
//     // button.textContent = "爱你呦!";
//     this.showMainCir()
//   } else {
//     button.textContent = showArray[showNum];
//   }
// }

function showMainCir() {
  var heart = document.getElementById('heart3d')
  var button1 = document.getElementsByClassName("pageDialog")[0];
  var showCanvans1 = document.getElementsByClassName("showCanvans")[0];
  var showCanvans2 = document.getElementsByClassName("showCanvans")[1];
  
  // mainCir.style.left = button1.style.left
  // mainCir.style.top = button1.style.top
  button1.style.display = "none";
  heart.style.display = "block";
  showCanvans1.style.display = "block";
  showCanvans2.style.display = "block";
}