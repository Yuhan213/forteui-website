import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-surface-light overflow-hidden">
      <div className="absolute inset-0 bg-surface-light" aria-hidden="true" />
      <div className="absolute inset-0 backdrop-blur-md backdrop-filter" aria-hidden="true" />

      <div className="relative max-w-[1440px] mx-auto h-[946px] flex items-stretch">
        <div className="flex w-full px-6 md:px-16 lg:px-[105px] pt-[189px] pb-[189px]">
          {/* Left content */}
          <div className="w-full lg:w-[495px] flex flex-col gap-8">
            <h1 className="font-lato font-semibold text-primary-dark text-[40px] md:text-[48px] lg:text-[64px] leading-[1.05] tracking-[0.64px]">
              I collaborate to build digital experience
            </h1>

            <p className="font-lato text-primary-dark text-[18px] md:text-[20px] lg:text-[24px] leading-[32px] w-full max-w-[495px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel non.
            </p>

            <button className="mt-2 inline-flex items-center justify-center bg-primary-dark text-white font-lato font-medium text-[22px] leading-[18px] px-[56px] py-[24px] rounded-[40px] hover:bg-primary transition-colors">
              Get started
            </button>
          </div>

          {/* Right image */}
          <div className="hidden lg:block flex-1 relative">
            <div className="absolute left-[762px-105px] top-[115px]" />
            {/* Outer ellipse */}
            <div className="absolute right-[105px] top-[115px] w-[584px] h-[754px] border border-primary-dark rounded-full" />
            {/* Inner ellipse with image */}
            <div className="absolute right-[149px] top-[176px] w-[490px] h-[632px] rounded-full border border-primary-dark bg-white overflow-hidden">
              <img
                src="http://localhost:3845/assets/2d5c564d685c4b33ba78389af9a845e6f68ca484.png"
                alt="Professional portrait"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
