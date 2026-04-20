import { 
  PlusSquare, 
  GraduationCap, 
  Building2 
} from "lucide-react";

import educationImg from "../assets/industries/education.png";
import enterpriseImg from "../assets/industries/enterprise.png";

export const INDUSTRIES_DATA = {
  "healthcare": {
    n: "01",
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Mission-critical infrastructure for 24/7 clinical operations",
    icon: PlusSquare,
    image: "https://images.unsplash.com/photo-1769147555720-71fc71bfc216?crop=entropy&cs=srgb&fm=jpg&q=85",
    clients: ["Sudha Medical", "Jain Fertility", "Bharti Hospital", "SIMS"],
    desc: "HMS deployment, biomedical device networks, HIPAA-grade backups, 24/7 remote response for hospitals, clinics and diagnostic centers.",
    longDesc: "In healthcare, downtime isn't just an inconvenience—it's a critical risk. We build redundant, low-latency hospital networks that ensure patient data is accessible at the point of care, 100% of the time. From PACS image storage to secure HIS deployment, we understand the specific compliance and performance requirements of the medical sector.",
    features: [
      { title: "HIS/HMS Optimization", desc: "Configuration and management of hospital information systems for seamless patient flow." },
      { title: "PACS Networking", desc: "High-speed VLANs specifically designed for rapid medical imaging (MRI/CT) transfer." },
      { title: "Medical Data Compliance", desc: "End-to-end encryption and audit logs that meet stringent healthcare data regulations." },
      { title: "Biomedical IoT", desc: "Secure integration of bedside monitors and diagnostic equipment into the clinical network." },
      { title: "Zero-Downtime Backup", desc: "Automated, immutable backup systems that prevent data loss durante ransomware attacks." },
      { title: "24/7 Emergency Support", desc: "Dedicated priority response lines for hospital infrastructure failures." }
    ],
    tech: ["HL7", "DICOM", "PACS", "Cyber-Medical Security"],
    benefits: ["100% HIS Uptime", "Faster Image Access", "Regulatory Compliance", "Patient Trust", "Reduced Clinical Error"]
  },
  "education": {
    n: "02",
    id: "education",
    title: "Education",
    subtitle: "Empowering the next generation with scalable digital campuses",
    icon: GraduationCap,
    image: educationImg,
    clients: ["Colleges", "Schools", "Training Centers"],
    desc: "Campus Wi-Fi design, computer lab rollouts, library management systems, exam-grade secure networks with content filtering.",
    longDesc: "Modern education requires more than just internet access; it needs an ecosystem that supports digital learning, research, and campus safety. We design high-density Wi-Fi networks that can handle thousands of concurrent student devices, alongside secure computer labs and automated digital libraries.",
    features: [
      { title: "High-Density Wi-Fi", desc: "University-scale wireless networks optimized for large auditoriums and student housing." },
      { title: "Content Filtering", desc: "Smart firewall policies that protect students from harmful content while ensuring academic freedom." },
      { title: "Digital Library Setup", desc: "Self-hosted repository systems for research papers, books, and multimedia content." },
      { title: "Exam Security", desc: "Lockdown network modes for online testing to prevent unauthorized access." },
      { title: "Hostel Management", desc: "IoT-based access control and bandwidth management for residential students." },
      { title: "Smart Classroom Tech", desc: "Integration of interactive boards, projectors, and distance learning software." }
    ],
    tech: ["Moodle", "MikroTik Campus", "Ruckus", "ERP Education"],
    benefits: ["Stadium-Grade Wi-Fi", "Secure Student Data", "Controlled Browsing", "Automated Admin", "Research Speed"]
  },
  "enterprise": {
    n: "03",
    id: "enterprise",
    title: "Enterprise",
    subtitle: "Robust corporate foundations for global scalability",
    icon: Building2,
    image: enterpriseImg,
    clients: ["ASMI Global", "Tantia", "SMGS"],
    desc: "Private cloud migrations, server room build-outs, ERP/accounting software, endpoint management and identity governance.",
    longDesc: "Enterprises demand stability, security, and the ability to scale without friction. We design corporate infrastructures that grow with your business. From complex AD/LDAP identity structures to multi-site VPN tunnels, we ensure your global team stays connected and your intellectual property stays protected.",
    features: [
      { title: "Server Room Builds", desc: "Precision engineering of on-premise server environments with fire suppression and cooling." },
      { title: "Multi-Site VPN", desc: "Secure Site-to-Site tunneling that connects branch offices to HQ seamlessly." },
      { title: "Identity Governance", desc: "Implementation of Active Directory or LDAP for centralized user management." },
      { title: "Business Continuity", desc: "Redundant internet providers and failover servers for zero-loss operations." },
      { title: "Enterprise ERP", desc: "Custom configuration and hosting of Odoo, SAP, or Sage business suites." },
      { title: "Endpoint Security", desc: "Centralized management of every corporate laptop, regardless of where the employee is." }
    ],
    tech: ["Windows AD", "Odoo", "Fortinet", "Azure Hybrid"],
    benefits: ["Seamless Scalability", "Unified Identity", "Maximum Security", "Productivity Gains", "Predictable IT Costs"]
  }
};
