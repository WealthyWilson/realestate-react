import React, { useEffect } from 'react';

const LatestNewSection = () => {
  useEffect(() => {
    if (window.Swiper) {
      new window.Swiper('.tf-sw-latest', {
        slidesPerView: 3,
        spaceBetween: 15,
        pagination: {
          el: '.sw-pagination-latest',
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
    }
  }, []);

  const blogPosts = [
    {
      id: 1,
      image: '/assets/images/blog/blog-5.jpg',
      date: 'January 28, 2024',
      author: 'Jerome Bell',
      category: 'Furniture',
      title: 'Building gains into housing stocks and how to trade the sector',
      description: 'The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...'
    },
    {
      id: 2,
      image: '/assets/images/blog/blog-7.jpg',
      date: 'January 28, 2024',
      author: 'Jerome Bell',
      category: 'Furniture',
      title: 'Building gains into housing stocks and how to trade the sector',
      description: 'The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...'
    },
    {
      id: 3,
      image: '/assets/images/blog/blog-9.jpg',
      date: 'January 28, 2024',
      author: 'Jerome Bell',
      category: 'Furniture',
      title: 'Building gains into housing stocks and how to trade the sector',
      description: 'The average contract interest rate for 30-year fixed-rate mortgages with conforming loan balances...'
    }
  ];

  return (
    <section className="flat-section">
      <div className="container">
        <div className="box-title text-center wow fadeInUp">
          <div className="text-subtitle text-primary">Latest New</div>
          <h3 className="title mt-4">From Our Blog</h3>
        </div>
        <div dir="ltr" className="swiper tf-sw-latest" data-preview="3" data-tablet="2" data-mobile-sm="2" data-mobile="1" data-space-lg="30" data-space-md="15" data-space="15">
          <div className="swiper-wrapper wow fadeInUp" data-wow-delay=".2s">
            {blogPosts.map((post) => (
              <div key={post.id} className="swiper-slide">
                <a href="/blog-detail" className="flat-blog-item hover-img">
                  <div className="img-style">
                    <img className="lazyload" data-src={post.image} src={post.image} alt="img-blog" />
                    <span className="date-post">{post.date}</span>
                  </div>
                  <div className="content-box">
                    <div className="post-author">
                      <span className="fw-6">{post.author}</span>
                      <span>{post.category}</span>
                    </div>
                    <h5 className="title link">{post.title}</h5>
                    <p className="description">{post.description}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="sw-pagination sw-pagination-latest text-center"></div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewSection;