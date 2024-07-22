export default function loadContact(container) {
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Contact Us";
  container.appendChild(pageTitle);

  const contactDiv = document.createElement("div");
  const address = document.createElement("p");
  address.textContent = "123 Salah al-Deen Street, Gaza, Palestine";
  contactDiv.appendChild(address);

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "Main: (555) 123-4567";
  contactDiv.appendChild(phoneNumber);

  container.appendChild(contactDiv);
}
