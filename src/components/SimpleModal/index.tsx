import React, { useEffect, useRef, useState } from "react";
import * as Styles from "./styles";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onCloseModal: () => void;
}

export default function SimpleModal({
  children,
  isOpen,
  onCloseModal,
}: ModalProps) {
  const closeRef = useRef<HTMLDivElement>(null);

  const closeModal = (evt: any) => {
    if (evt.target === closeRef.current) {
      onCloseModal();
    }
  };

  const keyPress = (evt: KeyboardEvent) => {
    if (evt.key === "Escape") {
      onCloseModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
      document.addEventListener("keydown", keyPress);
    } else {
      document.body.style.overflowY = "auto";
      document.removeEventListener("keydown", keyPress);
    }
    return () => {
      document.body.style.overflowY = "auto";
      document.removeEventListener("keydown", keyPress);
    };
  }, [isOpen]);

  return isOpen ? (
    <Styles.Wrapper onMouseDown={closeModal} ref={closeRef}>
      {children}
    </Styles.Wrapper>
  ) : null;
}
