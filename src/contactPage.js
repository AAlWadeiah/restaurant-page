export default function loadContact(container) {
  const pageTitle = document.createElement("h1");
  pageTitle.textContent = "Contact Us";
  pageTitle.classList.toggle("page-header");
  container.appendChild(pageTitle);

  const contactDiv = document.createElement("div");
  contactDiv.classList.toggle("section");
  const address = document.createElement("p");
  address.textContent = "123 Salah al-Din Street, Gaza, Palestine";
  contactDiv.appendChild(address);

  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "Main: (555) 123-4567 Catering: (555) 321-4444";
  contactDiv.appendChild(phoneNumber);

  const emailAddr = document.createElement("p");
  emailAddr.textContent = "taste.of.palestine@mail.com";
  contactDiv.appendChild(emailAddr);

  container.appendChild(contactDiv);
}
