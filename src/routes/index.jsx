import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import GameWrapper from "../games/GameWrapper";

let indexRoutes = [
 { path: "/home", name: "LandingPage", component: LandingPage },
  { path: "/games", name: "GamePAge", component: GameWrapper },
  { path: "/", name: "Components", component: LoginPage }
];

export default indexRoutes;
