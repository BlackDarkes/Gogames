import { createPortal } from "react-dom";

export const Burger = () => {
  const portalRoot = document.getElementById("root")!;

  return createPortal(
    <div></div>,
    portalRoot
  );
}