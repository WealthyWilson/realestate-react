import React from 'react';

const PROPERTY_DETAILS_HREF = '/property-details';
const ALL_PROPERTIES_HREF = '/sidebar-grid';

const tabs = [
  { id: 'viewAll', label: 'View All' },
  { id: 'apartment', label: 'Apartment', isActive: true },
  { id: 'house', label: 'House' },
  { id: 'office', label: 'Office' },
];

const properties = {
  viewAll: [
    {
      id: 1,
      image: '/assets/images/home/apartment6.jpeg',
      type: 'House',
      location: 'ELWA, Rehab Community, Manitamba Road',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 3,
      baths: 2,
      sqft: 1150,
      price: '$2400,00',
      agent: 'John Gibson',
      agentImage: '/assets/images/avatar/apartment6.jpeg',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 2,
      image: '/assets/images/home/apartment9.jpeg',
      type: 'House',
      location: 'Paynesville, Zubah Town, Duport Road',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 2,
      baths: 2,
      sqft: 1150,
      price: '$1800,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/apartment9.jpeg',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 3,
      image: '/assets/images/home/apartment3.jpeg',
      type: 'House',
      location: 'Rehab Community, Manitamba, Cooper Farm',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 2,
      baths: 1,
      sqft: 1150,
      price: '$1500,00',
      agent: 'Ownes',
      agentImage: '/assets/images/avatar/apartment3.jpeg',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 4,
      image: '/assets/images/home/apartment7.jpeg',
      type: 'House',
      location: 'Gbar Gbar Town, RobertField, HighWay',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 3,
      baths: 2,
      sqft: 1150,
      price: '$1500,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png4.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 5,
      image: '/assets/images/home/apartment11.jpeg',
      type: 'House',
      location: 'King Gray, Paynesville, Monrovia',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 3,
      baths: 2,
      sqft: 1150,
      price: '$1500,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/apartment11.jpeg',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 6,
      image: '/assets/images/home/unfinished_house12.jpeg',
      type: 'House',
      location: 'ELWA, Rehab Community, Manitamba Road',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 3,
      baths: 2,
      sqft: 1150,
      price: '$2400,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/unfinished_house12.jpeg',
      flags: ['Featured', 'For Rent'],
    },
  ],
  apartment: [
    {
      id: 1,
      image: '/assets/images/home/Bedroom.jpeg',
      type: 'House',
      location: 'Duazon , RobertField, HighWay',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 2,
      baths: 2,
      sqft: 1150,
      price: '$2400,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png1.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 2,
      image: '/assets/images/home/Bedroom1.jpeg',
      type: 'House',
      location: '10th street Sinkor Monrovia',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 2,
      baths: 1,
      sqft: 1150,
      price: '$3300,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png2.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 3,
      image: '/assets/images/home/Bedroom3.png',
      type: 'House',
      location: 'VOA, RobertField, HighWay',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 2,
      baths: 1,
      sqft: 1150,
      price: '$1800,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png3.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 4,
      image: '/assets/images/home/Bedroom7.jpeg',
      type: 'House',
      location: 'ELWA, Rehab Community, Junction',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 2,
      baths: 2,
      sqft: 1150,
      price: '$2400,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png4.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 5,
      image: '/assets/images/home/Bedroom11.jpeg',
      type: 'House',
      location: 'Duport Road, Paynesville',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 2,
      baths: 2,
      sqft: 1150,
      price: '$3600,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png5.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 6,
      image: '/assets/images/home/Bedroom8.jpeg',
      type: 'House',
      location: 'GSA Road, Paynesville',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 3,
      baths: 2,
      sqft: 1150,
      price: '$3600,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png6.png',
      flags: ['Featured', 'For Rent'],
    },
  ],
  house: [
    {
      id: 1,
      image: '/assets/images/home/apartment6.jpeg',
      type: 'House',
      location: 'ELWA, Rehab Community, Manitamba Road',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 3,
      baths: 2,
      sqft: 1150,
      price: '$2400,00',
      agent: 'John Gibson',
      agentImage: '/assets/images/avatar/apartment6.jpeg',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 2,
      image: '/assets/images/home/apartment9.jpeg',
      type: 'House',
      location: 'Paynesville, Zubah Town, Duport Road',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 2,
      baths: 2,
      sqft: 1150,
      price: '$1800,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/apartment9.jpeg',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 3,
      image: '/assets/images/home/apartment3.jpeg',
      type: 'House',
      location: 'Rehab Community, Manitamba, Cooper Farm',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 2,
      baths: 1,
      sqft: 1150,
      price: '$1500,00',
      agent: 'Ownes',
      agentImage: '/assets/images/avatar/apartment3.jpeg',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 4,
      image: '/assets/images/home/apartment7.jpeg',
      type: 'House',
      location: 'Gbar Gbar Town, RobertField, HighWay',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 3,
      baths: 2,
      sqft: 1150,
      price: '$1500,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png4.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 5,
      image: '/assets/images/home/home_1.jpeg',
      type: 'House',
      location: 'King Gray, Paynesville, Monrovia',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 3,
      baths: 2,
      sqft: 1150,
      price: '$1500,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/apartment11.jpeg',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 6,
      image: '/assets/images/home/unfinished_house12.jpeg',
      type: 'House',
      location: 'ELWA, Rehab Community, Manitamba Road',
      primaryMetricLabel: 'Beds',
      primaryMetricValue: 3,
      baths: 2,
      sqft: 1150,
      price: '$2400,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/unfinished_house12.jpeg',
      flags: ['Featured', 'For Rent'],
    },
  ],
  office: [
    {
      id: 1,
      image: '/assets/images/home/office.png',
      type: 'Office',
      location: '5th Street, Sinkor, Monrovia',
      primaryMetricLabel: 'Rooms',
      primaryMetricValue: 2,
      baths: 2,
      sqft: 1150,
      price: '$12000,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png1.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 2,
      image: '/assets/images/home/office1.png',
      type: 'Office',
      location: 'GSA Road, Paynesville',
      primaryMetricLabel: 'Room',
      primaryMetricValue: 1,
      baths: 2,
      sqft: 1150,
      price: '$6000,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png2.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 3,
      image: '/assets/images/home/office2.jpeg',
      type: 'Office',
      location: 'ELWA Junction, Paynesville',
      primaryMetricLabel: 'Room',
      primaryMetricValue: 1,
      baths: 2,
      sqft: 1150,
      price: '$7250,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png3.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 4,
      image: '/assets/images/home/guest_house.jpeg',
      type: 'Office',
      location: '5th Street, Sinkor',
      primaryMetricLabel: 'Rooms',
      primaryMetricValue: 2,
      baths: 2,
      sqft: 1150,
      price: '$20000,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png4.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 5,
      image: '/assets/images/home/office3.jpeg',
      type: 'Office',
      location: 'Congo Town, Tubman Boulevard',
      primaryMetricLabel: 'Rooms',
      primaryMetricValue: 1,
      baths: 2,
      sqft: 1150,
      price: '$15000,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png5.png',
      flags: ['Featured', 'For Rent'],
    },
    {
      id: 6,
      image: '/assets/images/home/Bedroom1.jpeg',
      type: 'Office',
      location: 'Duport Road Junction',
      primaryMetricLabel: 'Rooms',
      primaryMetricValue: 2,
      baths: 2,
      sqft: 1150,
      price: '$14000,00',
      agent: 'Maka Armah',
      agentImage: '/assets/images/avatar/avt-png6.png',
      flags: ['Featured', 'For Rent'],
    },
  ],
};

