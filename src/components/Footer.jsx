import React from 'react';
import { TwitterIcon, InstagramIcon, LinkedInIcon } from '../assets/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-light">
      <div className="max-w-[1440px] mx-auto h-[405px] px-6 md:px-16 lg:px-20 pt-[96px] relative">
        <div className="flex flex-col gap-10">
          <h2 className="font-montserrat font-semibold text-[43.585px] tracking-[-1.3075px] text-black">
            ForteUI
          </h2>

          <p className="font-inter text-[18px] leading-[1.5] text-text-secondary max-w-[524px]">
            Supercharge your design workflow, kick-start your project faster and level up your process.
          </p>
        </div>

        <div className="absolute left-0 right-0 top-[324px] h-px bg-surface-tertiary" />

        <div className="absolute left-[80px] right-[80px] top-[324px] h-[80px] flex items-center justify-between">
          <div className="flex gap-4">
            <button aria-label="Twitter" className="w-8 h-8 hover:opacity-80 transition-opacity">
              <TwitterIcon />
            </button>
            <button aria-label="Instagram" className="w-8 h-8 hover:opacity-80 transition-opacity">
              <InstagramIcon />
            </button>
            <button aria-label="LinkedIn" className="w-8 h-8 hover:opacity-80 transition-opacity">
              <LinkedInIcon />
            </button>
          </div>

          <div className="flex items-center gap-6 text-[14px] font-plus-jakarta text-text-secondary">
            <span>ForteUI© {currentYear}</span>
            <span>Terms</span>
            <span>Privacy &amp; Policy</span>
            <span>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
