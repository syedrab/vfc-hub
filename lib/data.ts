import type {
  Client, VFCTeamMember, Engagement, Stakeholder, ActivityLogEntry
} from './types'
import { extraEngagements, extraStakeholders, extraActivity, clientNews } from './data-extra'

export const vfcTeam: VFCTeamMember[] = [
  { id: 't1', name: 'Tayo Runsewe', title: 'CEO, Consulting Group', email: 't.runsewe@versafile.com', practice: 'Leadership', initials: 'TR', avatarColor: '#003087' },
  { id: 't2', name: 'Menke Bonnema', title: 'Director, Service Delivery', email: 'm.bonnema@versafile.com', practice: 'Delivery', initials: 'MB', avatarColor: '#00A3A1' },
  { id: 't3', name: 'May Agoha', title: 'Director, Success Office', email: 'm.agoha@versafile.com', practice: 'PMO', initials: 'MA', avatarColor: '#7C3AED' },
  { id: 't4', name: 'Tavis Agnew', title: 'Director, Strategic Accounts', email: 't.agnew@versafile.com', practice: 'Account Management', initials: 'TA', avatarColor: '#DC2626' },
  { id: 't5', name: 'Josef Hans Lara', title: 'Director, Business Development', email: 'j.lara@versafile.com', practice: 'Sales', initials: 'JL', avatarColor: '#D97706' },
  { id: 't6', name: 'Greg Van Wormer', title: 'Director, Client Success', email: 'g.vanwormer@versafile.com', practice: 'Account Management', initials: 'GV', avatarColor: '#059669' },
  { id: 't7', name: 'Kwame Botchway', title: 'Senior Business Analyst', email: 'k.botchway@versafile.com', practice: 'Delivery', initials: 'KB', avatarColor: '#0284C7' },
  { id: 't8', name: 'Carlos Diego', title: 'Senior Implementation Specialist', email: 'c.diego@versafile.com', practice: 'Technical', initials: 'CD', avatarColor: '#BE185D' },
  { id: 't9', name: 'Raymond Sin', title: 'Application Modernization Lead', email: 'r.sin@versafile.com', practice: 'Technical', initials: 'RS', avatarColor: '#9333EA' },
  { id: 't10', name: 'Priya Nair', title: 'Senior Consultant, Information Governance', email: 'p.nair@versafile.com', practice: 'Advisory', initials: 'PN', avatarColor: '#0369A1' },
  { id: 't11', name: 'Liam Okafor', title: 'Solution Architect', email: 'l.okafor@versafile.com', practice: 'Technical', initials: 'LO', avatarColor: '#047857' },
  { id: 't12', name: 'Sofia Reyes', title: 'Project Manager', email: 's.reyes@versafile.com', practice: 'PMO', initials: 'SR', avatarColor: '#B45309' },
  { id: 't13', name: 'Daniel Yuen', title: 'Business Analyst', email: 'd.yuen@versafile.com', practice: 'Delivery', initials: 'DY', avatarColor: '#6D28D9' },
  { id: 't14', name: 'Amira Hassan', title: 'Change Management Lead', email: 'a.hassan@versafile.com', practice: 'Advisory', initials: 'AH', avatarColor: '#BE123C' },
  { id: 't15', name: 'Marcus Webb', title: 'Managed Services Engineer', email: 'm.webb@versafile.com', practice: 'Managed Services', initials: 'MW', avatarColor: '#0F766E' },
]

