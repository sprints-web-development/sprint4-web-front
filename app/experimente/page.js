"use client"
import { useState } from "react";
import Experimente from "../components/Experimente/experimente";
import Footer from "../components/Footer/footer";
import Header from "../components/Header/header";
import ModalAutenticacao from "../components/Modal/modal";
import { useRouter } from "next/navigation";
export default function LinksPage() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()

  const handleOpenModal = () => {
    const isAuthenticated = localStorage.getItem('autenticado')
    if (isAuthenticated !== "true") {
      setIsModalOpen(true);
      return
    }
    router.push('/mensagens')
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {isModalOpen ?
        <ModalAutenticacao isOpenModal={isModalOpen} closeModal={handleCloseModal} /> :
        <>
          <Header openModal={handleOpenModal} />
          <Experimente />
          <Footer openModal={handleOpenModal} />
        </>
      }
    </>
  );
}
