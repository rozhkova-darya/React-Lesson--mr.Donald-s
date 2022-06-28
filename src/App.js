import React from 'react';

import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from "firebase/database";

import { GlobalStyle } from './Components/Style/GlobalStyle';
import { Menu } from './Components/Menu/Menu';
import {NavBar} from './Components/NavBar/NavBar';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfitm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';

import { Context } from './Components/functions/context';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBSmaiMqs95xmGILbYmL3pdEgeu7Cvo0k8",
  authDomain: "mrdonalds-6762a.firebaseapp.com",
  projectId: "mrdonalds-6762a",
  storageBucket: "mrdonalds-6762a.appspot.com",
  messagingSenderId: "1024890494893",
  appId: "1:1024890494893:web:d4825ddfc9d0419609cb24"
});


function App() {

  const auth = useAuth(getAuth(firebaseApp));
  const database = getDatabase(firebaseApp);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);
  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders, orderConfirm,
      database
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu/>
      {openItem.openItem && <ModalItem/>}
      {orderConfirm.openOrderConfirm && <OrderConfirm/> }
    </Context.Provider>
    
  );
}

export default App;
