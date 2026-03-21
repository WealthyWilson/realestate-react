import { Link } from "react-router-dom";
import RecommendedProperties from "../components/RecommendedProperties";
import ServicesSection from "../components/ServicesSection";
import BenefitsSection from "../components/BenefitsSection";

function PageHero({ eyebrow, title, description }) {
  return (
    <section className="flat-section pb-0">
      <div className="container">
        <div className="box-title text-center wow fadeInUp">
          <div className="text-subtitle text-primary">{eyebrow}</div>
          <h2 className="title mt-4">{title}</h2>
          <p className="text-variant-1 mt-12">{description}</p>
        </div>
      </div>
    </section>
  );
}

function ListingHighlights({ variant }) {
  const layouts = {
    grid: "Grid-focused browsing with fast visual scanning and side filters.",
    list: "List-focused browsing with richer text context and quick comparisons.",
    topmap: "Map-first discovery for location-led home searches.",
    halfmap: "Balanced split view for simultaneous map and inventory browsing.",
  };

  return (
    <section className="flat-section pt-0">
      <div className="container">
        <div className="flat-account style-sidebar wow fadeInUp" data-wow-delay="0.1s">
          <div className="title-box">
            <h4>Layout Mode: {variant}</h4>
          </div>
          <div className="box">
            <p className="text-variant-1">{layouts[variant]}</p>
          </div>
          <div className="box box-btn" style={{ display: "grid", gap: "12px" }}>
            <Link className="tf-btn primary" to="/property-details">
              Open A Property
            </Link>
            <Link className="tf-btn btn-line" to="/add-property">
              Submit New Property
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardShell({ title, description, children }) {
  return (
    <>
      <PageHero eyebrow="Dashboard" title={title} description={description} />
      <section className="flat-section pt-0">
        <div className="container">
          <div className="flat-account style-sidebar wow fadeInUp" data-wow-delay="0.1s">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export function PropertyHalfMapGridPage() {
  return (
    <>
      <PageHero
        eyebrow="Listing"
        title="Property Half Map Grid"
        description="Browse available properties in a split layout designed for fast discovery and comparison."
      />
      <ListingHighlights variant="halfmap" />
      <RecommendedProperties />
    </>
  );
}

export function PropertyHalfMapListPage() {
  return (
    <>
      <PageHero
        eyebrow="Listing"
        title="Property Half Map List"
        description="Use the half-map list experience to review inventory details while keeping map context."
      />
      <ListingHighlights variant="halfmap" />
      <RecommendedProperties />
    </>
  );
}

export function TopmapGridPage() {
  return (
    <>
      <PageHero
        eyebrow="Listing"
        title="Find Topmap Grid"
        description="Start from location, then move into card-based inventory to shortlist faster."
      />
      <ListingHighlights variant="topmap" />
      <RecommendedProperties />
    </>
  );
}

export function TopmapListPage() {
  return (
    <>
      <PageHero
        eyebrow="Listing"
        title="Find Topmap List"
        description="Map-first discovery paired with list detail for intent-driven property searches."
      />
      <ListingHighlights variant="topmap" />
      <RecommendedProperties />
    </>
  );
}

export function SidebarGridPage() {
  return (
    <>
      <PageHero
        eyebrow="Listing"
        title="Find Sidebar Grid"
        description="Use filter-driven navigation with a clean grid to scan available homes by priority."
      />
      <ListingHighlights variant="grid" />
      <RecommendedProperties />
    </>
  );
}

export function SidebarListPage() {
  return (
    <>
      <PageHero
        eyebrow="Listing"
        title="Find Sidebar List"
        description="Use a detail-forward list experience when comparing amenities and neighborhood fit."
      />
      <ListingHighlights variant="list" />
      <RecommendedProperties />
    </>
  );
}

export function PropertyDetailsPage() {
  const features = [
    "3 Bedrooms",
    "2 Bathrooms",
    "Parking + Security",
    "1,150 sqft",
    "Nearby schools and clinics",
  ];

  return (
    <>
      <PageHero
        eyebrow="Property"
        title="Property Details"
        description="Explore key property facts, amenities, and neighborhood context before booking a tour."
      />
      <section className="flat-section pt-0">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <img src="/assets/images/home/apartment6.jpeg" alt="property" />
            </div>
            <div className="col-lg-5">
              <div className="flat-account style-sidebar">
                <div className="title-box">
                  <h4>ELWA, Rehab Community</h4>
                </div>
                <div className="box">
                  <p className="text-variant-1">A move-in ready property with strong rental potential and daily-living convenience.</p>
                  <ul style={{ marginTop: "12px" }}>
                    {features.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="box box-btn" style={{ display: "grid", gap: "12px" }}>
                  <button type="button" className="tf-btn primary">Book Tour</button>
                  <Link className="tf-btn btn-line" to="/message">Contact Agent</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function OurServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Pages"
        title="Our Services"
        description="We support buying, selling, renting, and portfolio growth with local market expertise."
      />
      <ServicesSection />
      <BenefitsSection />
    </>
  );
}

export function PricingPage() {
  const plans = [
    { name: "Starter", price: "$19", details: "Basic listing visibility and lead collection." },
    { name: "Growth", price: "$49", details: "Featured placement and priority support." },
    { name: "Agency", price: "$99", details: "Full dashboard controls and team seats." },
  ];

  return (
    <>
      <PageHero
        eyebrow="Pages"
        title="Pricing"
        description="Choose the plan that matches your listing volume and growth goals."
      />
      <section className="flat-section pt-0">
        <div className="container">
          <div className="tf-grid-layout md-col-3">
            {plans.map((plan) => (
              <div key={plan.name} className="flat-account style-sidebar wow fadeInUp">
                <div className="title-box">
                  <h4>{plan.name}</h4>
                </div>
                <div className="box">
                  <h3 className="title">{plan.price}<span className="text-variant-1">/month</span></h3>
                  <p className="text-variant-1 mt-12">{plan.details}</p>
                </div>
                <div className="box box-btn">
                  <button type="button" className="tf-btn primary w-100">Choose Plan</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function FaqPage() {
  const faqs = [
    {
      q: "How do I submit a property?",
      a: "Open Add Property, fill out the listing form, and submit for review.",
    },
    {
      q: "Can I save listings for later?",
      a: "Yes. Use the favorites workflow to keep properties in your dashboard.",
    },
    {
      q: "How do I contact an agent?",
      a: "Use the message page from dashboard or the property details contact action.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Pages"
        title="Frequently Asked Questions"
        description="Answers to common listing, account, and communication workflows."
      />
      <section className="flat-section pt-0">
        <div className="container">
          {faqs.map((item) => (
            <div key={item.q} className="flat-account style-sidebar mb-20">
              <div className="title-box"><h4>{item.q}</h4></div>
              <div className="box"><p className="text-variant-1">{item.a}</p></div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function PrivacyPolicyPage() {
  const sections = [
    "We collect profile and listing information required to deliver real-estate services.",
    "We use listing activity data to improve recommendations and marketplace quality.",
    "You can request profile updates or account removal through support channels.",
  ];

  return (
    <>
      <PageHero
        eyebrow="Pages"
        title="Privacy Policy"
        description="How platform data is collected, used, and protected across listing and account workflows."
      />
      <section className="flat-section pt-0">
        <div className="container">
          <div className="flat-account style-sidebar">
            <div className="title-box"><h4>Policy Summary</h4></div>
            <div className="box">
              <ul>
                {sections.map((section) => (
                  <li key={section}>{section}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function DashboardPage() {
  const stats = [
    { label: "Active Listings", value: "12" },
    { label: "New Messages", value: "5" },
    { label: "Saved Leads", value: "18" },
  ];

  return (
    <DashboardShell
      title="Dashboard"
      description="Track listing activity, communication, and account performance in one place."
    >
      <div className="title-box"><h4>Overview</h4></div>
      <div className="box tf-grid-layout md-col-3">
        {stats.map((item) => (
          <div key={item.label} className="box-service">
            <h5>{item.value}</h5>
            <p className="text-variant-1">{item.label}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}

export function MyPropertyPage() {
  const rows = [
    { name: "ELWA Family House", status: "Published", price: "$2,400" },
    { name: "Sinkor Apartment", status: "Review", price: "$1,800" },
  ];

  return (
    <DashboardShell
      title="My Properties"
      description="Manage inventory, edit listing details, and monitor listing status."
    >
      <div className="title-box"><h4>Listing Management</h4></div>
      <div className="box">
        {rows.map((row) => (
          <div key={row.name} className="d-flex justify-content-between align-items-center mb-12">
            <div>
              <h6>{row.name}</h6>
              <p className="text-variant-1">{row.status}</p>
            </div>
            <strong>{row.price}</strong>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}

export function MessagePage() {
  const messages = [
    { sender: "Maka Armah", text: "Is the apartment still available?" },
    { sender: "John Gibson", text: "Can we schedule a viewing for Saturday?" },
  ];

  return (
    <DashboardShell
      title="Message"
      description="Respond to buyer and tenant inquiries from one consolidated inbox."
    >
      <div className="title-box"><h4>Inbox</h4></div>
      <div className="box">
        {messages.map((message) => (
          <div key={message.sender + message.text} className="mb-20">
            <h6>{message.sender}</h6>
            <p className="text-variant-1">{message.text}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}

export function MyFavoritesPage() {
  const favorites = ["Paynesville Duplex", "King Gray Apartment", "Robertfield Bungalow"];

  return (
    <DashboardShell
      title="My Favorites"
      description="Quickly return to properties you have shortlisted for follow-up."
    >
      <div className="title-box"><h4>Saved Properties</h4></div>
      <div className="box">
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite}>{favorite}</li>
          ))}
        </ul>
      </div>
    </DashboardShell>
  );
}

export function ReviewsPage() {
  const reviews = [
    { name: "Chris Patt", score: "5.0", note: "Professional communication and fast support." },
    { name: "Esther Howard", score: "4.8", note: "Property details were accurate and helpful." },
  ];

  return (
    <DashboardShell
      title="Reviews"
      description="View client feedback and use it to improve listing quality and response time."
    >
      <div className="title-box"><h4>Latest Feedback</h4></div>
      <div className="box">
        {reviews.map((review) => (
          <div key={review.name} className="mb-20">
            <h6>{review.name} <span className="text-primary">{review.score}</span></h6>
            <p className="text-variant-1">{review.note}</p>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}

export function MyProfilePage() {
  return (
    <DashboardShell
      title="My Profile"
      description="Maintain your personal details, contact information, and account preferences."
    >
      <div className="title-box"><h4>Profile Settings</h4></div>
      <div className="box">
        <div className="mb-12"><strong>Name:</strong> Easy Real Estate</div>
        <div className="mb-12"><strong>Email:</strong> themesflat@gmail.com</div>
        <div><strong>Phone:</strong> 1-333-345-6868</div>
      </div>
      <div className="box box-btn">
        <button type="button" className="tf-btn primary">Update Profile</button>
      </div>
    </DashboardShell>
  );
}

export function AddPropertyPage() {
  return (
    <>
      <PageHero
        eyebrow="Dashboard"
        title="Add Property"
        description="Create a new listing with key information, pricing, and location details."
      />
      <section className="flat-section pt-0">
        <div className="container">
          <div className="flat-account style-sidebar">
            <div className="title-box"><h4>Listing Form</h4></div>
            <form className="box">
              <fieldset className="box-fieldset mb-16">
                <label>Property Title</label>
                <input type="text" className="form-control" placeholder="e.g. 3 Bedroom House in ELWA" />
              </fieldset>
              <fieldset className="box-fieldset mb-16">
                <label>Location</label>
                <input type="text" className="form-control" placeholder="City, community, and street" />
              </fieldset>
              <fieldset className="box-fieldset mb-16">
                <label>Price</label>
                <input type="text" className="form-control" placeholder="e.g. $2,400" />
              </fieldset>
              <fieldset className="box-fieldset">
                <label>Description</label>
                <textarea className="form-control" rows="4" placeholder="Describe features and neighborhood highlights" />
              </fieldset>
              <div className="box-btn mt-20">
                <button type="submit" className="tf-btn primary">Submit Property</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}