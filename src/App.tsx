
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Briefcase,
  Coffee,
  Globe,
  Info,
  Layers,
  Menu,
  CloudCog,
  Terminal,
  TrendingUp,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd_lYL0QDybf-OJIl0YDj_KFTOlF0_vcm6jTBGyvxgQm4fTmw/viewform";

const COMPANY_NAME = "";
const TAGLINE = "Technology That Moves Business Forward.";

interface Internship {
  title: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
}

const INTERNSHIPS: Internship[] = [
  {
    title: "Full Stack Development",
    icon: Layers,
    description:
      "Learn how complete web applications are planned and built, from the screens users see to the server logic behind them.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    title: "Web Development",
    icon: Globe,
    description:
      "Practise building clean, responsive websites that look good and work smoothly on every screen size.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive UI"],
  },
  {
    title: "Python Development",
    icon: Terminal,
    description:
      "Use Python to solve real problems, write tidy code, and build small applications step by step.",
    skills: ["Python", "Problem Solving", "Application Development"],
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    description:
      "Get started with the core ideas behind AI and learn how data is prepared and used in simple projects.",
    skills: ["Python", "AI Fundamentals", "Data Basics"],
  },
  {
    title: "Cloud Computing & DevOps",
    icon: CloudCog,
    description:
      "Learn to deploy applications, manage cloud infrastructure, and automate software delivery using modern cloud and DevOps practices.",
    skills: [
      "AWS & Cloud Infrastructure",
      "Docker & Kubernetes",
      "CI/CD & Deployment Automation",
    ],
  },
  {
    title: "Java Development",
    icon: Coffee,
    description:
      "Build a strong programming foundation with Java and learn how object-oriented code is organised.",
    skills: ["Core Java", "OOP", "Programming"],
  },
];

const HIGHLIGHTS: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Learn Practical Skills",
    text: "Work on hands-on tasks that connect classroom concepts to real technology work.",
    icon: BookOpen,
  },
  {
    title: "Build Your Experience",
    text: "Create things you can explain, show, and talk about in future interviews.",
    icon: Briefcase,
  },
  {
    title: "Grow With Confidence",
    text: "Strengthen your knowledge step by step and get ready for your next move in tech.",
    icon: TrendingUp,
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Internships", href: "#internships" },
  { label: "About Us", href: "#about" },
];