const _clients: Client[] = [
  {
    id: 'c1', name: 'BlueShore Financial', industry: 'Financial Services', size: '500–2,000', headquarters: 'North Vancouver, BC, Canada',
    website: 'blueshorefinancial.com', status: 'active', accountOwnerId: 't4', totalSpend: '$2.4M CAD',
    description: 'A BC-based credit union serving high-net-worth clients. VFC\'s longest-standing financial services client. Transformed their entire document lifecycle from paper-based to fully automated digital workflows using IBM FileNet and a custom integration platform.',
    technologies: ['IBM FileNet', 'IBM CP4BA', 'SAP ECC'],
  },
  {
    id: 'c2', name: 'Equinor', industry: 'Energy', size: '10,000+', headquarters: 'Stavanger, Norway',
    website: 'equinor.com', status: 'active', accountOwnerId: 't1', totalSpend: '$3.1M USD',
    description: 'Global energy major with 30,000+ SAP users. VFC replaced their end-of-life legacy SAP connector with DocuFlow integrated with IBM BACSoC across 62 repositories. Zero-disruption 90-day global rollout.',
    technologies: ['DocuFlow', 'SAP S/4HANA', 'IBM CP4BA', 'Azure'],
  },
  {
    id: 'c3', name: 'Crescent Energy', industry: 'Energy', size: '500–2,000', headquarters: 'Houston, TX, USA',
    website: 'crescentenergy.com', status: 'active', accountOwnerId: 't6', totalSpend: '$780K USD',
    description: 'US energy company growing rapidly via acquisitions. Integrated SAP S/4HANA on RISE with Box. Automated AP approval workflows, document archiving, and bank cheque reconciliation.',
    technologies: ['DocuFlow', 'SAP S/4HANA', 'Box', 'Azure'],
  },
  {
    id: 'c4', name: 'EBSCO Industries', industry: 'Information Services', size: '2,000–10,000', headquarters: 'Birmingham, AL, USA',
    website: 'ebsco.com', status: 'inactive', accountOwnerId: 't6', totalSpend: '$520K USD',
    description: 'Diversified information services company with 4.5M documents and 4TB of data in SAP. Migrated to Microsoft 365 SharePoint Online via DocuFlow. Engagement complete.',
    technologies: ['DocuFlow', 'SAP ECC', 'SharePoint Online', 'Microsoft 365'],
  },
  {
    id: 'c5', name: 'Almatis', industry: 'Manufacturing', size: '2,000–10,000', headquarters: 'Frankfurt, Germany',
    website: 'almatis.com', status: 'active', accountOwnerId: 't2', totalSpend: '$940K EUR',
    description: 'Global alumina manufacturer with 14 production sites. SAP ECC database reduced by 40% after deploying DocuFlow with SharePoint Online. VFC also provides ongoing managed services.',
    technologies: ['DocuFlow', 'SAP ECC', 'SharePoint Online'],
  },
  {
    id: 'c6', name: 'University of Mississippi', industry: 'Higher Education', size: '2,000–10,000', headquarters: 'Oxford, MS, USA',
    website: 'olemiss.edu', status: 'inactive', accountOwnerId: 't6', totalSpend: '$310K USD',
    description: '18,000-student university with 5 regional campuses. Migrated 3M documents from legacy systems to Box via DocuFlow. Delivered 45 days ahead of schedule with $750K–$1M in projected savings.',
    technologies: ['DocuFlow', 'SAP ECC', 'Box'],
  },
  {
    id: 'c7', name: 'Provincial Health Services Authority', industry: 'Healthcare', size: '10,000+', headquarters: 'Vancouver, BC, Canada',
    website: 'phsa.ca', status: 'active', accountOwnerId: 't3', totalSpend: '$1.2M CAD',
    description: "BC's provincial health authority managing specialized health services province-wide. VFC delivered information governance framework, records management modernization, and ongoing managed services for their SharePoint environment.",
    technologies: ['SharePoint Online', 'Microsoft 365', 'IBM FileNet'],
  },
  {
    id: 'c8', name: 'Sunnybrook Health Sciences Centre', industry: 'Healthcare', size: '10,000+', headquarters: 'Toronto, ON, Canada',
    website: 'sunnybrook.ca', status: 'active', accountOwnerId: 't4', totalSpend: '$860K CAD',
    description: "One of Canada's largest academic health sciences centres. VFC is leading a content services modernization program, migrating from legacy ECM to a modern cloud-based platform integrated with their EHR system.",
    technologies: ['IBM FileNet', 'IBM CP4BA', 'Azure'],
  },
  {
    id: 'c9', name: 'Canadian Western Bank', industry: 'Financial Services', size: '2,000–10,000', headquarters: 'Edmonton, AB, Canada',
    website: 'cwb.ca', status: 'active', accountOwnerId: 't4', totalSpend: '$670K CAD',
    description: "Western Canada's largest publicly traded commercial bank. Engaged VFC for an intelligent automation assessment and ongoing SharePoint governance advisory. Currently in Solution Delivery phase for loan document automation.",
    technologies: ['SharePoint Online', 'Microsoft 365', 'IBM CP4BA'],
  },
  {
    id: 'c10', name: 'BC Liquor Distribution Branch', industry: 'Government', size: '2,000–10,000', headquarters: 'Burnaby, BC, Canada',
    website: 'bcldb.com', status: 'active', accountOwnerId: 't3', totalSpend: '$430K CAD',
    description: 'Provincial Crown corporation managing liquor distribution across BC. VFC delivered a records management and information governance program aligned with BC government ARCS/ORCS retention schedules.',
    technologies: ['SharePoint Online', 'Microsoft 365'],
  },
  {
    id: 'c11', name: 'Alberta Pensions Services', industry: 'Government', size: '500–2,000', headquarters: 'Edmonton, AB, Canada',
    website: 'apsc.ab.ca', status: 'active', accountOwnerId: 't7', totalSpend: '$550K CAD',
    description: 'Crown corporation administering pension plans for Alberta public sector employees. VFC is delivering a content migration from legacy OpenText to SharePoint Online, including information architecture redesign.',
    technologies: ['SharePoint Online', 'Microsoft 365', 'OpenText'],
  },
  {
    id: 'c12', name: 'Boston Pizza International', industry: 'Hospitality', size: '500–2,000', headquarters: 'Vancouver, BC, Canada',
    website: 'bostonpizza.com', status: 'inactive', accountOwnerId: 't4', totalSpend: '$210K CAD',
    description: 'Canadian restaurant franchisor. VFC delivered a franchise operations document management solution using SharePoint Online. Engagement complete; relationship warm.',
    technologies: ['SharePoint Online', 'Microsoft 365'],
  },
  {
    id: 'c13', name: 'Canada Life', industry: 'Insurance', size: '10,000+', headquarters: 'Winnipeg, MB, Canada',
    website: 'canadalife.com', status: 'prospect', accountOwnerId: 't5', totalSpend: '$0',
    description: "One of Canada's largest life and health insurance companies. Currently in discovery — VFC ran an Automation First Workshop. Evaluating a large-scale IBM FileNet modernization. Proposal submitted.",
    technologies: ['IBM FileNet'],
  },
  {
    id: 'c14', name: 'Great West Casualty', industry: 'Insurance', size: '2,000–10,000', headquarters: 'South Sioux City, NE, USA',
    website: 'gwccnet.com', status: 'active', accountOwnerId: 't6', totalSpend: '$390K USD',
    description: 'US trucking insurance specialist. VFC managing their IBM FileNet environment under a multi-year managed services agreement. Stable, recurring revenue engagement.',
    technologies: ['IBM FileNet'],
  },
  {
    id: 'c15', name: 'Winnipeg Regional Health Authority', industry: 'Healthcare', size: '10,000+', headquarters: 'Winnipeg, MB, Canada',
    website: 'wrha.mb.ca', status: 'prospect', accountOwnerId: 't5', totalSpend: '$0',
    description: 'Major regional health authority serving 800,000+ Manitobans. In early discussions following a referral from PHSA. Interested in IBM CP4BA for clinical document automation.',
    technologies: ['IBM CP4BA'],
  },
  {
    id: 'c16', name: 'Pacific Northwest Energy Corp', industry: 'Energy', size: '500–2,000', headquarters: 'Seattle, WA, USA',
    status: 'active', accountOwnerId: 't6', totalSpend: '$510K USD',
    description: 'Regional energy utility. VFC delivered SAP-to-Box content migration and now provides Application Managed Services. Strong relationship with IT leadership.',
    technologies: ['DocuFlow', 'SAP ECC', 'Box'],
  },
  {
    id: 'c17', name: 'Meridian Credit Union', industry: 'Financial Services', size: '500–2,000', headquarters: 'St. Catharines, ON, Canada',
    website: 'meridiancu.ca', status: 'prospect', accountOwnerId: 't4', totalSpend: '$0',
    description: "Ontario's largest credit union. Following BlueShore's success story, Meridian reached out. Automation First Workshop scheduled for next quarter.",
    technologies: ['IBM FileNet'],
  },
]

