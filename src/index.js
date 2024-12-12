import { createRoot } from "react-dom/client";
import { App } from "./App";

import "./reset.css";
import "./style.scss";

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);