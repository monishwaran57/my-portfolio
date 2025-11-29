// Import local images (replace with your real assets)
import baponLogo from "../../assets/company-logos/baponlogo.png";
import jetzerpLogo from "../../assets/company-logos/jetzerp-logo.png";

export const experiences = [
  {
    role: "Software Engineer",
    role_key: "software_engineer",
    company: "Bapon IT Services",
    location: "Chennai",
    period: "Jul 2025 – Present",
    image: baponLogo,
    tasks: [
      "Architected and deployed Skillfulsense (skillfulsense.com), a live production assessment platform serving active users with 40+ API endpoints handling authentication, payments, assessments, and AI-driven features",
      "Debugged and optimized production issues including payment gateway failures (Razorpay/Stripe), API timeout errors, WebSocket connection drops in real-time AI interviews, and AWS Lambda cold start latencies",
      "Implemented comprehensive error handling and logging across 6 decoupled Lambda functions, enabling rapid identification and resolution of production incidents through CloudWatch monitoring",
      "Troubleshot and resolved AWS infrastructure issues: EC2 auto-scaling failures, ALB health check misconfigurations, SES email delivery problems, and Cognito authentication edge cases",
      "Optimized database query performance in MongoDB, reducing response times by identifying slow queries and implementing proper indexing strategies",
      "Maintained 24/7 system reliability by monitoring CloudWatch metrics, setting up alerts for API failures, and implementing automated recovery mechanisms",
      "Coordinated with stakeholders during critical production incidents, providing clear status updates and post-incident analysis reports",
      "Developed Pipe Dia Optimizer tool (opti.mklabs.work) with FastAPI backend and S3 static hosting,troubleshooting pandas Excel processing errors and Lambda timeout issues",
    ],
  },
  {
    role: "Backend Developer Intern",
    role_key: "backend_developer_intern",
    company: "Bapon IT Services",
    location: "Chennai",
    period: "Dec 2024 – Jun 2025",
    image: baponLogo,
    tasks: [
      "Debugged and resolved cloud recording failures in Hyr-sense AI interview platform by analyzing Agora API errors, S3 permission issues, and synchronization problems between recording start/stop events",
      "Investigated and fixed AWS Transcribe failures in SenseScript, handling audio format incompatibilities, timeout errors, and API rate limiting issues",
      "Built and maintained HRsuite with 90+ API endpoints, implementing comprehensive error handling and debugging strategies for complex RBAC, timesheet calculation bugs, and leave management edge cases",
      "Troubleshot Cognito SSO integration issues with Azure Directory, resolving token expiry, callback URL mismatches, and user pool synchronization problems",
      "Debugged PostgreSQL deadlock issues and optimized SQLAlchemy queries to resolve performance bottlenecks in production",
      "Set up detailed logging mechanisms for tracking API failures, database errors, and third-party integration issues",
    ],
  },
  {
    role: "Odoo Developer",
    role_key: "odoo_developer",
    company: "Jetzerp",
    location: "Karaikkudi",
    period: "Jan 2024 – Nov 2024",
    image: jetzerpLogo,
    tasks: [
      "Maintained production ERP systems, troubleshooting critical issues including data synchronization failures, webhook processing errors, and database inconsistencies affecting business operations",
      "Debugged and resolved Zoho Books integration failures, analyzing API rate limits, authentication token refresh issues, and webhook payload validation errors",
      "Successfully debugged and migrated Odoo 14 to Odoo 17, identifying and fixing breaking changes, database schema conflicts, and module incompatibilities during the migration process",
      "Resolved platform upgrade issues for Odoo 12 (Sunrise Toyota), troubleshooting Python 2.8 to 3.5 migration errors, boto3 compatibility issues with AWS SNS, and Ubuntu 16 to 22 upgrade challenges",
      "Diagnosed and fixed production bugs in custom modules including inventory reporting discrepancies, quality check calculation errors, and mobile API integration failures",
      "Utilized Linux command-line tools for system diagnostics, log analysis (tail, grep), process monitoring, and SSH troubleshooting on remote EC2 instances",
      "Configured and debugged Nginx routing issues, SSL certificate problems, and service startup failures managed through systemd",
      "Developed FastAPI backend for TI Murugappa invoice automation, debugging OCR parsing errors, database connection issues, and implementing robust error handling for production stability",
    ],
  },
  {
    role: "Management Trainee",
    role_key: "management_trainee",
    company: "Jetzerp",
    location: "Karaikkudi",
    period: "Jan 2023 – Dec 2023",
    image: jetzerpLogo,
    tasks: [
      "Developed Flutter applications with API integration, debugging network connectivity issues, API response parsing errors, and state management bugs",
      "Created Inventory Checker app with barcode scanning and real-time Odoo database updates, troubleshooting API authentication failures and data synchronization issues",
      "Built automation scripts using Selenium and Python, debugging web scraping failures, API rate limiting, and Firebase integration errors",
    ],
  },
];
