import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  // Add an event listener to the overlay to close the modal when clicked
  const closeModalOnClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="modal-overlay fixed inset-0 bg-black opacity-50"
        onClick={closeModalOnClickOutside}
      ></div>
      <div className="modal-container bg-white w-[900px] mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
