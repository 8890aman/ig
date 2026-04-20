import { 
  Network, 
  Shield, 
  Server, 
  Cloud, 
  HardDrive, 
  Monitor, 
  Code2, 
  Database 
} from "lucide-react";

import networkImg from "../assets/services/network-setup.png";
import cyberImg from "../assets/services/cybersecurity.png";
import serverImg from "../assets/services/server-management.png";
import cloudImg from "../assets/services/cloud-server.png";
import backupImg from "../assets/services/backup.png";
import remoteImg from "../assets/services/remote.png";
import softwareImg from "../assets/services/software.png";
import storageImg from "../assets/services/storage.png";

export const SERVICES_DATA = {
  "network-setup": {
    n: "01",
    id: "network-setup",
    icon: Network,
    image: networkImg,
    title: "Network Setup",
    subtitle: "Enterprise-grade connectivity solutions for high-demand environments",
    desc: "Design, implement and optimize secure, scalable networks with proper device setup and structured configuration.",
    longDesc: "A robust network is the backbone of any modern business. We don't just 'install Wi-Fi'; we engineer complex infrastructures that support critical operations. Our approach focuses on redundancy, low latency, and massive scalability. From structured cabling that minimizes interference to software-defined networking (SDN) that gives you total control, our setups are built for 99.99% uptime and zero-touch management.",
    features: [
      { title: "Structured Cabling", desc: "Category 6A and Fiber Optic solutions for maximum throughput and future-proofing." },
      { title: "Advanced Routing", desc: "Multi-WAN failover and SD-WAN configurations for uninterrupted connectivity." },
      { title: "Wi-Fi 6/7 Optimization", desc: "High-density wireless deployments with heat mapping to eliminate dead zones." },
      { title: "Switching Fabrics", desc: "Layer 3 core switching for low-latency data transfer between local workstations." },
      { title: "VLAN Segmentation", desc: "Isolating guest traffic from critical business data for enhanced security." },
      { title: "Network Monitoring", desc: "Real-time traffic analysis and automated alerts for any cable or hardware failures." }
    ],
    tech: ["Ubiquiti", "Cisco", "MikroTik", "Aruba", "Juniper"],
    benefits: ["Zero dead zones", "Instant failover", "Low latency gaming/VOIP", "Remote cloud management", "Future-proof 10Gbps+ ready"],
    process: [
      { step: "Audit", desc: "On-site signal testing and signal interference analysis." },
      { step: "Design", desc: "Blueprint for cable runs and AP placement using CAD/Heatmaps." },
      { step: "Execution", desc: "Industrial-grade installation with labeled and certified cabling." }
    ]
  },
  "cybersecurity": {
    n: "02",
    id: "cybersecurity",
    icon: Shield,
    image: cyberImg,
    title: "Cybersecurity",
    subtitle: "Fortress-level protection for your digital assets and user identities",
    desc: "Firewall setup, antivirus configuration, vulnerability analysis and data security against cyber threats.",
    longDesc: "In an era of increasing ransomware and sophisticated phishing attacks, standard antivirus is not enough. We implement a multi-layered security stack that includes Next-Generation Firewalls (NGFW), Endpoint Detection and Response (EDR), and continuous vulnerability monitoring. Our team ensures that your company is not just protected, but compliant with global data standards.",
    features: [
      { title: "NGFW Implementation", desc: "Deployment of Sophos, Fortinet, or pfSense firewalls with deep packet inspection." },
      { title: "Threat Hunting", desc: "Proactive monitoring to detect and neutralize threats before they manifest." },
      { title: "Identity Management", desc: "Multi-Factor Authentication (MFA) and Zero-Trust architecture setup." },
      { title: "Phishing Simulation", desc: "Ongoing training and tests for employees to prevent human-error breaches." },
      { title: "Penetration Testing", desc: "Simulated attacks on your network to find and patch weak points." },
      { title: "Encrypted VPNs", desc: "Secure remote access for staff without exposing the internal network." }
    ],
    tech: ["Sophos", "Fortinet", "pfSense", "CrowdStrike", "SentinelOne"],
    benefits: ["Ransomware immunity", "Regulatory compliance", "Safe remote work", "Real-time threat alerts", "24/7 Security Operations"],
    process: [
      { step: "Assessment", desc: "Comprehensive scan of all network entry points and open ports." },
      { step: "Hardening", desc: "Locking down unauthorized BIOS access and insecure protocols." },
      { step: "Monitoring", desc: "Setting up AI-driven logs to watch for suspicious behavior patterns." }
    ]
  },
  "server-management": {
    n: "03",
    id: "server-management",
    icon: Server,
    image: serverImg,
    title: "Server Management",
    subtitle: "Precise engineering for your local and virtual server stacks",
    desc: "Physical and virtual machine configuration with proactive monitoring, maintenance and troubleshooting.",
    longDesc: "Whether on-premise or co-located, your servers need constant care. We specialize in server virtualization using Hyper-V and Proxmox, allowing you to run multiple OS instances on a single physical machine, maximizing hardware utilization and drastically reducing electricity costs while improving uptime.",
    features: [
      { title: "Virtualization", desc: "Expert setup of Proxmox VE and Hyper-V clusters for resource efficiency." },
      { title: "OS Hardening", desc: "Security-first configuration for Linux (RedHat/Debian) and Windows Server." },
      { title: "Patch Management", desc: "Automated, zero-downtime updates to ensure systems stay secure." },
      { title: "Resource Balancing", desc: "Dynamic memory and CPU allocation based on real-time load." },
      { title: "UPS Monitoring", desc: "Graceful shutdown routines during power outages to protect data." },
      { title: "Hardware RAID", desc: "Redundant drive arrays to prevent data loss in case of physical disk failure." }
    ],
    tech: ["Proxmox", "Hyper-V", "Linux", "Windows Server", "Dell EMC"],
    benefits: ["Hardware cost reduction", "Snapshots & Rollbacks", "High Availability", "Optimized performance", "Legacy app support"],
    process: [
      { step: "Configuration", desc: "Determining optimized VM sizes and storage pools." },
      { step: "Optimization", desc: "Stripping unneeded OS services to boost speed." },
      { step: "Lifecycle", desc: "Monitoring hardware health and planning upgrades before failure." }
    ]
  },
  "cloud-server-setup": {
    n: "04",
    id: "cloud-server-setup",
    icon: Cloud,
    image: cloudImg,
    title: "Cloud Server Setup",
    subtitle: "Seamless transition to high-performance hybrid cloud systems",
    desc: "Deploy and manage secure cloud servers and private cloud solutions like Nextcloud for remote access.",
    longDesc: "Stop relying on expensive, public cloud subscriptions that store your data in unknown locations. We build private and hybrid cloud solutions that give you the power of Google Drive or Dropbox with the security of your own dedicated hardware. Our cloud setups offer global scalability with local performance speeds.",
    features: [
      { title: "Private Cloud", desc: "Self-hosted Nextcloud instances with office suites and collaboration tools." },
      { title: "VPS Management", desc: "High-performance setups on AWS, GCP, or DigitalOcean." },
      { title: "Hybrid Identity", desc: "Link local Active Directory with cloud services for a unified login." },
      { title: "Containerization", desc: "Running applications in Docker for lightweight, portable deployment." },
      { title: "S3 Compatible Storage", desc: "Setting up MinIO or similar for massive scale unstructed data." },
      { title: "Cloud Backup", desc: "Syncing your local data to offsite cloud providers for disaster recovery." }
    ],
    tech: ["AWS", "DigitalOcean", "Nextcloud", "Docker", "Kubernetes"],
    benefits: ["No per-user fees", "Total data ownership", "Encrypted file sharing", "Global accessibility", "99.99% uptime"],
    process: [
      { step: "Strategy", desc: "Choosing between private, public, or hybrid hosting." },
      { step: "Deployment", desc: "Automated provisioning using infrastructure-as-code." },
      { step: "Governance", desc: "Setting up encryption keys and access control policies." }
    ]
  },
  "backup-data-security": {
    n: "05",
    id: "backup-data-security",
    icon: HardDrive,
    image: backupImg,
    title: "Backup & Data Security",
    subtitle: "Enterprise-grade data immutability and disaster recovery",
    desc: "Encrypted, automated, unlimited and immutable data backups using Veeam, Acronis and Veritas.",
    longDesc: "The 3-2-1 backup rule is our religion. We implement backup solutions that are immutable—meaning even if a hacker gains admin access, they cannot delete your backups for a set period. We guarantee that your business can recover from total data loss in minutes, not days.",
    features: [
      { title: "Immutable Backups", desc: "Object-lock technology that prevents data modification or deletion." },
      { title: "Veeam Integration", desc: "Enterprise-grade recovery that brings systems back in minutes." },
      { title: "Offsite Sync", desc: "Encrypted streams to secure secondary sites or cold storage." },
      { title: "Ransomware Scanning", desc: "AI scans backups for malware before they are stored." },
      { title: "Instant VM Recovery", desc: "Running a broken server directly from the backup drive for zero wait time." },
      { title: "Compliance Archiving", desc: "Long-term data retention for medical and legal requirements." }
    ],
    tech: ["Veeam", "Acronis", "Veritas", "Synology", "Backblaze"],
    benefits: ["Minutes to recovery", "Air-gapped security", "Unlimited versioning", "Disaster proof", "Legal compliance"],
    process: [
      { step: "Validation", desc: "Regular sandbox testing to ensure backups actually boot up." },
      { step: "Rotation", desc: "Daily, weekly, and monthly snapshot management." },
      { step: "Recovery Labs", desc: "Quarterly disaster recovery simulations for stakeholders." }
    ]
  },
  "remote-management": {
    n: "06",
    id: "remote-management",
    icon: Monitor,
    image: remoteImg,
    title: "Remote Management",
    subtitle: "Infinite IT support via secure, centralized monitoring",
    desc: "24×7 remote IT support, secure access setup (TightVNC, RDP), and continuous system monitoring.",
    longDesc: "Our RMM (Remote Monitoring and Management) systems watch your computers so you don't have to. We detect failing hard drives, over-heating CPUs, and pending software crashes before they impact your work. With our secure corridors, we can fix 95% of issues without ever stepping into your office.",
    features: [
      { title: "RMM Tools", desc: "Continuous health monitoring and automated maintenance scripts." },
      { title: "Secure RDP", desc: "VPN-backed remote desktop access that eliminates exposure risk." },
      { title: "Helpdesk Support", desc: "Instant remote assistance for software issues and troubleshooting." },
      { title: "Asset Tracking", desc: "Keep a digital ledger of every laptop and server in your organization." },
      { title: "Automated Patching", desc: "Update all office PCs after hours so work isn't interrupted." },
      { title: "Health Reporting", desc: "Weekly summaries of hardware health and performance trends." }
    ],
    tech: ["TightVNC", "AnyDesk", "Tailscale VPN", "RMM", "NinjaOne"],
    benefits: ["Reduced downtime", "No travel costs", "Proactive alerts", "Secure tunneling", "24/7 Peace of mind"],
    process: [
      { step: "Onboarding", desc: "Installing lightweight agents on all managed devices." },
      { step: "Thresholds", desc: "Setting custom alerts for CPU, RAM, and Disk space." },
      { step: "Automation", desc: "Writing scripts to auto-fix common Windows/Linux errors." }
    ]
  },
  "software-solutions": {
    n: "07",
    id: "software-solutions",
    icon: Code2,
    image: softwareImg,
    title: "Software Solutions",
    subtitle: "Custom-configured business and industrial software suites",
    desc: "Hospital, school, accounting and custom software with installation, training and ongoing support.",
    longDesc: "Generic software doesn't fit specific industries. We provide specialized solutions like Hospital Management Systems (HMS) and specialized ERPs, fully installed and optimized for your operational workflow. We don't just sell licenses; we provide the training and custom integration needed to make the software a success.",
    features: [
      { title: "Industry ERPs", desc: "Customized accounting and management software for niche markets." },
      { title: "Hospital Systems", desc: "PACS and HMS integration for clinical efficiency." },
      { title: "Custom Scripts", desc: "Automation of repetitive tasks and data bridge development." },
      { title: "API Integration", desc: "Connecting your existing apps so they share data automatically." },
      { title: "Staff Training", desc: "Hands-on workshops to ensure your team mastered the new tools." },
      { title: "Database Optimization", desc: "Tuning SQL/NoSQL databases for faster search and reporting." }
    ],
    tech: ["ERPNext", "Odoo", "Tally", "HMS", "Python"],
    benefits: ["Simplified billing", "Automated reporting", "Better staff coordination", "Data-driven decisions", "Reduced paperwork"],
    process: [
      { step: "Analysis", desc: "Mapping your current workflow to find bottlenecks." },
      { step: "Implementation", desc: "Parallel go-live to ensure no business interruption." },
      { step: "Audit", desc: "Monthly check-ins to tune features for users." }
    ]
  },
  "storage-server-setup": {
    n: "08",
    id: "storage-server-setup",
    icon: Database,
    image: storageImg,
    title: "Storage Server Setup",
    subtitle: "High-density data arrays with bit-rot protection",
    desc: "NAS Core, NAS Scale, SAS storage and customized storage servers with backup and scalability.",
    longDesc: "Data grows exponentially. We build petabyte-scale storage solutions using TrueNAS and the ZFS file system, ensuring your data is not just stored, but protected by snapshots and self-healing algorithms. Whether you need a small office NAS or a massive high-availability SAS array, we have the engineering expertise to build it.",
    features: [
      { title: "TrueNAS Deployments", desc: "ZFS-based storage for self-healing data and massive capacity." },
      { title: "High-Speed SAS", desc: "Direct-attached storage for high-frequency database needs." },
      { title: "NAS Scale-Out", desc: "Cluster configurations that grow horizontally with your needs." },
      { title: "Data Scrubbing", desc: "Automated checks for silent data corruption (bit-rot)." },
      { title: "10GbE / 40GbE Ops", desc: "Ultra-fast network backbone for instant file access." },
      { title: "Encrypted Volumes", desc: "Hardware-level encryption for data-at-rest security." }
    ],
    tech: ["TrueNAS", "ZFS", "Seagate Exos", "Broadcom", "iSCSI"],
    benefits: ["Bit-rot protection", "Infinite Snapshots", "High IOPS performance", "Infinite scale", "Low cost per TB"],
    process: [
      { step: "IOPS Test", desc: "Calculating required performance for your specific workload." },
      { step: "Assembly", desc: "Burn-in testing for individual hard drives to pre-screen lemons." },
      { step: "Redundancy", desc: "Configuring Raid-Z2/Z3 for maximum drive failure tolerance." }
    ]
  }
};
