import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Mobile Menu Icon
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12H21M3 6H21M3 18H21" stroke="#153935" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6L18 18" stroke="#153935" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// SVG Components
const ChevronDown = ({ color = "#8e8e93" }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4.5L6 7.5L9 4.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SearchIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="11" r="6" stroke="#000" strokeWidth="2"/>
    <path d="M20 20L17 17" stroke="#000" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28.68 8.17C28.05 8.43 27.38 8.61 26.68 8.7C27.4 8.27 27.94 7.58 28.2 6.76C27.52 7.16 26.77 7.44 25.97 7.59C25.33 6.9 24.41 6.47 23.39 6.47C21.44 6.47 19.86 8.05 19.86 10C19.86 10.26 19.89 10.51 19.94 10.76C16.95 10.62 14.28 9.23 12.49 7.09C12.2 7.65 12.03 8.27 12.03 8.94C12.03 10.2 12.68 11.31 13.66 11.96C13.06 11.94 12.5 11.79 12 11.53V11.58C12 13.32 13.22 14.76 14.85 15.07C14.57 15.15 14.27 15.19 13.97 15.19C13.76 15.19 13.55 15.17 13.35 15.13C13.77 16.54 15.08 17.58 16.64 17.61C15.43 18.58 13.89 19.16 12.21 19.16C11.94 19.16 11.67 19.15 11.41 19.12C12.99 20.14 14.88 20.74 16.92 20.74C23.38 20.74 26.91 15.25 26.91 10.39C26.91 10.24 26.91 10.1 26.9 9.95C27.59 9.45 28.2 8.84 28.68 8.17Z" fill="white"/>
  </svg>
);

const DribbbleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 4C9.37 4 4 9.37 4 16C4 22.63 9.37 28 16 28C22.63 28 28 22.63 28 16C28 9.37 22.63 4 16 4ZM23.95 10.23C25.22 11.77 25.99 13.73 26.03 15.87C25.71 15.81 22.34 15.12 18.94 15.55C18.86 15.37 18.79 15.18 18.71 14.99C18.49 14.47 18.25 13.95 18 13.45C21.75 11.88 23.71 10.53 23.95 10.23ZM16 5.98C18.33 5.98 20.46 6.82 22.1 8.22C21.9 8.49 20.13 9.72 16.56 11.14C14.92 8.13 13.1 5.66 12.82 5.28C13.85 5.08 14.91 5.98 16 5.98ZM10.66 6.03C10.93 6.38 12.71 8.86 14.38 11.8C9.66 13.05 5.49 13.03 5.06 13.02C5.72 9.98 7.88 7.48 10.66 6.03ZM5.97 16.01V15.67C6.38 15.68 11.3 15.75 16.35 14.22C16.64 14.78 16.91 15.35 17.16 15.92C17.03 15.95 16.89 15.99 16.76 16.03C11.54 17.73 8.77 22.31 8.5 22.76C6.89 21.12 5.97 18.68 5.97 16.01ZM16 26.04C13.88 26.04 11.91 25.35 10.33 24.18C10.54 23.75 12.58 19.75 18.31 17.72C18.33 17.71 18.35 17.71 18.37 17.7C19.76 21.32 20.32 24.35 20.47 25.22C19.09 25.74 17.58 26.04 16 26.04ZM22.38 24.1C22.28 23.48 21.77 20.58 20.48 17.02C23.68 16.5 26.47 17.35 26.8 17.45C26.4 20.22 24.7 22.59 22.38 24.1Z" fill="white"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.5 4H7.5C5.57 4 4 5.57 4 7.5V24.5C4 26.43 5.57 28 7.5 28H24.5C26.43 28 28 26.43 28 24.5V7.5C28 5.57 26.43 4 24.5 4ZM12 22H9V13H12V22ZM10.5 11.5C9.39 11.5 8.5 10.61 8.5 9.5C8.5 8.39 9.39 7.5 10.5 7.5C11.61 7.5 12.5 8.39 12.5 9.5C12.5 10.61 11.61 11.5 10.5 11.5ZM24 22H21V17.07C21 14.13 17.5 14.36 17.5 17.07V22H14.5V13H17.5V14.54C18.87 12.03 24 11.83 24 16.61V22Z" fill="white"/>
  </svg>
);

