window.onload = (e) => {
  setInterval(() => {
    changeImage();
  }, 3000);
};

var i = 1;
function changeImage() {
  let itemOne = document.getElementById("itemOne");
  let itemTwo = document.getElementById("itemTwo");
  let itemThree = document.getElementById("itemThree");
  let content = document.getElementById("showCase-content");

  if (i == 4) {
    i = 1;
  }

  switch (i) {
    case 1:
      setOrder(itemOne, itemTwo, itemThree);
      content.innerHTML =
        "<strong>Anarkali</strong> - Be the talk of the town!<br class='d-none d-md-block'/>Try our latest range of anarkalis and stand out on every occasion.";
      break;
    case 2:
      setOrder(itemThree, itemOne, itemTwo);
      content.innerHTML =
        "<strong>Plazo Set</strong> - Nothing tastes as good as looking good feels,<br class='d-none d-md-block'/>we offer the best plazo sets to compliment your style.";
      break;
    case 3:
      setOrder(itemTwo, itemThree, itemOne);
      content.innerHTML =
        "<strong>Sharara</strong> - This season spend your money where you can see it hanging around your waist,<br class='d-none d-md-block'/>our beautiful sharars are here to perk up your day.";
      break;

    default:
      setOrder(itemOne, itemTwo, itemThree);
      content.innerHTML =
        "<strong>Anarkali</strong> - Be the talk of the town!<br class='d-none d-md-block'/>Try our latest range of anarkalis and stand out on every occasion.";
      break;
  }

  i++;
}

function setOrder(itemOne, itemTwo, itemThree) {
  itemOne.setAttribute("data-order", 2); // Center
  itemTwo.setAttribute("data-order", 1); // Right
  itemThree.setAttribute("data-order", 3); // End
}
