import React from "react";
import { createPortal } from "react-dom";
import Modal from "../Modal/Modal";

const ModalWrapper = ({ children, isOpen, onClose }) => {
    return isOpen
        ? createPortal(
            <Modal onClose={onClose}>{children}</Modal>,
            document.getElementById('modal-root')
        ) : null;
}

export default ModalWrapper;