"use client"
import Caracteristicas from "./components/Caracteristicas/caracteristicas";
import Contato from "./components/Contato/contato";
import Footer from "./components/Footer/footer";
import Galeria from "./components/Galeria/galeria";
import Header from "./components/Header/header";
import Problem from "./components/Problem/problem";
import Publico from "./components/Publics/publics";
import Solution from "./components/UI-Components/Solution/solution";
import Time from "./components/Time/Time";
import Top from "./components/Top/top";
import ModalAutenticacao from "./components/Modal/modal";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {

  const team = [
    { nome: "Murilo Vieira dos Reis", rm: "RM573764", path: "/images/group/muriloV.jpeg" },
    { nome: "Bruno Guilherme Gonçalves", rm: "RM573697", path: "/images/group/brunoG.jpeg" },
    { nome: "Gabriel Luna Maia", rm: "RM570982", path: "/images/group/gabrielL.jpeg" },
    { nome: "João Lucas Magordo", rm: "RM572419", path: "/images/group/joaoL.jpeg" },
    { nome: "Gabriel Cardoso", rm: "RM571846", path: "/images/group/gabrielC.jpeg" },
  ]
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter()
  const handleOpenModal = () => {
    const isAuthenticated = localStorage.getItem('autenticado')
    if(isAuthenticated !== "true"){
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
      <Header openModal={handleOpenModal} />
      {isModalOpen ?
        <ModalAutenticacao isOpenModal={isModalOpen} closeModal={handleCloseModal} /> :
        <>
          <Top />
          <Problem />
          <Solution />
          <Publico />
          <Galeria />
          <Caracteristicas />
          <Time time={team} />
          <Contato />
        </>
      }
      <Footer />
    </>
  );
}
