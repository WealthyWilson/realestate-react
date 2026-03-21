import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import ScaffoldPage from "./pages/ScaffoldPage";
import {
  AddPropertyPage,
  DashboardPage,
  FaqPage,
  MessagePage,
  MyFavoritesPage,
  MyProfilePage,
  MyPropertyPage,
  OurServicePage,
  PricingPage,
  PrivacyPolicyPage,
  PropertyDetailsPage,
  PropertyHalfMapGridPage,
  PropertyHalfMapListPage,
  ReviewsPage,
  SidebarGridPage,
  SidebarListPage,
  TopmapGridPage,
  TopmapListPage,
} from "./pages/HeaderLinkedPages";

const scaffoldedPages = [
  {
    path: "blog",
    title: "Blog",
    category: "Content",
    description: "Scaffolded route for the main blog index page from the original template.",
    sourceFile: "blog.html",
  },
  {
    path: "blog-grid",
    title: "Blog Grid",
    category: "Content",
    description: "Scaffolded route for the blog grid layout from the original template.",
    sourceFile: "blog-grid.html",
  },
  {
    path: "blog-detail",
    title: "Blog Detail",
    category: "Content",
    description: "Scaffolded route for individual blog article pages from the original template.",
    sourceFile: "blog-detail.html",
  },
];

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="add-property" element={<AddPropertyPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="message" element={<MessagePage />} />
          <Route path="my-favorites" element={<MyFavoritesPage />} />
          <Route path="my-profile" element={<MyProfilePage />} />
          <Route path="my-property" element={<MyPropertyPage />} />
          <Route path="our-service" element={<OurServicePage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="property-details" element={<PropertyDetailsPage />} />
          <Route path="property-halfmap-grid" element={<PropertyHalfMapGridPage />} />
          <Route path="property-halfmap-list" element={<PropertyHalfMapListPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="sidebar-grid" element={<SidebarGridPage />} />
          <Route path="sidebar-list" element={<SidebarListPage />} />
          <Route path="topmap-grid" element={<TopmapGridPage />} />
          <Route path="topmap-list" element={<TopmapListPage />} />
          {scaffoldedPages.map((page) => (
            <Route
              key={page.path}
              path={page.path}
              element={
                <ScaffoldPage
                  title={page.title}
                  category={page.category}
                  description={page.description}
                  sourceFile={page.sourceFile}
                />
              }
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}
