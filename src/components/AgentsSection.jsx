import React from 'react';

const AgentsSection = () => {
  const agents = [
    {
      image: '/assets/images/agents/agent-5.jpg',
      name: 'Maka Armah',
      role: 'Administrative Staff',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      image: '/assets/images/agents/agent-6.jpg',
      name: 'Ownes',
      role: 'Administrative Staff',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      image: '/assets/images/agents/agent-7.jpg',
      name: 'John Gibson',
      role: 'Administrative Staff',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      image: '/assets/images/agents/agent-8.jpg',
      name: 'Emmanuel Sims',
      role: 'Administrative Staff',
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    }
  ];

  return (
    <section className="flat-section flat-agents">
      <div className="container">
        <div className="box-title text-center wow fadeInUp">
          <div className="text-subtitle text-primary">Our Teams</div>
          <h3 className="title mt-4">Meet Our Agents</h3>
        </div>
        <div dir="ltr" className="swiper tf-sw-mobile-1" data-screen="575" data-preview="1" data-space="15">
          <div className="tf-layout-mobile-sm xl-col-4 sm-col-2 swiper-wrapper">
            {agents.map((agent, index) => (
              <div key={index} className="swiper-slide">
                <div className="box-agent hover-img wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                  <a href="#" className="box-img img-style">
                    <img className="lazyload" data-src={agent.image} src={agent.image} alt={`image-agent-${index + 1}`} />
                    <ul className="agent-social">
                      <li><span className="icon icon-facebook"></span></li>
                      <li><span className="icon icon-x"></span></li>
                      <li><span className="icon icon-linkedin"></span></li>
                      <li><span className="icon icon-instargram"></span></li>
                    </ul>
                  </a>
                  <div className="content">
                    <div className="info">
                      <h5><a className="link" href="#">{agent.name}</a></h5>
                      <p className="text-variant-1">{agent.role}</p>
                    </div>
                    <div className="box-icon">
                      <span className="icon icon-phone"></span>
                      <span className="icon icon-mail"></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="sw-pagination sw-pagination-mb-1 text-center d-sm-none d-block"></div>
        </div>
        <p className="text-center desc body-2 text-variant-3">
          Become an agent and get the commission you deserve. <a href="/contact" className="text-primary"> Contact us</a>
        </p>
      </div>
    </section>
  );
};

export default AgentsSection;