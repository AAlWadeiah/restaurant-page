export default function initPage() {
  const contentContainer = document.querySelector("#content");

  const header = document.createElement("h1");
  header.textContent = "Taste of Palestine";
  contentContainer.appendChild(header);

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
  contentContainer.appendChild(description);
}
