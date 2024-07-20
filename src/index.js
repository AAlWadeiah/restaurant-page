import loadHome from "./homePage";
import loadMenu from "./menuPage";
import loadAbout from "./aboutPage";
import loadContact from "./contactPage";

const contentContainer = document.querySelector("#content");
const navbar = document.querySelector("#navbar");

function clearContent() {
  contentContainer.innerHTML = "";
}

loadHome(contentContainer);

navbar.addEventListener("click", (e) => {
  clearContent();
  switch (e.target.id) {
    case "home-btn":
      console.log("home button clicked");
      loadHome(contentContainer);
      break;
    case "menu-btn":
      console.log("menu button clicked");
      loadMenu(contentContainer);
      break;
    case "about-btn":
      console.log("about button clicked");
      loadAbout(contentContainer);
      break;
    case "contact-btn":
      console.log("contact button clicked");
      loadContact(contentContainer);
      break;
    default:
      console.log("clicked elsewhere");
      break;
  }
});
