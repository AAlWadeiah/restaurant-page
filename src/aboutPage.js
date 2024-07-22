export default function loadAbout(container) {
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "About Us";
  container.appendChild(pageTitle);

  const desc = document.createElement("p");
  desc.textContent =
    "Our roots start in Palestine, Gaza ... Ut exercitation ipsum id cillum labore amet non amet elit est anim labore nisi. Nostrud deserunt deserunt adipisicing incididunt tempor aute ullamco proident ex eu mollit ad aliquip ipsum. Lorem in anim sit amet officia est sint ut irure. Cupidatat est aute est nulla dolore deserunt quis consectetur mollit quis reprehenderit elit ullamco.";
  container.appendChild(desc);
}