const _engagements: Engagement[] = [
  {
    id: 'e1', clientId: 'c1', name: 'JETstream Integration Platform', serviceType: 'solution_delivery', status: 'complete',
    startDate: '2018-03-01', endDate: '2021-06-30', budget: '$1.4M CAD',
    summary: 'Built JETstream — a custom integration platform connecting IBM FileNet Content Manager to BlueShore\'s core banking platform, CRM, and BI systems. Automated mortgage renewals, RRSP loans, client onboarding, and audit workflows. Digitized 40,000 client files. Results: 250% lending volume increase over 3 years, 167% cross-sales increase in one year, CAD $300K/year filing space savings.',
    technologies: ['IBM FileNet', 'IBM CP4BA', 'SAP ECC'],
    teamMembers: [{ memberId: 't2', role: 'Engagement Lead' }, { memberId: 't8', role: 'Lead Developer' }, { memberId: 't7', role: 'Business Analyst' }],
    stakeholderIds: ['s1', 's2', 's3'],
  },
  {
    id: 'e2', clientId: 'c1', name: 'RRSP Loan Automation', serviceType: 'solution_delivery', status: 'complete',
    startDate: '2019-08-01', endDate: '2020-04-30', budget: '$420K CAD',
    summary: 'Automated RRSP processing end-to-end, eliminating a 6-week seasonal backlog. Processing now completes overnight. Included workflow design, FileNet integration, and user acceptance testing with BlueShore operations team.',
    technologies: ['IBM FileNet', 'SAP ECC'],
    teamMembers: [{ memberId: 't8', role: 'Lead Developer' }, { memberId: 't13', role: 'Business Analyst' }],
    stakeholderIds: ['s1', 's3'],
  },
  {
    id: 'e3', clientId: 'c1', name: 'FileNet Managed Services', serviceType: 'managed_services', status: 'active',
    startDate: '2021-07-01', budget: '$180K CAD/year',
    summary: 'Ongoing application managed services for IBM FileNet environment. Covers incident management, patching, performance monitoring, and minor enhancements. SLA: P1 < 4hr, P2 < 8hr, P3 < 48hr.',
    technologies: ['IBM FileNet'],
    teamMembers: [{ memberId: 't15', role: 'Service Engineer' }, { memberId: 't9', role: 'Technical Lead' }],
    stakeholderIds: ['s3'],
  },
  {
    id: 'e4', clientId: 'c2', name: 'Global SAP Connector Modernization', serviceType: 'solution_delivery', status: 'complete',
    startDate: '2022-01-15', endDate: '2023-03-31', budget: '$2.1M USD',
    summary: 'Replaced end-of-life legacy SAP connector with DocuFlow across Equinor\'s global operations. 62 content repositories, 30,000+ SAP users, 1.8M content operations per month. Zero-disruption 90-day global rollout. ~2TB archived per month.',
    technologies: ['DocuFlow', 'SAP S/4HANA', 'IBM CP4BA', 'Azure'],
    teamMembers: [{ memberId: 't1', role: 'Executive Sponsor' }, { memberId: 't9', role: 'Engagement Lead' }, { memberId: 't11', role: 'Solution Architect' }, { memberId: 't8', role: 'Implementation Lead' }],
    stakeholderIds: ['s4', 's5', 's6'],
  },
  {
    id: 'e5', clientId: 'c2', name: 'DocuFlow Managed Services – Equinor', serviceType: 'managed_services', status: 'active',
    startDate: '2023-04-01', budget: '$320K USD/year',
    summary: 'Ongoing managed services for DocuFlow and IBM BACSoC environment post-modernization. Covers environment monitoring, version upgrades, SLA-backed incident response, and quarterly optimization reviews.',
    technologies: ['DocuFlow', 'IBM CP4BA'],
    teamMembers: [{ memberId: 't15', role: 'Service Engineer' }, { memberId: 't9', role: 'Technical Lead' }],
    stakeholderIds: ['s5'],
  },
  {
    id: 'e6', clientId: 'c3', name: 'SAP S/4HANA to Box Integration', serviceType: 'solution_delivery', status: 'active',
    startDate: '2024-02-01', budget: '$780K USD',
    summary: 'DocuFlow integration connecting SAP S/4HANA on RISE with Box. Automating AP cost center approvals, document archiving, and JP Morgan bank cheque reconciliation. Phase 1 (AP automation) complete; Phase 2 (HR documents) underway.',
    technologies: ['DocuFlow', 'SAP S/4HANA', 'Box', 'Azure'],
    teamMembers: [{ memberId: 't6', role: 'Engagement Lead' }, { memberId: 't11', role: 'Solution Architect' }, { memberId: 't13', role: 'Business Analyst' }],
    stakeholderIds: ['s7', 's8', 's9'],
  },
  {
    id: 'e7', clientId: 'c7', name: 'Information Governance Framework', serviceType: 'advisory', status: 'complete',
    startDate: '2022-04-01', endDate: '2023-01-31', budget: '$340K CAD',
    summary: 'Delivered a comprehensive information governance framework for PHSA including records classification taxonomy, retention schedules aligned with ARCS/ORCS, IG policy suite, and staff training program. Covered 12 program areas across the health authority.',
    technologies: ['SharePoint Online', 'Microsoft 365'],
    teamMembers: [{ memberId: 't10', role: 'Engagement Lead' }, { memberId: 't14', role: 'Change Management' }, { memberId: 't3', role: 'PMO Lead' }],
    stakeholderIds: ['s10', 's11', 's12'],
  },
  {
    id: 'e8', clientId: 'c7', name: 'SharePoint Managed Services – PHSA', serviceType: 'managed_services', status: 'active',
    startDate: '2023-02-01', budget: '$140K CAD/year',
    summary: 'Ongoing management of SharePoint Online and Microsoft 365 environment. Includes governance enforcement, site provisioning, access reviews, and monthly reporting.',
    technologies: ['SharePoint Online', 'Microsoft 365'],
    teamMembers: [{ memberId: 't15', role: 'Service Engineer' }, { memberId: 't13', role: 'Analyst' }],
    stakeholderIds: ['s12'],
  },
  {
    id: 'e9', clientId: 'c8', name: 'ECM Modernization Program – Phase 1', serviceType: 'solution_delivery', status: 'active',
    startDate: '2024-03-01', budget: '$860K CAD',
    summary: 'Phase 1 of 3-phase legacy ECM modernization to IBM CP4BA. Scope: clinical document management for 4 departments, EHR system integration, and content migration of 1.2M records. Phase 1 delivery Q3 2025.',
    technologies: ['IBM FileNet', 'IBM CP4BA', 'Azure'],
    teamMembers: [{ memberId: 't4', role: 'Engagement Lead' }, { memberId: 't11', role: 'Solution Architect' }, { memberId: 't12', role: 'Project Manager' }, { memberId: 't14', role: 'Change Management' }],
    stakeholderIds: ['s13', 's14'],
  },
  {
    id: 'e10', clientId: 'c9', name: 'Intelligent Automation Assessment', serviceType: 'advisory', status: 'complete',
    startDate: '2023-05-01', endDate: '2023-08-31', budget: '$85K CAD',
    summary: 'Automation First Workshop followed by a detailed intelligent automation opportunity assessment. Identified 6 high-value automation candidates in lending, compliance, and HR. Delivered formal opportunity roadmap and vendor evaluation matrix.',
    technologies: ['SharePoint Online'],
    teamMembers: [{ memberId: 't10', role: 'Lead Consultant' }, { memberId: 't1', role: 'Executive Advisory' }],
    stakeholderIds: ['s15', 's16'],
  },
  {
    id: 'e11', clientId: 'c9', name: 'Loan Document Automation', serviceType: 'solution_delivery', status: 'active',
    startDate: '2024-01-15', budget: '$585K CAD',
    summary: 'Building automated loan origination document workflows using SharePoint Online and IBM CP4BA. Automates document collection, classification, routing, and compliance archival across CWB\'s commercial lending business.',
    technologies: ['SharePoint Online', 'Microsoft 365', 'IBM CP4BA'],
    teamMembers: [{ memberId: 't4', role: 'Engagement Lead' }, { memberId: 't8', role: 'Implementation Lead' }, { memberId: 't12', role: 'Project Manager' }],
    stakeholderIds: ['s15', 's16'],
  },
  {
    id: 'e12', clientId: 'c11', name: 'OpenText to SharePoint Migration', serviceType: 'technical_services', status: 'active',
    startDate: '2024-06-01', budget: '$550K CAD',
    summary: 'Full content migration of 2.8M documents from legacy OpenText system to SharePoint Online. Includes information architecture redesign, metadata mapping, retention schedule migration, and user training for 400+ staff.',
    technologies: ['SharePoint Online', 'Microsoft 365', 'OpenText'],
    teamMembers: [{ memberId: 't7', role: 'Engagement Lead' }, { memberId: 't9', role: 'Technical Lead' }, { memberId: 't13', role: 'Business Analyst' }],
    stakeholderIds: ['s17', 's18'],
  },
  {
    id: 'e13', clientId: 'c14', name: 'FileNet Managed Services – GWC', serviceType: 'managed_services', status: 'active',
    startDate: '2021-01-01', budget: '$130K USD/year',
    summary: 'Multi-year application managed services agreement for IBM FileNet. Covers environment health monitoring, quarterly patching, user administration, and SLA-backed incident response for the US trucking insurance business.',
    technologies: ['IBM FileNet'],
    teamMembers: [{ memberId: 't15', role: 'Service Lead' }, { memberId: 't8', role: 'Technical Support' }],
    stakeholderIds: [],
  },
  {
    id: 'e14', clientId: 'c13', name: 'Automation First Workshop – Canada Life', serviceType: 'advisory', status: 'active',
    startDate: '2025-01-20', budget: 'Pre-sales (no charge)',
    summary: 'Two-stage Automation First Workshop: executive briefing with EVP Technology followed by half-day workshop with ECM and IT teams. Identified 4 priority automation areas in claims processing and policy administration. Formal proposal for FileNet modernization submitted Feb 2025.',
    technologies: ['IBM FileNet'],
    teamMembers: [{ memberId: 't5', role: 'Account Lead' }, { memberId: 't1', role: 'Executive Advisory' }],
    stakeholderIds: ['s19', 's20'],
  },
]

