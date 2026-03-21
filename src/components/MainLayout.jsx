import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

export default function MainLayout() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(false);
  };

  return (
    <>
      <Header onOpenLoginModal={openLoginModal} onOpenRegisterModal={openRegisterModal} />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeModals}
        onSwitchToRegister={openRegisterModal}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeModals}
        onSwitchToLogin={openLoginModal}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
