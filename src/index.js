//CSSの読み込み
import "./scss/style.scss";
import { LottiePlayer } from "@lottiefiles/lottie-player";

function updateViewportInfo() {
  const logicalWidth = window.innerWidth;
  document.getElementById("viewport-width").textContent =
    "Viewport Width: " + logicalWidth + "px";
}

function marginBottomForMain() {
  const footer = document.querySelector(".footer");
  const rect = footer.getBoundingClientRect();
  const main = document.querySelector(".main");
  main.style.marginBottom = rect.height + "px";
  console.log(rect);
}
document.addEventListener("DOMContentLoaded", () => {
  // updateViewportInfo();
  marginBottomForMain();
});
window.addEventListener("resize", () => {
  // updateViewportInfo();
  marginBottomForMain();
});
