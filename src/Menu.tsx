import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Tooltip Component with cyberpunk styling
export const Tooltip = ({ 
  children, 
  content,
  position = 'top'
}: { 
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className={`absolute z-50 ${positionClasses[position]}`}>
          <div className="bg-app-quaternary cyberpunk-border color-primary text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

const CyberpunkServiceButton: React.FC<{
  icon: React.ReactNode;
  label: string;
  url?: string;
  description?: string;
}> = ({
  icon,
  label,
  url,
  description
}) => {
  const handleClick = (e: React.MouseEvent) => {
    // Prevent event bubbling
    e.stopPropagation();

    if (url) {
      // Try using location.href as an alternative to window.open
      try {
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (error) {
        console.error("Error opening URL:", error);
        // Fallback to location.href
        window.location.href = url;
      }
    } else {
      // Navigate to docs page
      window.dispatchEvent(new CustomEvent('navigateToDocs'));
    }
  };

  return (
    <Tooltip content={description || label} position="top">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex flex-col items-center w-20 p-2 hover:bg-primary-20 border border-app-primary-30 
                  hover-border-primary-60 rounded-lg cursor-pointer transition-all duration-300"
        onClick={handleClick}
      >
        <motion.div 
          className="w-10 h-10 rounded-full flex items-center justify-center mb-2 
                    bg-app-quaternary border border-app-primary-40 overflow-hidden"
          whileHover={{ 
            borderColor: "var(--color-primary)", 
            boxShadow: "0 0 8px var(--color-primary-40)" 
          }}
        >
          {icon}
        </motion.div>
        <span className="text-app-secondary text-xs font-mono tracking-wider">{label}</span>
      </motion.div>
    </Tooltip>
  );
};

// Dropdown component that uses portal to render outside the normal DOM hierarchy
const DropdownPortal: React.FC<{
  isOpen: boolean;
  buttonRef: React.RefObject<HTMLButtonElement>;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isOpen, buttonRef, onClose, children }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX
      });
      
      // Add event listener to close dropdown when clicking outside
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
        ) {
          onClose();
        }
      };
      
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, buttonRef, onClose]);
  
  if (!isOpen) return null;
  
  return createPortal(
    <div 
      ref={dropdownRef}
      className="fixed z-50" 
      style={{ 
        top: `${position.top}px`, 
        left: `${position.left}px`,
      }}
    >
      {children}
    </div>,
    document.body
  );
};

// Main component
const ServiceSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleSelector = () => {
    setIsOpen(!isOpen);
  };
  
  const closeSelector = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      {/* Main button to open the selector */}
        <button
          ref={buttonRef}
          onClick={toggleSelector}
          className="flex items-center justify-center p-2 overflow-hidden
                  border border-app-primary-30 hover-border-primary-60 rounded 
                  transition-all duration-300 cyberpunk-btn"
        >
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="20" height="20" className="filter drop-shadow-[0_0_8px_var(--color-primary-70)]">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="0.5" />
              <polyline points="14 2 14 8 20 8" fill="none" stroke="var(--color-primary)" strokeWidth="1" />
              <line x1="16" y1="13" x2="8" y2="13" stroke="var(--color-primary)" strokeWidth="1" />
              <line x1="16" y1="17" x2="8" y2="17" stroke="var(--color-primary)" strokeWidth="1" />
              <polyline points="10 9 9 9 8 9" stroke="var(--color-primary)" strokeWidth="1" />
            </svg>
          </div>
        </motion.div>
        </button>

      {/* Service selector modal using portal */}
      <AnimatePresence>
        {isOpen && (
          <DropdownPortal 
            isOpen={isOpen} 
            buttonRef={buttonRef}
            onClose={closeSelector}
          >
            <motion.div 
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-2 bg-app-primary rounded-lg p-4 shadow-lg 
                        w-80 border border-app-primary-40 cyberpunk-border
                        backdrop-blur-sm"
            >
              <div className="relative">
                {/* Cyberpunk scanline effect */}
                <div className="absolute top-0 left-0 w-full h-full cyberpunk-scanline pointer-events-none z-10 opacity-30"></div>
                
                {/* Glow accents in corners */}
                <div className="absolute top-0 right-0 w-3 h-3 bg-app-primary-color opacity-50 rounded-full blur-md"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-app-primary-color opacity-50 rounded-full blur-md"></div>
                
                <motion.div
                  className="flex flex-wrap justify-center gap-3 relative z-20"
                >
                  <CyberpunkServiceButton
                    icon={
                      <svg viewBox="0 0 24 24" width="16" height="16" className="filter drop-shadow-[0_0_4px_var(--color-primary-70)]">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="var(--color-primary)" stroke="var(--color-primary)" strokeWidth="0.5" />
                        <polyline points="14 2 14 8 20 8" fill="none" stroke="var(--color-primary)" strokeWidth="1" />
                        <line x1="16" y1="13" x2="8" y2="13" stroke="var(--color-primary)" strokeWidth="1" />
                        <line x1="16" y1="17" x2="8" y2="17" stroke="var(--color-primary)" strokeWidth="1" />
                        <polyline points="10 9 9 9 8 9" stroke="var(--color-primary)" strokeWidth="1" />
                      </svg>
                    }
                    label="DOCS"
                    description="View x40TWO Documentation"
                  />
                </motion.div>
              </div>
            </motion.div>
          </DropdownPortal>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ServiceSelector;