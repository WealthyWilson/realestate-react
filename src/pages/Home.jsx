import RecommendedProperties from '../components/RecommendedProperties';
import BenefitsSection from '../components/BenefitsSection';
import LocationSection from '../components/LocationSection';
import AgentsSection from '../components/AgentsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import LatestNewSection from '../components/LatestNewSection';
import PartnerSection from '../components/PartnerSection';
import Categories from '../components/Categories';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTab, setActiveTab] = useState('forRent');
  const [activeHeadlineWord, setActiveHeadlineWord] = useState(0);
  const headlineWrapperRef = useRef(null);
  const searchFormRef = useRef(null);

  useEffect(() => {
    if (window.$ && window.$.fn.niceSelect) {
      const selectElements = window.$('select.nice-select');

      if (selectElements.next('.nice-select').length) {
        selectElements.niceSelect('destroy');
      }

      selectElements.niceSelect();
    }

    if (window.$ && window.$.fn.slider) {
      if (window.$('#slider-range').hasClass('ui-slider')) {
        window.$('#slider-range').slider('destroy');
      }

      window.$('#slider-range').slider({
        range: true,
        min: 0,
        max: 1000000,
        values: [100000, 500000],
        slide: function(event, ui) {
          window.$('#slider-range-value1').text('$' + ui.values[0]);
          window.$('#slider-range-value2').text('$' + ui.values[1]);
          window.$("input[name='min-value']").val(ui.values[0]);
          window.$("input[name='max-value']").val(ui.values[1]);
        }
      });
      window.$('#slider-range-value1').text('$' + window.$('#slider-range').slider('values', 0));
      window.$('#slider-range-value2').text('$' + window.$('#slider-range').slider('values', 1));

      if (window.$('#slider-range2').hasClass('ui-slider')) {
        window.$('#slider-range2').slider('destroy');
      }

      window.$('#slider-range2').slider({
        range: true,
        min: 0,
        max: 10000,
        values: [500, 2000],
        slide: function(event, ui) {
          window.$('#slider-range-value01').text(ui.values[0] + ' sqft');
          window.$('#slider-range-value02').text(ui.values[1] + ' sqft');
          window.$("input[name='min-value2']").val(ui.values[0]);
          window.$("input[name='max-value2']").val(ui.values[1]);
        }
      });
      window.$('#slider-range-value01').text(window.$('#slider-range2').slider('values', 0) + ' sqft');
      window.$('#slider-range-value02').text(window.$('#slider-range2').slider('values', 1) + ' sqft');
    }

    const handleOutsideSearchClick = (event) => {
      if (!searchFormRef.current) {
        return;
      }

      if (!searchFormRef.current.contains(event.target) && !event.target.closest('.pull-right')) {
        setShowAdvanced(false);
      }
    };

    document.addEventListener('click', handleOutsideSearchClick);

    if (window.Swiper) {
      const homeSliderElement = document.querySelector('.slider-sw-home2');
      if (homeSliderElement?.swiper) {
        homeSliderElement.swiper.destroy(true, true);
      }

      new window.Swiper('.slider-sw-home2', {
        spaceBetween: 0,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        speed: 2000,
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        },
      });

      const categoriesSliderElement = document.querySelector('.tf-sw-categories');
      if (categoriesSliderElement?.swiper) {
        categoriesSliderElement.swiper.destroy(true, true);
      }

      new window.Swiper('.tf-sw-categories', {
        slidesPerView: 6,
        spaceBetween: 15,
        pagination: {
          el: '.sw-pagination-category',
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        },
      });
    }

    if (window.WOW) {
      new window.WOW().init();
    }

    return () => {
      document.removeEventListener('click', handleOutsideSearchClick);
    };
  }, []);

  useEffect(() => {
    if (!headlineWrapperRef.current) {
      return undefined;
    }

    const updateHeadlineWidth = () => {
      const words = headlineWrapperRef.current.querySelectorAll('.item-text');
      const maxWidth = Math.max(...Array.from(words).map((word) => word.scrollWidth), 0);

      if (maxWidth > 0) {
        headlineWrapperRef.current.style.width = `${maxWidth + 10}px`;
      }
    };

    updateHeadlineWidth();
    window.addEventListener('resize', updateHeadlineWidth);

    const wordRotation = window.setInterval(() => {
      setActiveHeadlineWord((currentWord) => (currentWord + 1) % 2);
    }, 2500);

    return () => {
      window.removeEventListener('resize', updateHeadlineWidth);
      window.clearInterval(wordRotation);
    };
  }, []);

  const toggleAdvanced = () => {
    setShowAdvanced((currentState) => !currentState);
  };

  return (
    <>
      <section className="flat-slider home-2 bg-primary-new">
        <div className="container relative">
          <div className="row">
            <div className="col-xl-10">
              <div className="slider-content">
                <div className="heading">
                  <h1 className="fw-8 title animationtext clip">
                    Find A Home That
                    <br />
                    <span ref={headlineWrapperRef} className="tf-text s1 cd-words-wrapper">
                      <span className={`item-text ${activeHeadlineWord === 0 ? 'is-visible' : 'is-hidden'}`}>Fits Perfectly</span>
                      <span className={`item-text ${activeHeadlineWord === 1 ? 'is-visible' : 'is-hidden'}`}>Fits Dream Home</span>
                    </span>
                  </h1>
                  <p className="subtitle body-2 wow fadeInUp" data-wow-delay=".2s">
                    We are a real estate agency that will help you find the best <br />
                    residence you dream of.
                  </p>
                </div>
                <div className="flat-tab flat-tab-form">
                  <ul className="nav-tab-form style-2" role="tablist">
                    <li className="nav-tab-item" role="presentation">
                      <a
                        href="#forRent"
                        className={`nav-link-item ${activeTab === 'forRent' ? 'active' : ''}`}
                        data-bs-toggle="tab"
                        onClick={(event) => {
                          event.preventDefault();
                          setActiveTab('forRent');
                        }}
                      >
                        For Rent
                      </a>
                    </li>
                    <li className="nav-tab-item" role="presentation">
                      <a
                        href="#forSale"
                        className={`nav-link-item ${activeTab === 'forSale' ? 'active' : ''}`}
                        data-bs-toggle="tab"
                        onClick={(event) => {
                          event.preventDefault();
                          setActiveTab('forSale');
                        }}
                      >
                        For Sale
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div id={activeTab} className="tab-pane fade active show" role="tabpanel">
                      <div className="form-sl">
                        <form method="post">
                          <div className="wd-find-select style-2">
                            <div className="inner-group">
                              <div className="form-group-1 search-form form-style">
                                <label>Type</label>
                                <div className="group-select">
                                  <select className="nice-select" defaultValue="all" name="propertyType">
                                    <option value="all">All</option>
                                    <option value="villa">Villa</option>
                                    <option value="studio">Studio</option>
                                    <option value="office">Office</option>
                                    <option value="house">House</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-group-2 form-style">
                                <label>Location</label>
                                <div className="group-ip">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Location"
                                    name="s"
                                    title="Search for"
                                    required
                                  />
                                  <a href="#" className="icon icon-location" />
                                </div>
                              </div>
                              <div className="form-group-3 form-style">
                                <label>Keyword</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Search Keyword."
                                  name="s"
                                  title="Search for"
                                  required
                                />
                              </div>
                            </div>
                            <div className="box-btn-advanced">
                              <div className="form-group-4 box-filter">
                                <button
                                  type="button"
                                  className="tf-btn btn-line filter-advanced pull-right"
                                  onClick={toggleAdvanced}
                                  aria-expanded={showAdvanced}
                                >
                                  <span className="text-1">Advanced</span>
                                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M5.5 12.375V3.4375M5.5 12.375C5.86467 12.375 6.21441 12.5199 6.47227 12.7777C6.73013 13.0356 6.875 13.3853 6.875 13.75C6.875 14.1147 6.73013 14.4644 6.47227 14.7223C6.21441 14.9801 5.86467 15.125 5.5 15.125M5.5 12.375C5.13533 12.375 4.78559 12.5199 4.52773 12.7777C4.26987 13.0356 4.125 13.3853 4.125 13.75C4.125 14.1147 4.26987 14.4644 4.52773 14.7223C4.78559 14.9801 5.13533 15.125 5.5 15.125M5.5 15.125V18.5625M16.5 12.375V3.4375M16.5 12.375C16.8647 12.375 17.2144 12.5199 17.4723 12.7777C17.7301 13.0356 17.875 13.3853 17.875 13.75C17.875 14.1147 17.7301 14.4644 17.4723 14.7223C17.2144 14.9801 16.8647 15.125 16.5 15.125M16.5 12.375C16.1353 12.375 15.7856 12.5199 15.5277 12.7777C15.2699 13.0356 15.125 13.3853 15.125 13.75C15.125 14.1147 15.2699 14.4644 15.5277 14.7223C15.7856 14.9801 16.1353 15.125 16.5 15.125M16.5 15.125V18.5625M11 6.875V3.4375M11 6.875C11.3647 6.875 11.7144 7.01987 11.9723 7.27773C12.2301 7.53559 12.375 7.88533 12.375 8.25C12.375 8.61467 12.2301 8.96441 11.9723 9.22227C11.7144 9.48013 11.3647 9.625 11 9.625M11 6.875C10.6353 6.875 10.2856 7.01987 10.0277 7.27773C9.76987 7.53559 9.625 7.88533 9.625 8.25C9.625 8.61467 9.76987 8.96441 10.0277 9.22227C10.2856 9.48013 10.6353 9.625 11 9.625M11 9.625V18.5625"
                                      stroke="#161E2D"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </button>
                              </div>
                              <button type="submit" className="tf-btn btn-search primary">
                                Search <i className="icon icon-search" />
                              </button>
                            </div>
                          </div>
                          <div ref={searchFormRef} className={`wd-search-form ${showAdvanced ? 'show' : ''}`}>
                              <div className="grid-2 group-box group-price">
                                <div className="widget-price">
                                  <div className="box-title-price">
                                    <span className="title-price fw-6">Price:</span>
                                    <div className="caption-price">
                                      <span id="slider-range-value1" className="fw-6" />
                                      <span>-</span>
                                      <span id="slider-range-value2" className="fw-6" />
                                    </div>
                                  </div>
                                  <div id="slider-range" />
                                  <div className="slider-labels">
                                    <div>
                                      <input type="hidden" name="min-value" />
                                      <input type="hidden" name="max-value" />
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-price">
                                  <div className="box-title-price">
                                    <span className="title-price fw-6">Size:</span>
                                    <div className="caption-price">
                                      <span id="slider-range-value01" className="fw-7" />
                                      <span>-</span>
                                      <span id="slider-range-value02" className="fw-7" />
                                    </div>
                                  </div>
                                  <div id="slider-range2" />
                                  <div className="slider-labels">
                                    <div>
                                      <input type="hidden" name="min-value2" />
                                      <input type="hidden" name="max-value2" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="grid-2 group-box">
                                <div className="group-select grid-2">
                                  <div className="box-select">
                                    <label className="title-select fw-6">Rooms</label>
                                    <select className="nice-select" defaultValue="2" name="rooms">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                    </select>
                                  </div>
                                  <div className="box-select">
                                    <label className="title-select fw-6">Bathrooms</label>
                                    <select className="nice-select" defaultValue="2" name="bathrooms">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="group-select grid-2">
                                  <div className="box-select">
                                    <label className="title-select fw-6">Bedrooms</label>
                                    <select className="nice-select" defaultValue="2" name="bedrooms">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                    </select>
                                  </div>
                                  <div className="box-select">
                                    <label className="title-select fw-6">Type</label>
                                    <select className="nice-select" defaultValue="2" name="listingTypeAdvanced">
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10">10</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div className="group-checkbox">
                                <div className="text-1 text-black-2">Amenities:</div>
                                <div className="group-amenities grid-6">
                                  <div className="box-amenities">
                                    <fieldset className="amenities-item">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb1" defaultChecked />
                                      <label htmlFor="cb1" className="text-cb-amenities">Air Condition</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb2" />
                                      <label htmlFor="cb2" className="text-cb-amenities">Cable TV</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb3" />
                                      <label htmlFor="cb3" className="text-cb-amenities">Ceiling Height</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb4" />
                                      <label htmlFor="cb4" className="text-cb-amenities">Fireplace</label>
                                    </fieldset>
                                  </div>
                                  <div className="box-amenities">
                                    <fieldset className="amenities-item">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb5" />
                                      <label htmlFor="cb5" className="text-cb-amenities">Disabled Access</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb6" defaultChecked />
                                      <label htmlFor="cb6" className="text-cb-amenities">Elevator</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb7" />
                                      <label htmlFor="cb7" className="text-cb-amenities">Fence</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb8" />
                                      <label htmlFor="cb8" className="text-cb-amenities">Garden</label>
                                    </fieldset>
                                  </div>
                                  <div className="box-amenities">
                                    <fieldset className="amenities-item">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb9" defaultChecked />
                                      <label htmlFor="cb9" className="text-cb-amenities">Floor</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb10" />
                                      <label htmlFor="cb10" className="text-cb-amenities">Furnishing</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb11" defaultChecked />
                                      <label htmlFor="cb11" className="text-cb-amenities">Garage</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb12" />
                                      <label htmlFor="cb12" className="text-cb-amenities">Pet Friendly</label>
                                    </fieldset>
                                  </div>
                                  <div className="box-amenities">
                                    <fieldset className="amenities-item">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb13" />
                                      <label htmlFor="cb13" className="text-cb-amenities">Heating</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb14" />
                                      <label htmlFor="cb14" className="text-cb-amenities">Intercom</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb15" />
                                      <label htmlFor="cb15" className="text-cb-amenities">Parking</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb16" />
                                      <label htmlFor="cb16" className="text-cb-amenities">WiFi</label>
                                    </fieldset>
                                  </div>
                                  <div className="box-amenities">
                                    <fieldset className="amenities-item">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb17" />
                                      <label htmlFor="cb17" className="text-cb-amenities">Renovation</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb18" />
                                      <label htmlFor="cb18" className="text-cb-amenities">Security</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb19" />
                                      <label htmlFor="cb19" className="text-cb-amenities">Swimming Pool</label>
                                    </fieldset>
                                  </div>
                                  <div className="box-amenities">
                                    <fieldset className="amenities-item">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb20" />
                                      <label htmlFor="cb20" className="text-cb-amenities">Window Type</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb21" />
                                      <label htmlFor="cb21" className="text-cb-amenities">Search property</label>
                                    </fieldset>
                                    <fieldset className="amenities-item mt-16">
                                      <input type="checkbox" className="tf-checkbox style-1" id="cb22" />
                                      <label htmlFor="cb22" className="text-cb-amenities">Construction Year</label>
                                    </fieldset>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wrap-search-link">
                  <p className="body-2">What are you looking for:</p>
                  <div className="categories-list">
                    <a href="#"><i className="icon icon-house-fill" />Houses</a>
                    <a href="#"><i className="icon icon-villa-fill" />Villa</a>
                    <a href="#"><i className="icon icon-office-fill" />Office</a>
                    <a href="#"><i className="icon icon-apartment" />Apartments</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="img-banner-left">
          <img src="/assets/images/slider/apartment1.jpeg" alt="img" />
        </div>
        <div className="img-banner-right">
          <div dir="ltr" className="swiper slider-sw-home2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="slider-home2 img-animation wow">
                  <img src="/assets/images/slider/apartment2.jpeg" alt="images" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-home2">
                  <img src="/assets/images/slider/apartment3.jpeg" alt="images" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="slider-home2">
                  <img src="/assets/images/slider/apartment5.jpeg" alt="images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Categories />
      <RecommendedProperties />
      <BenefitsSection />
      <LocationSection />
      <AgentsSection />
      <TestimonialsSection />
      <LatestNewSection />
      <PartnerSection />
    </>
  );
}
