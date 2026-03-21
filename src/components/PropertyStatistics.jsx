import React, { useEffect } from 'react';

const PropertyStatistics = () => {
  useEffect(() => {
    // Initialize counter animation
    if (window.flatCounter) {
      window.flatCounter();
    }
  }, []);

  return (
    <section className="flat-section flat-counter-v2">
      <div className="container">
        <div className="box-title text-center wow fadeInUp">
          <div className="text-subtitle text-primary">Our Achievements</div>
          <h3 className="title mt-4">Property Statistics</h3>
        </div>
        <div className="wrap-counter tf-counter">
          <div className="counter-box">
            <div className="box-icon">
              <span className="icon icon-listing"></span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">Properties Sold</div>
              <div className="box-count d-flex align-items-end">
                <h3 className="number fw-8" data-speed="2000" data-to="1250" data-inviewport="yes">1250</h3>
                <span className="text">+</span>
              </div>
            </div>
          </div>
          <div className="counter-box">
            <div className="box-icon">
              <span className="icon icon-user"></span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">Happy Clients</div>
              <div className="box-count d-flex align-items-end">
                <h3 className="number fw-8" data-speed="2000" data-to="850" data-inviewport="yes">850</h3>
                <span className="text">+</span>
              </div>
            </div>
          </div>
          <div className="counter-box">
            <div className="box-icon">
              <span className="icon icon-award"></span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">Awards Won</div>
              <div className="box-count d-flex align-items-end">
                <h3 className="number fw-8" data-speed="2000" data-to="25" data-inviewport="yes">25</h3>
                <span className="text">+</span>
              </div>
            </div>
          </div>
          <div className="counter-box">
            <div className="box-icon">
              <span className="icon icon-experience"></span>
            </div>
            <div className="content-box">
              <div className="title-count text-variant-1">Years Experience</div>
              <div className="box-count d-flex align-items-end">
                <h3 className="number fw-8" data-speed="2000" data-to="15" data-inviewport="yes">15</h3>
                <span className="text">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyStatistics;