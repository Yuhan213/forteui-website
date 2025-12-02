import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, InstacartLogo, CoinbaseLogo } from '../assets/icons';

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      logo: <InstacartLogo />,
      quote: "We were able to get a published, working version of the entire website live in less than two weeks. And we didn't have to compromise on our original designs.",
      author: "Karen Yue",
      title: "Director of Digital Marketing Technology"
    },
    {
      id: 2,
      logo: <CoinbaseLogo />,
      quote: "We were able to get a published, working version of the entire website live in less than two weeks. And we didn't have to compromise on our original designs.",
      author: "Karen Yue",
      title: "Director of Digital Marketing Technology"
    },
    {
      id: 3,
      logo: <InstacartLogo />,
      quote: "The platform exceeded our expectations. The team delivered exceptional results.",
      author: "John Smith",
      title: "Product Manager"
    },
    {
      id: 4,
      logo: <CoinbaseLogo />,
      quote: "Outstanding service and support throughout the entire development process.",
      author: "Sarah Johnson",
      title: "CTO"
    },
    {
      id: 5,
      logo: <InstacartLogo />,
      quote: "Highly recommend for any business looking to scale their digital presence.",
      author: "Michael Brown",
      title: "CEO"
    }
  ];

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const visibleTestimonials = [testimonials[currentSlide], testimonials[(currentSlide + 1) % testimonials.length]];

  return (
    <section className="bg-primary-dark overflow-hidden">
      <div className="max-w-[1440px] mx-auto h-[771px] px-6 md:px-16 lg:px-20 pt-[120px] relative">
        <h2 className="font-plus-jakarta font-bold text-[40px] leading-[1.2] text-white mb-[32px]">
          What our clients say
        </h2>

        <div className="absolute left-[80px] right-[80px] top-[232px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="bg-surface-DEFAULT rounded-[16px] shadow-elevation-low h-[315px] px-12 py-12 flex flex-col justify-between"
              >
                {/* Company Logo */}
                <div className="h-6 mb-8">
                  {testimonial.logo}
                </div>

                <blockquote className="font-plus-jakarta font-bold text-[24px] leading-[1.2] text-text-primary mb-8">
                  "{testimonial.quote}"
                </blockquote>

                <div className="mt-auto">
                  <p className="font-plus-jakarta font-bold text-[16px] leading-[1.2] text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="font-plus-jakarta text-[14px] leading-[1.5] text-text-primary mt-1">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute left-[80px] right-[80px] bottom-[120px] flex items-center justify-between">
          <div className="flex gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full border border-secondary transition-all ${
                  index === currentSlide
                    ? 'bg-white opacity-100'
                    : 'bg-white/70 opacity-30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
