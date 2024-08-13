import ReactDOM from 'react-dom';
import React from 'react';

function Modal({ children }) {
  const modalRoot = document.getElementById('modal-root');
  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    modalRoot
  );
}

function Profile() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Open Modal</button>
      {isModalOpen && (
        <Modal>
          <h2>Lorem</h2>
          <p>Lorem Impsum</p>
          <button onClick={handleCloseModal}>Close</button>
        </Modal>
      )}
    </div>
  );
}

export default Profile;