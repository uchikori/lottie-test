//CSSの読み込み
import "./scss/style.scss";
import { LottiePlayer } from "@lottiefiles/lottie-player";

function updateViewportInfo() {
  const logicalWidth = window.innerWidth;
  document.getElementById("viewport-width").textContent =
    "Viewport Width: " + logicalWidth + "px";
}
document.addEventListener("load", () => {
  updateViewportInfo();
});
window.addEventListener("resize", updateViewportInfo);
