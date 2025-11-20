const share = document.querySelector(".share");
const shareIcon = document.querySelector(".share-icon");
const popup = document.querySelector(".popup");

share.addEventListener("click", () => {
  popup.classList.toggle("hidden");
  share.classList.toggle("share-active")
  shareIcon.classList.toggle("share-icon-active")
});
