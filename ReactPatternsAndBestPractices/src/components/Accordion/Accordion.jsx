import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

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

  function openItem(id) {
    setOpenItemID(id);
  }
  function closeItem() {
    setOpenItemID(null);
  }

  const contextValue = {
    openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}
