import "./src/styles/settings/colors.css";
import "./src/styles/tools/NessBorder/styles.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import CardGame from "./src/components/Card";

const $root = document.querySelector("#root");
const $htmlCard = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCard);
