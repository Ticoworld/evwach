import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "./site-header";

const whyProofBlocks = [
  {
    label: "Established in 2015",
    sentence: "EVWACH International was established as a community-based organization.",
  },
  {
    label: "Cross-cutting NGO",
    sentence:
      "Its work combines rights protection, education, public health awareness, rehabilitation, and field-based monitoring.",
  },
  {
    label: "Focused on vulnerable families",
    sentence:
      "The organization serves vulnerable women, children, and pregnant and nursing mothers.",
  },
];

const aboutFacts = [
  {
    label: "Founded",
    text: "Established in 2015 as a community-based organization.",
  },
  {
    label: "Organization type",
    text: "A cross-cutting NGO rooted in grassroots participatory development.",
  },
  {
    label: "Vision",
    text: "Improved quality of lives of vulnerable children and women, especially pregnant and nursing mothers.",
  },
  {
    label: "Mission",
    text: "Advocacy, community outreach, basic formal and non-formal education, health awareness, family planning, and malaria prevention.",
  },
  {
    label: "Objectives",
    text: "Protect rights, offer educational trainings, and conduct field-based monitoring of health and education interventions.",
  },
];

const programItems = [
  {
    title: "Child advocacy and rights protection",
    body: "Protecting the rights of less privileged women and children through outreach, advocacy, and follow-up.",
    examples: [
      "Child advocacy",
      "Community outreach",
      "Rights protection",
    ],
  },
  {
    title: "Education and practical learning",
    body: "Formal and non-formal education, H2H mobilization, and practical learning opportunities.",
    examples: [
      "H2H mobilization on formal and non-formal education",
      "Sports and school quiz and debate competitions",
      "Computer training and certification",
    ],
  },
  {
    title: "Community health outreach",
    body: "Public health awareness counseling, rehabilitation, and community health support.",
    examples: [
      "Community health outreach programs",
      "Public health awareness counseling",
      "Rehabilitation",
    ],
  },
  {
    title: "Family planning and prevention",
    body: "Family planning, malaria prevention, and health services that support pregnant and nursing mothers.",
    examples: [
      "Family planning services",
      "Malaria prevention",
      "Support for pregnant and nursing mothers",
    ],
  },
  {
    title: "Community mobilization and training",
    body: "Mobilization and training on health and social issues through direct community engagement.",
    examples: [
      "Advocacy visits",
      "Sensitization meetings",
      "Community dialogues",
    ],
  },
  {
    title: "Field monitoring and survey",
    body: "Field-based monitoring and survey to guide the proper use of health and education interventions.",
    examples: [
      "Sickle-cell disease awareness, detection and management",
      "Field-based monitoring and survey",
      "Monitoring of health and educational interventions",
    ],
  },
];

const workSteps = [
  {
    number: "01",
    title: "Reach communities directly",
    text: "Start with advocacy visits, sensitization meetings, and H2H mobilization.",
    examples: [
      "Advocacy visits",
      "Sensitization meetings",
      "H2H mobilization",
    ],
  },
  {
    number: "02",
    title: "Use local channels",
    text: "Community dialogues, compound meetings, announcements, and school activities widen the reach.",
    examples: [
      "Community dialogues",
      "Compound meetings",
      "Mosque and church announcements",
      "Magjigi shows and children rallies",
    ],
  },
  {
    number: "03",
    title: "Follow through in the field",
    text: "Field-based monitoring, surveys, and evaluation keep health and education interventions on track.",
    examples: [
      "Field-based monitoring and survey",
      "Monitoring and evaluation",
      "Follow-up on interventions",
    ],
  },
];

const valueCards = [
  {
    title: "Empathy",
    text: "We show compassion and care for vulnerable women, children, and communities.",
  },
  {
    title: "Value for Human Life",
    text: "We uphold the dignity, rights, and worth of every individual.",
  },
  {
    title: "Welfare and Wellbeing",
    text: "We improve health, education, and overall wellbeing.",
  },
  {
    title: "Accountability",
    text: "We stay transparent and responsible with actions, resources, and commitments.",
  },
  {
    title: "Community Empowerment",
    text: "We promote self-reliance through knowledge, skills, and opportunities.",
  },
  {
    title: "Holistic Development",
    text: "We address education, health, and social needs together.",
  },
];

const involvementPaths = [
  {
    title: "Funding support",
    text: "Help fund advocacy, education, health awareness, and field monitoring.",
  },
  {
    title: "Educational materials",
    text: "Support formal and non-formal learning with books, tools, and computer training resources.",
  },
  {
    title: "Volunteers and partnerships",
    text: "Strengthen outreach, sensitization, and community follow-up.",
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
                  Established in 2015, EVWACH International is a community-based,
                  cross-cutting NGO. It promotes the rights and wellbeing of
                  vulnerable women and children through advocacy, education,
                  public health awareness, rehabilitation, and field-based
                  monitoring.
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
                EVWACH keeps its work close to the communities it serves, so the
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
                International, is a community-based, cross-cutting NGO
                established in 2015.
              </p>
              <p className="section-copy">
                Its work promotes the rights and wellbeing of vulnerable women,
                children, pregnant and nursing mothers through advocacy,
                education, public health awareness, rehabilitation, and
                field-based monitoring.
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
                The process is simple: mobilize communities, use local channels,
                and follow up in the field.
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
                    welcomes funding, materials, volunteers, and partnerships
                    that strengthen outreach and follow-up.
                  </p>
                </div>

                <div className="button-row involvement-actions">
                  <Link
                    href="#programs"
                    className="button-link hero-button primary"
                  >
                    Partner with EVWACH
                  </Link>
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
                community-based, cross-cutting NGO established in 2015.
              </p>
              <p className="footer-note">
                Its work supports vulnerable women, children, pregnant and nursing
                mothers through advocacy, education, public health awareness,
                rehabilitation, and field-based monitoring.
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
                <li>Child advocacy and rights protection</li>
                <li>Education and practical learning</li>
                <li>Community health outreach</li>
                <li>Family planning and prevention</li>
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