// Assignments with PDFs and websites
const assignments = [
  {
    id: 1,
    title: 'Assignment 1: REST API',
    subtitle: 'Building RESTful web services',
    pdfUrl: '/pdfs/Assignment 1.pdf',
    image: '/images/assignments/assignment1.png',
    type: 'pdf',
  },
  {
    id: 2,
    title: 'Assignment 2: AWS',
    subtitle: 'Cloud computing fundamentals',
    pdfUrl: '/pdfs/Assignment 2.pdf',
    image: '/images/assignments/assignment2.png',
    type: 'pdf',
  },
  {
    id: 3,
    title: 'Assignment 3',
    subtitle: 'Technical documentation',
    pdfUrl: '/pdfs/Assignment 3.pdf',
    image: '/images/assignments/assignment3.png',
    type: 'pdf',
  },
  {
    id: 4,
    title: 'Assignment 4: Narrative Report',
    subtitle: 'Documentation and analysis',
    pdfUrl: '/pdfs/Assignment 4.pdf',
    image: '/images/assignments/assignment4.png',
    type: 'pdf',
  },
  {
    id: 5,
    title: 'Assignment 5',
    subtitle: 'Final project presentation',
    pdfUrl: '/pdfs/Assignment 5.pdf',
    image: '/images/assignments/assignment5.png',
    type: 'pdf',
  },
  {
    id: 6,
    title: 'Assignment 6: Docker Lab',
    subtitle: 'Container orchestration',
    pdfUrl: 'https://docker-lab-elec3.vercel.app/',
    image: '/images/assignments/assignment6.png',
    type: 'website',
  },
];

