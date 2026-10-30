import { Link, NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logo from "../Logo.png";
import portrait from "../Pic.png";

function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header>
        <Link to="/" aria-label="Prince Czairel Pino home">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
        <Link className="contactbtn" to="/contact">Hire Me</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>© 2026 Prince Czairel Pino. All rights reserved.</p>
        <Link to="/">Back to top ↑</Link>
      </footer>
    </>
  );
}

function HomePage() {
  return (
    <section id="home">
      <div className="hometxt">
        <p className="txt1">Hello I'm am</p>
        <p className="txt1">Prince Czairel F. Pino</p>
        <h1 className="blue-gradient">Front-End Developer</h1>
        <div className="social-buttons" aria-label="Social links">
          <button className="iconbtn" type="button" aria-label="Social link one" />
          <button className="iconbtn" type="button" aria-label="Social link two" />
          <button className="iconbtn" type="button" aria-label="Social link three" />
        </div>
        <div className="row">
          <div className="column">
            <p className="blue-gradient">S+</p>
            <p>Experience</p>
          </div>
          <div className="column">
            <p className="blue-gradient">3+</p>
            <p>Project Done</p>
          </div>
          <div className="column">
            <p className="blue-gradient">S+</p>
            <p>Experience</p>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={portrait} alt="Portrait of Prince Czairel Pino" />
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section className="content-section about-section">
      <div className="about-image">
        <img src={portrait} alt="Portrait of Prince Czairel Pino" />
      </div>
      <div className="about-copy">
        <p className="section-eyebrow">ABOUT ME</p>
        <h1 className="section-title">A little about me</h1>
        <p className="about-description">
          I'm Prince Czairel Pino, a front-end developer who enjoys creating
          clean, accessible, and user-friendly websites.
        </p>
      </div>
    </section>
  );
}

function ProjectsPage() {
  return (
    <section className="content-section projects-section">
      <div className="projects-heading">
        <p className="section-eyebrow">MY WORK</p>
        <h1 className="section-title">Projects</h1>
      </div>
      <div className="project-grid">
        <article className="project-card">
          <div className="project-image project-image-one" role="img" aria-label="Portfolio website preview placeholder">
            <span>01</span>
          </div>
          <h2>Project Name</h2>
          <p>Add a short description of your project here.</p>
        </article>
        <article className="project-card">
          <div className="project-image project-image-two" role="img" aria-label="Task tracker app preview placeholder">
            <span>02</span>
          </div>
          <h2>Project Name</h2>
          <p>Add a short description of your project here.</p>
        </article>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section className="content-section contact-section">
      <div className="contact-copy">
        <p className="section-eyebrow">GET IN TOUCH</p>
        <h1 className="section-title">Contact Me</h1>
        <p className="about-description">
          Interested in working together? Add your preferred contact details
          here so visitors can get in touch.
        </p>
      </div>
    </section>
  );
}

function NotFoundPage() {
  return (
    <section className="content-section">
      <div>
        <p className="section-eyebrow">404</p>
        <h1 className="section-title">Page not found</h1>
        <Link className="contactbtn" to="/">Return home</Link>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
