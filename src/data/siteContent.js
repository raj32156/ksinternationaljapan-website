export const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Programs", path: "/programs" },
  { label: "Case Studies", path: "/stories" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const trustStats = [
  { value: 10, suffix: "+", label: "Years of practical cyber defense experience" },
  { value: 10000, suffix: "+", label: "Students and professionals trained" },
  { value: 200, suffix: "+", label: "Enterprise and institutional workshops delivered" },
  { value: 2, suffix: "", label: "Program languages: Japanese and English" },
];

export const serviceCards = [
  {
    icon: "01",
    title: "Penetration Testing",
    description:
      "Simulating real-world attacks to identify vulnerabilities in networks, web apps, and infrastructure before malicious hackers do.",
    cta: "Contact Us",
  },
  {
    icon: "02",
    title: "Vulnerability Assessment",
    description:
      "Discover, classify, and prioritize system weaknesses, with actionable steps to strengthen your cyber defenses.",
    cta: "Contact Us",
  },
  {
    icon: "03",
    title: "SOC & Network Monitoring",
    description:
      "24/7 monitoring of your IT infrastructure to detect, respond, and prevent cyber threats in real-time.",
    cta: "Contact Us",
  },
  {
    icon: "04",
    title: "Digital Forensics",
    description:
      "Investigate cyber incidents, recover digital evidence, and provide reports for legal or corporate use.",
    cta: "Contact Us",
  },
  {
    icon: "05",
    title: "Cybersecurity Consultancy",
    description:
      "Strategy planning, policy creation, and implementation of security frameworks to protect businesses effectively.",
    cta: "Contact Us",
  },
  {
    icon: "06",
    title: "Employee Security Training",
    description:
      "Educating staff about phishing, social engineering, password safety, and secure digital practices to prevent breaches.",
    cta: "Contact Us",
  },
  {
    icon: "07",
    title: "Cloud Security Solutions",
    description:
      "Protect cloud infrastructure and SaaS applications from data breaches, misconfigurations, and cyber threats.",
    cta: "Contact Us",
  },
  {
    icon: "08",
    title: "Mobile & App Security",
    description:
      "Ensure mobile applications are secure, prevent data leaks, and safeguard users from attacks on Android and iOS platforms.",
    cta: "Contact Us",
  },
  {
    icon: "09",
    title: "IoT & Embedded Device Security",
    description:
      "Protect smart devices, IoT networks, and embedded systems from emerging cyber threats with advanced security solutions.",
    cta: "Contact Us",
  },
];

export const whyChooseUs = [
  "Practical, real-world focused training design",
  "Defense-first approach rather than offensive hype",
  "Programs suitable for beginners, teams, and enterprises",
  "Bilingual delivery in Japanese and English",
];

export const processSteps = [
  {
    title: "Assess Training Needs",
    description:
      "We evaluate roles, skill gaps, business context, and training goals before shaping the right program.",
  },
  {
    title: "Design the Learning Path",
    description:
      "We map course modules, workshop structure, hands-on labs, and delivery format for your audience.",
  },
  {
    title: "Deliver Practical Training",
    description:
      "Participants learn through real-world cyber defense concepts, monitoring workflows, and guided exercises.",
  },
  {
    title: "Strengthen Operational Readiness",
    description:
      "Teams leave with clearer defensive habits, incident response confidence, and a stronger security mindset.",
  },
];

export const whyJapanPoints = [
  {
    title: "Defense-focused learning",
    text: "Students and teams learn how to detect, monitor, and respond instead of chasing superficial attack demos.",
  },
  {
    title: "Job-ready cybersecurity skills",
    text: "Programs are designed to connect theory with SOC operations, analysis, and enterprise realities.",
  },
  {
    title: "Enterprise-grade mindset",
    text: "Training reflects the needs of organizations that care about resilience, governance, and response quality.",
  },
  {
    title: "Global accessibility",
    text: "Japanese and English delivery helps broaden access for both local and international participants.",
  },
];

export const partnerLogos = [
  "Enterprise SOC Teams",
  "Government Security Units",
  "University Cyber Labs",
  "Security Awareness Programs",
  "Blue Team Communities",
  "Incident Response Workshops",
];

export const caseStudies = [
  {
    title: "Preventing Ransomware Attack in a Tokyo Manufacturing Company",
    sector: "Manufacturing | Tokyo",
    challenge:
      "A mid-sized manufacturing company in Tokyo faced an imminent ransomware threat due to outdated security systems and insufficient staff awareness. Critical production data and customer records were at high risk of encryption by ransomware attackers.",
    action:
      "KS International Japan conducted a full penetration test and security audit to identify vulnerabilities in network, endpoints, and cloud storage. We deployed advanced anti-ransomware tools, implemented daily backup solutions, and provided employee phishing and security awareness training.",
    result:
      "The company successfully prevented a ransomware attack that targeted email phishing campaigns. Security incidents dropped by 80% in the first month, and the company achieved full compliance with ISO/IEC 27001 security standards.",
  },
  {
    title: "Security Improvement for a Japanese SME",
    sector: "SME | Osaka",
    challenge:
      "A small-to-medium enterprise in Osaka lacked a structured cybersecurity strategy. Employees used weak passwords and company endpoints were vulnerable to malware and phishing attacks.",
    action:
      "KS International Japan performed a vulnerability assessment and implemented multi-factor authentication, endpoint protection, and network segmentation. We also conducted workshops for employees on social engineering and secure digital practices.",
    result:
      "The SME saw a 90% reduction in malware incidents, improved employee cyber hygiene, and established a baseline security policy to maintain long-term digital safety.",
  },
  {
    title: "Incident Response for a Tokyo Financial Institution",
    sector: "Financial Services | Tokyo",
    challenge:
      "A financial client in Tokyo experienced suspicious network activity indicating a potential data breach. Critical financial data and client information were at risk.",
    action:
      "KS International Japan initiated a rapid incident response, isolating affected systems, performing forensic analysis, and identifying the attack vector. We patched vulnerabilities and enhanced monitoring systems to prevent recurrence.",
    result:
      "Data breach was fully contained without any loss of customer information. Post-incident, we improved their SOC capabilities and provided ongoing security recommendations.",
  },
  {
    title: "Before-After Security Posture for an E-commerce Startup",
    sector: "E-commerce | Nagoya",
    challenge:
      "A growing e-commerce startup in Nagoya had minimal cybersecurity measures. Their systems were exposed to SQL injection, cross-site scripting, and insecure API endpoints, threatening customer data and payment information.",
    action:
      "KS International Japan conducted a full security assessment, applied penetration testing findings, implemented web application firewalls, and trained developers on secure coding practices.",
    result:
      "The startup achieved a robust security posture: all vulnerabilities were fixed, risk of data breaches reduced by 95%, and customer trust increased due to visible security compliance.",
  },
  {
    title: "Cloud Hardening Program for a Tokyo SaaS Provider",
    sector: "SaaS | Tokyo",
    challenge:
      "A fast-growing SaaS provider had inconsistent identity policies, weak cloud configuration hygiene, and insufficient alerting across production systems.",
    action:
      "We reviewed cloud architecture, remediated misconfigurations, tightened IAM controls, improved logging and alerting, and established a repeatable cloud security baseline.",
    result:
      "The provider significantly reduced exposure to configuration-driven breaches, improved visibility across environments, and strengthened customer-facing resilience.",
  },
  {
    title: "IoT Security Review for a Smart Facility Operator",
    sector: "Smart Infrastructure | Yokohama",
    challenge:
      "A facility operator managing connected devices lacked visibility into IoT exposure, firmware risk, and segmentation weaknesses between operational and business systems.",
    action:
      "KS International Japan assessed embedded devices, reviewed network design, introduced segmentation controls, and delivered remediation guidance tailored to connected infrastructure.",
    result:
      "The client gained clearer asset visibility, reduced attack surface across smart devices, and improved protection for operational environments.",
  },
];

export const programs = [
  {
    title: "企業向けサイバー脅威対策と防御基礎 | Enterprise Cyber Threats & Defense Basics",
    subtitle: "サイバー脅威と防御の基礎 | Cyber Threats & Defense Essentials",
    duration: "Beginner -> Intermediate",
    eligibility: "Designed for Japan & global learners",
    benefits: "Threat awareness, defense principles, and SOC readiness",
    focus: "Threat Awareness & Defense",
    careerPath: "SOC / Blue Team / Analyst",
    language: "Japanese + English",
    overview:
      "A foundational cybersecurity course designed for Japan and global learners, focused on real-world cyber threats, defensive strategies, and SOC readiness.",
    syllabus: [
      {
        title: "モジュール 1: サイバーセキュリティ入門 | Module 1: Introduction to Cybersecurity",
        topics: [
          "サイバーセキュリティとは何か - What is cybersecurity",
          "現代社会におけるサイバーリスク - Cyber risks in modern society",
          "情報資産の重要性 - Importance of information assets",
        ],
      },
      {
        title: "モジュール 2: サイバー脅威の種類 | Module 2: Types of Cyber Threats",
        topics: [
          "マルウェアの概要 - Overview of malware",
          "ランサムウェア攻撃 - Ransomware attacks",
          "フィッシング詐欺 - Phishing scams",
          "内部脅威の理解 - Understanding insider threats",
        ],
      },
      {
        title: "モジュール 3: 攻撃者の思考と動機 | Module 3: Attacker Mindset and Motivation",
        topics: [
          "金銭目的の攻撃 - Financially motivated attacks",
          "国家支援型攻撃 - State-sponsored attacks",
          "ハクティビズム - Hacktivism",
          "内部不正行為 - Insider malicious activities",
        ],
      },
      {
        title: "モジュール 4: サイバー攻撃のライフサイクル | Module 4: Cyber Attack Lifecycle",
        topics: [
          "偵察フェーズ - Reconnaissance phase",
          "初期侵入 - Initial access",
          "権限昇格 - Privilege escalation",
          "データ流出 - Data exfiltration",
        ],
      },
      {
        title: "モジュール 5: マルウェアの基礎 | Module 5: Malware Fundamentals",
        topics: [
          "ウイルスの特徴 - Characteristics of viruses",
          "ワームの動作 - Worm behavior",
          "トロイの木馬 - Trojan horses",
          "スパイウェア - Spyware threats",
        ],
      },
      {
        title: "モジュール 6: ランサムウェア攻撃の仕組み | Module 6: Ransomware Attack Mechanics",
        topics: [
          "感染経路 - Infection vectors",
          "暗号化プロセス - Encryption process",
          "被害の影響 - Impact analysis",
          "復旧戦略 - Recovery strategies",
        ],
      },
      {
        title: "モジュール 7: フィッシングとソーシャルエンジニアリング | Module 7: Phishing and Social Engineering",
        topics: [
          "メールフィッシング - Email phishing",
          "SMSフィッシング - SMS phishing",
          "なりすまし攻撃 - Impersonation attacks",
          "心理操作 - Psychological manipulation",
        ],
      },
      {
        title: "モジュール 8: ネットワーク脅威 | Module 8: Network-Based Threats",
        topics: [
          "DDoS攻撃 - DDoS attacks",
          "中間者攻撃 - Man-in-the-middle attacks",
          "不正侵入 - Unauthorized access",
        ],
      },
      {
        title: "モジュール 9: Webアプリケーションの脅威 | Module 9: Web Application Threats",
        topics: [
          "SQLインジェクション - SQL injection",
          "XSS - Cross-site scripting",
          "認証の欠陥 - Authentication flaws",
        ],
      },
      {
        title: "モジュール 10: クラウドセキュリティの脅威 | Module 10: Cloud Security Threats",
        topics: [
          "設定ミス - Cloud misconfiguration",
          "データ漏洩 - Data breaches",
          "責任共有モデル - Shared responsibility model",
        ],
      },
      {
        title: "モジュール 11: モバイル・IoTの脅威 | Module 11: Mobile and IoT Threats",
        topics: [
          "スマートデバイスの脆弱性 - Vulnerabilities in smart devices",
          "モバイルマルウェア - Mobile malware",
          "IoT攻撃事例 - IoT attack scenarios",
        ],
      },
      {
        title: "モジュール 12: 防御の基本原則 | Module 12: Core Defense Principles",
        topics: [
          "多層防御 - Defense in depth",
          "最小権限の原則 - Principle of least privilege",
          "ゼロトラストモデル - Zero trust model",
        ],
      },
      {
        title: "モジュール 13: エンドポイントセキュリティ | Module 13: Endpoint Security",
        topics: [
          "アンチウイルスの役割 - Role of antivirus software",
          "EDRの基本 - Basics of EDR",
          "デバイス管理 - Device management",
        ],
      },
      {
        title: "モジュール 14: ネットワーク防御技術 | Module 14: Network Defense Technologies",
        topics: [
          "ファイアウォールの機能 - Firewall functionality",
          "IDS / IPS - Intrusion detection and prevention",
          "ネットワーク分離 - Network segmentation",
        ],
      },
      {
        title: "モジュール 15: セキュリティ監視とログ分析 | Module 15: Security Monitoring and Log Analysis",
        topics: [
          "ログの重要性 - Importance of logs",
          "SIEMの概要 - Overview of SIEM",
          "異常検知 - Anomaly detection",
        ],
      },
      {
        title: "モジュール 16: インシデントレスポンス | Module 16: Incident Response",
        topics: [
          "インシデント検知 - Incident detection",
          "封じ込め対応 - Containment response",
          "復旧プロセス - Recovery process",
          "事後分析 - Post-incident analysis",
        ],
      },
      {
        title: "モジュール 17: デジタルフォレンジック入門 | Module 17: Digital Forensics Basics",
        topics: [
          "証拠保全 - Evidence preservation",
          "ログ解析 - Log analysis",
          "タイムライン作成 - Timeline creation",
        ],
      },
      {
        title: "モジュール 18: サイバー法規と倫理 | Module 18: Cyber Laws and Ethics",
        topics: [
          "データ保護法 - Data protection laws",
          "法的責任 - Legal responsibilities",
          "倫理的行動 - Ethical behavior",
        ],
      },
      {
        title: "モジュール 19: SOCとブルーチームの役割 | Module 19: SOC and Blue Team Roles",
        topics: [
          "SOCアナリストの役割 - Role of a SOC analyst",
          "ブルーチームの責任 - Blue Team responsibilities",
          "チーム連携 - Team coordination",
        ],
      },
      {
        title: "モジュール 20: 将来のサイバー脅威と防御戦略 | Module 20: Future Threats and Defense Strategy",
        topics: [
          "AIを利用した攻撃 - AI-driven attacks",
          "自動化された脅威 - Automated threats",
          "サイバーセキュリティのキャリアパス - Cybersecurity career paths",
        ],
      },
    ],
  },
  {
    title: "高度サイバーセキュリティコース | Advanced Cybersecurity Course",
    subtitle: "Advanced Cybersecurity Course - Japan Edition | English + 日本語",
    duration: "Advanced",
    eligibility: "Intermediate to advanced learners and security professionals",
    benefits: "Enterprise defense, advanced analysis, red-blue operations, and governance",
    focus: "Advanced Attack & Defense",
    careerPath: "Red Team / Blue Team / SOC / Security Engineer",
    language: "English + Japanese",
    overview:
      "An advanced cybersecurity program for serious learners and professionals covering enterprise architecture, advanced threats, cloud, malware analysis, threat hunting, incident response, governance, and strategic cyber defense.",
    syllabus: [
      {
        title: "Module 1: Advanced Threat Landscape & APT Operations | 高度な脅威環境とAPT攻撃",
        topics: [
          "Nation-state cyber threats | 国家支援型サイバー攻撃",
          "APT lifecycle | APT攻撃のライフサイクル",
          "MITRE ATT&CK framework | MITRE ATT&CKの理解",
          "Living-off-the-Land attacks | 正規ツールを悪用する攻撃",
        ],
      },
      {
        title: "Module 2: Enterprise Network Architecture & Zero Trust | エンタープライズネットワークとゼロトラスト",
        topics: [
          "Traditional vs Zero Trust | 従来型とゼロトラストの比較",
          "Network segmentation | ネットワーク分割",
          "Identity-based access | IDベースのアクセス制御",
          "Secure architecture | 安全な設計",
        ],
      },
      {
        title: "Module 3: Advanced Networking for Attack & Defense | 高度なネットワーク攻撃と防御",
        topics: [
          "Advanced TCP/IP analysis | TCP/IPの高度解析",
          "VLAN hopping | VLANホッピング",
          "DNS & routing attacks | DNS・ルーティング攻撃",
          "Deep packet inspection | パケット詳細解析",
        ],
      },
      {
        title: "Module 4: Windows Internals & Active Directory | Windows内部構造とAD攻撃",
        topics: [
          "Windows authentication | Windows認証の仕組み",
          "Active Directory structure | Active Directory構造",
          "Kerberos abuse | Kerberos悪用",
          "Privilege escalation | 権限昇格",
        ],
      },
      {
        title: "Module 5: Linux Internals & Server Hardening | Linux内部構造とサーバー防御",
        topics: [
          "Permissions & processes | 権限管理とプロセス",
          "Kernel security | カーネルセキュリティ",
          "Server hardening | サーバー強化",
          "Log auditing | ログ監査",
        ],
      },
      {
        title: "Module 6: Advanced Web Application Pentesting | 高度なWebアプリ診断",
        topics: [
          "Business logic flaws | ビジネスロジック脆弱性",
          "Authentication issues | 認証不備",
          "File upload vulnerabilities | ファイルアップロード攻撃",
          "Exploit chaining | 脆弱性連鎖",
        ],
      },
      {
        title: "Module 7: API Security & Microservices | APIセキュリティ",
        topics: [
          "API attack surface | API攻撃面",
          "BOLA vulnerabilities | BOLA脆弱性",
          "JWT issues | JWT問題",
          "Gateway misconfigurations | ゲートウェイ設定ミス",
        ],
      },
      {
        title: "Module 8: Advanced Cloud Security | 高度なクラウドセキュリティ",
        topics: [
          "Shared responsibility model | 責任共有モデル",
          "IAM privilege escalation | IAM権限昇格",
          "Cloud logging | クラウドログ",
          "Japan compliance (APPI) | APPI対応",
        ],
      },
      {
        title: "Module 9: Container & Kubernetes Security | コンテナとK8s",
        topics: [
          "Container attack vectors | コンテナ攻撃",
          "Kubernetes RBAC issues | K8s RBAC問題",
          "Supply chain attacks | サプライチェーン攻撃",
          "Runtime security | 実行時防御",
        ],
      },
      {
        title: "Module 10: DevSecOps & CI/CD Security | DevSecOpsとCI/CD",
        topics: [
          "Secure SDLC | セキュア開発",
          "Pipeline attacks | パイプライン攻撃",
          "Secrets management | シークレット管理",
          "Automated security testing | 自動テスト",
        ],
      },
      {
        title: "Module 11: Advanced OSINT & Threat Intelligence | 高度なOSINTと脅威インテリジェンス",
        topics: [
          "Corporate intelligence gathering | 企業向けOSINT調査",
          "Dark web monitoring | ダークウェブ監視",
          "Threat actor profiling | 脅威アクター分析",
          "Attribution basics | 攻撃者特定の基礎",
        ],
      },
      {
        title: "Module 12: Advanced Malware Analysis | 高度なマルウェア解析",
        topics: [
          "Static malware analysis | 静的マルウェア解析",
          "Dynamic sandbox analysis | 動的サンドボックス解析",
          "Obfuscation & packing | 難読化とパッキング",
          "C2 communication analysis | C2通信解析",
        ],
      },
      {
        title: "Module 13: Red Team Operations & Campaign Design | レッドチーム演習",
        topics: [
          "Initial access techniques | 初期侵入手法",
          "Persistence mechanisms | 永続化の仕組み",
          "Lateral movement | 横展開攻撃",
          "Red team reporting | レッドチーム報告書",
        ],
      },
      {
        title: "Module 14: Social Engineering & Human Attacks | ソーシャルエンジニアリング",
        topics: [
          "Spear phishing campaigns | 標的型フィッシング",
          "Pretexting techniques | なりすまし手法",
          "Psychological manipulation | 心理的操作",
          "Human-layer defense | 人的防御対策",
        ],
      },
      {
        title: "Module 15: Physical Security & Hardware Attacks | 物理セキュリティとハード攻撃",
        topics: [
          "Physical access risks | 物理アクセスリスク",
          "USB-based attacks | USB攻撃",
          "Access badge weaknesses | 入退室管理の弱点",
          "Facility security controls | 施設セキュリティ管理",
        ],
      },
      {
        title: "Module 16: SOC Architecture & Detection Engineering | SOC構成と検知設計",
        topics: [
          "SOC tiers & workflows | SOCの役割と運用",
          "SIEM architecture | SIEM構成",
          "Detection rule engineering | 検知ルール設計",
          "Alert triage | アラート対応",
        ],
      },
      {
        title: "Module 17: Advanced Threat Hunting | 高度な脅威ハンティング",
        topics: [
          "Hypothesis-driven hunting | 仮説ベースの探索",
          "Behavioral analytics | 振る舞い分析",
          "Endpoint telemetry | エンドポイント監視",
          "Threat hunting reports | ハンティング報告",
        ],
      },
      {
        title: "Module 18: Incident Response & Crisis Management | インシデント対応と危機管理",
        topics: [
          "Incident response lifecycle | インシデント対応手順",
          "Containment & eradication | 封じ込めと根絶",
          "Executive communication | 経営層への報告",
          "Post-incident review | 事後レビュー",
        ],
      },
      {
        title: "Module 19: Digital Forensics & Evidence Handling | デジタルフォレンジック",
        topics: [
          "Disk & memory forensics | ディスク・メモリ解析",
          "Timeline analysis | タイムライン分析",
          "Evidence integrity | 証拠保全",
          "Legal considerations | 法的注意点",
        ],
      },
      {
        title: "Module 20: Ransomware Defense & Recovery | ランサムウェア対策",
        topics: [
          "Ransomware kill chain | ランサムウェア工程",
          "Backup & recovery planning | バックアップと復旧",
          "Detection strategies | 検知戦略",
          "Post-attack recovery | 攻撃後対応",
        ],
      },
      {
        title: "Module 21: Governance, Risk & Compliance (Japan) | ガバナンス・リスク・法令遵守",
        topics: [
          "APPI requirements | 個人情報保護法（APPI）",
          "ISO 27001 overview | ISO 27001概要",
          "Risk assessment | リスク評価",
          "Audit readiness | 監査準備",
        ],
      },
      {
        title: "Module 22: Cyber Warfare & Critical Infrastructure | サイバー戦争と重要インフラ",
        topics: [
          "National cyber defense | 国家サイバー防衛",
          "Critical infrastructure risks | 重要インフラの脅威",
          "OT vs IT security | OTとITの違い",
          "Strategic defense | 戦略的防御",
        ],
      },
      {
        title: "Module 23: AI & Machine Learning in Cybersecurity | AIと機械学習",
        topics: [
          "AI-powered attacks | AI攻撃",
          "ML-based detection | 機械学習検知",
          "Adversarial AI | 敵対的AI",
          "SOC automation | SOC自動化",
        ],
      },
      {
        title: "Module 24: Advanced Bug Bounty & Exploit Chaining | 高度なバグバウンティ",
        topics: [
          "High-impact vulnerabilities | 高影響度脆弱性",
          "Exploit chaining | 攻撃連鎖",
          "Responsible disclosure | 適切な開示",
          "Professional reporting | 専門的レポート",
        ],
      },
      {
        title: "Module 25: Capstone Project & Certification | 総合演習と修了認定",
        topics: [
          "End-to-end security simulation | 総合セキュリティ演習",
          "Red team vs Blue team | レッド対ブルーチーム",
          "Executive-level report | 経営向け報告書",
          "Final certification | 修了認定",
        ],
      },
    ],
  },
  {
    title: "中級サイバーセキュリティコース | Intermediate Cybersecurity Course",
    subtitle: "Intermediate Cybersecurity Course (90 Hours) | 中級サイバーセキュリティコース（90時間）",
    duration: "90 Hours",
    eligibility: "Students with basic cybersecurity knowledge",
    benefits: "Practical labs, recorded sessions, and intermediate attack-defense foundations",
    focus: "Practical + Recorded",
    careerPath: "Security Analyst / Pentest Path / SOC Path",
    language: "English + Japanese",
    overview:
      "An intermediate course for learners who already understand basic cybersecurity concepts and want deeper practical skills in networking, reconnaissance, vulnerability analysis, web security, monitoring, response, and career progression.",
    prerequisites: [
      "Basic networking concepts (TCP/IP, DNS, HTTP) | ネットワークの基礎（TCP/IP、DNS、HTTP）",
      "Linux basic commands | Linux基本コマンド",
      "Understanding of IP, ports, and protocols | IP・ポート・プロトコルの理解",
      "Basic cybersecurity terminology | サイバーセキュリティ用語",
      "Legal and ethical boundaries | 法律・倫理の基礎理解",
    ],
    syllabus: [
      {
        title: "Module 1: Networking for Security | Networking for Security",
        topics: [
          "Advanced networking concepts | 高度なネットワーク概念",
          "Packet flow & analysis | パケットフローと分析",
        ],
      },
      {
        title: "Module 2: Linux for Cybersecurity | Linux for Cybersecurity",
        topics: [
          "Advanced Linux commands | 高度なLinuxコマンド",
          "File & process management | ファイル・プロセス管理",
        ],
      },
      {
        title: "Module 3: Information Gathering Techniques | Information Gathering Techniques",
        topics: [
          "Passive reconnaissance | パッシブ情報収集",
          "Active reconnaissance | アクティブ情報収集",
        ],
      },
      {
        title: "Module 4: Nmap & Network Scanning | Nmap & Network Scanning",
        topics: [
          "Port scanning concepts | ポートスキャンの概念",
          "Service detection | サービス検出",
        ],
      },
      {
        title: "Module 5: Vulnerability Scanning | Vulnerability Scanning",
        topics: [
          "Vulnerability scanning tools | 脆弱性スキャンツール",
          "Result analysis | 結果分析",
        ],
      },
      {
        title: "Module 6: Web Application Basics | Web Application Basics",
        topics: [
          "How websites work | Webサイトの仕組み",
          "Frontend & backend basics | フロントエンドとバックエンド",
        ],
      },
      {
        title: "Module 7: OWASP Top 10 | OWASP Top 10",
        topics: [
          "OWASP vulnerabilities overview | OWASP脆弱性概要",
          "Real-world examples | 実例解説",
        ],
      },
      {
        title: "Module 8: SQL Injection Fundamentals | SQL Injection Fundamentals",
        topics: [
          "SQL injection concepts | SQLインジェクションの概念",
          "Detection methods | 検出方法",
        ],
      },
      {
        title: "Module 9: XSS & Client-Side Attacks | XSS & Client-Side Attacks",
        topics: [
          "Stored & reflected XSS | XSSの種類",
          "Impact analysis | 影響分析",
        ],
      },
      {
        title: "Module 10: Authentication & Session Security | Authentication & Session Security",
        topics: [
          "Login mechanisms | ログイン仕組み",
          "Session handling risks | セッションリスク",
        ],
      },
      {
        title: "Module 11: API Security Basics | API Security Basics",
        topics: [
          "API architecture | API構造",
          "Common API risks | APIの一般的リスク",
        ],
      },
      {
        title: "Module 12: Wireless Network Security | Wireless Network Security",
        topics: [
          "Wi-Fi security basics | Wi-Fiセキュリティ",
          "Common wireless threats | 無線の脅威",
        ],
      },
      {
        title: "Module 13: Malware Fundamentals | Malware Fundamentals",
        topics: [
          "Types of malware | マルウェアの種類",
          "Malware behavior | 挙動分析",
        ],
      },
      {
        title: "Module 14: Social Engineering Attacks | Social Engineering Attacks",
        topics: [
          "Phishing techniques | フィッシング攻撃",
          "Human psychology | 心理的手法",
        ],
      },
      {
        title: "Module 15: Password Security | Password Security",
        topics: [
          "Password weaknesses | パスワードの弱点",
          "Protection strategies | 防御戦略",
        ],
      },
      {
        title: "Module 16: Logs & Monitoring | Logs & Monitoring",
        topics: [
          "Log types | ログの種類",
          "Security monitoring basics | 監視の基礎",
        ],
      },
      {
        title: "Module 17: Incident Response Basics | Incident Response Basics",
        topics: [
          "Incident lifecycle | インシデント対応",
          "Response strategies | 対応戦略",
        ],
      },
      {
        title: "Module 18: Legal & Ethical Hacking | Legal & Ethical Hacking",
        topics: [
          "Cyber laws overview | サイバー法概要",
          "Responsible testing | 倫理的テスト",
        ],
      },
      {
        title: "Module 19: Career Paths in Cybersecurity | Career Paths in Cybersecurity",
        topics: [
          "Job roles explained | 職種紹介",
          "Skill roadmap | スキルロードマップ",
        ],
      },
      {
        title: "Module 20: Practical Labs & Case Studies | Practical Labs & Case Studies",
        topics: [
          "Hands-on practice | 実践ラボ",
          "Real attack case analysis | 実例ケース分析",
        ],
      },
    ],
  },
  {
    title: "サイバーセキュリティとデジタル安全入門 | Introduction to Cybersecurity & Digital Safety",
    subtitle: "Basic Cybersecurity Course - Beginner Level | No Prior Experience Required",
    duration: "120-150+ Hours",
    eligibility: "No prior experience required",
    benefits: "Hands-on learning, live support, and career foundation",
    focus: "Recorded + Live Support",
    careerPath: "Beginner -> Intermediate / Ethical Hacking / SOC Analyst",
    language: "English + Japanese",
    overview:
      "A beginner-friendly cybersecurity course designed to build a complete foundation in cybersecurity, digital safety, and ethical hacking. Ideal for learners starting from zero and aiming to progress toward intermediate and advanced paths.",
    outcome: "Strong foundation in cybersecurity and ethical hacking",
    syllabus: [
      {
        title: "MODULE 1: Introduction to Cybersecurity | サイバーセキュリティ入門",
        topics: [
          "What is Cybersecurity?",
          "Why Cybersecurity is Important",
          "Types of Hackers",
          "Cybersecurity Domains",
          "Career Paths Overview",
          "サイバーセキュリティとは何か／なぜ重要か／ハッカーの種類／分野とキャリア概要",
        ],
      },
      {
        title: "MODULE 2: Basics of Computers & Operating Systems | コンピュータとOSの基礎",
        topics: [
          "How Computers Work",
          "Hardware vs Software",
          "Windows, Linux, macOS Overview",
          "Why Hackers Use Linux",
          "Virtual Machines Basics",
          "コンピュータの基本／OSの種類／Linuxの重要性／仮想環境の理解",
        ],
      },
      {
        title: "MODULE 3: Networking Fundamentals | ネットワーク基礎",
        topics: [
          "What is a Network?",
          "LAN, WAN, MAN",
          "IP Address, MAC Address",
          "Ports & Protocols",
          "Client-Server Model",
          "ネットワーク基礎／IP・MACアドレス／ポートとプロトコル",
        ],
      },
      {
        title: "MODULE 4: Internet & Web Fundamentals | インターネットとWebの基礎",
        topics: [
          "How the Internet Works",
          "DNS, HTTP, HTTPS",
          "Websites & Web Servers",
          "Frontend vs Backend",
          "Basic Website Structure",
          "インターネットの仕組み／DNS・HTTP／Webの基礎構造",
        ],
      },
      {
        title: "MODULE 5: Introduction to Linux (Beginner) | Linux入門",
        topics: [
          "Linux Overview",
          "Linux File System",
          "Basic Linux Commands",
          "File & Directory Management",
          "User & Permission Basics",
          "Linux入門／基本コマンド／ファイル管理／権限の理解",
        ],
      },
      {
        title: "MODULE 6: Cyber Threats & Attacks | サイバー脅威と攻撃",
        topics: [
          "Malware Types",
          "Phishing Attacks",
          "Ransomware",
          "Password Attacks",
          "Social Engineering",
          "マルウェア／フィッシング／ランサムウェア／ソーシャルエンジニアリング",
        ],
      },
      {
        title: "MODULE 7: Introduction to Ethical Hacking | エシカルハッキング入門",
        topics: [
          "What is Ethical Hacking?",
          "Hacking Phases",
          "Legal vs Illegal Hacking",
          "Rules & Ethics",
          "Scope & Permission",
          "エシカルハッキングとは／ハッキングの流れ／法律と倫理",
        ],
      },
      {
        title: "MODULE 8: Information Gathering Basics | 情報収集の基礎",
        topics: [
          "What is Reconnaissance",
          "Passive vs Active Recon",
          "Google Dorking Basics",
          "WHOIS & DNS Lookup",
          "Metadata Awareness",
          "情報収集の基礎／パッシブ・アクティブ調査／Google検索技術",
        ],
      },
      {
        title: "MODULE 9: Basic Security Tools Overview | 基本セキュリティツール",
        topics: [
          "Nmap (Intro)",
          "Whois Tools",
          "Ping & Traceroute",
          "Browser DevTools",
          "Password Managers",
          "基本ツール紹介／Nmap入門／ネットワーク確認",
        ],
      },
      {
        title: "MODULE 10: Web Security Basics | Webセキュリティ基礎",
        topics: [
          "What is Web Security",
          "Common Website Vulnerabilities",
          "SQL Injection (Concept)",
          "XSS (Concept)",
          "Why Web Security Matters",
          "Webセキュリティ基礎／代表的な脆弱性の理解",
        ],
      },
      {
        title: "MODULE 11: Passwords & Authentication Security | パスワードと認証の安全性",
        topics: [
          "How Passwords Work",
          "Weak vs Strong Passwords",
          "Hashing & Salting (Concept)",
          "Two-Factor Authentication",
          "Password Attack Awareness",
          "パスワードの仕組み／強力な認証方法／2要素認証",
        ],
      },
      {
        title: "MODULE 12: Email & Social Media Security | メールとSNSのセキュリティ",
        topics: [
          "Email Threats",
          "Phishing Detection",
          "Social Media Privacy",
          "Account Protection Tips",
          "Real-World Scam Examples",
          "メールとSNSのセキュリティ／詐欺対策",
        ],
      },
      {
        title: "MODULE 13: Mobile & Wi-Fi Security Basics | モバイル・Wi-Fiセキュリティ",
        topics: [
          "Mobile Security Risks",
          "Public Wi-Fi Dangers",
          "Safe Browsing Practices",
          "VPN Basics",
          "Device Protection Tips",
          "モバイル・Wi-Fiセキュリティ／VPN基礎",
        ],
      },
      {
        title: "MODULE 14: Cyber Laws & Ethics | サイバー法と倫理",
        topics: [
          "Cybercrime Overview",
          "Basic Cyber Laws",
          "Ethical Responsibilities",
          "Responsible Learning",
          "Legal Career Paths",
          "サイバー法律／倫理／責任ある学習",
        ],
      },
      {
        title: "MODULE 15: Career Roadmap & Next Steps | キャリアロードマップ",
        topics: [
          "Cybersecurity Roles",
          "Required Skills",
          "Certifications Overview",
          "Next Level Learning Path",
          "How to Practice Safely",
          "キャリアロードマップ／次のステップ",
        ],
      },
    ],
    nextSteps:
      "After this course, learners can move to: Intermediate Cybersecurity, Ethical Hacking, Bug Bounty, and SOC Analyst. このコース修了後、中級・上級サイバーセキュリティへ進むことができます。",
  },
];

export const blogPosts = [
  {
    title: "Cyber Threats and Defense Basics for New Security Learners",
    excerpt:
      "A practical introduction to core threat categories, defensive thinking, and the foundations of cyber resilience.",
    tag: "Defense Basics",
  },
  {
    title: "What a SOC Analyst Actually Does Every Day",
    excerpt:
      "A realistic overview of monitoring, triage, alert investigation, escalation, and team coordination inside a SOC.",
    tag: "SOC Operations",
  },
  {
    title: "Why Blue Team Skills Matter More Than Ever",
    excerpt:
      "How defensive operations, visibility, and response readiness shape stronger organizations in modern threat environments.",
    tag: "Blue Team",
  },
  {
    title: "How Enterprise Security Training Improves Readiness",
    excerpt:
      "Why simulations, awareness, and role-based training matter for companies and public-sector teams.",
    tag: "Enterprise Training",
  },
];

export const faqs = [
  {
    question: "Are your programs suitable for complete beginners?",
    answer:
      "Yes. We offer practical learning paths that start from fundamentals and grow toward SOC and enterprise understanding.",
  },
  {
    question: "Do you focus on offensive hacking or defense?",
    answer:
      "Our core philosophy is defense-first. We teach cyber threats in order to improve monitoring, response, and organizational security.",
  },
  {
    question: "Do you provide training for companies and government teams?",
    answer:
      "Yes. We offer enterprise-level and institutional training, including awareness sessions, simulations, and defensive strategy workshops.",
  },
  {
    question: "Are programs available in Japanese and English?",
    answer:
      "Yes. We support both Japanese and English delivery for broader accessibility and collaboration.",
  },
];

export const trustBadges = [
  "Defense-first cybersecurity",
  "SOC and blue team focus",
  "Enterprise-level training",
  "日本語 & English delivery",
];
