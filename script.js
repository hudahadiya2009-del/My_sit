const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");
const heartCards = document.querySelectorAll(".mini-heart");
const heartPopup = document.getElementById("heartPopup");
const heartTitle = document.getElementById("heartTitle");
const heartText = document.getElementById("heartText");
const cake = document.getElementById("cake");
const cakeMessage = document.getElementById("cakeMessage");

giftBox.addEventListener("click", () => {
  giftMessage.classList.toggle("visible");
});

heartCards.forEach((card) => {
  card.addEventListener("dblclick", () => {
    heartTitle.textContent = card.dataset.title;
    heartText.textContent = card.dataset.message;
    heartPopup.classList.add("visible");
  });
});

cake.addEventListener("click", () => {
  cakeMessage.classList.toggle("visible");
});
