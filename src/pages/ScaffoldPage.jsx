import { Link } from "react-router-dom";

export default function ScaffoldPage({ title, description, category, sourceFile }) {
  return (
    <section className="flat-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10">
            <div className="box-title text-center wow fadeInUp">
              <div className="text-subtitle text-primary">{category}</div>
              <h2 className="title mt-4">{title}</h2>
              <p className="text-variant-1 mt-12">{description}</p>
            </div>

            <div className="flat-account style-sidebar mt-32 wow fadeInUp" data-wow-delay="0.1s">
              <div className="title-box">
                <h4>Route Connected</h4>
              </div>
              <div className="box">
                <p className="text-variant-1">
                  This page route is now connected in the React app and mapped from the original
                  template page list.
                </p>
                <p className="text-variant-1 mt-12">
                  Source template: <strong>{sourceFile}</strong>
                </p>
              </div>
              <div className="box box-btn">
                <Link className="tf-btn primary w-100" to="/">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}