export default function Elective3Page() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    
    let frameId;
    const handleMouseMove = (e) => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor - only on non-touch devices */}
      {!isTouchDevice && (
        <div
          className="fixed w-4 h-4 rounded-full pointer-events-none z-[100] will-change-transform hidden md:block"
          style={{
            left: cursorPos.x,
            top: cursorPos.y,
            transform: 'translate(-50%, -50%) translateZ(0)',
            background: 'radial-gradient(circle, #3b82f6 0%, rgba(59,130,246,0.6) 50%, transparent 70%)',
          }}
        />
      )}

      <div className="bg-white relative w-full">
        {/* Header - Same as HomePage */}
        <header className="fixed h-[60px] md:h-[100px] left-0 right-0 top-0 bg-white/70 backdrop-blur-xl z-50" style={{ boxShadow: '0px 0px 1px 0px rgba(20,20,20,0.12), 0px 1px 8px 0px rgba(20,20,20,0.08)' }}>
          {/* Mobile Header */}
          <div className="md:hidden h-[60px] flex items-center justify-between px-4">
            <Link to="/" className="font-['Montserrat'] font-semibold text-[20px] text-[#153935] tracking-[-0.7px]">
              ForteUI
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-[60px] left-0 right-0 bg-white shadow-lg py-4 px-6 flex flex-col gap-4">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex gap-[4px] items-center cursor-pointer group">
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] text-[#8e8e93] group-hover:text-[#4ade80] transition-colors duration-300">HOME</span>
              </Link>
              <div className="flex items-center gap-1 cursor-pointer group">
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] text-[#8e8e93] group-hover:text-[#4ade80] transition-colors duration-300">UI/UX PROJECTS</span>
              </div>
              <div className="flex gap-[4px] items-center cursor-pointer group">
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] text-black group-hover:text-[#4ade80] transition-colors duration-300">ELECTIVE 3</span>
              </div>
            </div>
          )}
          
          {/* Desktop Header */}
          <div className="hidden md:block">
            {/* Upper Header */}
            <div className="h-[52px] flex items-center justify-center relative">
              <div className="absolute left-[60px] size-[20px] cursor-pointer hover:opacity-70 transition-opacity">
                <SearchIcon />
              </div>
              <Link to="/" className="font-['Montserrat'] font-semibold text-[24px] text-[#153935] tracking-[-0.7px] hover:opacity-80 transition-opacity">
                ForteUI
              </Link>
            </div>
            {/* Lower Header / Navigation */}
            <div className="h-[48px] flex items-center justify-center">
              <div className="flex gap-[20px] items-center">
                <Link to="/" className="flex gap-[4px] items-center cursor-pointer group">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] text-[#8e8e93] group-hover:text-[#4ade80] transition-colors duration-300">HOME</span>
                </Link>
                <div className="flex items-center gap-1 cursor-pointer group">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] text-[#8e8e93] group-hover:text-[#4ade80] transition-colors duration-300">UI/UX PROJECTS</span>
                </div>
                <div className="flex gap-[4px] items-center cursor-pointer group">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] text-black group-hover:text-[#4ade80] transition-colors duration-300">ELECTIVE 3</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-[60px] md:pt-[100px] relative overflow-hidden">
          {/* Decorative Gradient Ellipses - contained within main */}
          <div 
            className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] pointer-events-none z-0 opacity-60"
            style={{
              left: '-150px',
              top: '200px',
              background: 'radial-gradient(circle, rgba(226,234,233,0.9) 0%, rgba(226,234,233,0.3) 40%, transparent 70%)',
              borderRadius: '50%',
            }}
          />
          <div 
            className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] pointer-events-none z-0 opacity-60"
            style={{
              right: '-150px',
              top: '-100px',
              background: 'radial-gradient(circle, rgba(226,234,233,0.9) 0%, rgba(226,234,233,0.3) 40%, transparent 70%)',
              borderRadius: '50%',
            }}
          />
          {/* Assignments Grid */}
          <section className="py-8 md:py-[80px] px-4 sm:px-8 md:px-[80px] flex flex-col items-center gap-6 md:gap-[48px]">
            {/* First Row - 4 assignments */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[16px] w-full max-w-[1300px]">
              {assignments.slice(0, 4).map((assignment) => (
                <div
                  key={assignment.id}
                  onClick={() => setSelectedPdf(assignment)}
                  className="relative cursor-pointer group"
                >
                  <Card className="relative border-0 rounded-[16px] overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 p-0 aspect-square">
                    {/* Image */}
                    <img 
                      src={assignment.image} 
                      alt={assignment.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    {/* Text Overlay */}
                    <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 text-white z-10">
                      <p className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] md:text-[16px] leading-[1.2] mb-1">
                        {assignment.title}
                      </p>
                      <p className="font-['Plus_Jakarta_Sans'] font-normal text-[10px] md:text-[11px] leading-[1.5]">
                        {assignment.subtitle}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            {/* Second Row - 2 centered assignments */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-[16px] w-full max-w-[1300px]">
              {assignments.slice(4, 6).map((assignment, index) => (
                  <div
                    key={assignment.id}
                    onClick={() => setSelectedPdf(assignment)}
                    className={`relative cursor-pointer group ${index === 0 ? 'md:col-start-2' : ''}`}
                  >
                    <Card className="relative border-0 rounded-[16px] overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 p-0 aspect-square">
                      {/* Image */}
                      <img 
                        src={assignment.image} 
                        alt={assignment.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      {/* Text Overlay */}
                      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 text-white z-10">
                        <p className="font-['Plus_Jakarta_Sans'] font-bold text-[14px] md:text-[16px] leading-[1.2] mb-1">
                          {assignment.title}
                        </p>
                        <p className="font-['Plus_Jakarta_Sans'] font-normal text-[10px] md:text-[11px] leading-[1.5]">
                          {assignment.subtitle}
                        </p>
                      </div>
                    </Card>
                  </div>
                ))}
            </div>

          </section>
        </main>

        {/* Footer - Same as HomePage */}
        <footer className="bg-[#153935] py-8 md:py-[50px] px-4 sm:px-8 md:px-[60px]">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="font-['Montserrat'] font-semibold text-[24px] md:text-[32px] text-white tracking-[-1px] mb-3 md:mb-[16px]">
            ForteUI
          </h2>
          <p className="font-['Inter'] text-[12px] md:text-[14px] leading-[1.6] text-[#f2f2f7] max-w-[380px] mb-6 md:mb-[40px]">
            Supercharge your design workflow, kick-start your project faster and level up your process.
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex gap-2 md:gap-[8px]">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity"><TwitterIcon /></a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity"><DribbbleIcon /></a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity"><LinkedInIcon /></a>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-[16px] font-['Plus_Jakarta_Sans'] text-[10px] md:text-[11px] text-[#f2f2f7]">
              <span>ForteUI© 2023</span>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Privacy & Policy</a>
              <a href="#" className="hover:underline">Cookie Policy</a>
            </div>
          </div>
        </div>
        </footer>

        {/* Content Viewer Modal - PDF or Website */}
        {selectedPdf && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPdf(null)}
          >
            <div 
              className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[18px] text-[#153935]">
                  {selectedPdf.title}
                </h3>
                <div className="flex items-center gap-3">
                  <Button
                    onClick={() => window.open(selectedPdf.pdfUrl, '_blank')}
                    className="bg-[#153935] hover:bg-[#1a4a44] text-white font-['Plus_Jakarta_Sans'] text-[14px] px-4 py-2 h-auto rounded-lg"
                  >
                    {selectedPdf.type === 'website' ? 'Open Website' : 'Download PDF'}
                  </Button>
                  <button
                    onClick={() => setSelectedPdf(null)}
                    className="text-[#8e8e93] hover:text-[#153935] transition-colors"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              {/* Content Viewer */}
              <div className="flex-1 overflow-auto bg-gray-100 p-4">
                {selectedPdf.type === 'website' ? (
                  <iframe
                    src={selectedPdf.pdfUrl}
                    className="w-full h-full border-0 rounded-lg shadow-lg bg-white"
                    title={selectedPdf.title}
                  />
                ) : (
                  <Document
                    file={selectedPdf.pdfUrl}
                    onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                    loading={
                      <div className="flex items-center justify-center p-8">
                        <div className="font-['Plus_Jakarta_Sans'] text-[16px] text-[#8e8e93]">Loading PDF...</div>
                      </div>
                    }
                    error={
                      <div className="flex items-center justify-center p-8">
                        <div className="font-['Plus_Jakarta_Sans'] text-[16px] text-red-600">Failed to load PDF</div>
                      </div>
                    }
                    className="flex flex-col items-center gap-4"
                  >
                    {numPages && Array.from(new Array(numPages), (el, index) => (
                      <Page
                        key={`page_${index + 1}`}
                        pageNumber={index + 1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        className="shadow-lg"
                        width={Math.min(window.innerWidth - 100, 900)}
                      />
                    ))}
                  </Document>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (hover: hover) and (pointer: fine) {
          * { cursor: none !important; }
        }
      `}</style>
    </>
  );
}
