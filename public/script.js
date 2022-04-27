window.onload = (e) => {
  setInterval(() => {
    changeImage();
  }, 3000);

  var urlLoc = location.hash;
  if (urlLoc) {
    let deskNavItems = document.querySelectorAll(".desk-nav-item");
    deskNavItems.forEach((item) => {
      item.classList.remove("nav_checked");
    });

    let nav;

    switch (urlLoc) {
      case "#home":
        nav = deskNavItems[0];
        break;
      case "#products":
        nav = deskNavItems[1];
        break;
      case "#about":
        nav = deskNavItems[2];
        break;
      case "#how":
        nav = deskNavItems[3];
        break;
      default:
        nav = deskNavItems[0];
        break;
    }

    nav.classList.add("nav_checked");
  }

  var deskNavItems = document.querySelectorAll(".desk-nav-item");
  deskNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      deskNavItems.forEach((elem) => {
        elem.classList.remove("nav_checked");
      });
      item.classList.add("nav_checked");
    });
  });
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
        "<strong>Nothing tastes as good as looking good feels, we offer the best plazo sets <br /> to compliment your style.</strong><br /> Our collection includes: Anarkali, Sharara, Straight Cut Salwar Suit, Punjabi <br /> Salwar Suit, Palazzo Salwar Suit, Angarkha Salwar Suit.";
      break;
    case 2:
      setOrder(itemThree, itemOne, itemTwo);
      content.innerHTML =
        "<strong>Be the talk of the town! Try our latest range of anarkalis and stand-out <br /> on every occasion.</strong><br /> Our collection includes: Nauvari Saree, Kanjeevaram Saree, Banarasi <br> Saree Bandhani Saree, Chikankari Saree, Drape Saree.";
      break;
    case 3:
      setOrder(itemTwo, itemThree, itemOne);
      content.innerHTML =
        "<strong>Be the talk of the town! Try our latest range of anarkalis and stand-out <br /> on every occasion.</strong><br />Our collection includes: Nauvari Saree, Kanjeevaram Saree, Banarasi Saree <br /> Bandhani Saree, Chikankari Saree, Drape Saree.";
      break;

    default:
      setOrder(itemOne, itemTwo, itemThree);
      content.innerHTML =
        "<strong>Nothing tastes as good as looking good feels, we offer the best plazo sets <br /> to compliment your style.</strong><br /> Our collection includes: Anarkali, Sharara, Straight Cut Salwar Suit, Punjabi <br /> Salwar Suit, Palazzo Salwar Suit, Angarkha Salwar Suit.";
      break;
  }

  i++;
}

function setOrder(itemOne, itemTwo, itemThree) {
  itemOne.setAttribute("data-order", 2); // Center
  itemTwo.setAttribute("data-order", 1); // Right
  itemThree.setAttribute("data-order", 3); // End
}
