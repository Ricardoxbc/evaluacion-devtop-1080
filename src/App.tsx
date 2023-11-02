import { useState } from 'react'
import { Header } from './components/Header'
import { MainContent } from './components/MainContent'
import { CustomModal } from './components/CustomModal'

import { Toaster } from 'sonner'

import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  const disposeModal = () => setShowModal(false)

  const handleModal = () => setShowModal(true)

  const handleSubmit = () =>{}

  // {JSON.stringify(error)}
  return (
    <>
      <Header handle={handleModal} />
      <MainContent />
      <CustomModal
        handleSubmit={handleSubmit}
        show={showModal}
        handleDispose={disposeModal}
      />
      <Toaster></Toaster>
    </>
  )
}

export default App
