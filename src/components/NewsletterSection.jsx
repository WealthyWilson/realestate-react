import React from 'react';

const NewsletterSection = () => {
  return (
    <section className="flat-section">
      <div className="container">
        <div className="box-title text-center wow fadeInUp">
          <h3 className="title mt-4">Join our newsletter</h3>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="tf-subscribe">
              <p className="text-center mb-4">
                Your Weekly/Monthly Dose of Knowledge and Inspiration
              </p>
              <form className="mt-12" id="subscribe-form" action="#" method="post" accept-charset="utf-8" data-mailchimp="true">
                <div id="subscribe-content">
                  <input type="email" name="email-form" id="subscribe-email" placeholder="Your email address" />
                  <button type="button" id="subscribe-button" className="button-subscribe">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.00044 9.99935L2.72461 2.60352C8.16867 4.18685 13.3024 6.68806 17.9046 9.99935C13.3027 13.3106 8.16921 15.8118 2.72544 17.3952L5.00044 9.99935ZM5.00044 9.99935H11.2504" stroke="#1563DF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
                <div id="subscribe-msg"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;