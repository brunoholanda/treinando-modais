import './App.css'
import { useState } from 'react'
import Modal from './components/modal'
import qr from '../src/components/qr-pix.jpg';

function App() {
  const [openModal, setOpenModal] = useState(false)
  const [openModal2, setOpenModal2] = useState(false)

  return (
    <div className='App'>
      Front Beginners - Modal
      <div>
        <button onClick={() => setOpenModal(true)}>Abrir o modal</button>
        <button onClick={() => setOpenModal2(true)}>Abrir o modal 2</button>
      </div>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <div className='img_modal'>
          <img src={qr} alt="qr code pix" />
          <p>Se preferir transfira para (83) 98150712</p>
        </div>
      </Modal>
      <Modal
        isOpen={openModal2}
        setModalOpen={() => setOpenModal2(!openModal2)}
      >
        Conteúdo do modal 2
      </Modal>
    </div>
  )
}

export default App
