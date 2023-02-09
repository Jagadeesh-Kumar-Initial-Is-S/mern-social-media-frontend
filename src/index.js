import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import authReducer from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <><advertisement><center>Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .</center></advertisement><React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode><advertisement><center>Submitted and coded by Jagadeesh Kumar . S, you may send mail to my email address which is jagadeesh_2k17@proton.me and you may contribute some money to my Indian Unified Payment Interface (UPI) which is jagadeesh-kumar@ybl .</center></advertisement></>
);
