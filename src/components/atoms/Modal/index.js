import React, { useEffect } from 'react';
import { TEModal, TEModalDialog, TEModalContent } from "tw-elements-react";

export default function Modal({ isOpen, onClose, children, maxWidth, className }) {
  return (
    <TEModal show={isOpen} setShow={onClose}>
      <TEModalDialog centered={true} scrollable={false}>
        <TEModalContent className={className} style={{ margin: "auto" }}>
          {children}
        </TEModalContent>
      </TEModalDialog>
    </TEModal>
  )
}
