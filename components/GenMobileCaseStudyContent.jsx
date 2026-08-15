"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GlowCard from "@/components/GlowCard";
import { BASE_PATH } from "@/lib/config";

const SectionHeading = ({ eyebrow, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-10"
  >
    <div className="mb-2 text-sm font-bold text-foreground/40">{eyebrow}</div>
    <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">{title}</h2>
    <div className="mb-6 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-violet" />
    {children}
  </motion.div>
);

const InfoTile = ({ title, children }) => (
  <GlowCard className="h-full rounded-2xl border border-foreground/10 bg-surface/50 p-6">
    <h3 className="mb-3 font-display text-lg font-bold">{title}</h3>
    {children}
  </GlowCard>
);

const BulletList = ({ items, className = "" }) => (
  <ul className={`space-y-2 text-sm leading-relaxed text-foreground/70 ${className}`}>
    {items.map((item, i) => (
      <li key={i} className="flex gap-2">
        <span className="text-primary-text" aria-hidden="true">
          •
        </span>
        {item}
      </li>
    ))}
  </ul>
);

const teamColumns = [
  {
    title: "Leads & Ops",
    members: [
      ["Rachel Hankins", "Front End Manager"],
      ["Beniyam Kebede", "Account Manager"],
      ["Kim Mosberger", "UX Design Manager"],
      ["Jessica Holzhauer", "Project Manager"],
    ],
  },
  {
    title: "Research & Design",
    members: [
      ["Kassee Homolka", "Sr. UX Designer"],
      ["Lahaina Pacaoan", "UX Designer"],
      ["Ryan Flannigan", "Copy & UX Writer"],
    ],
  },
  {
    title: "Development",
    members: [
      ["Mina Oripova", "Developer"],
      ["Eddy Collado", "Developer"],
    ],
  },
];

const processSteps = [
  "Discovery",
  "Define",
  "Validate",
  "Copy & Design",
  "Prototype",
  "Development",
  "QA Process",
  "Launch",
];

const competitors = ["Tello", "Visible", "Metro by T-Mobile", "Mint Mobile", "Straight Talk", "Twigby", "Ting"];

const researchMethods = [
  {
    title: "Usability Tests",
    bullets: [
      "Evaluate the effectiveness of a user interface to improve its design",
      "Users observation of complete tasks",
      "Identify usability issues",
      "Provides insight into the user's experience",
    ],
  },
  {
    title: "First Impression",
    bullets: [
      "Assesses users' initial impression of a website or application",
      "Identifies potential issues that discourage users from using the interface",
      "Helps improve overall user experience",
    ],
  },
  {
    title: "UX Copy Testing",
    bullets: [
      "Tests in different contexts for ease of understanding and relevance",
      "Evaluates the clarity and effectiveness of brand and UX copy",
      "Used to determine the overall messaging strategy",
    ],
  },
  {
    title: "Card Sort",
    bullets: [
      "Organizes content into groups based on user preferences",
      "Helps designers understand how users categorize information",
      "Informs the design of navigation menus and other interface elements",
    ],
  },
  {
    title: "A/B Tests",
    bullets: [
      "Evaluates the performance of two designs",
      "Statistical analysis used to determine which performs better",
      "Used to increase ROI, reduce bounce rate, and guide small modifications",
    ],
  },
];

const colorPalette = [
  { name: "Coal", hex: "#171725" },
  { name: "Cinder", hex: "#525261" },
  { name: "Ash", hex: "#c4c4ca" },
  { name: "Smoke", hex: "#f5f5f6" },
  { name: "Marshmallow", hex: "#ffffff" },
  { name: "Gen Mobile Red", hex: "#ee283b" },
];

const typographyScale = [
  { label: "Header 1", weight: "Bold", size: 54 },
  { label: "Header 2", weight: "Bold", size: 44 },
  { label: "Header 3", weight: "Bold", size: 28 },
  { label: "Header 4", weight: "Semibold", size: 24 },
  { label: "Paragraph", weight: "Medium", size: 16 },
  { label: "Disclaimer", weight: "Medium", size: 12 },
];

const developmentWork = [
  {
    title: "Shopify Theme Customization",
    bullets: [
      "Updated Shopify theme to achieve desired look and feel",
      "Adapted to responsive web design principles to ensure functionality through all devices",
    ],
  },
  {
    title: "Created Product Presentation",
    bullets: ["High-quality images", "Detailed descriptions", "Pricing and variations"],
  },
  {
    title: "Developed Navigation Structure",
    bullets: ["Implemented per UX designs", "Created menus and dropdowns", "Categorized products"],
  },
  {
    title: "Tested and Debugged",
    bullets: [
      "Ensured all functionality worked as intended",
      "Identified compatibility issues by testing on different browsers/devices",
      "Debugged and fixed any errors/inconsistencies",
    ],
  },
  {
    title: "Integrated Third-Party Apps",
    bullets: [
      "Shogun, Bold Product Options, HelpCenter FAQ Chat Helpdesk",
      "Bold Store Locator Map, tawk.to, Hextom Quick Announcement Bar",
      "The Accessibly app",
    ],
  },
  {
    title: "Launched and Monitored",
    bullets: [
      "Identified the ideal launch time to minimize disruption and maximize impact",
      "Continuously monitored site performance and conversion rates",
      "Made ongoing adjustments to optimize UX and drive better results",
    ],
  },
];

const GenMobileCaseStudyContent = () => {
  return (
    <>
      <Navigation />

      <section className="relative px-4 pt-24 pb-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <a
              href={`${BASE_PATH}/ux-ui-design/`}
              className="mb-6 inline-block text-sm font-medium text-foreground/60 hover:text-foreground"
            >
              ← Back to UX/UI Design
            </a>
            <h1 className="mb-4 font-display text-4xl font-bold md:text-6xl">Case Study: GenMobile</h1>
            <div className="mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-violet" />
            <p className="max-w-2xl leading-relaxed text-foreground/70">
              Upon obtaining GenMobile, a wireless MVNO provider that serves lower-income customers and
              international families, DISH leveraged its Front End UX team to reconstruct GenMobile&apos;s
              website, enhancing the overall customer experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="01" title="The Existing Business">
            <div className="space-y-4 text-foreground/70">
              <p>
                In October 2021, DISH completed the acquisition of GenMobile, an MVNO operating on the networks
                of AT&amp;T and T-Mobile. GenMobile primarily caters to families with international connections
                and lower-income customers, many of whom are unbanked and prefer cash payments at authorized
                retailers. These retailers are typically situated in diverse neighborhoods, and their owners
                often communicate in languages other than English.
              </p>
              <p>
                GenMobile offers calling to over 100 destinations at a monthly cost starting from $20. The
                competitive pricing of their plans targets the 48 million households eligible for the Affordable
                Connectivity Program (ACP), a government subsidy significantly reducing wireless bills.
              </p>
              <p>
                With the backing of DISH&apos;s resources, GenMobile is well-positioned to broaden its outreach
                and enhance services for its target audience. However, it&apos;s noteworthy that their website
                was initially constructed in a do-it-yourself fashion on the Shopify platform without the
                involvement of a dedicated UX team, presenting opportunities for further development.
              </p>
            </div>
          </SectionHeading>

          <div className="mt-12 grid gap-10 md:grid-cols-3 md:divide-x md:divide-foreground/10">
            <div className="md:pr-8">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground/40">Customers</h3>
              <div className="space-y-2 text-sm text-foreground/70">
                <p>
                  <span className="font-semibold text-foreground">Age</span> 21–50
                </p>
                <p>
                  <span className="font-semibold text-foreground">Gender</span> Male, Female, Non-binary
                </p>
                <p>
                  <span className="font-semibold text-foreground">Race</span> All, majority Hispanic (1st and
                  2nd generation)
                </p>
              </div>
            </div>
            <div className="md:px-8">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground/40">Goals</h3>
              <ol className="space-y-2 text-sm text-foreground/70">
                {["Improve User Experience", "Improved SEO", "Streamline Content Organization", "Improved Conversion Funnel"].map(
                  (goal, i) => (
                    <li key={goal} className="flex gap-2">
                      <span className="font-semibold text-primary-text">{i + 1}</span>
                      {goal}
                    </li>
                  )
                )}
              </ol>
            </div>
            <div className="md:pl-8">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground/40">KPIs</h3>
              <p className="text-sm text-foreground/70">
                {[
                  "Bounce rate",
                  "Time on page",
                  "Task completion rate",
                  "Organic traffic",
                  "Keyword ranking",
                  "Content engagement",
                  "Exit rate",
                  "Scroll depth",
                  "Conversion rate",
                  "Abandonment rate",
                ].join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="02" title="Project Goals">
            <p className="text-foreground/70">
              Centered on user patterns, transparency, and site structure, the GenMobile team endeavored to
              address crucial pain points by developing an advanced website that enhances these three aspects.
            </p>
          </SectionHeading>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <InfoTile title="User Experience">
              <p className="text-sm text-foreground/70">
                Makes it easier for customers to navigate and use the site, such as finding information about
                plans, recharging their account, or managing their online account.
              </p>
            </InfoTile>
            <InfoTile title="Brand Awareness">
              <p className="text-sm text-foreground/70">
                Attracts more visitors to help the company stand out from competitors by highlighting its unique
                differentiators.
              </p>
            </InfoTile>
            <InfoTile title="Mobile Optimization">
              <p className="text-sm text-foreground/70">
                Reaches more customers who prefer to use their mobile devices for online transactions and
                creates a smoother overall mobile experience.
              </p>
            </InfoTile>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {teamColumns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 font-display text-lg font-bold">{col.title}</h3>
                <ul className="space-y-3">
                  {col.members.map(([name, role]) => (
                    <li key={name}>
                      <div className="font-semibold text-foreground">{name}</div>
                      <div className="text-sm text-foreground/60">{role}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="03" title="The Process">
            <p className="text-foreground/70">
              Due to the extensive involvement of a diverse, cross-functional team in this project, it was
              imperative to institute a process that fostered collaboration and coherence. This process guided
              the team toward a distinct and meaningful objective in a timely manner, ensuring that all members
              — including designers, project and account managers, copywriters, and developers — comprehended
              the project&apos;s current stage and their respective points of involvement.
            </p>
          </SectionHeading>

          <div className="flex flex-wrap items-center gap-2">
            {processSteps.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground">
                  {step}
                </span>
                {i < processSteps.length - 1 && (
                  <span className="text-foreground/30" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="04" title="Discovery">
            <p className="text-foreground/70">
              Initiating with discovery research, the process aimed to gain a profound insight into the
              business, examining its position relative to competitors, identifying its target consumers, and
              understanding its brand strategy. These factors were instrumental in guiding the creation of a
              more impactful user experience and positioning GenMobile uniquely in the market.
            </p>
          </SectionHeading>

          <div className="grid gap-6 md:grid-cols-3">
            <InfoTile title="Competitive Analysis">
              <BulletList
                items={["Strengths and weaknesses relative to competition", "Opportunities to improve design, UX and content", "Brand differentiators"]}
              />
              <div className="mt-4 flex flex-wrap gap-2">
                {competitors.map((name) => (
                  <span
                    key={name}
                    className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-xs text-foreground/60"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </InfoTile>
            <InfoTile title="Consumer Research">
              <BulletList
                items={["Sentiments toward current site", "Insights on user behavior", "What users want, need, and expect"]}
              />
            </InfoTile>
            <InfoTile title="Brand Strategy">
              <BulletList
                items={["Goals of brand strategy", "How it interacts with user experience", "Brand values and how to prioritize them"]}
              />
            </InfoTile>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="05" title="Research">
            <div className="space-y-4 text-foreground/70">
              <p>
                Incorporating thorough testing into the process empowers designers to craft interfaces that are
                not only user-friendly and intuitive but also more successful in enhancing user engagement and
                satisfaction. This approach aids in the early detection of usability issues, resulting in time
                and cost savings.
              </p>
              <p>
                Various research methods were employed to develop designs prioritizing user and business needs.
                Subsequently, Key Performance Indicators (KPIs), such as user task completion rates and user
                satisfaction scores, were used to gauge the efficacy of the newly implemented designs.
              </p>
            </div>
          </SectionHeading>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {researchMethods.map((method) => (
              <InfoTile key={method.title} title={method.title}>
                <BulletList items={method.bullets} />
              </InfoTile>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="06" title="Copy">
            <div className="space-y-4 text-foreground/70">
              <p>
                The development of the messaging strategy required a comprehensive approach, involving the
                establishment of a brand voice, the definition of a style guide, and the incorporation of UX and
                SEO best practices. Early tests indicated that the audience responded most positively to
                messaging that was simple and direct. Building upon this insight, the messaging strategy was
                crafted to adopt a straightforward voice with a focus on customer service.
              </p>
              <p>
                Furthermore, the absence of a consistent copy style guide had led to inconsistencies in elements
                such as sentence case and the use of Oxford commas. To align with other DISH brands, AP Style
                was uniformly implemented across the site. The copywriter collaborated closely with an SEO
                expert to incorporate keywords and other strategies aimed at improving Google rank and
                increasing website traffic.
              </p>
            </div>
          </SectionHeading>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="07" title="Design">
            <p className="text-foreground/70">
              Design strategy was based off the discovery research and other tests to make sure the designs
              reflected user wants and needs. One important finding was that GenMobile&apos;s audience
              prioritized price, value, and transparency with purchasing decisions, which influenced the
              design&apos;s hierarchy and visual prioritization.
            </p>
          </SectionHeading>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground/40">Color Palette</h3>
              <div className="grid grid-cols-2 gap-4">
                {colorPalette.map((color) => (
                  <div key={color.name} className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 shrink-0 rounded-full border border-foreground/10"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <div className="text-sm font-semibold text-foreground">{color.name}</div>
                      <div className="text-xs text-foreground/50">{color.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground/40">Typography</h3>
              <div className="space-y-3">
                {typographyScale.map((type) => (
                  <div
                    key={type.label}
                    className="flex items-center justify-between border-b border-foreground/10 pb-2"
                  >
                    <span className="font-semibold text-foreground">{type.label}</span>
                    <span className="text-sm text-foreground/50">
                      {type.weight} · {type.size}px
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="08" title="Development">
            <p className="text-foreground/70">
              After finalizing the design, the development phase commenced, with developers adhering to the
              outlined process. Due to the familiarity of business partners with the Shopify platform, its
              utilization was specifically requested for ease of future site maintenance. The primary
              objectives during this phase included guaranteeing accessibility, encompassing the use of screen
              readers, ensuring consistency across mobile and desktop platforms, and ensuring compatibility with
              diverse devices and screen sizes.
            </p>
          </SectionHeading>

          <div className="grid gap-6 sm:grid-cols-2">
            {developmentWork.map((item) => (
              <InfoTile key={item.title} title={item.title}>
                <BulletList items={item.bullets} />
              </InfoTile>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default GenMobileCaseStudyContent;
