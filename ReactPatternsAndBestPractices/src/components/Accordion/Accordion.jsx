import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import AccordionItem from "./AccordionItem";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error("Accordion related context must be wrapped by <Accordion>");
  }

  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemID] = useState("");

  function toggleItem(id) {
    setOpenItemID((prevId) => (prevId === id ? null : id));
  }

  const contextValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}


Accordion.item = AccordionItem;