const CODE_LINES: [string, string][][] = [
  [["tok-key", "const"], ["tok-var", " intern"], ["tok-punc", " = {"]],
  [["tok-var", "  curious"], ["tok-punc", ": "], ["tok-val", "true"], ["tok-punc", ","]],
  [
    ["tok-var", "  skills"],
    ["tok-punc", ": ["],
    ["tok-str", '"learn"'],
    ["tok-punc", ", "],
    ["tok-str", '"build"'],
    ["tok-punc", "],"],
  ],
  [
    ["tok-var", "  goal"],
    ["tok-punc", ": "],
    ["tok-str", '"career in tech"'],
    ["tok-punc", ","],
  ],
  [["tok-punc", "};"]],
  [["tok-comment", "// Your next step"]],
  [["tok-fn", "apply"], ["tok-punc", "("], ["tok-var", "intern"], ["tok-punc", ");"]],
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? " logo-light" : ""}`}>
      <img
        src="/fenvaro-logo.png"
        alt={`${COMPANY_NAME} logo`}
        className="company-logo"
      />
      <span className="logo-text">
        <span className="logo-name">FENVARO</span>
        <span className="logo-sub">Infotech Pvt. Ltd.</span>
      </span>
    </span>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!notice) return;

    const id = window.setTimeout(() => setNotice(null), 8000);
    return () => window.clearTimeout(id);
  }, [notice]);

  const openApplicationForm = () => {
    if (!/^https?:\/\//i.test(GOOGLE_FORM_URL.trim())) {
      setNotice("The application form link is not configured.");
      return;
    }

    setNotice(null);
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container header-inner">
          <a
            href="#home"
            className="logo-link"
            aria-label={`${COMPANY_NAME} home`}
            onClick={closeMenu}
          >
            <Logo />
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}

            <button
              type="button"
              className="btn btn-primary btn-sm"
              onClick={openApplicationForm}
            >
              Apply Now
            </button>
          </nav>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>

        <nav
          id="mobile-menu"
          className={`mobile-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-link"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            className="btn btn-primary btn-block"
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => {
              closeMenu();
              openApplicationForm();
            }}
          >
            Apply Now
          </button>
        </nav>
      </header>

      {notice && (
        <div className="notice" role="alert">
          <Info size={20} aria-hidden="true" />
          <p>{notice}</p>
          <button
            type="button"
            className="notice-close"
            aria-label="Dismiss message"
            onClick={() => setNotice(null)}
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>
      )}

      <main id="main">
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="hero-shape hero-shape-a" aria-hidden="true" />
          <div className="hero-shape hero-shape-b" aria-hidden="true" />

          <div className="container hero-inner">
            <div className="hero-copy">
              <p className="hero-badge">Internships at {COMPANY_NAME}</p>

              <h1 id="hero-title">Your future in tech starts here.</h1>

              <p className="hero-text">
                Turn your curiosity into practical skills. Explore technology
                internship opportunities, strengthen your knowledge, and take
                your next step towards a career in tech.
              </p>

              <div className="hero-actions">
                <a href="#internships" className="btn btn-primary">
                  Explore Internships
                </a>
                <a href="#about" className="btn btn-ghost">
                  Discover FENVARO
                </a>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="editor">
                <div className="editor-bar">
                  <span className="dot dot-r" />
                  <span className="dot dot-y" />
                  <span className="dot dot-g" />
                  <span className="editor-file">internship.tsx</span>
                </div>

                <pre className="editor-code">
                  {CODE_LINES.map((line, index) => (
                    <div className="code-line" key={index}>
                      <span className="line-no">{index + 1}</span>
                      <span>
                        {line.map(([className, value], tokenIndex) => (
                          <span className={className} key={tokenIndex}>
                            {value}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>

              <div className="float-card float-card-a">
                <span className="float-icon">
                  <Layers size={18} />
                </span>
                <span>
                  <strong>6 Tracks</strong>
                  <small>Choose your path</small>
                </span>
              </div>

              <div className="float-card float-card-b">
                <span className="float-icon float-icon-purple">
                  <BookOpen size={18} />
                </span>
                <span>
                  <strong>Learn by doing</strong>
                  <small>Practical tasks</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section highlights" aria-label="Opportunity highlights">
          <div className="container highlight-grid">
            {HIGHLIGHTS.map(({ title, text, icon: Icon }) => (
              <div className="highlight" key={title}>
                <span className="highlight-icon">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="highlight-title">{title}</h2>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="internships"
          className="section internships"
          aria-labelledby="internships-title"
        >
          <div className="container">
            <div className="section-head">
              <h2 id="internships-title">Internship opportunities</h2>
              <p>
                Pick the area that matches your interests. All internships are
                unpaid and open to students who want to learn and gain practical
                experience.
              </p>
            </div>

            <div className="card-grid">
              {INTERNSHIPS.map(
                ({ title, icon: Icon, description, skills }) => (
                  <article className="card" key={title}>
                    <div className="card-top">
                      <span className="card-icon">
                        <Icon size={24} aria-hidden="true" />
                      </span>
                      <span className="tag-type">Unpaid Internship</span>
                    </div>

                    <h3>{title}</h3>
                    <p className="card-desc">{description}</p>

                    <ul className="skill-list" aria-label={`Skills for ${title}`}>
                      {skills.map((skill) => (
                        <li key={skill} className="skill">
                          {skill}
                        </li>
                      ))}
                    </ul>

                    <button
                      type="button"
                      className="btn btn-outline btn-block card-btn"
                      onClick={openApplicationForm}
                      aria-label={`Apply for ${title} internship`}
                    >
                      Apply <ArrowRight size={18} aria-hidden="true" />
                    </button>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>

        <section
          id="about"
          className="section about"
          aria-labelledby="about-title"
        >
          <div className="container about-inner">
            <div className="about-head">
              <h2 id="about-title">
                Technology that moves business forward.
              </h2>
              <button
                type="button"
                className="btn btn-primary"
                onClick={openApplicationForm}
              >
                Start Your Application
              </button>
            </div>

            <div className="about-body">
              <p>
                FENVARO Infotech Pvt. Ltd. is a technology startup focused on
                building useful digital experiences that help businesses work
                smarter and reach their goals. We care about clear design,
                reliable software, and solutions that are simple for people to
                use.
              </p>

              <p>
                We also believe that good technology starts with good learning.
                Our internship opportunities are designed to help students move
                beyond theory, practise real skills, and understand how digital
                products are planned and built.
              </p>

              <p>
                If you are curious, motivated, and ready to learn, we would be
                glad to see your application.
              </p>
            </div>
          </div>
        </section>

        <section className="cta" aria-labelledby="cta-title">
          <div className="container cta-inner">
            <h2 id="cta-title">Ready to take the first step?</h2>
            <p>
              Find an opportunity that matches your interests and apply today.
            </p>
            <button
              type="button"
              className="btn btn-light"
              onClick={openApplicationForm}
            >
              Apply for an Internship
            </button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <Logo light />
            <p className="footer-tagline">{TAGLINE}</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}

            <a
              href="#internships"
              onClick={(event) => {
                event.preventDefault();
                openApplicationForm();
              }}
            >
              Apply Now
            </a>
          </nav>
        </div>

        <div className="container footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}