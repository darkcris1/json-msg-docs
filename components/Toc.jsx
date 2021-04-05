import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../contexts/Global";

import GumShoe from "gumshoejs";
function Toc() {
   const [lists, setLists] = useState([]);
   const { state } = useGlobalContext();
   const depths = { h1: "", h2: "pl-1", h3: "pl-2", h4: "pl-3", h5: "pl-4" };
   useEffect(() => {
      if (state.markdownLoaded) {
         const headings = document.querySelectorAll(
            "main.markdown .heading:not(h1)"
         );
         const items = [];
         headings.forEach((node) =>
            items.push({
               type: node.tagName.toLowerCase(),
               text: node.textContent,
               href: "#" + node.id,
            })
         );
         setLists(() => items);
         let spy;
         setTimeout(() => {
            const spy = new GumShoe(".table-of-contents ul li a");
         }, 300);
         return () => spy && spy.destroy();
      }
   }, [state]);
   return (
      <div className="table-of-contents">
         <ul>
            <h3>Contents</h3>
            {lists.map(({ href, text, type }) => {
               return (
                  <li key={text + href} className={depths[type]}>
                     <a href={href}>{text}</a>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default Toc;
