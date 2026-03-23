import type { Engagement, Stakeholder, ActivityLogEntry, NewsItem } from './types'

// ─── ADDITIONAL ENGAGEMENTS ─────────────────────────────────────────────────
export const extraEngagements: Engagement[] = [
  // Almatis (c5)
  {
    id: 'e15', clientId: 'c5', name: 'SAP Content Externalization & SharePoint Migration', serviceType: 'solution_delivery', status: 'complete',
    startDate: '2021-03-01', endDate: '2023-02-28', budget: '$720K EUR',
    summary: 'Reduced Almatis\' overloaded SAP ECC database by 40% by externalizing content to SharePoint Online via DocuFlow. Covered 14 production sites across Europe and Asia. Included information architecture design, metadata mapping, and phased content migration of 6.2M documents with zero production downtime.',
    technologies: ['DocuFlow', 'SAP ECC', 'SharePoint Online', 'Microsoft 365'],
    teamMembers: [{ memberId: 't2', role: 'Engagement Lead' }, { memberId: 't9', role: 'Technical Lead' }, { memberId: 't13', role: 'Business Analyst' }],
    stakeholderIds: ['s21', 's22'],
  },
  {
    id: 'e16', clientId: 'c5', name: 'SharePoint Managed Services – Almatis', serviceType: 'managed_services', status: 'active',
    startDate: '2023-03-01', budget: '$220K EUR/year',
    summary: 'Ongoing managed services for Almatis\' SharePoint Online environment post-migration. Covers environment governance, site provisioning, access management, DocuFlow version upgrades, and SLA-backed incident response across all 14 global sites.',
    technologies: ['DocuFlow', 'SharePoint Online', 'Microsoft 365'],
    teamMembers: [{ memberId: 't15', role: 'Service Lead' }, { memberId: 't9', role: 'Technical Support' }],
    stakeholderIds: ['s22'],
  },
  // EBSCO Industries (c4)
  {
    id: 'e17', clientId: 'c4', name: 'SAP to SharePoint Online Migration via DocuFlow', serviceType: 'solution_delivery', status: 'complete',
    startDate: '2021-06-01', endDate: '2022-09-30', budget: '$520K USD',
    summary: 'Migrated 4.5M documents and 4TB of data from EBSCO\'s legacy SAP ECC storage to Microsoft 365 SharePoint Online using DocuFlow. Included automated email capture via Collabmail integration, reducing SAP database load by 62% and eliminating $180K/year in legacy storage costs. Engagement delivered on time and under budget.',
    technologies: ['DocuFlow', 'SAP ECC', 'SharePoint Online', 'Microsoft 365'],
    teamMembers: [{ memberId: 't6', role: 'Engagement Lead' }, { memberId: 't8', role: 'Implementation Lead' }, { memberId: 't13', role: 'Business Analyst' }],
    stakeholderIds: ['s23', 's24'],
  },
  // University of Mississippi (c6)
  {
    id: 'e18', clientId: 'c6', name: 'SAP to Box Document Migration', serviceType: 'solution_delivery', status: 'complete',
    startDate: '2021-02-01', endDate: '2022-04-30', budget: '$310K USD',
    summary: 'Migrated 3 million documents from Ole Miss\'s legacy SAP ECC storage to Box via DocuFlow across 5 regional campuses and 18 departments. Delivered 45 days ahead of schedule. Resulted in $750K–$1M in projected 5-year savings through eliminated legacy licensing, reduced storage costs, and faster backup cycles. Quote from Director Al Ling: "Within 45 minutes of our first call, I knew this is who we wanted to work with."',
    technologies: ['DocuFlow', 'SAP ECC', 'Box'],
    teamMembers: [{ memberId: 't6', role: 'Engagement Lead' }, { memberId: 't8', role: 'Implementation Lead' }, { memberId: 't7', role: 'Business Analyst' }],
    stakeholderIds: ['s25', 's26'],
  },
  // BC Liquor (c10)
  {
    id: 'e19', clientId: 'c10', name: 'Records Management & Information Governance Program', serviceType: 'advisory', status: 'complete',
    startDate: '2022-01-10', endDate: '2023-03-31', budget: '$430K CAD',
    summary: 'Delivered a comprehensive records management and IG program for BCLDB aligned with BC Government ARCS/ORCS retention schedules. Covered 9 program areas including procurement, HR, legal, and operations. Deliverables included records taxonomy, retention schedule, disposition authorities, SharePoint governance model, and an IG policy suite. Staff training delivered to 340+ employees.',
    technologies: ['SharePoint Online', 'Microsoft 365'],
    teamMembers: [{ memberId: 't10', role: 'Engagement Lead' }, { memberId: 't3', role: 'PMO Lead' }, { memberId: 't14', role: 'Change Management' }],
    stakeholderIds: ['s27', 's28'],
  },
  // Boston Pizza (c12)
  {
    id: 'e20', clientId: 'c12', name: 'Franchise Operations Document Management', serviceType: 'solution_delivery', status: 'complete',
    startDate: '2022-04-01', endDate: '2023-01-31', budget: '$210K CAD',
    summary: 'Built a centralized franchise document management solution on SharePoint Online for Boston Pizza\'s 380+ Canadian franchise locations. Automated franchise agreement distribution, operational manual versioning, health & safety documentation, and royalty reporting workflows. Reduced document retrieval time by 70% and eliminated manual courier distribution.',
    technologies: ['SharePoint Online', 'Microsoft 365'],
    teamMembers: [{ memberId: 't4', role: 'Engagement Lead' }, { memberId: 't7', role: 'Business Analyst' }, { memberId: 't12', role: 'Project Manager' }],
    stakeholderIds: ['s29', 's30'],
  },
  // Winnipeg Regional Health (c15)
  {
    id: 'e21', clientId: 'c15', name: 'Automation First Workshop – Winnipeg Health', serviceType: 'advisory', status: 'active',
    startDate: '2026-01-15', budget: 'Pre-sales (no charge)',
    summary: 'Two-stage Automation First Workshop initiated following a referral from PHSA\'s Dr. Catherine Lam. Executive briefing with CIO completed in January 2026 — identified clinical document management, patient record access, and claims processing as top automation opportunities. Half-day workshop with IT and Health Records leadership scheduled for March 2026. Formal proposal expected to be submitted post-workshop.',
    technologies: ['IBM CP4BA'],
    teamMembers: [{ memberId: 't5', role: 'Account Lead' }, { memberId: 't1', role: 'Executive Advisory' }, { memberId: 't10', role: 'Advisory Lead' }],
    stakeholderIds: ['s31', 's32'],
  },
  // Pacific Northwest Energy (c16)
  {
    id: 'e22', clientId: 'c16', name: 'SAP to Box Content Migration', serviceType: 'solution_delivery', status: 'complete',
    startDate: '2023-03-01', endDate: '2024-01-31', budget: '$380K USD',
    summary: 'Full migration of 2.1M documents from Pacific Northwest Energy\'s SAP ECC content repository to Box using DocuFlow. Covered operational, environmental compliance, and regulatory documentation across 6 energy facilities in Washington and Oregon. Migration completed with 99.97% accuracy and zero production interruptions.',
    technologies: ['DocuFlow', 'SAP ECC', 'Box'],
    teamMembers: [{ memberId: 't6', role: 'Engagement Lead' }, { memberId: 't11', role: 'Solution Architect' }, { memberId: 't8', role: 'Implementation Lead' }],
    stakeholderIds: ['s33', 's34'],
  },
  {
    id: 'e23', clientId: 'c16', name: 'Application Managed Services – PNEC', serviceType: 'managed_services', status: 'active',
    startDate: '2024-02-01', budget: '$130K USD/year',
    summary: 'Ongoing managed services for PNEC\'s DocuFlow and Box environment. Covers environment monitoring, quarterly health checks, DocuFlow version management, and SLA-backed incident resolution for the 6-site energy operation.',
    technologies: ['DocuFlow', 'Box'],
    teamMembers: [{ memberId: 't15', role: 'Service Lead' }, { memberId: 't11', role: 'Technical Support' }],
    stakeholderIds: ['s33'],
  },
  // Meridian Credit Union (c17)
  {
    id: 'e24', clientId: 'c17', name: 'Automation First Workshop – Meridian', serviceType: 'advisory', status: 'active',
    startDate: '2026-02-01', budget: 'Pre-sales (no charge)',
    summary: 'Automation First Workshop initiated after CIO Patricia Brennan reached out following the BlueShore Financial case study. Executive briefing completed February 2026 — strong interest in replicating BlueShore\'s JETstream model for lending and member onboarding automation using IBM FileNet. Half-day workshop with IT, Operations, and Lending leadership scheduled for April 2026.',
    technologies: ['IBM FileNet'],
    teamMembers: [{ memberId: 't4', role: 'Account Lead' }, { memberId: 't1', role: 'Executive Advisory' }],
    stakeholderIds: ['s35', 's36'],
  },
]

