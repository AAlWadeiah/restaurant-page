export default function loadHome(container) {
  const header = document.createElement("h1");
  header.textContent = "Taste of Palestine";
  container.appendChild(header);

  const description = document.createElement("p");
  description.textContent =
    "We are pleased to present to you some of the best Palestinian dishes we can offer, including:";

  const recipeList = document.createElement("ul");

  let recipeArr = ["Maqluba", "Moussaka", "Musakhan"];

  for (let r of recipeArr) {
    const rLi = document.createElement("li");
    rLi.textContent = r;
    recipeList.appendChild(rLi);
  }
  description.appendChild(recipeList);
  container.appendChild(description);

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

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Hours";
  hoursDiv.appendChild(hoursTitle);

  const hoursList = document.createElement("ul");

  for (const hr of hoursArr) {
    const hrLi = document.createElement("li");
    hrLi.textContent = hr;
    hoursList.appendChild(hrLi);
  }
  hoursDiv.appendChild(hoursList);
  container.appendChild(hoursDiv);
}
