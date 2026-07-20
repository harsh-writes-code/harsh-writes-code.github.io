---
title: "Drishti Management Portal"
summary: "A comprehensive, role-based management portal to streamline the administration of users, volunteers, and hierarchical geographical data."
tags: ["PHP 8.2", "Laravel 12", "TailwindCSS v4", "Vite", "MySQL", "AWS S3"]
---

Developed a comprehensive, role-based management portal designed to streamline the administration of users, volunteers, and hierarchical geographical data. The application serves as a centralized hub for tracking member registrations, incident reports, and extensive location-based mapping.

### Key Features
- **Role-Based Access Control (RBAC):** Implemented secure authentication and authorization with distinct roles (e.g., Admin, Superadmin) to protect sensitive routes and administrative functions.
- **Member & Volunteer Management:** Built an end-to-end registration system with approval/rejection workflows for new members and incident reports. Developed robust data import/export capabilities, allowing administrators to bulk-upload members via CSV/Excel templates and export data for reporting.
- **Hierarchical Location Tracking:** Engineered a dynamic location management module to handle nested geographical data (Countries → States → Districts → Blocks), crucial for organizing volunteers and incidents regionally.
- **Administrative Dashboard & Auditing:** Created comprehensive admin tools for bulk updating user statuses and roles. Integrated a search audit system to track query histories and administrative actions.
- **API Integration:** Developed dedicated RESTful API endpoints for retrieving specific member and volunteer details for external integrations.

### Technical Highlights
- Upgraded and built on Laravel 12 and PHP 8.2, ensuring high performance, strong typing, and modern PHP practices.
- Utilized Tailwind CSS v4 coupled with Vite for a highly responsive, modern, and lightning-fast frontend UI.
- Architected modular controllers to keep business logic clean, maintainable, and scalable.
- Implemented custom encryption algorithms within Laravel's route binding to secure user endpoints.
- Designed a complex, normalized relational database schema to handle deep location hierarchies and many-to-many relationships.