const _stakeholders: Stakeholder[] = [
  {
    id: 's1', clientId: 'c1', name: 'Fred Cook', title: 'Chief Information Officer', email: 'f.cook@blueshore.ca',
    influenceLevel: 'high', relationshipHealth: 'green', isHero: true,
    heroReason: 'Championed VFC internally for 3+ years, secured executive buy-in for all project phases, and actively refers VFC to peer CIOs across the BC financial sector. Has introduced us to 2 warm leads.',
    heroMaintenanceNotes: 'Quarterly executive dinners, annual golf event (September), included in VFC thought leadership events. Sends handwritten notes after major milestones.',
    notes: 'Fred has been our primary sponsor since day one. Very relationship-oriented — values face time. Responds best to data-driven updates. Currently exploring AI document classification for 2026.',
  },
  {
    id: 's2', clientId: 'c1', name: 'Sandra Kowalski', title: 'VP Operations', email: 's.kowalski@blueshore.ca',
    phone: '+1 604-555-0182', influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Business stakeholder for RRSP and lending automation. Practical, focused on outcomes. Gets frustrated with delays — always manage expectations proactively.',
  },
  {
    id: 's3', clientId: 'c1', name: 'Raj Mehta', title: 'IT Director', email: 'r.mehta@blueshore.ca',
    phone: '+1 604-555-0247', influenceLevel: 'medium', relationshipHealth: 'yellow', isHero: false,
    notes: 'Day-to-day IT contact for managed services. Flagged performance concerns with FileNet at Nov 2025 golf event — Marcus is investigating. Relationship slightly cooled after a P2 incident in Q3 2025.',
  },
  {
    id: 's4', clientId: 'c2', name: 'Lars Eriksson', title: 'Global IT Director', email: 'l.eriksson@equinor.com',
    influenceLevel: 'high', relationshipHealth: 'green', isHero: true,
    heroReason: 'Personally approved the 90-day global rollout timeline, shields the VFC team from internal Equinor politics, and actively promotes VFC at SAP and IBM conferences. Introduced us to a contact at Aker BP.',
    heroMaintenanceNotes: 'Annual executive visit to VFC Vancouver HQ, joint conference presentations (BoxWorks, IBM Think), quarterly exec-level calls.',
    notes: 'Lars is the definitive power broker at Equinor for this engagement. Low ego, results-focused. Loves detailed technical updates. Plans to expand to SuccessFactors integration in 2026.',
  },
  {
    id: 's5', clientId: 'c2', name: 'Ingrid Solberg', title: 'SAP Program Manager', email: 'i.solberg@equinor.com',
    phone: '+47-55-000-100', influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Day-to-day managed services contact. Very organized, process-driven. Sends detailed monthly status updates on their end. Excellent communicator.',
  },
  {
    id: 's6', clientId: 'c2', name: 'Mikael Strand', title: 'Enterprise Architect', email: 'm.strand@equinor.com',
    influenceLevel: 'high', relationshipHealth: 'yellow', isHero: false,
    notes: 'Influential in platform decisions but cautious about vendor lock-in. Pushed back on cloud-only approach during modernization. Need to include him earlier in future scoping discussions.',
  },
  {
    id: 's7', clientId: 'c3', name: 'Derek Halloway', title: 'Chief Financial Officer', email: 'd.halloway@crescentenergy.com',
    influenceLevel: 'high', relationshipHealth: 'green', isHero: true,
    heroReason: 'Drove internal approval for the Box + DocuFlow investment and evangelizes VFC\'s solution to other energy CFOs. Has mentioned us to two Houston-area energy companies.',
    heroMaintenanceNotes: 'Monthly check-in calls, included in VFC Box partner events (BoxWorks dinner), quarterly business reviews.',
    notes: 'Derek is the economic buyer and key champion. Very ROI-focused — always quantify value in financial terms when presenting to him.',
  },
  {
    id: 's8', clientId: 'c3', name: 'Ashley Nguyen', title: 'IT Manager', email: 'a.nguyen@crescentenergy.com',
    phone: '+1 713-555-0344', influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Execution-level contact managing the integration on the client side. Very hands-on, technically capable. Good collaborator with Liam Okafor.',
  },
  {
    id: 's9', clientId: 'c3', name: 'Tom Briggs', title: 'AP Manager', email: 't.briggs@crescentenergy.com',
    phone: '+1 713-555-0421', influenceLevel: 'low', relationshipHealth: 'green', isHero: false,
    notes: 'End user SME for AP automation. Provided excellent requirements during discovery. Very satisfied with Phase 1 outcome.',
  },
  {
    id: 's10', clientId: 'c7', name: 'Dr. Catherine Lam', title: 'Chief Information Officer', email: 'c.lam@phsa.ca',
    influenceLevel: 'high', relationshipHealth: 'green', isHero: true,
    heroReason: 'Referred VFC to Sunnybrook Health Sciences and Winnipeg Regional Health Authority. Actively advocates for VFC at BC health sector CIO forums and the Digital Health Canada conference.',
    heroMaintenanceNotes: 'Bi-annual CIO roundtables co-hosted with VFC, thought leadership co-authorship, invited to VFC advisory board discussions.',
    notes: 'Catherine is our strongest referral source in Canadian healthcare. Strategic thinker, governance-focused. Values thought leadership. Currently exploring AI clinical documentation.',
  },
  {
    id: 's11', clientId: 'c7', name: 'Marcus Osei', title: 'Director, Information Management', email: 'm.osei@phsa.ca',
    phone: '+1 604-555-0583', influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Program sponsor for IG framework engagement. Deep knowledge of ARCS/ORCS. Excellent partner — very collaborative during requirements gathering.',
  },
  {
    id: 's12', clientId: 'c7', name: 'Julia Tran', title: 'SharePoint Administrator', email: 'j.tran@phsa.ca',
    influenceLevel: 'low', relationshipHealth: 'yellow', isHero: false,
    notes: 'Day-to-day managed services contact. Sometimes slow to respond. Relationship slightly strained after a permissions incident in Q4 2024 — resolved but worth monitoring.',
  },
  {
    id: 's13', clientId: 'c8', name: 'Paul Stratton', title: 'VP Digital Health', email: 'p.stratton@sunnybrook.ca',
    influenceLevel: 'high', relationshipHealth: 'green', isHero: false,
    notes: 'Executive sponsor for ECM modernization. Very engaged, attends all steering committees. Wants to position Sunnybrook as a digital health leader — align VFC work to that narrative.',
  },
  {
    id: 's14', clientId: 'c8', name: 'Nadia Volkov', title: 'Director, Health Records', email: 'n.volkov@sunnybrook.ca',
    phone: '+1 416-555-0661', influenceLevel: 'medium', relationshipHealth: 'yellow', isHero: false,
    notes: 'Key business stakeholder for records management scope. Has concerns about the migration timeline — needs more frequent status updates. Sofia Reyes managing this proactively.',
  },
  {
    id: 's15', clientId: 'c9', name: 'Brian MacLeod', title: 'Chief Technology Officer', email: 'b.macleod@cwb.ca',
    influenceLevel: 'high', relationshipHealth: 'yellow', isHero: false,
    notes: 'Approved the IA assessment but initially skeptical of VFC vs. larger SI firms. Relationship warming through delivery quality on loan automation. Needs more exec visibility.',
  },
  {
    id: 's16', clientId: 'c9', name: 'Erin Johansson', title: 'Director, Digital Transformation', email: 'e.johansson@cwb.ca',
    influenceLevel: 'high', relationshipHealth: 'green', isHero: true,
    heroReason: 'Internal sponsor for both the IA assessment and current solution delivery engagement. Fast-tracks procurement approvals, protects project budget in internal reviews, and has advocated for expanding VFC scope.',
    heroMaintenanceNotes: 'Monthly steering committee calls, included in VFC advisory webinars, informal coffee catch-ups when Tavis is in Edmonton.',
    notes: 'Erin is our day-to-day champion. Very organized, politically savvy within CWB. Keep her closely informed — she surfaces issues before they become problems.',
  },
  {
    id: 's17', clientId: 'c11', name: 'Kevin Tran', title: 'Director, IT', email: 'k.tran@apsc.ab.ca',
    influenceLevel: 'high', relationshipHealth: 'green', isHero: false,
    notes: 'Project sponsor for the OpenText migration. Technically strong, asks good questions. Appreciates detailed migration progress reports.',
  },
  {
    id: 's18', clientId: 'c11', name: 'Wendy Chu', title: 'Records Manager', email: 'w.chu@apsc.ab.ca',
    phone: '+1 780-555-0723', influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'SME for records classification and retention. Essential for information architecture work. Very thorough, attentive to metadata detail.',
  },
  {
    id: 's19', clientId: 'c13', name: 'Andrew Porter', title: 'EVP Technology', email: 'a.porter@canadalife.com',
    influenceLevel: 'high', relationshipHealth: 'yellow', isHero: false,
    notes: 'Economic buyer for any FileNet modernization investment. Attended executive briefing — engaged but non-committal. CFO approval required for anything over $500K. Follow-up call scheduled for March 2026.',
  },
  {
    id: 's20', clientId: 'c13', name: 'Lisa Fontaine', title: 'Director, ECM', email: 'l.fontaine@canadalife.com',
    phone: '+1 204-555-0834', influenceLevel: 'medium', relationshipHealth: 'green', isHero: false,
    notes: 'Our main internal contact and day-to-day champion at Canada Life. She organized the workshop and is clearly pushing for modernization internally. Very collaborative.',
  },
]

