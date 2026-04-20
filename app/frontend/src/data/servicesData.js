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

export const SERVICES_DATA = {
  "network-setup": {
    n: "01",
    id: "network-setup",
    icon: Network,
    title: "Network Setup",
    subtitle: "Enterprise-grade connectivity solutions",
    desc: "Design, implement and optimize secure, scalable networks with proper device setup and structured configuration. We ensure your infrastructure is ready for the future of multi-gigabit workloads.",
    longDesc: "A robust network is the backbone of any modern business. We don't just 'install Wi-Fi'; we engineer complex infrastructures that support critical operations. From structured cabling that minimizes interference to software-defined networking (SDN) that gives you total control, our setups are built for 99.9% uptime.",
    features: [
      { title: "Structured Cabling", desc: "Category 6A and Fiber Optic solutions for maximum throughput and future-proofing." },
      { title: "Advanced Routing", desc: "Multi-WAN failover and SD-WAN configurations for uninterrupted connectivity." },
      { title: "Wi-Fi 6/7 Optimization", desc: "High-density wireless deployments with heat mapping to eliminate dead zones." }
    ],
    tech: ["Ubiquiti", "Cisco", "MikroTik", "Aruba"],
    benefits: ["Zero dead zones", "Instant failover", "Low latency gaming/VOIP", "Remote cloud management"]
  },
  "cybersecurity": {
    n: "02",
    id: "cybersecurity",
    icon: Shield,
    title: "Cybersecurity",
    subtitle: "Fortress-level protection for your digital assets",
    desc: "Firewall setup, antivirus configuration, vulnerability analysis and data security against cyber threats.",
    longDesc: "In an era of increasing ransomware and sophisticated phishing attacks, standard antivirus is not enough. We implement a multi-layered security stack that includes Next-Generation Firewalls (NGFW), Endpoint Detection and Response (EDR), and continuous vulnerability monitoring.",
    features: [
      { title: "NGFW Implementation", desc: "Deployment of Sophos, Fortinet, or pfSense firewalls with deep packet inspection." },
      { title: "Threat Hunting", desc: "Proactive monitoring to detect and neutralize threats before they manifest." },
      { title: "Identity Management", desc: "Multi-Factor Authentication (MFA) and Zero-Trust architecture setup." }
    ],
    tech: ["Sophos", "Fortinet", "pfSense", "CrowdStrike"],
    benefits: ["Ransomware immunity", "Regulatory compliance", "Safe remote work", "Real-time threat alerts"]
  },
  "server-management": {
    n: "03",
    id: "server-management",
    icon: Server,
    title: "Server Management",
    subtitle: "Powering your applications with precision",
    desc: "Physical and virtual machine configuration with proactive monitoring, maintenance and troubleshooting.",
    longDesc: "Whether on-premise or co-located, your servers need constant care. We specialize in server virtualization using Hyper-V and Proxmox, allowing you to run multiple OS instances on a single physical machine, maximizing hardware utilization.",
    features: [
      { title: "Virtualization", desc: "Expert setup of Proxmox VE and Hyper-V clusters for resource efficiency." },
      { title: "OS Hardening", desc: "Security-first configuration for Linux (RedHat/Debian) and Windows Server." },
      { title: "Patch Management", desc: "Automated, zero-downtime updates to ensure systems stay secure." }
    ],
    tech: ["Proxmox", "Hyper-V", "Linux", "Windows Server"],
    benefits: ["Hardware cost reduction", "Snapshots & Rollbacks", "High Availability", "Optimized performance"]
  },
  "cloud-server-setup": {
    n: "04",
    id: "cloud-server-setup",
    icon: Cloud,
    title: "Cloud Server Setup",
    subtitle: "Seamless migration to the hybrid cloud",
    desc: "Deploy and manage secure cloud servers and private cloud solutions like Nextcloud for remote access.",
    longDesc: "Stop relying on expensive, public cloud subscriptions. We build private and hybrid cloud solutions that give you the power of Google Drive or Dropbox with the security of your own dedicated hardware.",
    features: [
      { title: "Private Cloud", desc: "Self-hosted Nextcloud instances with office suites and collaboration tools." },
      { title: "VPS Management", desc: "High-performance setups on AWS, GCP, or DigitalOcean." },
      { title: "Hybrid Identity", desc: "Link local Active Directory with cloud services for a unified login." }
    ],
    tech: ["AWS", "DigitalOcean", "Nextcloud", "Docker"],
    benefits: ["No monthly per-user fees", "Total data ownership", "Encrypted file sharing", "Global accessibility"]
  },
  "backup-data-security": {
    n: "05",
    id: "backup-data-security",
    icon: HardDrive,
    title: "Backup & Data Security",
    subtitle: "Your data, immortalized",
    desc: "Encrypted, automated, unlimited and immutable data backups using Veeam, Acronis and Veritas.",
    longDesc: "The 3-2-1 backup rule is our religion. We implement backup solutions that are immutable—meaning even if a hacker gains admin access, they cannot delete your backups. Sleep better knowing your data is safe from fire, theft, and human error.",
    features: [
      { title: "Immutable Backups", desc: "Object-lock technology that prevents data modification or deletion." },
      { title: "Veeam Integration", desc: "Enterprise-grade recovery that brings systems back in minutes." },
      { title: "Offsite Sync", desc: "Encrypted streams to secure secondary sites or cold storage." }
    ],
    tech: ["Veeam", "Acronis", "Veritas", "Synology"],
    benefits: ["Minutes to recovery", "Air-gapped security", "Unlimited versioning", "Disaster proof"]
  },
  "remote-management": {
    n: "06",
    id: "remote-management",
    icon: Monitor,
    title: "Remote Management",
    subtitle: "Your IT department, everywhere",
    desc: "24×7 remote IT support, secure access setup (TightVNC, RDP), and continuous system monitoring.",
    longDesc: "Our RMM (Remote Monitoring and Management) systems watch your computers so you don't have to. We detect failing hard drives, over-heating CPUs, and pending software crashes before they impact your work.",
    features: [
      { title: "RMM Tools", desc: "Continuous health monitoring and automated maintenance scripts." },
      { title: "Secure RDP", desc: "VPN-backed remote desktop access that eliminates exposure risk." },
      { title: "Helpdesk Support", desc: "Instant remote assistance for software issues and troubleshooting." }
    ],
    tech: ["TightVNC", "AnyDesk", "Tailscale VPN", "RMM"],
    benefits: ["Reduced downtime", "No travel costs", "Proactive alerts", "Secure tunneling"]
  },
  "software-solutions": {
    n: "07",
    id: "software-solutions",
    icon: Code2,
    title: "Software Solutions",
    subtitle: "Industry-specific digital tools",
    desc: "Hospital, school, accounting and custom software with installation, training and ongoing support.",
    longDesc: "Generic software doesn't fit specific industries. We provide specialized solutions like Hospital Management Systems (HMS) and specialized ERPs, fully installed and optimized for your operational workflow.",
    features: [
      { title: "Industry ERPs", desc: "Customized accounting and management software for niche markets." },
      { title: "Hospital Systems", desc: "PACS and HMS integration for clinical efficiency." },
      { title: "Custom Scripts", desc: "Automation of repetitive tasks and data bridge development." }
    ],
    tech: ["ERPNext", "Odoo", "Tally", "HMS"],
    benefits: ["Simplified billing", "Automated reporting", "Better staff coordination", "Data-driven decisions"]
  },
  "storage-server-setup": {
    n: "08",
    id: "storage-server-setup",
    icon: Database,
    title: "Storage Server Setup",
    subtitle: "Capacity without compromise",
    desc: "NAS Core, NAS Scale, SAS storage and customized storage servers with backup and scalability.",
    longDesc: "Data grows exponentially. We build petabyte-scale storage solutions using TrueNAS and ZFS, ensuring your data is not just stored, but protected by the most advanced file system in the world.",
    features: [
      { title: "TrueNAS Deployments", desc: "ZFS-based storage for self-healing data and massive capacity." },
      { title: "High-Speed SAS", desc: "Direct-attached storage for high-frequency database needs." },
      { title: "NAS Scale-Out", desc: "Cluster configurations that grow horizontally with your needs." }
    ],
    tech: ["TrueNAS", "ZFS", "Seagate Exos", "Broadcom"],
    benefits: ["Bit-rot protection", "Snapshots", "High IOPS performance", "Infinite scale"]
  }
};
