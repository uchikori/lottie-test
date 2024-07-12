//CSSの読み込み
import "./scss/style.scss";
import { LottiePlayer } from "@lottiefiles/lottie-player";

document.addEventListener("DOMContentLoaded", () => {
  updateVieportInfo();
});
window.addEventListener("resize", updateVieportInfo);
function updateVieportInfo() {
  const logicalWidth = window.innerWidth;
  document.getElementById("viewport-width").textContent =
    "Viewport Width: " + logicalWidth + "px";
}
