import React, { useEffect } from 'react';

const TestimonialsSection = () => {
  useEffect(() => {
    // Initialize Swiper for testimonials
    if (window.Swiper) {
      new window.Swiper(".tf-sw-testimonial", {
        spaceBetween: 30,
        slidesPerView: 4.5,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".sw-pagination-testimonial .swiper-button-next",
          prevEl: ".sw-pagination-testimonial .swiper-button-prev",
        },
        pagination: {
          el: ".sw-pagination-testimonial",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: false,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 30,
            centeredSlides: true,
          },
        },
      });
    }
  }, []);

  const testimonials = [
    {
      quote: "My experience with Easy Real Estate has exceeded expectations. They efficiently manage properties with a professional and attentive approach in every situation. I feel reassured that any issue will be resolved promptly and effectively.",
      avatar: '/assets/images/avatar/avt-png1.png',
      name: 'Courtney Henry',
      role: 'CEO Themesflat',
      stars: 5
    },
    {
      quote: "Outstanding service from start to finish! The team helped me find my dream home in record time. Their market knowledge and negotiation skills saved me thousands. Highly recommend!",
      avatar: '/assets/images/avatar/avt-png2.png',
      name: 'Esther Howard',
      role: 'Business Owner',
      stars: 5
    },
    {
      quote: "Professional, reliable, and trustworthy. Easy Real Estate made selling my property stress-free. They handled everything with expertise and kept me informed throughout the process.",
      avatar: '/assets/images/avatar/avt-png4.png',
      name: 'Annette Black',
      role: 'Property Investor',
      stars: 5
    },
    {
      quote: "The best real estate experience I've ever had. From the initial consultation to closing, the team was exceptional. They truly care about their clients and go above and beyond.",
      avatar: '/assets/images/avatar/avt-png6.png',
      name: 'Bessie Cooper',
      role: 'Homeowner',
      stars: 5
    },
    {
      quote: "Impressed by their dedication and professionalism. They found me the perfect investment property that meets all my criteria. Their follow-up service is also excellent.",
      avatar: '/assets/images/avatar/avt-png3.png',
      name: 'Ronald Richards',
      role: 'Real Estate Investor',
      stars: 5
    },
    {
      quote: "Exceptional customer service and market expertise. They helped me navigate a complex property purchase with ease. I couldn't be happier with my new home!",
      avatar: '/assets/images/avatar/avt-png5.png',
      name: 'Jenny Wilson',
      role: 'First-time Buyer',
      stars: 5
    },
    {
      quote: "Easy Real Estate transformed my property search into a smooth, enjoyable experience. Their attention to detail and commitment to customer satisfaction is unmatched.",
      avatar: '/assets/images/avatar/apartment6.jpeg',
      name: 'Marvin McKinney',
      role: 'Tech Executive',
      stars: 5
    },
    {
      quote: "Professional team with deep market knowledge. They provided valuable insights and helped me make informed decisions. My property sold quickly and above asking price!",
      avatar: '/assets/images/avatar/apartment9.jpeg',
      name: 'Kristin Watson',
      role: 'Property Seller',
      stars: 5
    }
  ];

  const renderStars = (count) => {
    return Array.from({ length: count }, (_, i) => (
      <li key={i} className="icon icon-star"></li>
    ));
  };

  return (
    <section className="flat-section bg-primary-new flat-testimonial">
      <div className="box-title px-15">
        <div className="text-center wow fadeInUp">
          <div className="text-subtitle text-primary">Our Testimonials</div>
          <h3 className="title mt-4">What’s people say’s</h3>
          <p className="desc text-variant-1">
            Our seasoned team excels in real estate with years of successful market navigation, offering informed decisions and optimal results.
          </p>
        </div>
      </div>
      <div dir="ltr" className="swiper tf-sw-testimonial">
        <div className="swiper-wrapper wow fadeInUp" data-wow-delay=".2s">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="swiper-slide">
              <div className="box-tes-item">
                <span className="icon icon-quote"></span>
                <p className="note body-2">{testimonial.quote}</p>
                <div className="box-avt d-flex align-items-center gap-12">
                  <div className="avatar avt-60 round">
                    <img src={testimonial.avatar} alt="avatar" />
                  </div>
                  <div className="info">
                    <h6>{testimonial.name}</h6>
                    <p className="caption-2 text-variant-1 mt-4">{testimonial.role}</p>
                    <ul className="list-star">
                      {renderStars(testimonial.stars)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="sw-pagination sw-pagination-testimonial text-center"></div>
      </div>
    </section>
  );
};

export default TestimonialsSection;