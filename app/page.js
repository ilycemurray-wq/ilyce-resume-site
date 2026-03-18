export default function IlyceResumeWebsite() {
  const highlights = [
    {
      title: "HR Risk & Compliance Leadership",
      text: "Built and strengthened HR programs connecting people, policy, process, and systems across national and global environments.",
    },
    {
      title: "Controls, Audit & Governance",
      text: "Embedded compliance controls into HR workflows, led audit readiness efforts, and supported internal control validation across complex organizations.",
    },
    {
      title: "Cross-Functional Influence",
      text: "Partnered with Legal, IT, and Operations to reduce risk, improve execution, and turn regulatory requirements into practical operational processes.",
    },
    {
      title: "Process Improvement",
      text: "Used dashboards, playbooks, standardization, and automation-minded thinking to improve consistency, visibility, and compliance outcomes.",
    },
  ];

  const accomplishments = [
    "Eliminated regulatory penalties in California by launching a state-specific compliance playbook, integrating waiver tracking, and enabling on-demand time clock reporting.",
    "Designed a self-audit protocol implemented across three corporations and 300+ warehouse and manufacturing sites, improving standardized policy application and early risk detection.",
    "Reduced vendor screening costs by 25% and improved turnaround time by implementing localized oral swab testing and restructuring return-to-work protocol for reasonable suspicion cases.",
    "Spearheaded implementation of a blanket visa program that standardized documentation, reduced processing time, and supported compliant mobility between the U.S. and U.K.",
  ];

  const focusAreas = {
    "HR Operations": [
      "Employment onboarding oversight",
      "Operational process design",
      "Data integrity management",
      "Vendor management",
      "Policy development and HR handbook management",
      "Immigration program oversight",
      "Unemployment insurance management",
    ],
    Compliance: [
      "Regulatory compliance",
      "Multi-state governance",
      "Audit readiness and mid-year review",
      "Records and documentation standards",
      "Compliance dashboards",
      "Regulatory reporting: AAP, EEO-1, VETS-4212, Employment Equity Act, state equity reporting",
    ],
    "Risk & Audit Governance": [
      "HR risk assessment",
      "Corrective action standards",
      "Employee relations investigations",
      "Pay equity study",
      "SOC / SOX internal controls",
    ],
    "Technology & Systems": [
      "Workday",
      "ADP",
      "PeopleSoft",
      "SAP SuccessFactors",
      "ServiceNow",
      "AI prompting",
    ],
  };

  const operatingModel = [
    {
      function: "HR Controls & Compliance",
      raci: "R: HR Compliance  |  A: HR Leadership  |  C: Legal, IT  |  I: Operations",
      example: "Built HR control testing practices and compliance dashboards to identify gaps, support remediation, and improve visibility across locations.",
    },
    {
      function: "Regulatory Reporting",
      raci: "R: HR Compliance  |  A: HR Leadership  |  C: Legal  |  I: Executive Stakeholders",
      example: "Managed regulatory reporting requirements such as EEO-1, AAP, VETS-4212, and state reporting while translating requirements into operational processes.",
    },
    {
      function: "Policy Design & Governance",
      raci: "R: HR Compliance  |  A: HR Leadership  |  C: Legal, Operations  |  I: Managers",
      example: "Developed and implemented 20+ state-specific compliance playbooks to support consistent decision-making and reduce non-compliance risk.",
    },
    {
      function: "Audit Readiness & Controls Testing",
      raci: "R: HR Compliance  |  A: HR / Audit Leadership  |  C: IT, Legal  |  I: Executive Leadership",
      example: "Designed a self-audit protocol used across three corporations and 300+ sites to standardize policy application and surface risk early.",
    },
  ];

  const experience = [
    {
      company: "Topgolf Callaway Brands Corp.",
      role: "Manager, HR Compliance",
      dates: "November 2021 – November 2023",
      summary:
        "Led HR compliance and operations team responsible for onboarding, training, immigration, unemployment, and reporting across 80 locations in multiple U.S. jurisdictions.",
      bullets: [
        "Built a compliance dashboard with Legal, IT, and Operations leaders to identify risk indicators, remediate compliance gaps, and implement scalable policy controls.",
        "Developed and implemented 20+ state-specific compliance playbooks and trained local management teams, reducing non-compliance incidents and fines.",
        "Managed background check and drug screening vendors, negotiated contracts, reduced costs, and ensured service-level compliance.",
        "Conducted internal investigations and compliance risk assessments, presenting findings and recommendations to senior leadership.",
        "Performed internal HR control testing to validate process execution, improve data accuracy, and support audit readiness.",
      ],
    },
    {
      company: "Kraft Heinz Company",
      role: "Sr. Manager, HR Internal Compliance",
      dates: "July 2019 – November 2021",
      summary:
        "Oversaw HR compliance operations, performance management programs, process improvement, and audit readiness across 80+ U.S. locations.",
      bullets: [
        "Directed audit planning and response, establishing sustainable systems for risk mitigation.",
        "Designed and facilitated training on hiring practices, wage and hour laws, and accommodations in compliance with federal and state requirements.",
        "Developed performance standards, managed discipline processes, coached operations leaders, and improved accountability through consistent feedback frameworks.",
        "Administered onboarding and background screening compliance processes and monitored vendor deliverables.",
        "Oversaw intermittent leave and reasonable accommodation processes, ensuring compliance with ADA, FMLA, and state-specific regulations.",
        "Conducted gap analyses and compliance reporting, communicating results to executive leadership to support decision-making and reduce risk exposure.",
      ],
    },
    {
      company: "The University of Texas at Dallas",
      role: "Director, Employment Services",
      dates: "April 2013 – January 2019",
      summary:
        "Oversaw HR operations team responsible for immigration, compensation, records, and recruitment for a 5,000+ employee organization.",
      bullets: [
        "Partnered with IT to implement automated document management systems, reducing storage costs and improving retention compliance.",
        "Led development of compliant hiring and compensation practices, ensuring FLSA, EEOC, and ADA adherence.",
        "Managed F-1 and J-1 visa compliance with SEVIS and DHS, consulted on complex international employment matters, and served as the CERN liaison.",
        "Led the HR operations component of institutional accreditation, contributing to audits, compliance documentation, and internal control validation.",
      ],
    },
    {
      company: "Additional Leadership Roles",
      role: "Earlier Experience",
      dates: "2006 – Present",
      summary:
        "Additional experience includes HR compliance leadership, career services, and real estate.",
      bullets: [
        "Realtor®, Licensed in Texas | July 2023 – Present",
        "Houston City College, Career Services Specialist | April 2024 – January 2026",
        "Campbell Soup Company, Manager, HR Internal Compliance | July 2010 – April 2013",
        "Dr Pepper Snapple Group, Manager, HR Compliance & Diversity | May 2006 – July 2010",
      ],
    },
  ];

  const education = [
    {
      school: "Amberton University",
      detail: "Master of Business Administration (MBA)",
      location: "Garland, TX",
    },
    {
      school: "Missouri State University",
      detail: "Bachelor of Science, Marketing & Advertising",
      location: "Springfield, MO",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-[#2f2a24]">
      <section className="border-b border-[#e8e0d4] bg-gradient-to-b from-[#f7f5f2] to-[#f1ece4]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-[#d7c5a0] bg-[#f4ede0] px-4 py-1 text-sm text-[#8b6b2e]">
                HR Operations • Risk • Compliance • Controls
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl text-[#2f2a24]">
                Ilyce Murray
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#4d443a] md:text-xl">
                HR Operations, Risk & Compliance Leader aligning people, policy, process, and systems.
              </p>
              <p className="mt-6 max-w-3xl text-base leading-7 text-[#6b6257]">
                Experienced in HR risk management, compliance governance, internal controls, audit readiness, and operational process design across large, multi-site organizations.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#5d5449]">
                <span className="rounded-full border border-[#ddd2c2] bg-white px-4 py-2">Denton, TX</span>
                <span className="rounded-full border border-[#ddd2c2] bg-white px-4 py-2">Open to hybrid opportunities</span>
                <span className="rounded-full border border-[#ddd2c2] bg-white px-4 py-2">MBA</span>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e3d8ca] bg-white p-6 shadow-[0_10px_30px_rgba(84,68,48,0.08)]">
              <h2 className="text-lg font-semibold text-[#2f2a24]">Core Value</h2>
              <p className="mt-3 text-sm leading-7 text-[#5f564b]">
                I build HR programs that reduce risk, stand up to scrutiny, and still work in the real world. My lane sits at the intersection of compliance, operations, and systems.
              </p>
              <div className="mt-6 grid gap-3 text-sm">
                <div className="rounded-2xl border border-[#efe6da] bg-[#fcfaf7] p-4">
                  <div className="text-2xl font-semibold text-[#8b6b2e]">300+</div>
                  <div className="mt-1 text-[#776d61]">Sites influenced through self-audit protocol</div>
                </div>
                <div className="rounded-2xl border border-[#efe6da] bg-[#fcfaf7] p-4">
                  <div className="text-2xl font-semibold text-[#8b6b2e]">25%</div>
                  <div className="mt-1 text-[#776d61]">Reduction in vendor screening cost</div>
                </div>
                <div className="rounded-2xl border border-[#efe6da] bg-[#fcfaf7] p-4">
                  <div className="text-2xl font-semibold text-[#8b6b2e]">20+</div>
                  <div className="mt-1 text-[#776d61]">State-specific compliance playbooks launched</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-[28px] border border-[#e7ddd0] bg-white p-6 shadow-[0_8px_24px_rgba(84,68,48,0.05)]">
              <h3 className="text-lg font-semibold text-[#2f2a24]">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#6b6257]">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[28px] border border-[#e7ddd0] bg-white p-7 shadow-[0_8px_24px_rgba(84,68,48,0.05)]">
            <h2 className="text-2xl font-semibold text-[#2f2a24]">How I Approach Risk & Compliance</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#5f564b]">
              <p>
                I approach compliance as an operational system that strengthens execution rather than slows it down, evaluating every issue against regulatory exposure, system dependencies, and downstream risk.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Identify regulatory, contractual, and policy exposure",
                  "Validate findings using data, systems, and process dependencies",
                  "Prioritize based on statutory risk and financial exposure",
                  "Mitigate through controls, process alignment, or system design",
                  "Escalate with solutions, timelines, and clear business impact",
                ].map((step, index) => (
                  <div key={step} className="rounded-2xl border border-[#efe6da] bg-[#fcfaf7] p-4">
                    <div className="text-sm font-semibold text-[#8b6b2e]">0{index + 1}</div>
                    <p className="mt-2 text-sm leading-6 text-[#5f564b]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e7ddd0] bg-white p-7 shadow-[0_8px_24px_rgba(84,68,48,0.05)]">
            <h2 className="text-2xl font-semibold text-[#2f2a24]">Operating Model (RACI)</h2>
            <p className="mt-3 text-sm font-medium text-[#8b6b2e]">
              Example of how I structure accountability, reduce risk gaps, and support audit readiness across cross-functional teams.
            </p>
            <div className="mt-6 space-y-4">
              {operatingModel.map((item) => (
                <div key={item.function} className="rounded-2xl border border-[#efe6da] bg-[#fcfaf7] p-5">
                  <h3 className="text-base font-semibold text-[#2f2a24]">{item.function}</h3>
                  <p className="mt-2 text-sm text-[#8b6b2e]">{item.raci}</p>
                  <p className="mt-3 text-sm leading-7 text-[#5f564b]">{item.example}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[28px] border border-[#e7ddd0] bg-white p-7 shadow-[0_8px_24px_rgba(84,68,48,0.05)]">
            <h2 className="text-2xl font-semibold text-[#2f2a24]">Signature Accomplishments</h2>
            <div className="mt-6 space-y-4">
              {accomplishments.map((item, index) => (
                <div key={index} className="rounded-2xl border border-[#efe6da] bg-[#fcfaf7] p-4">
                  <div className="text-sm font-medium text-[#8b6b2e]">0{index + 1}</div>
                  <p className="mt-2 text-sm leading-7 text-[#5f564b]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e7ddd0] bg-white p-7 shadow-[0_8px_24px_rgba(84,68,48,0.05)]">
            <h2 className="text-2xl font-semibold text-[#2f2a24]">Leadership Focus</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {Object.entries(focusAreas).map(([category, items]) => (
                <div key={category} className="rounded-2xl border border-[#efe6da] bg-[#fcfaf7] p-5">
                  <h3 className="text-base font-semibold text-[#2f2a24]">{category}</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[#6b6257]">
                    {items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#c7a357]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-[#2f2a24]">Professional Experience</h2>
          </div>
        </div>

        <div className="mt-8 space-y-6">
          {experience.map((job) => (
            <details key={job.company + job.role} className="group rounded-[28px] border border-[#e7ddd0] bg-white p-6 open:bg-[#fffdfa] shadow-[0_8px_24px_rgba(84,68,48,0.05)]">
              <summary className="cursor-pointer list-none">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[#2f2a24]">{job.role}</h3>
                    <p className="mt-1 text-base text-[#8b6b2e]">{job.company}</p>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-[#6b6257]">{job.summary}</p>
                  </div>
                  <div className="rounded-full border border-[#ddd2c2] bg-[#fcfaf7] px-4 py-2 text-sm text-[#5d5449]">
                    {job.dates}
                  </div>
                </div>
                <>
  <div className="mt-4 text-sm font-medium text-[#8a7f73] group-open:hidden">
    View details
  </div>
  <div className="mt-4 hidden text-sm font-medium text-[#8a7f73] group-open:block">
    Hide details
  </div>
</>
              </summary>
              <ul className="mt-6 space-y-3 border-t border-[#efe6da] pt-6 text-sm leading-7 text-[#5f564b]">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c7a357]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] border border-[#e7ddd0] bg-white p-7 shadow-[0_8px_24px_rgba(84,68,48,0.05)]">
            <h2 className="text-2xl font-semibold text-[#2f2a24]">Education</h2>
            <div className="mt-6 space-y-4">
              {education.map((item) => (
                <div key={item.school} className="rounded-2xl border border-[#efe6da] bg-[#fcfaf7] p-5">
                  <h3 className="text-lg font-semibold text-[#2f2a24]">{item.school}</h3>
                  <p className="mt-1 text-[#4d443a]">{item.detail}</p>
                  <p className="mt-1 text-sm text-[#8a7f73]">{item.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e7ddd0] bg-white p-7 shadow-[0_8px_24px_rgba(84,68,48,0.05)]">
            <h2 className="text-2xl font-semibold text-[#2f2a24]">Best-Fit Roles</h2>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#5d5449]">
              {[
                "HR Control Director",
                "HR Risk Director",
                "HR Governance Lead",
                "Operational Risk Leader, People Functions",
                "HR Compliance Director",
                "People Risk & Controls Leader",
              ].map((role) => (
                <span key={role} className="rounded-full border border-[#ddd2c2] bg-[#fcfaf7] px-4 py-2">
                  {role}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#ead8b1] bg-[#fbf5e8] p-5">
              <h3 className="text-lg font-semibold text-[#7a5c22]">Brand Positioning</h3>
              <p className="mt-3 text-sm leading-7 text-[#5f564b]">
                Not just HR compliance. Operational risk management for HR functions, with strong grounding in controls, governance, systems, and policy execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
        <div className="rounded-[32px] border border-[#e3d8ca] bg-white px-7 py-10 text-center shadow-[0_10px_30px_rgba(84,68,48,0.08)]">
          <h2 className="text-2xl font-semibold text-[#2f2a24]">Let’s Connect</h2>
          <p className="mt-3 text-sm leading-7 text-[#6b6257]">
            Open to leadership opportunities in HR risk, compliance, governance, and operations.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-[#4d443a] sm:grid-cols-3">
  <a
    className="rounded-2xl border border-[#efe6da] bg-[#fcfaf7] px-4 py-3 text-center hover:text-[#8b6b2e]"
    href="mailto:ilycemurray@gmail.com"
  >
    ilycemurray@gmail.com
  </a>
  <a
    className="rounded-2xl border border-[#efe6da] bg-[#fcfaf7] px-4 py-3 text-center hover:text-[#8b6b2e]"
    href="https://www.linkedin.com/in/ilycemurray"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn Profile
  </a>
  <div className="rounded-2xl border border-[#efe6da] bg-[#fcfaf7] px-4 py-3 text-center">
    Denton, TX
  </div>
</div>
        </div>
      </section>
    </div>
  );
}
