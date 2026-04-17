import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./site-header";

const whyProofBlocks = [
  {
    label: "Local since 2015",
    sentence: "EVWACH was established in 2015 as a community-based organization.",
  },
  {
    label: "Focused on priority groups",
    sentence:
      "Its work centers vulnerable women, children, pregnant women, and nursing mothers.",
  },
  {
    label: "Outreach plus follow-up",
    sentence:
      "The organization stays practical by combining local outreach with follow-up.",
  },
];

const aboutFacts = [
  {
    label: "Founded",
    text: "Established in 2015.",
  },
  {
    label: "Who it serves",
    text: "Women, children, pregnant women, and nursing mothers.",
  },
  {
    label: "How it works",
    text: "Local outreach and community follow-up.",
  },
];

const programItems = [
  {
    title: "Advocacy and rights protection",
    body: "Community outreach, child advocacy, sensitization, and follow-up where practical needs are most immediate.",
    examples: [
      "Child advocacy",
      "Community outreach",
      "Advocacy visits and sensitization",
    ],
  },
  {
    title: "Education and practical learning",
    body: "Support for formal and non-formal learning, including opportunities that build useful skills beyond the classroom.",
    examples: [
      "Formal education support",
      "Non-formal learning",
      "Computer training and certification",
    ],
  },
  {
    title: "Maternal and child health support",
    body: "Health awareness, family planning information, and support for pregnant and nursing mothers.",
    examples: [
      "Family planning services",
      "Maternal care awareness",
      "Support for pregnant and nursing mothers",
    ],
  },
  {
    title: "Disease prevention and awareness",
    body: "Malaria prevention, sickle-cell awareness, and health education that supports early response.",
    examples: [
      "Malaria prevention",
      "Sickle-cell awareness",
      "Health education and prevention messaging",
    ],
  },
  {
    title: "Community mobilization and field monitoring",
    body: "Mobilization, dialogue, surveys, and follow-up so the work stays connected to real communities.",
    examples: [
      "Community mobilization",
      "Field surveys and follow-up",
      "Monitoring of health and education interventions",
    ],
  },
];

const workSteps = [
  {
    number: "01",
    title: "Listen and mobilize",
    text: "Start with outreach, advocacy visits, sensitization meetings, and community dialogue.",
    examples: [
      "Community outreach and mobilization",
      "Advocacy visits and sensitization meetings",
    ],
  },
  {
    number: "02",
    title: "Deliver practical support",
    text: "Bring education support, health outreach, family planning information, and prevention work into real settings.",
    examples: [
      "Education support and practical learning",
      "Health outreach, family planning, and prevention work",
    ],
  },
  {
    number: "03",
    title: "Track community outcomes",
    text: "Use field monitoring, surveys, and community feedback to see what is working and what still needs attention.",
    examples: [
      "Field monitoring and surveys",
      "Follow-up on health and education interventions",
    ],
  },
];

const valueCards = [
  {
    title: "Empathy",
    text: "We respond to vulnerable women, children, and communities with care.",
  },
  {
    title: "Value for Human Life",
    text: "We uphold the dignity and worth of every person.",
  },
  {
    title: "Welfare and Wellbeing",
    text: "We work to improve health, learning, and everyday wellbeing.",
  },
  {
    title: "Accountability",
    text: "We stay responsible in how we act, use resources, and serve communities.",
  },
  {
    title: "Community Empowerment",
    text: "We support self-reliance through knowledge, skills, and opportunity.",
  },
  {
    title: "Holistic Development",
    text: "We treat health, learning, and social wellbeing as connected.",
  },
];

const involvementPaths = [
  {
    title: "Program partnership",
    text: "Join advocacy, education support, maternal health outreach, or community field activities.",
  },
  {
    title: "Support community delivery",
    text: "Help extend learning, prevention, and follow-up into the communities EVWACH serves.",
  },
  {
    title: "Contribute expertise or resources",
    text: "Bring specialist knowledge, trusted networks, or practical support that improves local delivery.",
  },
];