// ─── ADDITIONAL STAKEHOLDERS ─────────────────────────────────────────────────
export const extraStakeholders: Stakeholder[] = [
  // Almatis (c5)
  {
    id: 's21', clientId: 'c5', name: 'Vlad Lavysh', title: 'Global Director, IT', email: 'v.lavysh@almatis.com',
    phone: '+49-69-555-0100', influenceLevel: 'high', relationshipHealth: 'green', isHero: false,
    notes: 'Primary IT sponsor for all VFC engagements. Strong technical background, very hands-on. Quote from case study: "The experience of working with the entire VersaFile team was really outstanding." Highly satisfied with the SAP content externalization outcome.',
  },
  {
    id: 's22', clientId: 'c5', name: 'Stefan Müller', title: 'VP Operations, EMEA', email: 's.muller@almatis.com',
    phone: '+49-69-555-0201', influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Business sponsor for the externalization project. Focused on operational continuity across the 14 global sites. Approved the managed services extension after delivery quality exceeded expectations.',
  },
  // EBSCO Industries (c4)
  {
    id: 's23', clientId: 'c4', name: 'Mike Chen', title: 'Director, Information Technology', email: 'm.chen@ebsco.com',
    phone: '+1 205-555-0144', influenceLevel: 'high', relationshipHealth: 'green', isHero: false,
    notes: 'Primary IT sponsor. Drove the decision to replace legacy SAP storage with M365. Technically very capable — was actively involved in architecture discussions. Relationship remains warm despite engagement being complete. Worth a quarterly check-in.',
  },
  {
    id: 's24', clientId: 'c4', name: 'Sarah Thornton', title: 'SAP Systems Administrator', email: 's.thornton@ebsco.com',
    influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Day-to-day technical contact during migration. Exceptional SAP knowledge. Helped accelerate the metadata mapping phase. Relationship good but no active engagement to maintain it.',
  },
  // University of Mississippi (c6)
  {
    id: 's25', clientId: 'c6', name: 'Al Ling', title: 'Director, Business Applications & ERP Support', email: 'al.ling@olemiss.edu',
    phone: '+1 662-555-0188', influenceLevel: 'high', relationshipHealth: 'green', isHero: false,
    notes: 'Primary contact and internal champion throughout the engagement. Publicly quoted in VFC case study. Very enthusiastic about the outcome and has mentioned VFC positively at two EDUCAUSE conferences. Good warm reference.',
  },
  {
    id: 's26', clientId: 'c6', name: 'James Patterson', title: 'VP Finance & Administration', email: 'j.patterson@olemiss.edu',
    influenceLevel: 'medium', relationshipHealth: 'yellow', isHero: false,
    notes: 'Budget approver for the engagement. Signed off quickly once ROI case was presented. Limited ongoing relationship — would need a strong new proposal to re-engage.',
  },
  // BC Liquor (c10)
  {
    id: 's27', clientId: 'c10', name: 'Rachel Kim', title: 'Director, Records & Information Management', email: 'r.kim@bcldb.com',
    phone: '+1 604-555-0392', influenceLevel: 'high', relationshipHealth: 'green', isHero: true,
    heroReason: 'Championed the IG program against significant internal skepticism. Secured executive buy-in and accelerated timeline approvals. Has recommended VFC to contacts at two other BC Crown corporations.',
    heroMaintenanceNotes: 'Quarterly coffee catch-ups with Priya Nair. Invited to VFC information governance webinars as co-presenter.',
    notes: 'Rachel is our strongest advocate at BCLDB. IG practitioner at heart — deeply knowledgeable. Excellent reference and referral source for government/Crown corp sector.',
  },
  {
    id: 's28', clientId: 'c10', name: 'Tom Sullivan', title: 'Chief Information Officer', email: 't.sullivan@bcldb.com',
    influenceLevel: 'high', relationshipHealth: 'yellow', isHero: false,
    notes: 'Approved the engagement but not deeply engaged day-to-day. Relationship is polite but transactional. Would benefit from an exec-level touchpoint — suggest Tayo hosts a lunch next quarter.',
  },
  // Boston Pizza (c12)
  {
    id: 's29', clientId: 'c12', name: 'David Wong', title: 'Director, Franchise Operations', email: 'd.wong@bostonpizza.com',
    phone: '+1 604-555-0517', influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Primary business sponsor for the franchise document management project. Very satisfied with the outcome — mentioned it saved his team roughly 15 hours per week in manual document handling. Warm relationship. Unlikely to have a near-term follow-on project.',
  },
  {
    id: 's30', clientId: 'c12', name: 'Jennifer Mills', title: 'IT Manager', email: 'j.mills@bostonpizza.com',
    influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Day-to-day project contact. Organized, good communicator. Managed internal UAT process well. Would be a useful reference for mid-market retail/franchise sector prospects.',
  },
  // Winnipeg Regional Health (c15)
  {
    id: 's31', clientId: 'c15', name: 'Dr. Sandra Peters', title: 'Chief Information Officer', email: 's.peters@wrha.mb.ca',
    influenceLevel: 'high', relationshipHealth: 'yellow', isHero: false,
    notes: 'Economic buyer and executive decision-maker. Attended the executive briefing with Tayo — engaged but cautious about budget. Wants to see the IBM CP4BA ROI model before committing. Federal funding announcement in Feb 2026 may accelerate the timeline. Referred by Dr. Catherine Lam at PHSA.',
  },
  {
    id: 's32', clientId: 'c15', name: 'Michael Obi', title: 'Director, Health Records & Information', email: 'm.obi@wrha.mb.ca',
    phone: '+1 204-555-0631', influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Day-to-day workshop contact. Enthusiastic about automation — has been advocating internally for modernization for 2 years. Very collaborative. Will be our internal champion if the deal moves forward.',
  },
  // Pacific Northwest Energy (c16)
  {
    id: 's33', clientId: 'c16', name: 'James Hendricks', title: 'Chief Technology Officer', email: 'j.hendricks@pnec.com',
    influenceLevel: 'high', relationshipHealth: 'green', isHero: true,
    heroReason: 'Approved both the migration and managed services engagements quickly and championed VFC to other Pacific Northwest energy operators. Has introduced VFC to contacts at two regional utilities.',
    heroMaintenanceNotes: 'Monthly managed services reviews, included in VFC Box partner events, annual Seattle dinner.',
    notes: 'James is an exceptional champion. Very ROI-driven — appreciated our detailed migration accuracy reporting. Exploring expanding DocuFlow to cover environmental compliance documentation in 2026.',
  },
  {
    id: 's34', clientId: 'c16', name: 'Linda Torres', title: 'IT Director', email: 'l.torres@pnec.com',
    phone: '+1 206-555-0744', influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Operational contact for managed services. Very organized. Sends monthly IT health reports and flags issues early. Excellent working relationship with Marcus Webb.',
  },
  // Meridian Credit Union (c17)
  {
    id: 's35', clientId: 'c17', name: 'Patricia Brennan', title: 'Chief Information Officer', email: 'p.brennan@meridiancu.ca',
    influenceLevel: 'high', relationshipHealth: 'yellow', isHero: false,
    notes: 'Reached out directly after reading the BlueShore case study. Very motivated but dealing with internal budget constraints from a core banking system upgrade. The workshop needs to clearly demonstrate ROI before she can make a business case to the board.',
  },
  {
    id: 's36', clientId: 'c17', name: 'Chris Yamamoto', title: 'Director, Digital Banking', email: 'c.yamamoto@meridiancu.ca',
    phone: '+1 905-555-0852', influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Internal champion alongside Patricia. Excited about the lending automation use case — has quantified the manual effort in their current process as 2,400 staff-hours per year. This is a strong anchor for the ROI case.',
  },
  // Great West Casualty (additional)
  {
    id: 's37', clientId: 'c14', name: 'Robert Perkins', title: 'VP Technology', email: 'r.perkins@gwccnet.com',
    influenceLevel: 'high', relationshipHealth: 'yellow', isHero: false,
    notes: 'Senior executive overseeing the managed services contract. Low-engagement relationship — receives quarterly status reports. Has not raised concerns but also not responsive to expansion conversations. Would benefit from an exec-level outreach from Tayo or Greg.',
  },
  {
    id: 's38', clientId: 'c14', name: 'Amanda Chase', title: 'FileNet Administrator', email: 'a.chase@gwccnet.com',
    phone: '+1 402-555-0905', influenceLevel: 'low', relationshipHealth: 'green', isHero: false,
    notes: 'Day-to-day managed services contact. Technically skilled FileNet admin. Very responsive. Logs tickets clearly with good diagnostic info — makes Marcus Webb\'s life easy.',
  },
  // Alberta Pensions (additional)
  {
    id: 's39', clientId: 'c11', name: 'Lisa Beaumont', title: 'Director, Change Management', email: 'l.beaumont@apsc.ab.ca',
    phone: '+1 780-555-0766', influenceLevel: 'medium', relationshipHealth: 'yellow', isHero: false,
    notes: 'Responsible for staff adoption and training across the 400+ users impacted by the OpenText-to-SharePoint migration. Initially skeptical about the migration timeline — Amira Hassan is managing this closely with weekly touchpoints.',
  },
]

