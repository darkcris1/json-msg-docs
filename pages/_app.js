import "../styles/global.scss";
import Layout from "../components/_layout";
import React, { useReducer } from "react";
import { GlobalContext } from "../contexts/Global";
function reducer(state, action) {
   switch (action) {
      case "markdownLoaded":
         return { markdownLoaded: true };
      case "markdownUnloaded":
         return { markdownLoaded: false };
   }
}

function MyApp({ Component, pageProps }) {
   const [global, dispatch] = useReducer(reducer, { markdownLoaded: false });

   return (
      <GlobalContext.Provider value={{ state: global, dispatch }}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </GlobalContext.Provider>
   );
}

export default MyApp;
