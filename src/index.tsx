import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import BaseLayout from "./components/layouts/BaseLayout/BaseLayout";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BaseLayout>
    <App/>
  </BaseLayout>
);

reportWebVitals();