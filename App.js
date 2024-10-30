import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, persistor } from "./src/store";

import MainStack from "./src/navigators/MainStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Importar o STACK

//  Preload
//  StarterStack - Configurações Iniciais
//  AppTab
//

export default () => (
  <GestureHandlerRootView>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStack />
      </PersistGate>
    </Provider>
  </GestureHandlerRootView>
);
