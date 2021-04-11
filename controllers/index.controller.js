const itemControl = document.getElementById("items-control");

const aTagList = itemControl.getElementsByClassName("item-control");

for (let i = 0; i < aTagList.length; i++) {
  aTagList[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
