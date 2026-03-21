import React from 'react';

const Categories = () => {
  const categories = [
    { icon: 'icon-apartment1', name: 'Apartment', count: '234 Property', tag: 'span' },
    { icon: 'icon-villa-line', name: 'Villa', count: '234 Property', tag: 'span' },
    { icon: 'icon-studio', name: 'Studio', count: '234 Property', tag: 'span' },
    { icon: 'icon-office1', name: 'Office', count: '234 Property', tag: 'p' },
    { icon: 'icon-townhouse', name: 'Townhouse', count: '234 Property', tag: 'p' },
    { icon: 'icon-commercial', name: 'Commercial', count: '234 Property', tag: 'span' },
  ];

  return (
    <section className="flat-section flat-categories">
      <div className="container">
        <div className="box-title style-1 wow fadeInUp">
          <div className="text-subtitle text-primary">Property Type</div>
          <h3 className="title mt-4">Try Searching For</h3>
        </div>
        <div className="wrap-categories-sw wow fadeInUp" data-wow-delay=".2s">
          <div dir="ltr" className="swiper tf-sw-categories sw-over" data-preview="6" data-tablet="4" data-mobile-sm="3" data-mobile="2" data-space="15" data-space-md="30" data-space-lg="30">
            <div className="swiper-wrapper">
              {categories.map((category, index) => (
                <div key={index} className="swiper-slide">
                  <a href="#" className="homelengo-categories">
                    <div className="icon-box">
                      {category.tag === 'p' ? (
                        <p className={`icon ${category.icon}`}></p>
                      ) : (
                        <span className={`icon ${category.icon}`}></span>
                      )}
                    </div>
                    <div className="content text-center">
                      <h6>{category.name}</h6>
                      <p className="mt-4 text-variant-1">{category.count}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <div className="sw-pagination sw-pagination-category text-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;