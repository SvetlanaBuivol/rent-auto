import React, { useEffect } from "react";
import { BackDrop, CloseBtn, ModalContent } from "./Modal.styled";

const Modal = ({ onClose, children }) => {
    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    };

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onClose]);

    return (
        <BackDrop onClick={handleBackdropClick}>
            <ModalContent>
                <CloseBtn onClick={onClose}>x</CloseBtn>
                {children}
            </ModalContent>
        </BackDrop>
    )
}
    
export default Modal;