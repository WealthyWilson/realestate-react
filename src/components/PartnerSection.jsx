import { useEffect } from 'react';

const partnerLogos = [
  { name: 'Partner 1', src: '/assets/images/partner/partner1.svg' },
  { name: 'Partner 2', src: '/assets/images/partner/partner2.svg' },
  { name: 'Partner 3', src: '/assets/images/partner/partner3.svg' },
  { name: 'Partner 4', src: '/assets/images/partner/partner4.svg' },
  { name: 'Partner 5', src: '/assets/images/partner/partner5.svg' },
  { name: 'Partner 6', src: '/assets/images/partner/partner6.svg' },
];

const sliderLogos = [...partnerLogos, ...partnerLogos];

const PartnerSection = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.Swiper) {
      return undefined;
    }

    const partnerSliderElement = document.querySelector('.tf-sw-partner');
    if (!partnerSliderElement) {
      return undefined;
    }

    if (partnerSliderElement.swiper) {
      partnerSliderElement.swiper.destroy(true, true);
    }

    const partnerSlider = new window.Swiper('.tf-sw-partner', {
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      slidesPerView: 2,
      spaceBetween: 15,
      loop: true,
      loopAdditionalSlides: sliderLogos.length,
      speed: 3000,
      allowTouchMove: true,
      breakpoints: {
        575: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },
    });

    return () => {
      partnerSlider.destroy(true, true);
    };
  }, []);

  return (
    <section className="flat-section pt-0">
      <div className="container2">
        <h6 className="mb-20 text-center text-capitalize text-black-4">Trusted by over 150+ major companies</h6>
        <div
          dir="ltr"
          className="swiper tf-sw-partner"
          data-preview="6"
          data-tablet="4"
          data-mobile-sm="3"
          data-mobile="2"
          data-space="15"
          data-space-md="30"
          data-space-lg="30"
        >
          <div className="swiper-wrapper">
            {sliderLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="swiper-slide">
                <div className="partner-item">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
