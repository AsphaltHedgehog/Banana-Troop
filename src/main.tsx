import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { store } from "./redux/store.ts";
import { Provider } from "react-redux";

const rootElementId = "root";
const rootElement = document.getElementById(rootElementId);

if (!rootElement) {
  throw new Error(`Element with ${rootElementId} doesn't exist`);
}

//need to add basename="https://monkey-plant.onrender.com/ in BrowserRouter"

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter basename="">
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </BrowserRouter>
);