const activityLog: ActivityLogEntry[] = [
  { id: 'a1', clientId: 'c1', authorName: 'Tavis Agnew', authorInitials: 'TA', note: 'Quarterly business review with Fred Cook and Sandra Kowalski. Discussed 2026 priorities — Fred is evaluating extending managed services to include AI-powered document classification. He also mentioned CWB reached out to him about our work. Strong referral signal.', createdAt: '2026-02-14T14:30:00Z' },
  { id: 'a2', clientId: 'c1', authorName: 'May Agoha', authorInitials: 'MA', note: 'Annual golf event with Fred Cook and Raj Mehta. Overall relationship very strong. Raj flagged some performance concerns with the FileNet environment under peak lending load — Marcus Webb to investigate next week.', createdAt: '2025-11-20T18:00:00Z' },
  { id: 'a3', clientId: 'c1', authorName: 'Marcus Webb', authorInitials: 'MW', note: 'Resolved P2 incident — FileNet document retrieval slowdown during peak lending season. Root cause: index fragmentation after a large batch upload. Fix applied. SLA met (resolved in 6hr, within 8hr P2 window). Post-incident report sent to Raj Mehta.', createdAt: '2025-09-05T11:00:00Z' },
  { id: 'a4', clientId: 'c1', authorName: 'Tavis Agnew', authorInitials: 'TA', note: 'Fred Cook asked informally if VFC can help evaluate AI document classification tools for 2026. Flagged to Tayo and Priya Nair. Potential new advisory engagement — rough estimate $120K. Will formalize into a discovery conversation next quarter.', createdAt: '2025-06-01T09:15:00Z' },
  { id: 'a5', clientId: 'c2', authorName: 'Tayo Runsewe', authorInitials: 'TR', note: 'Executive call with Lars Eriksson re: 2026 roadmap. Equinor is exploring extending DocuFlow to SuccessFactors (HR documents). Lars indicated budget approval likely in Q2 2026. Teed up for Raymond Sin to scope technically.', createdAt: '2026-01-18T16:00:00Z' },
  { id: 'a6', clientId: 'c2', authorName: 'Raymond Sin', authorInitials: 'RS', note: 'Monthly managed services review with Ingrid Solberg. All SLAs green. Discussed upcoming v3.2 DocuFlow upgrade — planned for April 2026 maintenance window. Ingrid confirmed executive approval is not required for patch upgrades.', createdAt: '2026-02-05T10:00:00Z' },
  { id: 'a7', clientId: 'c3', authorName: 'Greg Van Wormer', authorInitials: 'GV', note: 'Phase 2 kickoff with Ashley Nguyen and Tom Briggs. HR document automation scope confirmed. Derek Halloway attended opening — reaffirmed executive commitment and increased budget by $80K for Phase 2 additions. Strong session.', createdAt: '2026-01-28T13:00:00Z' },
  { id: 'a8', clientId: 'c7', authorName: 'Tayo Runsewe', authorInitials: 'TR', note: 'Co-hosted CIO Roundtable with Dr. Catherine Lam — 8 BC health sector CIOs in attendance. VFC presented AI and information governance case studies. Dr. Lam introduced us to the CIO from Fraser Health. Strong lead — follow up with Josef.', createdAt: '2026-02-10T12:00:00Z' },
  { id: 'a9', clientId: 'c8', authorName: 'Sofia Reyes', authorInitials: 'SR', note: 'Phase 1 steering committee. Nadia Volkov raised concerns about the migration timeline for Q3 delivery. I committed to weekly status updates for her team going forward. Paul Stratton confident in the plan but wants a risk register by next meeting.', createdAt: '2026-02-20T15:30:00Z' },
  { id: 'a10', clientId: 'c9', authorName: 'Tavis Agnew', authorInitials: 'TA', note: 'Informal coffee with Erin Johansson in Edmonton. She mentioned Brian MacLeod has been asking about VFC\'s AI capabilities — positive signal. She\'s advocating internally for us to run an AI readiness assessment post-loan automation delivery. Need to prepare a short deck.', createdAt: '2026-02-12T09:00:00Z' },
  { id: 'a11', clientId: 'c13', authorName: 'Josef Hans Lara', authorInitials: 'JL', note: 'Follow-up call with Lisa Fontaine post-workshop. She confirmed the proposal is with Andrew Porter and the CFO. Budget review meeting scheduled for mid-March. Lisa is optimistic but flagged that a competitor (OpenText PS) also submitted a proposal. Need to reinforce our IBM partnership differentiator.', createdAt: '2026-02-25T11:00:00Z' },
]

// Merged datasets (exported for direct use in pages)
export const engagements: Engagement[] = [..._engagements, ...extraEngagements]
export const stakeholders: Stakeholder[] = [..._stakeholders, ...extraStakeholders]

const allActivity: ActivityLogEntry[] = [...activityLog, ...extraActivity]

// Clients with news attached
export const clients: Client[] = _clients.map(c => ({
  ...c,
  recentNews: clientNews[c.id] ?? [],
}))

// Helper lookups
export const getClientById = (id: string) => clients.find(c => c.id === id)
export const getTeamMemberById = (id: string) => vfcTeam.find(t => t.id === id)
export const getEngagementsByClientId = (clientId: string) => engagements.filter(e => e.clientId === clientId)
export const getStakeholdersByClientId = (clientId: string) => stakeholders.filter(s => s.clientId === clientId)
export const getActivityByClientId = (clientId: string) => allActivity.filter(a => a.clientId === clientId).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
export const getHeroesByClientId = (clientId: string) => stakeholders.filter(s => s.clientId === clientId && s.isHero)
