import Hero from "./assets/imgs/olive-oil.jpg";

export default function loadHome(container) {
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Taste of Palestine";
  pageTitle.classList.toggle("page-header");
  container.appendChild(pageTitle);

  const subheader = document.createElement("p");
  subheader.textContent = "Discover the flavors of Palestine";
  subheader.classList.toggle("page-subheader");
  container.appendChild(subheader);

  const heroImg = document.createElement("img");
  heroImg.src = Hero;
  heroImg.width = 1000;
  heroImg.alt = "Palestinian olive oil";
  heroImg.classList.toggle("hero");
  container.appendChild(heroImg);

  // const recipeList = document.createElement("ul");

  // let recipeArr = ["Maqluba", "Moussaka", "Musakhan"];

  // for (let r of recipeArr) {
  //   const rLi = document.createElement("li");
  //   rLi.textContent = r;
  //   recipeList.appendChild(rLi);
  // }
  // description.appendChild(recipeList);

  let hoursArr = [
    "Sunday: 8am - 8pm",
    "Monday: 6am - 6pm",
    "Tuesday: 6am - 6pm",
    "Wednesday: 6am - 6pm",
    "Thursday: 6am - 10pm",
    "Friday: 6am - 10pm",
    "Saturday: 8am - 10pm",
  ];

  const hoursDiv = document.createElement("div");
  hoursDiv.classList.toggle("section");

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Hours";
  hoursDiv.appendChild(hoursTitle);

  // const hoursList = document.createElement("ul");

  for (const hr of hoursArr) {
    const hrLi = document.createElement("p");
    hrLi.textContent = hr;
    // hoursList.appendChild(hrLi);
    hoursDiv.appendChild(hrLi);
  }
  // hoursDiv.appendChild(hoursList);
  container.appendChild(hoursDiv);
}