const footerLinks = [
  { href: "#why-evwach", label: "Why EVWACH" },
  { href: "#about", label: "What we do" },
  { href: "#programs", label: "Our focus areas" },
  { href: "#how-we-work", label: "How EVWACH works" },
  { href: "#values", label: "Values" },
  { href: "#involved", label: "Get involved" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main-content">
        <section id="top" className="section-spacing hero-section">
          <div className="page-container">
            <div className="hero-grid">
              <div className="hero-copy">
                <h1 className="hero-title">
                  EVWACH International supports women and children through local
                  outreach.
                </h1>
                <p className="hero-lead">
                  We work with vulnerable women, children, pregnant and nursing
                  mothers through advocacy, education support, health outreach,
                  and field follow-up in local communities.
                </p>
                <div className="button-row">
                  <Link href="#involved" className="button-link hero-button primary">
                    Get involved
                  </Link>
                  <Link href="#programs" className="button-link hero-button secondary">
                    Explore programs
                  </Link>
                </div>
              </div>

              <aside className="hero-media" aria-label="EVWACH outreach image">
                <div className="hero-visual">
                  <Image
                    src="/hero-community.jpg"
                    alt="Women and community members gathered during an outreach moment"
                    fill
                    priority
                    sizes="(min-width: 768px) 48vw, 100vw"
                    className="hero-visual-image"
                  />
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section id="why-evwach" className="section-spacing section-tinted why-section">
        <div className="page-container">
          <div className="why-band">
            <div className="why-intro">
              <h2 className="section-title why-title">Why EVWACH</h2>
              <p className="why-intro-copy">
                EVWACH keeps its work close to the communities it serves, so
                support stays practical and accountable.
              </p>
            </div>
            <div className="why-points" aria-label="Why EVWACH highlights">
              {whyProofBlocks.map((point) => (
                <article key={point.label} className="why-proof">
                  <p className="why-proof-label">{point.label}</p>
                  <p className="why-proof-copy">{point.sentence}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

        <section id="about" className="section-spacing">
        <div className="page-container">
          <div className="about-shell">
            <div className="about-copy">
              <h2 className="section-title about-title">What we do</h2>
              <p className="section-copy">
                EVWACH, short for Empowerment for Vulnerable Women and Children
                International, is a community-based organization established in
                2015.
              </p>
              <p className="section-copy">
                Its work is carried out through local outreach and community
                follow-up.
              </p>
              <dl className="about-facts" aria-label="About EVWACH facts">
                {aboutFacts.map((fact) => (
                  <div key={fact.label} className="about-fact">
                    <dt className="about-fact-label">{fact.label}</dt>
                    <dd className="about-fact-text">{fact.text}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="about-rail">
              <div className="about-visual">
                <Image
                  src="/about-outreach.jpg"
                  alt="Children learning in a guided community support setting"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="about-visual-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        <section id="programs" className="section-spacing section-tinted">
        <div className="page-container">
          <div className="section-heading readable-text program-header">
            <h2 className="section-title program-title">Our focus areas</h2>
            <p className="program-intro">
              These are the practical areas EVWACH organizes around in local
              communities.
            </p>
          </div>

          <div className="program-grid">
            {programItems.map((item) => (
              <article key={item.title} className="program-card">
                <div className="program-card-main">
                  <h3 className="program-card-title">{item.title}</h3>
                  <p className="program-card-body">{item.body}</p>
                </div>
                <aside className="program-examples" aria-label={`${item.title} examples`}>
                  <ul className="program-example-lines">
                    {item.examples.map((example) => (
                      <li key={example} className="program-example-line">
                        {example}
                      </li>
                    ))}
                  </ul>
                </aside>
              </article>
            ))}
          </div>
        </div>
      </section>

        <section
          id="field-outreach"
          className="field-band-section"
          aria-labelledby="field-outreach-title"
        >
          <div className="field-band">
            <Image
              src="/field-outreach-band.jpg"
              alt="EVWACH field outreach gathering with community members and local leaders"
              fill
              sizes="100vw"
              className="field-band-image"
            />
            <div className="field-band-overlay" aria-hidden="true" />
            <div className="field-band-content">
              <div className="page-container">
                <div className="field-band-copy">
                  <h2 id="field-outreach-title" className="field-band-title">
                    Showing up is part of the work.
                  </h2>
                  <p className="field-band-support">
                    Field presence keeps the work grounded in real communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-we-work" className="section-spacing">
          <div className="page-container">
            <div className="section-heading readable-text">
              <h2 className="section-title">How EVWACH works</h2>
              <p className="section-copy">
                The process is simple: listen first, deliver support, and
                follow up.
              </p>
            </div>

            <div className="work-grid" aria-label="How EVWACH works">
              {workSteps.map((step) => (
                <article key={step.number} className="work-step">
                  <p className="work-step-number">Step {step.number}</p>
                  <h3 className="work-step-title">{step.title}</h3>
                  <p className="work-step-copy">{step.text}</p>
                  <div className="work-step-examples" aria-label={`${step.title} examples`}>
                    {step.examples.map((example) => (
                      <p key={example} className="work-step-example">
                        {example}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="values" className="section-spacing values-section">
          <div className="page-container">
            <div className="values-intro readable-text">
              <h2 className="supporting-title values-title">The EVWACH values</h2>
              <p className="values-intro-copy">
                These are the principles behind the work.
              </p>
            </div>

            <ul className="values-grid" aria-label="Core values">
              {valueCards.map((value) => (
                <li key={value.title} className="value-row">
                  <h3 className="value-row-title">{value.title}</h3>
                  <p className="value-row-copy">{value.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="involved" className="section-spacing involvement-section">
          <div className="page-container">
            <div className="involvement-grid">
              <div className="involvement-visual-card">
                <div className="involvement-visual">
                  <Image
                    src="/get-involved.jpg"
                    alt="Women gathered during a community outreach activity"
                    fill
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="involvement-visual-image"
                  />
                </div>

                <div className="involvement-visual-caption">
                  <p className="involvement-visual-copy">
                    Direct outreach keeps the work connected to the people it
                    serves.
                  </p>
                </div>
              </div>

              <div className="involvement-panel">
                <div className="involvement-header readable-text">
                  <h2 className="section-title involvement-title">Get involved</h2>
                  <p className="section-copy involvement-copy">
                    If you want to support practical work on the ground, EVWACH
                    welcomes partnerships that strengthen outreach and follow-up.
                  </p>
                </div>

                <div className="button-row involvement-actions">
                  <a
                    href="https://www.evwachint.org"
                    className="button-link hero-button primary"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Partner with EVWACH
                  </a>
                  <Link href="#programs" className="button-link hero-button secondary">
                    Explore programs
                  </Link>
                </div>
              </div>

              <div className="involvement-options" aria-label="Ways to get involved">
                <p className="involvement-options-label">Best ways to help</p>
                <ul className="involvement-list">
                  {involvementPaths.map((path) => (
                    <li key={path.title} className="involvement-item">
                      <h3 className="involvement-item-title">{path.title}</h3>
                      <p className="involvement-item-copy">{path.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer section-spacing">
          <div className="page-container footer-grid">
            <div className="footer-brand">
                <div
                  className="footer-brand-mark"
                  style={{
                    backgroundColor: "transparent",
                    border: 0,
                    boxShadow: "none",
                    padding: 0,
                  }}
                >
                  <Image
                    src="/logo.png"
                    alt="EVWACH International logo"
                    width={611}
                    height={351}
                    sizes="(max-width: 767px) 128px, 160px"
                    className="brand-logo"
                    style={{
                      backgroundColor: "transparent",
                      border: 0,
                      boxShadow: "none",
                      borderRadius: 0,
                    }}
                  />
                </div>
              <p className="footer-note">
                Empowerment for Vulnerable Women and Children International is a
                community-based organization established in 2015.
              </p>
              <p className="footer-note">
                Its work supports vulnerable women, children, pregnant and nursing
                mothers through local outreach and follow-up.
              </p>
            </div>

            <div className="footer-column">
              <p className="footer-label">Core facts</p>
              <ul className="footer-list">
                <li>Established in 2015</li>
                <li>Community-based organization</li>
                <li>Supports women, children, pregnant and nursing mothers</li>
              </ul>
            </div>

            <div className="footer-column">
              <p className="footer-label">Focus areas</p>
              <ul className="footer-list">
                <li>Advocacy and rights protection</li>
                <li>Education and practical learning</li>
                <li>Maternal and child health support</li>
                <li>Disease prevention and awareness</li>
                <li>Community mobilization and field monitoring</li>
              </ul>
            </div>

            <div className="footer-column">
              <p className="footer-label">Section links</p>
              <ul className="footer-links">
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
