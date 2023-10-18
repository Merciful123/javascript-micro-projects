import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
  key: "root",
  storage,
  blacklist: ["catalog"]
};

const persistedReducer = persistReducer(config, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

export default {
  store,
  persistor: persistStore(store)
};
