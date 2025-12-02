import React, { useState } from 'react';
import { SearchIcon, ChevronDownIcon } from '../assets/icons';

const Header = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'home', label: 'HOME' },
    { id: 'uiux', label: 'UI/UX PROJECTS', hasDropdown: true },
    { id: 'elective3', label: 'ELECTIVE 3', hasDropdown: true },
    { id: 'elective5', label: 'ELECTIVE 5', hasDropdown: true },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <header className="bg-primary-dark shadow-elevation-low w-full relative z-50">
      <div className="max-w-[1440px] mx-auto h-[128px] flex flex-col">
        {/* Upper header */}
        <div className="h-[80px] flex items-center px-6 md:px-10 lg:px-20 relative">
          <button
            className="hidden md:flex items-center justify-center w-6 h-6 absolute left-20"
            aria-label="Search"
          >
            <SearchIcon />
          </button>

          <h1 className="font-montserrat font-semibold text-[29.385px] tracking-[-0.8815px] text-white mx-auto">
            ForteUI
          </h1>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden absolute right-6 flex flex-col items-center justify-center w-8 h-8 gap-1.5"
            aria-label="Toggle navigation menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>

        {/* Lower header - desktop nav */}
        <nav className="hidden md:flex h-[48px] items-center justify-center">
          <ul className="flex items-center gap-6">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1 font-plus-jakarta font-bold text-[16px] leading-none ${
                    tab.id === 'home'
                      ? 'text-surface-DEFAULT'
                      : activeTab === tab.id
                      ? 'text-secondary-DEFAULT'
                      : 'text-secondary-DEFAULT'
                  }`}
                >
                  {tab.label}
                  {tab.hasDropdown && (
                    <span className="w-3 h-3 flex items-center justify-center">
                      <ChevronDownIcon />
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile nav */}
      <nav
        className={`md:hidden bg-primary-dark border-t border-primary-dark/40 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col py-3 px-6 gap-1">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => {
                  setActiveTab(tab.id);
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between py-2 text-left font-plus-jakarta font-bold text-[15px] text-surface-DEFAULT"
              >
                <span>{tab.label}</span>
                {tab.hasDropdown && (
                  <span className="w-3 h-3 flex items-center justify-center">
                    <ChevronDownIcon />
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
