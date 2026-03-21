import React from 'react';

const ServicesSection = () => {
  return (
    <section className="flat-section">
      <div className="container">
        <div className="box-title text-center wow fadeInUpSmall" data-wow-delay=".2s" data-wow-duration="2000ms">
          <div className="text-subtitle text-primary">Explore Cities</div>
          <h3 className="title mt-4">Our Location For You</h3>
        </div>
        <div className="tf-grid-layout md-col-3 wow fadeInUpSmall" data-wow-delay=".4s" data-wow-duration="2000ms">
          <div className="box-service">
            <div className="image">
              <img className="lazyload" data-src="/assets/images/service/home-1.png" src="/assets/images/home/Room1.jpeg" alt="image-location" />
            </div>
            <div className="content">
              <h5 className="title">Buy A New Home</h5>
              <p className="description">Discover your dream home effortlessly. Explore diverse properties and expert guidance for a seamless buying experience.</p>
              <a href="/sidebar-grid" className="tf-btn btn-line">Learn More <span className="icon icon-arrow-right2"></span></a>
            </div>
          </div>
          <div className="box-service">
            <div className="image">
              <img className="lazyload" data-src="/assets/images/service/home-2.png" src="/assets/images/home/room2.jpeg" alt="image-location" />
            </div>
            <div className="content">
              <h5 className="title">Sell a home</h5>
              <p className="description">Sell confidently with expert guidance and effective strategies, showcasing your property's best features for a successful sale.</p>
              <a href="/sidebar-grid" className="tf-btn btn-line">Learn More <span className="icon icon-arrow-right2"></span></a>
            </div>
          </div>
          <div className="box-service">
            <div className="image">
              <img className="lazyload" data-src="/assets/images/service/home-3.png" src="/assets/images/home/room3.jpeg" alt="image-location" />
            </div>
            <div className="content">
              <h5 className="title">Rent a home</h5>
              <p className="description">Discover your perfect rental effortlessly. Explore a diverse variety of listings tailored precisely to suit your unique lifestyle needs.</p>
              <a href="/sidebar-grid" className="tf-btn btn-line">Learn More <span className="icon icon-arrow-right2"></span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;