const MenuItems = {
  Beverages: {
    freshJuice: [
      "Fresh Fruit Juice",
      "Need a refreshing drink? Pick mango, strawberry, banana, or pineapple and we'll create the freshest juice for you!",
      "8",
    ],
    lemonade: [
      "Summer Lemonade",
      "This lemonade will make sure you're cooler than an ice cube. Lemon juice and mint combined for a strong cooling effect!",
      "6",
    ],
    tea: [
      "Arab Tea",
      "Classic Arab tea with your choice of mint, sage, or anise for a unique flavor. Goes perfectly after a good meal!",
      "5",
    ],
    coffee: [
      "Arab Coffee",
      "If you need something strong to get you going in the morning or keep you awake during the day, this is the right coffee for you.",
      "4.5",
    ],
  },
  Sides: {
    kubbah: [
      "Kubbah",
      "Classic Middle-Eastern side, with a deep brown shell of semolina and core of spiced ground beef with pine nuts. 4 pcs.",
      "8",
    ],
    grapeLeaves: [
      "Grape Leaves",
      "Grape leaves wrapped around a beautifully spiced rice mixture and cooked in a sour concoction. Always a favorite! 8 pcs.",
      "8",
    ],
    samosa: [
      "Samosa",
      "Golden brown samosas stuffed with spiced ground beef, spiced and diced chicken, or herby cheese. 4 pcs",
      "8",
    ],
    musakhanRolls: [
      "Musakhan Rolls",
      "Wish that you could eat musakhan but with a crispy crunch? This is the right dish for you! 4 pcs",
      "8",
    ],
  },
  Mains: {
    maqluba: [
      "Maqluba",
      "Layered eggplants, tomatoes, chicken, and rice that are slow cooked together to develop a delicious flavor. A crowd pleaser!",
      "25",
    ],
    moussaka: [
      "Moussaka",
      "A casserole of layered eggplants, tomatoes, and ground beef with a wonderful spice mix and a little heat. My mom's secret recipe, shhh.",
      "30",
    ],
    musakhan: [
      "Musakhan",
      "Caramalized onions and chicken cooked in sumac, Palestinian olive oil, and other spices, spread onto flatbread with crunchy almonds and layered together. A Palestinian signature dish!",
      "30",
    ],
  },
};

export default function loadMenu(container) {
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Menu";
  container.appendChild(pageTitle);

  for (const key in MenuItems) {
    const groupDiv = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = `${key}`;
    groupDiv.appendChild(title);

    const menuGroup = MenuItems[key];
    for (const item in menuGroup) {
      const itemDiv = document.createElement("div");

      const itemTitle = document.createElement("h3");
      itemTitle.textContent = menuGroup[item][0];
      itemDiv.appendChild(itemTitle);

      const itemDesc = document.createElement("p");
      itemDesc.textContent = menuGroup[item][1];
      itemDiv.appendChild(itemDesc);

      const itemPrice = document.createElement("p");
      itemPrice.textContent = menuGroup[item][2];
      itemDiv.appendChild(itemPrice);

      groupDiv.appendChild(itemDiv);
    }
    container.appendChild(groupDiv);
  }
}
