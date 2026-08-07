import React, { createContext, useContext, useState, useEffect } from 'react';

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isPreloaded, setIsPreloaded] = useState(true);
  const [cursorText, setCursorText] = useState('');
  const [cursorHovering, setCursorHovering] = useState(false);
  const [selectedResidenceModal, setSelectedResidenceModal] = useState(null);

  // Scroll to top on page transition
  const navigateTo = (pageId) => {
    setIsNavOpen(false);
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const setCursor = (text = '', hovering = true) => {
    setCursorText(text);
    setCursorHovering(hovering);
  };

  const resetCursor = () => {
    setCursorText('');
    setCursorHovering(false);
  };

  return (
    <NavContext.Provider value={{
      currentPage,
      setCurrentPage: navigateTo,
      isNavOpen,
      setIsNavOpen,
      isPreloaded,
      setIsPreloaded,
      cursorText,
      cursorHovering,
      setCursor,
      resetCursor,
      selectedResidenceModal,
      setSelectedResidenceModal
    }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