function PropertyCard({ property }) {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="homelengo-box">
        <div className="archive-top">
          <a href={PROPERTY_DETAILS_HREF} className="images-group">
            <div className="images-style">
              <img className="lazyload" data-src={property.image} src={property.image} alt={property.type} />
            </div>
            <div className="top">
              <ul className="d-flex gap-6">
                {property.flags.map((flag) => (
                  <li key={`${property.id}-${flag}`} className={`flag-tag ${flag === 'Featured' ? 'primary' : 'style-1'}`}>
                    {flag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bottom">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 7C10 7.53043 9.78929 8.03914 9.41421 8.41421C9.03914 8.78929 8.53043 9 8 9C7.46957 9 6.96086 8.78929 6.58579 8.41421C6.21071 8.03914 6 7.53043 6 7C6 6.46957 6.21071 5.96086 6.58579 5.58579C6.96086 5.21071 7.46957 5 8 5C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 7C13 11.7613 8 14.5 8 14.5C8 14.5 3 11.7613 3 7C3 5.67392 3.52678 4.40215 4.46447 3.46447C5.40215 2.52678 6.67392 2 8 2C9.32608 2 10.5979 2.52678 11.5355 3.46447C12.4732 4.40215 13 5.67392 13 7Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {property.location}
            </div>
          </a>
        </div>
        <div className="archive-bottom">
          <div className="content-top">
            <h6 className="text-capitalize">
              <a href={PROPERTY_DETAILS_HREF} className="link">{property.type}</a>
            </h6>
            <ul className="meta-list">
              <li className="item">
                <i className="icon icon-bed"></i>
                <span className="text-variant-1">{property.primaryMetricLabel}:</span>
                <span className="fw-6">{property.primaryMetricValue}</span>
              </li>
              <li className="item">
                <i className="icon icon-bath"></i>
                <span className="text-variant-1">Baths:</span>
                <span className="fw-6">{property.baths}</span>
              </li>
              <li className="item">
                <i className="icon icon-sqft"></i>
                <span className="text-variant-1">Sqft:</span>
                <span className="fw-6">{property.sqft}</span>
              </li>
            </ul>
          </div>
          <div className="content-bottom">
            <div className="d-flex gap-8 align-items-center">
              <div className="avatar avt-40 round">
                <img src={property.agentImage} alt={property.agent} />
              </div>
              <span>{property.agent}</span>
            </div>
            <h6 className="price">{property.price}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabPane({ id, isActive = false, items }) {
  return (
    <div className={`tab-pane${isActive ? ' active show' : ''}`} id={id} role="tabpanel">
      <div className="row">
        {items.map((property) => (
          <PropertyCard key={`${id}-${property.id}`} property={property} />
        ))}
      </div>
      <div className="text-center">
        <a href={ALL_PROPERTIES_HREF} className="tf-btn btn-view primary size-1 hover-btn-view">
          View All Properties <span className="icon icon-arrow-right2"></span>
        </a>
      </div>
    </div>
  );
}

export default function RecommendedProperties() {
  return (
    <section className="flat-section flat-recommended pt-0">
      <div className="container">
        <div className="box-title text-center wow fadeInUp">
          <div className="text-subtitle text-primary">Featured Properties</div>
          <h3 className="title mt-4">
            Discover Easyrealestate's Finest Properties
            <br />
            for Your Dream Home
          </h3>
        </div>
        <div className="flat-tab-recommended flat-animate-tab wow fadeInUp" data-wow-delay=".2s">
          <ul className="nav-tab-recommended justify-content-md-center" role="tablist">
            {tabs.map((tab) => (
              <li key={tab.id} className="nav-tab-item" role="presentation">
                <a href={`#${tab.id}`} className={`nav-link-item${tab.isActive ? ' active' : ''}`} data-bs-toggle="tab">
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {tabs.map((tab) => (
              <TabPane key={tab.id} id={tab.id} isActive={Boolean(tab.isActive)} items={properties[tab.id]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}