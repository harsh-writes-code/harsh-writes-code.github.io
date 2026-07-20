---
title: "Membership & Event Management System"
summary: "A comprehensive platform to streamline the administration of large communities, featuring member profiles, event tracking, and hierarchical location management."
tags: ["PHP 8.2", "Laravel 12", "Blade", "TailwindCSS v4", "Vite", "MySQL", "AWS S3"]
---

A comprehensive Membership and Event Management System built to streamline the administration of large communities or organizations. The platform provides end-to-end management of member profiles, hierarchical geographical locations, events, attendance tracking, and content distribution. Designed with security and scalability in mind, it features secure document handling, role-based access control, and dynamic route encryption to protect sensitive member data.

### Key Features & Functionality

**Comprehensive Member Management**
- **Detailed Profiles:** Captures extensive member data including personal details, contact information, occupation, and geographical hierarchy.
- **KYC & Document Verification:** Secure uploading and management of identity documents (e.g., Aadhar Card front/back) and profile pictures.
- **Dynamic ID Encryption:** Implements custom AES-128-CBC encryption for member route keys to completely prevent ID enumeration and ensure privacy.
- **Custom ID Generation:** Automatically generates sequential, formatted membership IDs alongside masked secure IDs.

**Event & Attendance Tracking**
- **Event Scheduling:** Create and manage various types of events with distinct categories.
- **Attendance Management:** Robust system to mark, track, and generate detailed reports for member attendance at specific events.
- **Member-Event Mapping:** Seamlessly associate members with specific events for tracking participation and engagement.

**Hierarchical Location Management**
- **Multi-tier Geography:** Built-in support for Country > State > District > Block > Village/City data structures.
- **Localized Filtering:** Allows administrators to filter members, events, and reports based on granular geographical locations.

**Security & Infrastructure**
- **Role-Based Access Control (RBAC):** Secure authentication and authorization system distinguishing between standard users, managers, and administrators.
- **Cloud Storage Ready:** Out-of-the-box support for AWS S3 to securely store and serve sensitive documents (with temporary pre-signed URLs) alongside local storage fallbacks.

**Content & Communication**
- **Post Management:** Integrated system to create posts and categories, allowing admins to distribute updates or announcements.
- **Public & Internal Reporting:** Generates dynamic attendance and membership reports for data-driven decision-making.

### Technical Highlights
- Implemented custom encryption algorithms within Laravel's route binding to secure user endpoints.
- Configured Vite with TailwindCSS v4 for an ultra-fast, modern frontend development experience.
- Designed a complex, normalized relational database schema to handle deep location hierarchies and many-to-many relationships between members, events, and attendances.
- Integrated AWS S3 for scalable and secure handling of user-uploaded KYC documents.
