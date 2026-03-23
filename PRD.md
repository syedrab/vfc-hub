# Product Requirements Document
## VFC Client Intelligence Hub
**Version:** 1.0
**Owner:** VersaFile Consulting Group
**Date:** March 2026

---

## 1. Purpose

The VFC Client Intelligence Hub is an internal web application for the VersaFile Consulting Group team to centralize knowledge about clients, engagements, stakeholders, and team assignments. It replaces scattered spreadsheets, Notion pages, and tribal knowledge with a single source of truth.

---

## 2. Users

All ~50 VersaFile Consulting Group staff. Authentication required. No role differentiation — all staff have full read/write access.

---

## 3. Core Entities

### 3.1 Clients
One record per company. Fields:
- Company name
- Logo (URL or uploaded)
- Industry (Financial Services, Healthcare, Energy, Manufacturing, Government, Higher Education, Insurance, Information Services, Hospitality, Other)
- Company size (employees range: <100, 100–500, 500–2,000, 2,000–10,000, 10,000+)
- Headquarters location (city, country)
- Website
- Status: `Active` | `Inactive` | `Prospect`
- Account owner (FK → vfc_team_members)
- Contract value (total historical spend with VFC)
- Brief description (what they do, why they're a client)
- Technologies used (tags, pulled from engagements automatically)
- Activity log (timestamped notes)
- Created at / Updated at

### 3.2 Engagements
One record per project/engagement. Fields:
- Name
- Client (FK → clients)
- Service type: `Advisory` | `Solution Delivery` | `Technical Services` | `Managed Services & Support`
- Status: `Active` | `On Hold` | `Complete` | `Lost`
- Start date / End date
- Summary (rich text description of scope, goals, outcomes)
- Budget / contract value
- Technologies used (multi-select tags: Box, SAP, SharePoint, IBM FileNet, DocuFlow, Microsoft 365, OpenText, IBM CP4BA, UiPath, ABBYY, Kofax, Azure, AWS, Other)
- VFC team members (FK → vfc_team_members, with role per person)
- Client stakeholders involved (FK → stakeholders)
- Created at / Updated at

### 3.3 VFC Team Members
Internal VersaFile Consulting Group staff. Fields:
- Full name
- Title / role
- Email
- Department / practice area
- Avatar / photo URL
- Active (boolean — for staff who have left)
- Linked engagements (via engagement_team junction)
- Linked clients (derived from engagements)

### 3.4 Stakeholders
Client-side contacts. Fields:
- Full name
- Title
- Email
- Phone
- Client (FK → clients)
- Seniority / influence level: `High` | `Medium` | `Low`
- Relationship health: `Green` | `Yellow` | `Red`
- Is Hero (boolean)
- Notes / history (free text)
- Created at / Updated at

**Hero-specific fields** (only when Is Hero = true):
- Why they are a hero (advocacy description)
- How VFC maintains the relationship
- Hero influence score: `High` | `Medium` | `Low`

### 3.5 Activity Log
Timestamped notes on a client record. Fields:
- Client (FK)
- Author (FK → vfc_team_members, or just auth user display name)
- Note text
- Created at

---

## 4. Pages & Features

### 4.1 Login (`/login`)
- Supabase Auth email/password login
- VersaFile branded login screen

### 4.2 Client List (`/clients`) — Default Landing
- Alphabetical list of all clients by default
- Each row shows: company name, industry, status badge, account owner, # active engagements, # stakeholders
- Search bar (by name)
- Filters: Status | Industry | Technology | VFC Team Member
- "Add Client" button
- Click row → Client Profile

### 4.3 Client Profile (`/clients/[id]`)
Tabs or sections:
1. **Overview** — description, key facts (industry, size, location, status, account owner, total spend)
2. **Engagements** — list of all engagements for this client (status badge, service type, dates, team lead)
3. **Stakeholders** — list of all client-side contacts; Heroes highlighted
4. **VFC Team** — VFC members currently or previously assigned
5. **Activity Log** — timestamped notes feed + "Add Note" input

### 4.4 Engagement Detail (`/engagements/[id]`)
- Engagement name, client link, service type, status
- Date range
- Summary / description
- Technologies used (tag chips)
- VFC team (names + roles)
- Client stakeholders involved
- Budget

### 4.5 All Engagements (`/engagements`)
- List/table of all engagements across all clients
- Filters: Status | Service Type | Technology | Client | VFC Team Member
- Sortable by name, client, status, start date

### 4.6 VFC Team Directory (`/team`)
- Grid/list of all VFC Consulting Group staff
- Click → Team Member Profile

### 4.7 Team Member Profile (`/team/[id]`)
- Name, title, photo, email
- Current client assignments
- All engagements they're on (with client name, role, status)

### 4.8 Dashboard (`/dashboard`)
Stats overview:
- Total clients (active / inactive / prospect breakdown)
- Total active engagements
- Engagements by service type (bar or donut chart)
- Clients by industry (breakdown)
- Engagements by status
- Technologies most used across engagements

---

## 5. Technology Tags (Master List)
Box, SAP S/4HANA, SAP ECC, SharePoint Online, IBM FileNet, DocuFlow, Microsoft 365, OpenText, IBM Cloud Pak for Business Automation (CP4BA), UiPath, ABBYY, Kofax / Tungsten, Azure, AWS, Red Hat OpenShift, Salesforce, Other

---

## 6. Non-Functional Requirements
- Authenticated routes only (redirect to `/login` if not signed in)
- Mobile-responsive (consultants may view on tablets/phones)
- Fast load times — use server components where possible
- No public-facing pages

---

## 7. Out of Scope (v1)
- File attachments / document storage
- Email integration
- Calendar / scheduling
- Client-facing portal
- Revenue forecasting
- Advanced reporting / BI exports beyond basic stats
- Notifications / alerts
- Mobile app
