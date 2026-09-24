import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Seo } from "./seo/Seo";
import { injectSchema } from "./seo/schema";

import {
  ArrowUpRight,
  Menu,
  X,
  Play,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

import { site } from "./content/site";
import "./styles.css";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    injectSchema();
  }, []);

  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [enquiryType, setEnquiryType] = useState("");

  const close = () => setOpen(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    setFormStatus("submitting");

    try {
      const response = await fetch(
        site.contact.form.formspreeEndpoint,
        {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        form.reset();
        setEnquiryType("");
        setFormStatus("success");
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <>
      <Seo />
      <div className="site-shell">
        <header className="nav-wrap">
          <a
            className="brand"
            href="#home"
            onClick={close}
          >
            <span className="brand-mark">
              {site.brand.mark}
            </span>

            <span>
              <strong>{site.brand.firstName}</strong>
              <strong>{site.brand.lastName}</strong>
            </span>
          </a>

          <button
            className="menu-button"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>

          <nav className={open ? "nav open" : "nav"}>
            {site.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={close}
              >
                {item.label}
              </a>
            ))}

            <a
              className="button button-small"
              href="#contact"
              onClick={close}
            >
              Book {site.brand.firstName}
              <ArrowUpRight size={15} />
            </a>
          </nav>
        </header>

        <main>
          {/* HERO */}
          <section
            id="home"
            className="hero section-pad"
          >
            <div
              className="hero-background-text"
              aria-hidden="true"
            >
              {site.brand.shortName}
            </div>

            <div className="hero-copy">
              <div className="hero-intro">
                <span className="hero-line" />

                <p className="eyebrow">
                  {site.hero.eyebrow}
                </p>
              </div>

              <h1>
                {site.hero.title.before}
                <br />
                {site.hero.title.middle}
                <br />
                <em>{site.hero.title.emphasis}</em>
              </h1>

              <p className="hero-text">
                {site.hero.description}
              </p>

              <div className="hero-actions">
                <a
                  className="button"
                  href={site.hero.primaryAction.href}
                >
                  {site.hero.primaryAction.label}
                  <ArrowUpRight size={16} />
                </a>

                <a
                  className="text-link"
                  href={site.hero.secondaryAction.href}
                >
                  {site.hero.secondaryAction.label}
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="hero-signature">
                <span>{site.hero.signature.mark}</span>

                <p>
                  {site.hero.signature.text
                    .split("\n")
                    .map((line, index) => (
                      <React.Fragment key={line}>
                        {index > 0 && <br />}
                        {line}
                      </React.Fragment>
                    ))}
                </p>
              </div>
            </div>

            <div
              className="hero-portrait"
              aria-label={site.hero.portrait.alt}
            >
              <div className="portrait-grid" />
              <div className="portrait-glow" />

              <div className="portrait-card">
                <img
                  src={site.hero.portrait.src}
                  alt={site.hero.portrait.alt}
                />
              </div>

              <div className="portrait-label">
                <span>{site.hero.portrait.number}</span>
                <span>{site.hero.portrait.label}</span>
              </div>

              <div className="portrait-side-text">
                {site.hero.portrait.sideText}
              </div>
            </div>

            <div className="hero-scroll">
              <span />
              <p>Scroll to explore</p>
            </div>
          </section>

          {/* STATS */}
          <section className="stats section-pad">
            {site.stats.map((stat) => (
              <div
                className="stat"
                key={stat.label}
              >
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </section>

          {/* ABOUT */}
          <section
            id="about"
            className="split-section section-pad about-section"
          >
            <div className="about-heading">
              <p className="eyebrow">
                {site.about.eyebrow}
              </p>

              <h2>
                {site.about.title.lines.map(
                  (line, index) => (
                    <React.Fragment key={line}>
                      {line}
                      {index <
                        site.about.title.lines.length - 1 && (
                        <br />
                      )}
                    </React.Fragment>
                  )
                )}
              </h2>

              <span className="about-accent-line" />
            </div>

            <div className="about-content">
              <div className="about-copy">
                {site.about.paragraphs.map((paragraph) => (
                  <p
                    className="body-copy"
                    key={paragraph}
                  >
                    {paragraph}
                  </p>
                ))}

                <a
                  className="text-link"
                  href={site.about.link.href}
                >
                  {site.about.link.label}
                  <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="about-visuals">
                {site.about.images.map((image, index) => (
                  <div
                    className={`about-image ${
                      index === 0
                        ? "about-image-main"
                        : "about-image-secondary"
                    }`}
                    key={image.src}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                    />

                    <span className="about-image-label">
                      {image.label}
                    </span>

                    <span className="about-image-number">
                      {image.number}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SHOWS */}
          <section
            id="shows"
            className="dark-section section-pad"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  {site.shows.eyebrow}
                </p>

                <h2>{site.shows.title}</h2>
              </div>

              <a
                className="text-link"
                href={site.shows.action.href}
              >
                {site.shows.action.label}
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="feature-grid">
              {site.shows.cards.map((show, index) => (
                <article
                  className={`show-card ${
                    index === 0
                      ? "show-card-main"
                      : "show-card-secondary"
                  }`}
                  key={show.number}
                >
                  <div
                    className="show-card-background"
                    style={{
                      backgroundImage: `url("${show.backgroundImage}")`,
                    }}
                  />

                  <div className="show-card-overlay" />

                  <div className="show-card-number">
                    {show.number}
                  </div>

                  <div className="show-card-content">
                    <span>{show.category}</span>

                    <h3>
                      {show.title
                        .split("\n")
                        .map((line, lineIndex) => (
                          <React.Fragment key={line}>
                            {line}
                            {lineIndex <
                              show.title.split("\n").length -
                                1 && <br />}
                          </React.Fragment>
                        ))}
                    </h3>

                    <p>{show.description}</p>

                    <a
                      className="text-link"
                      href="#contact"
                    >
                      {show.linkLabel}
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* MEDIA */}
          <section
            id="media"
            className="section-pad media-section"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  {site.media.eyebrow}
                </p>

                <h2>
                  {site.media.title.first}
                  <br />
                  <em>{site.media.title.emphasis}</em>
                </h2>
              </div>

              <p>{site.media.description}</p>
            </div>

            <div className="media-showcase">
              <article className="media-feature">
                <div
                  className="media-image media-image-main"
                  style={{
                    backgroundImage: `url("${site.media.featured.image}")`,
                  }}
                >
                  <div className="media-image-overlay" />

                  <span className="media-number">
                    {site.media.featured.number}
                  </span>

                  <button
                    className="media-play"
                    aria-label={
                      site.media.featured.playLabel
                    }
                  >
                    <Play
                      size={22}
                      fill="currentColor"
                    />
                  </button>

                  <div className="media-caption">
                    <span>
                      {site.media.featured.category}
                    </span>

                    <h3>
                      {site.media.featured.title}
                    </h3>
                  </div>
                </div>
              </article>

              <div className="media-list">
                {site.media.items.map((item) => (
                  <article
                    className="media-item"
                    key={item.number}
                  >
                    <div
                      className="media-image media-image-small"
                      style={{
                        backgroundImage: `url("${item.image}")`,
                      }}
                    >
                      <span className="media-number">
                        {item.number}
                      </span>

                      <button
                        className="media-play"
                        aria-label={item.ariaLabel}
                      >
                        <Play
                          size={16}
                          fill="currentColor"
                        />
                      </button>
                    </div>

                    <div className="media-item-copy">
                      <span>{item.category}</span>

                      <h3>{item.title}</h3>

                      <a
                        href="#contact"
                        className="text-link"
                      >
                        {item.linkLabel}
                        <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* PROJECTS */}
          <section
            id="projects"
            className="section-pad projects-section"
          >
            <div className="section-heading">
              <div>
                <p className="eyebrow">
                  {site.projects.eyebrow}
                </p>

                <h2>{site.projects.title}</h2>
              </div>

              <p>{site.projects.description}</p>
            </div>

            <div className="project-list">
              {site.projects.items.map(
                (project, index) => (
                  <article
                    className="project-row"
                    key={project.title}
                  >
                    <span className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="project-content">
                      <span className="eyebrow">
                        {project.category}
                      </span>

                      <h3>{project.title}</h3>

                      <p>{project.description}</p>
                    </div>

                    <a
                      href="#contact"
                      className="project-link"
                      aria-label={`Explore ${project.title}`}
                    >
                      <ArrowUpRight size={22} />
                    </a>
                  </article>
                )
              )}
            </div>
          </section>

          {/* CONTACT */}
          <section
            id="contact"
            className="section-pad contact-section"
          >
            <div className="contact-layout">
              <div className="contact-intro">
                <p className="eyebrow">
                  {site.contact.eyebrow}
                </p>

                <h2>
                  {site.contact.title.first}
                  <br />
                  <em>{site.contact.title.emphasis}</em>
                </h2>

                <p className="contact-description">
                  {site.contact.description}
                </p>

                <div className="contact-details">
                  <div>
                    <span>Email</span>

                    <a
                      href={`mailto:${site.contact.email}`}
                    >
                      {site.contact.email}
                    </a>
                  </div>

                  <div>
                    <span>
                      {site.contact.availabilityLabel}
                    </span>

                    <p>
                      {site.contact.availability}
                    </p>
                  </div>
                </div>
              </div>

              <form
                className="booking-form"
                onSubmit={handleSubmit}
              >
                <div className="form-heading">
                  <span>
                    {site.contact.form.headingNumber}
                  </span>

                  <h3>{site.contact.form.heading}</h3>
                </div>

                <input
                  type="hidden"
                  name="_subject"
                  value={site.contact.form.subject}
                />

                <label>
                  {site.contact.form.fields.name.label}

                  <input
                    type="text"
                    name="name"
                    placeholder={
                      site.contact.form.fields.name
                        .placeholder
                    }
                    required
                  />
                </label>

                <label>
                  {site.contact.form.fields.email.label}

                  <input
                    type="email"
                    name="email"
                    placeholder={
                      site.contact.form.fields.email
                        .placeholder
                    }
                    required
                  />
                </label>

                <label>
                  {site.contact.form.fields.phone.label}

                  <input
                    type="tel"
                    name="phone"
                    placeholder={
                      site.contact.form.fields.phone
                        .placeholder
                    }
                  />
                </label>

                <label>
                  {
                    site.contact.form.fields.enquiryType
                      .label
                  }

                  <select
                    name="enquiryType"
                    value={enquiryType}
                    onChange={(event) =>
                      setEnquiryType(event.target.value)
                    }
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      {
                        site.contact.form.fields
                          .enquiryType.placeholder
                      }
                    </option>

                    {site.contact.form.fields.enquiryType.options.map(
                      (option) => (
                        <option
                          value={option.value}
                          key={option.value}
                        >
                          {option.label}
                        </option>
                      )
                    )}
                  </select>
                </label>

                {enquiryType === "booking" && (
                  <>
                    <label>
                      {
                        site.contact.form.fields
                          .bookingDate.label
                      }

                      <input
                        type="date"
                        name="date"
                        required
                      />
                    </label>

                    <label>
                      {
                        site.contact.form.fields.location
                          .label
                      }

                      <input
                        type="text"
                        name="location"
                        placeholder={
                          site.contact.form.fields
                            .location.placeholder
                        }
                        required
                      />
                    </label>
                  </>
                )}

                <label>
                  {
                    site.contact.form.fields.message.label
                  }

                  <textarea
                    name="message"
                    placeholder={
                      site.contact.form.fields.message
                        .placeholder
                    }
                    rows={5}
                    required
                  />
                </label>

                <button
                  type="submit"
                  className="button"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting"
                    ? site.contact.form.submittingLabel
                    : site.contact.form.submitLabel}

                  {formStatus !== "submitting" && (
                    <ArrowUpRight size={16} />
                  )}
                </button>

                {formStatus === "success" && (
                  <p className="form-message form-success">
                    {site.contact.form.successMessage}
                  </p>
                )}

                {formStatus === "error" && (
                  <p className="form-message form-error">
                    {site.contact.form.errorMessage}
                  </p>
                )}
              </form>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="footer section-pad">
          <div className="brand">
            <span className="brand-mark">
              {site.brand.mark}
            </span>

            <span>
              <strong>{site.brand.firstName}</strong>
              <strong>{site.brand.lastName}</strong>
            </span>
          </div>

          <div className="socials">
            {site.socialLinks.map((social) => {
              const iconMap = {
                Instagram: <FaInstagram />,
                YouTube: <FaYoutube />,
                Facebook: <FaFacebookF />,
                TikTok: <FaTiktok />,
              };

              return (
                <a
                  href={social.href}
                  aria-label={social.label}
                  key={social.label}
                >
                  {iconMap[
                    social.label as keyof typeof iconMap
                  ] ?? social.label}
                </a>
              );
            })}
          </div>

          <p>
            © {new Date().getFullYear()}{" "}
            {site.footer.copyrightName}. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);