// ─── ADDITIONAL ACTIVITY LOG ─────────────────────────────────────────────────
export const extraActivity: ActivityLogEntry[] = [
  // Almatis
  {
    id: 'a12', clientId: 'c5', authorName: 'Menke Bonnema', authorInitials: 'MB',
    note: 'Monthly managed services review with Stefan Müller. All SLAs green. DocuFlow v3.2 upgrade confirmed for April 2026 maintenance window — Stefan approved the change window. No issues raised.',
    createdAt: '2026-02-18T10:00:00Z',
  },
  {
    id: 'a13', clientId: 'c5', authorName: 'Tayo Runsewe', authorInitials: 'TR',
    note: 'Received a warm introduction from Vlad Lavysh to the Global IT Director at Röchling Group — a German manufacturing company with a similar SAP content profile. Josef Hans Lara to follow up. Strong lead from a very satisfied client.',
    createdAt: '2025-11-05T14:00:00Z',
  },
  {
    id: 'a14', clientId: 'c5', authorName: 'Marcus Webb', authorInitials: 'MW',
    note: 'P3 incident — SharePoint site permissions issue at the Rotterdam facility caused 12 users to lose access to their shared document library. Identified root cause (admin error during a routine access review). Resolved in 4 hours. Post-incident report sent to Vlad Lavysh. Implementing an additional permissions validation step in monthly health checks.',
    createdAt: '2025-09-22T16:30:00Z',
  },
  // EBSCO
  {
    id: 'a15', clientId: 'c4', authorName: 'Greg Van Wormer', authorInitials: 'GV',
    note: 'Sent Mike Chen our annual relationship check-in email. He replied warmly — mentioned the migration is still delivering value and their SAP database is 60%+ smaller than before. No active project but indicated EBSCO is considering a SharePoint governance review for 2027. Worth keeping warm.',
    createdAt: '2026-01-10T09:00:00Z',
  },
  {
    id: 'a16', clientId: 'c4', authorName: 'Greg Van Wormer', authorInitials: 'GV',
    note: 'Shared the Almatis case study with Mike Chen — similar SAP content externalization story. He was impressed and asked if we could present to their CTO. Potential re-engagement opportunity. Flagged to Josef for follow-up.',
    createdAt: '2025-08-14T11:00:00Z',
  },
  // Ole Miss
  {
    id: 'a17', clientId: 'c6', authorName: 'Greg Van Wormer', authorInitials: 'GV',
    note: 'Al Ling reached out — Ole Miss is evaluating AI-powered document search for their library and research systems. Asked if VFC has experience in this space. Forwarded to Tayo and Priya. Could be an interesting new advisory engagement, though scope is different from our core SAP content work.',
    createdAt: '2026-02-01T13:30:00Z',
  },
  {
    id: 'a18', clientId: 'c6', authorName: 'Greg Van Wormer', authorInitials: 'GV',
    note: 'Al Ling presented the Box migration case study at EDUCAUSE Annual Conference — mentioned VFC by name. Two attendees asked him for our contact details. Josef following up with both. Excellent unsolicited advocacy.',
    createdAt: '2025-10-18T09:00:00Z',
  },
  // BC Liquor
  {
    id: 'a19', clientId: 'c10', authorName: 'Priya Nair', authorInitials: 'PN',
    note: 'Quarterly coffee with Rachel Kim. She\'s being promoted to Director of Enterprise Information Management — a newly created role. This is a strong positive signal for VFC: her mandate is expanding and she\'s explicitly interested in a SharePoint governance maturity assessment. Potential new $200–300K engagement.',
    createdAt: '2026-02-22T11:00:00Z',
  },
  {
    id: 'a20', clientId: 'c10', authorName: 'May Agoha', authorInitials: 'MA',
    note: 'Project closure meeting and lessons learned session with Rachel Kim and Tom Sullivan. Tom Sullivan gave formal sign-off on the IG program deliverables. Rachel rated the engagement 9/10 — noted the change management training as a highlight. Tom less engaged but no concerns raised. Engagement officially closed.',
    createdAt: '2023-04-05T14:00:00Z',
  },
  // Boston Pizza
  {
    id: 'a21', clientId: 'c12', authorName: 'Tavis Agnew', authorInitials: 'TA',
    note: 'Annual check-in call with David Wong. Relationship warm. He mentioned Boston Pizza is going through a major IT refresh in 2026-2027 — new ERP evaluation underway. Could be a re-engagement opportunity if they land on SAP. Worth monitoring. Jennifer Mills has left the company.',
    createdAt: '2026-01-15T10:00:00Z',
  },
  {
    id: 'a22', clientId: 'c12', authorName: 'Tavis Agnew', authorInitials: 'TA',
    note: 'Project closure celebration dinner with David Wong and Jennifer Mills. Both very positive about the outcome. David mentioned the document retrieval time for franchise operations teams dropped from hours to minutes. VFC invited to present at their annual operations leadership summit in Q1 2024.',
    createdAt: '2023-02-08T19:00:00Z',
  },
  // Winnipeg Regional Health
  {
    id: 'a23', clientId: 'c15', authorName: 'Josef Hans Lara', authorInitials: 'JL',
    note: 'Federal government announced $180M investment in Manitoba health care modernization — WRHA is a primary recipient. Sent Dr. Sandra Peters a congratulatory note and flagged that this significantly strengthens the business case for IBM CP4BA investment. She responded positively. Workshop timing now looks more favorable.',
    createdAt: '2026-02-15T09:30:00Z',
  },
  {
    id: 'a24', clientId: 'c15', authorName: 'Tayo Runsewe', authorInitials: 'TR',
    note: 'Executive briefing with Dr. Sandra Peters completed. Presented VFC\'s healthcare content management track record (PHSA, Sunnybrook). Dr. Peters was engaged, asked sharp questions about WRHA-specific data sovereignty requirements. Michael Obi clearly prepared — he had pre-read the PHSA case study. Strong start.',
    createdAt: '2026-01-20T15:00:00Z',
  },
  // Pacific Northwest Energy
  {
    id: 'a25', clientId: 'c16', authorName: 'Greg Van Wormer', authorInitials: 'GV',
    note: 'James Hendricks introduced us to the CTO at Cascade Natural Gas over email — described VFC as "the only content management partner we\'ve ever trusted." Josef following up. This is the second warm lead from James this quarter.',
    createdAt: '2026-02-28T11:00:00Z',
  },
  {
    id: 'a26', clientId: 'c16', authorName: 'Marcus Webb', authorInitials: 'MW',
    note: 'Q4 2025 managed services health review with Linda Torres. All SLAs green for the quarter. Uptime: 99.96%. One P3 incident (DocuFlow indexing lag during a large batch upload) resolved within SLA. Linda raised interest in adding environmental compliance doc workflows to the managed scope — flagged to Greg for scoping.',
    createdAt: '2026-01-08T10:00:00Z',
  },
  // Meridian Credit Union
  {
    id: 'a27', clientId: 'c17', authorName: 'Tavis Agnew', authorInitials: 'TA',
    note: 'Executive briefing with Patricia Brennan and Chris Yamamoto completed. Presented BlueShore Financial case study in detail — strong parallels to Meridian\'s lending and member onboarding workflows. Patricia was visibly impressed by the 250% lending volume stat. Chris confirmed their team manually processes ~2,400 staff-hours per year in document handling. ROI case is strong. Workshop confirmed for April.',
    createdAt: '2026-02-10T14:00:00Z',
  },
  {
    id: 'a28', clientId: 'c17', authorName: 'Josef Hans Lara', authorInitials: 'JL',
    note: 'Initial discovery call with Patricia Brennan. She reached out via LinkedIn after reading BlueShore case study on our website. Very warm intro — she asked specifically whether VFC could replicate the BlueShore model for a credit union of Meridian\'s size. Tavis and Tayo to lead the executive briefing.',
    createdAt: '2025-12-05T11:00:00Z',
  },
  // Great West Casualty
  {
    id: 'a29', clientId: 'c14', authorName: 'Marcus Webb', authorInitials: 'MW',
    note: 'Q1 2026 managed services quarterly review sent to Robert Perkins and Amanda Chase. All SLAs green. Zero P1/P2 incidents this quarter. FileNet environment stable. Amanda confirmed they are evaluating an upgrade to FileNet 5.6 — flagged to Carlos Diego to prepare an upgrade proposal.',
    createdAt: '2026-02-03T09:00:00Z',
  },
  {
    id: 'a30', clientId: 'c14', authorName: 'Greg Van Wormer', authorInitials: 'GV',
    note: 'Reached out to Robert Perkins about exploring IBM CP4BA as a next-generation platform for GWC. He was receptive but noted a major policy system migration is consuming all IT budget for 2026. Revisit conversation in Q1 2027.',
    createdAt: '2025-10-20T13:00:00Z',
  },
  // Alberta Pensions
  {
    id: 'a31', clientId: 'c11', authorName: 'Kwame Botchway', authorInitials: 'KB',
    note: 'Migration Phase 2 complete — 1.4M of 2.8M documents migrated to SharePoint. Phase 3 on track for May 2026 completion. Kevin Tran attended the Phase 2 demo and gave verbal approval. Wendy Chu flagged a metadata mapping issue for HR records — resolved in 48 hours. On schedule, on budget.',
    createdAt: '2026-02-26T16:00:00Z',
  },
  {
    id: 'a32', clientId: 'c11', authorName: 'Amira Hassan', authorInitials: 'AH',
    note: 'Change management session with Lisa Beaumont — 45 staff from Finance and HR attended the first SharePoint training workshop. Adoption better than expected; only 8 support tickets raised vs. projected 30. Lisa has softened considerably on the timeline concerns after seeing the Phase 1 outcome quality.',
    createdAt: '2026-01-30T14:00:00Z',
  },
  // Canada Life
  {
    id: 'a33', clientId: 'c13', authorName: 'Josef Hans Lara', authorInitials: 'JL',
    note: 'Confidential update from Lisa Fontaine: the CFO has approved moving the FileNet modernization to the 2026 capital budget shortlist. Andrew Porter now needs one more internal review — a risk assessment from the CTO office. Lisa believes this is formality. We could be very close. Keeping Tayo on standby for an exec-level call if needed.',
    createdAt: '2026-03-02T10:00:00Z',
  },
  // Sunnybrook
  {
    id: 'a34', clientId: 'c8', authorName: 'Tavis Agnew', authorInitials: 'TA',
    note: 'Phase 1 milestone: clinical document workflows for Cardiology and Oncology are live on IBM CP4BA. Paul Stratton sent a personal email commending the team. Nadia Volkov confirmed health records team adoption is ahead of plan. Phase 2 scope confirmed — adding Emergency and Surgical departments.',
    createdAt: '2026-02-18T09:00:00Z',
  },
  {
    id: 'a35', clientId: 'c8', authorName: 'Sofia Reyes', authorInitials: 'SR',
    note: 'Risk register delivered to Paul Stratton ahead of steering committee as requested. Three items flagged: (1) EHR API version dependency, (2) data sovereignty for cloud-hosted records, (3) Phase 2 resource overlap with planned hospital network upgrade. All items have mitigation plans. Steering committee went well.',
    createdAt: '2026-03-01T11:00:00Z',
  },
  // Canadian Western Bank
  {
    id: 'a36', clientId: 'c9', authorName: 'Carlos Diego', authorInitials: 'CD',
    note: 'Loan automation Phase 1 delivered — commercial lending document intake and classification workflows are live for 3 pilot branches. Erin Johansson attended the go-live demo and was visibly pleased. Brian MacLeod sent a brief "well done" email — notable given his earlier skepticism. Expansion to all 32 branches scheduled for Q3 2026.',
    createdAt: '2026-02-28T15:00:00Z',
  },
]

