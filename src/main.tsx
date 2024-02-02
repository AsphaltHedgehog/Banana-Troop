// import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { PersistGate } from "redux-persist/integration/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// import { store, persistor } from "./redux/store.ts";

const rootElementId = "root";
const rootElement = document.getElementById(rootElementId);

if (!rootElement) {
  throw new Error(`Element with ${rootElementId} doesn't exist`);
}

ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> */}
    <App />
    {/* </PersistGate>
    </Provider> */}
  </BrowserRouter>
);