// ─── COMPANY NEWS ─────────────────────────────────────────────────────────────
export const clientNews: Record<string, Array<{ title: string; source: string; date: string; summary: string }>> = {
  c1: [
    { title: 'BlueShore Financial Named One of BC\'s Best Workplaces 2025', source: 'Great Place to Work Canada', date: '2025-12-10', summary: 'BlueShore ranked in the top 10 among mid-size financial services employers in BC, citing culture, work-life balance, and career growth.' },
    { title: 'BlueShore Expands Private Banking Services to Kelowna', source: 'Business in Vancouver', date: '2025-11-04', summary: 'New Kelowna branch targets the Okanagan\'s growing high-net-worth segment, adding wealth management, lending, and private banking services.' },
    { title: 'BlueShore Reports 18% Growth in AUM to $8.4B', source: 'BlueShore Financial Press', date: '2026-01-28', summary: 'Strong lending and investment performance drove record assets under management in 2025, with commercial lending volume up 22% year-over-year.' },
  ],
  c2: [
    { title: 'Equinor Hits Record Quarterly Renewables Output in Q4 2025', source: 'Reuters', date: '2026-02-06', summary: 'Equinor\'s offshore wind capacity exceeded 4 GW for the first time, with Dogger Bank A turbines generating at full capacity. North Sea oil production also above guidance.' },
    { title: 'Equinor and Microsoft Partner on AI-Powered Asset Management Platform', source: 'Equinor Press Release', date: '2025-12-18', summary: 'Multi-year agreement to deploy Azure AI and digital twin technology across Equinor\'s global upstream assets, targeting $400M in operational efficiency gains.' },
    { title: 'Equinor Reports $10.2B Full-Year 2025 Net Income', source: 'Financial Times', date: '2026-01-31', summary: 'Strong commodity prices and cost discipline drove full-year results above analyst consensus. CEO flagged continued investment in both renewables and oil & gas efficiency.' },
  ],
  c3: [
    { title: 'Crescent Energy Completes Acquisition of SilverBow Resources for $2.1B', source: 'PR Newswire', date: '2025-10-15', summary: 'Acquisition significantly expands Crescent\'s Eagle Ford Shale position, adding 100,000+ net acres and boosting total production by ~40%.' },
    { title: 'Crescent Energy Reports Q4 2025 Production Growth of 34% YoY', source: 'Business Wire', date: '2026-02-20', summary: 'Record quarterly production of 242 MBoe/d driven by the SilverBow integration and strong operational execution. Full-year 2026 guidance raised.' },
    { title: 'Crescent Energy Launches $500M ESG-Linked Credit Facility', source: 'S&P Global', date: '2025-11-08', summary: 'Pricing tied to methane intensity and freshwater use reduction targets, reflecting Crescent\'s growing focus on responsible energy development.' },
  ],
  c4: [
    { title: 'EBSCO Launches AI-Powered Research Discovery Platform for Academic Libraries', source: 'EBSCO Press', date: '2025-10-22', summary: 'EBSCO Discovery Service enhanced with generative AI to surface cross-database research connections, improving discovery time by up to 60% in beta testing.' },
    { title: 'EBSCO Industries Named to Forbes Best Midsize Employers 2025', source: 'Forbes', date: '2025-09-15', summary: 'EBSCO recognized for culture, benefits, and career development across its diversified portfolio of information services and industrial businesses.' },
  ],
  c5: [
    { title: 'Almatis Opens New R&D Center in Frankfurt, Doubles Innovation Capacity', source: 'Almatis Press Release', date: '2025-11-12', summary: 'New 3,500 sqm facility focuses on next-generation alumina materials for EV battery, semiconductor, and aerospace applications.' },
    { title: 'Almatis Expands Rotterdam Production by 25% to Meet EV Demand', source: 'Chemical Week', date: '2026-01-20', summary: 'Capacity expansion of the Rotterdam tabular alumina facility responds to surging demand from European EV battery manufacturers seeking high-purity materials.' },
    { title: 'Almatis Reports Record Revenue of €680M in 2025 Fiscal Year', source: 'Almatis Annual Report', date: '2026-02-14', summary: 'Revenue growth of 14% driven by strong demand from EV, semiconductor, and specialty glass sectors. Global headcount grew to 2,400 employees.' },
  ],
  c6: [
    { title: 'University of Mississippi Receives $67M Federal Grant for STEM Research Infrastructure', source: 'Ole Miss News', date: '2025-12-09', summary: 'NSF-funded grant will upgrade computational research facilities and establish a new data science institute serving faculty across all 5 campuses.' },
    { title: 'Ole Miss Ranked in Top 50 Nationally for Digital Learning Innovation', source: 'EdTech Magazine', date: '2025-09-30', summary: 'Recognition cites Ole Miss\'s cloud-first document strategy, AI-assisted learning tools, and rapid expansion of online program delivery.' },
  ],
  c7: [
    { title: 'PHSA Launches AI-Assisted Diagnostic Imaging Pilot at BC Children\'s Hospital', source: 'PHSA News', date: '2026-01-28', summary: 'AI model trained on 2M+ radiology images now supports radiologists in identifying early-stage pediatric pathologies, reducing reporting turnaround by 35%.' },
    { title: 'PHSA Awarded $120M Federal Health Data Modernization Grant', source: 'BC Government News', date: '2026-02-12', summary: 'Federal investment supports PHSA\'s 5-year digital health strategy, including cloud content management, interoperability, and AI-driven clinical decision support.' },
    { title: 'PHSA Reports Lowest ER Wait Times in BC in a Decade', source: 'CBC British Columbia', date: '2025-10-05', summary: 'Digital triage and document automation initiatives credited with reducing median ER wait times at PHSA-operated facilities to 2.4 hours, down from 3.8 hours in 2022.' },
  ],
  c8: [
    { title: 'Sunnybrook Launches $500M Capital Campaign for New Research Tower', source: 'Globe and Mail', date: '2025-11-20', summary: 'The Garry Hurvitz Brain Sciences Centre campaign aims to build North America\'s largest integrated neurosciences research and clinical care facility, opening 2030.' },
    { title: 'Sunnybrook Named Canada\'s Top Teaching Hospital for Fifth Consecutive Year', source: 'Maclean\'s', date: '2025-09-08', summary: 'Recognition based on research output, patient outcomes, clinical innovation, and education programs across 27 clinical departments.' },
    { title: 'Sunnybrook\'s AI-Powered Cancer Screening Program Expands Province-Wide', source: 'Toronto Star', date: '2026-01-14', summary: 'Province-wide rollout of Sunnybrook\'s AI mammography tool follows 3-year pilot that increased early breast cancer detection rates by 24%.' },
  ],
  c9: [
    { title: 'CWB Reports Q4 2025 Commercial Lending Growth of 18% Year-Over-Year', source: 'Canadian Western Bank Press', date: '2026-01-22', summary: 'Strong commercial and industrial lending drove Q4 results above analyst expectations. Equipment financing and real estate development were key growth drivers.' },
    { title: 'CWB Announces Digital-First Banking Strategy for 2026–2028', source: 'Financial Post', date: '2026-02-09', summary: 'Strategy includes digital lending origination, AI-powered credit decisioning, and a major document workflow modernization initiative across all 36 branches.' },
    { title: 'CWB to Expand into Quebec Market with Two New Commercial Banking Offices', source: 'Business Wire', date: '2025-12-01', summary: 'Quebec expansion marks CWB\'s first step into Eastern Canada, targeting the commercial real estate and agribusiness sectors.' },
  ],
  c10: [
    { title: 'BC Liquor Distribution Branch Achieves Record $1.28B in Annual Revenue', source: 'BC Government', date: '2025-12-17', summary: 'BCLDB\'s 2024/25 fiscal year revenue hit a record, driven by strong wine and craft spirits categories. Net income of $940M transferred to BC\'s general revenue.' },
    { title: 'BCLDB Launches Revamped E-Commerce Platform for Private Liquor Retailers', source: 'Vancouver Sun', date: '2025-10-28', summary: 'New platform enables B2B ordering, digital invoicing, and compliance document management for BC\'s 720+ private liquor retail licensees.' },
  ],
  c11: [
    { title: 'Alberta Pensions Services Reports $98B in AUM and 9.2% Net Return for 2025', source: 'APS Annual Report', date: '2026-01-31', summary: 'Record AUM and above-benchmark returns driven by global equity gains and strategic infrastructure investments. 400,000+ public sector members served.' },
    { title: 'APS Launches New Member Self-Service Portal with Real-Time Pension Estimator', source: 'APS News', date: '2025-11-18', summary: 'New digital portal allows Alberta public sector employees to simulate retirement scenarios, update beneficiaries, and access pension statements online.' },
  ],
  c12: [
    { title: 'Boston Pizza Opens 500th Canadian Location in Lethbridge, Alberta', source: 'Boston Pizza Press', date: '2025-09-25', summary: 'Milestone opening caps a year of accelerated franchise expansion. BP plans 20 additional locations in Western Canada in 2026, with a focus on suburban markets.' },
    { title: 'Boston Pizza Reports Strong Q3 2025 Same-Store Sales Growth of 6.4%', source: 'Restaurants Canada', date: '2025-11-07', summary: 'Growth driven by new menu innovation, digital ordering improvements, and the Lunch Rush promotional campaign that drove a 12% increase in lunch traffic.' },
  ],
  c13: [
    { title: 'Canada Life Reports $3.4B in 2025 Net Earnings, Highest in Company History', source: 'Canada Life Press', date: '2026-02-04', summary: 'Record earnings driven by strong group benefits growth and investment income. The company also announced a $500M digital transformation investment for 2026–2028.' },
    { title: 'Canada Life Acquires GreenShield\'s Group Benefits Administration Business', source: 'Financial Post', date: '2026-01-15', summary: 'Acquisition adds 4M+ plan members and strengthens Canada Life\'s position as Canada\'s largest group benefits provider. Integration expected by Q4 2026.' },
    { title: 'Canada Life Launches AI-Powered Claims Processing Platform', source: 'Insurance Business Canada', date: '2025-11-30', summary: 'New platform uses ML models to auto-adjudicate 75% of routine health claims in under 60 seconds, reducing processing costs by an estimated $40M annually.' },
  ],
  c14: [
    { title: 'Great West Casualty Reports Improved 2025 Combined Ratio of 89.4%', source: 'AM Best', date: '2026-01-28', summary: 'Strong underwriting discipline and favorable claims experience drove GWC\'s best combined ratio in 8 years, well below the trucking insurance industry average of 96.1%.' },
    { title: 'GWC Launches New Telematics-Based Trucking Safety Program', source: 'Transport Topics', date: '2025-10-14', summary: 'Partner program integrates real-time ELD and telematics data to offer behavioral safety incentives, targeting a 15% reduction in loss frequency for enrolled fleets.' },
  ],
  c15: [
    { title: 'Federal Government Announces $180M Investment in Manitoba Health Care Modernization', source: 'Government of Canada', date: '2026-02-10', summary: 'Funding supports digital health infrastructure, clinical data interoperability, and patient record modernization across Manitoba\'s regional health authorities, including WRHA.' },
    { title: 'WRHA Expands Virtual Care to 48 Rural Manitoba Communities', source: 'CBC Manitoba', date: '2025-12-03', summary: 'Expansion of the virtual care platform brings specialist access to remote communities, reducing average specialist wait times by 40% for rural Manitoba patients.' },
  ],
  c16: [
    { title: 'Pacific Northwest Energy Corp Achieves ENERGY STAR Certification Across All 6 Facilities', source: 'Pacific Northwest Energy Corp', date: '2025-12-16', summary: 'All PNEC generation and distribution facilities now meet EPA ENERGY STAR certification, underscoring the company\'s commitment to environmental performance.' },
    { title: 'PNEC Awarded $220M Washington State Clean Energy Contract', source: 'Seattle Times', date: '2026-01-22', summary: 'Five-year contract to supply renewable energy to Washington State facilities, positioning PNEC as the largest renewable supplier to the state government.' },
  ],
  c17: [
    { title: 'Meridian Credit Union Commits $1.5B to Sustainability Lending by 2030', source: 'Meridian Press', date: '2026-01-14', summary: 'Largest sustainability lending commitment by a Canadian credit union, targeting green mortgages, EV financing, and renewable energy project loans.' },
    { title: 'Meridian Named One of Canada\'s 50 Most Engaged Workplaces', source: 'Waterstone Human Capital', date: '2025-11-05', summary: 'Recognition for Meridian\'s employee engagement, community investment, and professional development programs across 90 Ontario branches.' },
    { title: 'Meridian Reports Record $29B in Total Assets for 2025', source: 'Meridian Annual Report', date: '2026-02-18', summary: 'Strong mortgage and commercial lending growth drove 11% asset growth. Meridian now serves 380,000+ members across Ontario.' },
  ],
}
