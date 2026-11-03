import { TutorialChapter } from '../../types';

export const cyberSecurityChapters: TutorialChapter[] = [
  // 1. Cyber Security HOME
  {
    id: 'cyber-home',
    title: 'Cyber Security HOME',
    slug: 'cyber-home',
    summary: 'Cyber security is the practice of protecting systems, networks, programs, devices, and data from digital attacks.',
    readTime: '3 min',
    category: 'Cyber Security Tutorial',
    content: {
      overview: 'In an increasingly interconnected global infrastructure, cyber security safeguards critical data, financial assets, intellectual property, and essential infrastructure against theft, disruption, and unauthorized access.',
      sections: [
        {
          heading: 'Core Security Principles in Action',
          body: 'Securing an application using Defense in Depth:',
          code: `# Layer 1: Perimeter (Cloudflare WAF & DDoS mitigation)
# Layer 2: Network (Virtual Private Clouds, zero open ingress ports)
# Layer 3: Application (Strict input validation, OWASP sanitized params)
# Layer 4: Identity (Enforced MFA, short-lived JWT tokens)
# Layer 5: Data (AES-256 encryption at rest, TLS 1.3 in transit)`,
          codeLanguage: 'text',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">DevAura Security Posture Monitor</h3>
    <div style="display:flex; gap:12px; margin-top:12px;">
      <div style="background:white; padding:12px; border-radius:6px; border:1px solid #cbd5e1; flex:1;">
        <span style="font-size:12px; color:#64748b;">Firewall Status</span>
        <div style="font-weight:bold; color:#0284c7;">Active (WAF Enabled)</div>
      </div>
      <div style="background:white; padding:12px; border-radius:6px; border:1px solid #cbd5e1; flex:1;">
        <span style="font-size:12px; color:#64748b;">TLS Certificate</span>
        <div style="font-weight:bold; color:#4f46e5;">Valid (TLS 1.3)</div>
      </div>
      <div style="background:white; padding:12px; border-radius:6px; border:1px solid #cbd5e1; flex:1;">
        <span style="font-size:12px; color:#64748b;">Failed Auth Attempts</span>
        <div style="font-weight:bold; color:#0f172a;">0 in last 24h</div>
      </div>
    </div>
  </div>
</body>
</html>`
        }
      ]
    }
  },

  // 2. Cyber Security Intro & CIA Triad
  {
    id: 'cyber-intro',
    title: 'Cyber Security Introduction & CIA Triad',
    slug: 'cyber-intro',
    summary: 'Master the bedrock triangle of information security: Confidentiality, Integrity, and Availability.',
    readTime: '4 min',
    category: 'Cyber Security Tutorial',
    content: {
      overview: 'Every security policy, algorithm, and control is engineered around the CIA Triad: keeping data private, accurate, and accessible to authorized parties.',
      sections: [
        {
          heading: 'The Three Pillars of the CIA Triad',
          body: '1. Confidentiality: Ensuring only authorized users access sensitive information (encryption, access controls).\n2. Integrity: Guarding against unauthorized tampering or modification of data (digital signatures, cryptographic hashing).\n3. Availability: Ensuring systems and data are reliably accessible to authorized users when needed (redundancy, DDoS protection, backups).',
          code: `// CIA Triad Enforcement Example:
const secureTransaction = {
  confidentiality: "Payload encrypted with AES-256-GCM",
  integrity: "SHA-256 HMAC checksum verifies data has not been modified",
  availability: "Multi-region geo-replicated database clusters"
};`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 3. Threat Actors & Vectors
  {
    id: 'cyber-threat-actors',
    title: 'Threat Actors & Attack Vectors',
    slug: 'cyber-threat-actors',
    summary: 'Identify adversary motivations: cybercriminals, state-sponsored APTs, hacktivists, and malicious insiders.',
    readTime: '4 min',
    category: 'Threat Landscape',
    content: {
      overview: 'Understanding who attacks systems and why enables security teams to design threat models that match real-world risk profiles.',
      sections: [
        {
          heading: 'Threat Actor Classifications',
          body: 'Common types of adversaries:',
          code: `// 1. Cybercriminals: Financially motivated (ransomware, bank fraud).
// 2. Nation-State Actors (APTs): Geopolitically motivated cyber espionage.
// 3. Hacktivists: Ideologically motivated (DDoS, public defacements).
// 4. Insider Threats: Disgruntled employees or negligent contractors with internal credentials.
// 5. Script Kiddies: Inexperienced attackers using pre-packaged automated exploit tools.`,
          codeLanguage: 'text',
          interactive: true
        }
      ]
    }
  },

  // 4. Malware Types
  {
    id: 'cyber-malware',
    title: 'Malware Types & Defense',
    slug: 'cyber-malware',
    summary: 'Viruses, worms, trojans, ransomware, spyware, rootkits, and modern endpoint detection and response (EDR).',
    readTime: '5 min',
    category: 'Threat Landscape',
    content: {
      overview: 'Malware (malicious software) is any code designed to infiltrate, damage, or compromise computer systems without user consent.',
      sections: [
        {
          heading: 'Malware Taxonomy',
          body: 'Characteristics of malware families:',
          code: `// - Virus: Injects malicious code into legitimate executable files.
// - Worm: Self-replicating malware that spreads across networks without human intervention.
// - Trojan: Disguised as legitimate software to gain an initial foothold.
// - Ransomware: Encrypts organizational files and demands cryptocurrency payments.
// - Spyware: Silently monitors keystrokes and extracts confidential credentials.
// - Rootkit: Conceals its presence deep inside OS kernel or firmware.`,
          codeLanguage: 'text',
          interactive: true
        }
      ]
    }
  },

  // 5. Social Engineering & Phishing
  {
    id: 'cyber-social-engineering',
    title: 'Social Engineering & Phishing',
    slug: 'cyber-social-engineering',
    summary: 'Human-targeted vulnerabilities: Phishing, Spear Phishing, Pretexting, Baiting, and BEC (Business Email Compromise).',
    readTime: '4 min',
    category: 'Human Security',
    content: {
      overview: 'Social engineering exploits human psychology rather than software bugs. Over 80% of data breaches involve social engineering or stolen credentials.',
      sections: [
        {
          heading: 'Common Social Engineering Tactics',
          body: 'Techniques used by attackers:',
          code: `// 1. Phishing: Mass deceptive emails urging urgent credential resets.
// 2. Spear Phishing: Highly tailored attacks targeting a specific executive or developer.
// 3. Smishing / Vishing: SMS or phone-call impersonation of technical support or banking reps.
// 4. Pretexting: Fabricating an elaborate scenario (e.g., claiming to be internal IT auditing an issue).
// Defense: Hardware security keys (FIDO2/WebAuthn), SPF/DKIM/DMARC email validation, and security training.`,
          codeLanguage: 'text',
          interactive: true
        }
      ]
    }
  },

  // 6. Password Security
  {
    id: 'cyber-password-security',
    title: 'Password Security & Authentication Standards',
    slug: 'cyber-password-security',
    summary: 'Password entropy, rainbow tables, brute-force limits, salting, and modern key derivation functions (Argon2id, bcrypt).',
    readTime: '4 min',
    category: 'Human Security',
    content: {
      overview: 'Passwords remain the most targeted authentication factor. Proper storage requires slow, salted one-way hashing algorithms to defeat offline GPU cracking.',
      sections: [
        {
          heading: 'Hashing Passwords Securely with bcrypt',
          body: 'Node.js password hashing implementation:',
          code: `const bcrypt = require('bcrypt');

async function hashUserPassword(plainPassword) {
  const saltRounds = 12; // Computationally intensive work factor
  const hash = await bcrypt.hash(plainPassword, saltRounds);
  return hash;
}

async function verifyPassword(plainPassword, storedHash) {
  const isMatch = await bcrypt.compare(plainPassword, storedHash);
  return isMatch;
}`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 7. Network Security & Zero Trust
  {
    id: 'cyber-network-security',
    title: 'Network Security & Zero Trust',
    slug: 'cyber-network-security',
    summary: 'Network segmentation, stateful firewalls, IDS/IPS, and the modern Zero Trust architecture principle.',
    readTime: '5 min',
    category: 'Defensive Security',
    content: {
      overview: 'The traditional perimeter "castle-and-moat" security model is obsolete. Zero Trust operates on the principle: "Never trust, always verify".',
      sections: [
        {
          heading: 'Zero Trust Architecture Core Tenets',
          body: '1. Verify explicitly: Always authenticate and authorize based on all available data points (user identity, location, device health).\n2. Use least privileged access: Limit user access with Just-In-Time (JIT) and Just-Enough-Access (JEA).\n3. Assume breach: Minimize blast radius by segmenting networks and inspecting all internal communications.',
          code: `# Zero Trust Network segmentation:
# Public Internet -> Cloudflare Edge -> WAF -> API Gateway (mTLS) -> Microservice
# Every internal service validates authentication tokens independently.`,
          codeLanguage: 'text',
          interactive: true
        }
      ]
    }
  },

  // 8. Cryptography & Hashing
  {
    id: 'cyber-cryptography',
    title: 'Cryptography & Hashing',
    slug: 'cyber-cryptography',
    summary: 'Symmetric encryption (AES-256), asymmetric encryption (RSA/ECC), digital signatures, and one-way hash functions (SHA-256, bcrypt).',
    readTime: '5 min',
    category: 'Defensive Security',
    content: {
      overview: 'Cryptography ensures data privacy and integrity mathematically. Hashing creates unique, fixed-size digital fingerprints that cannot be reversed.',
      sections: [
        {
          heading: 'Symmetric vs Asymmetric vs Hashing',
          body: 'Core cryptographic tools:',
          code: `# 1. Symmetric (Same key for encrypt/decrypt): AES-GCM 256-bit (fast, bulk data)
# 2. Asymmetric (Public/Private key pair): RSA-4096, ECC (TLS handshakes, SSH keys)
# 3. Cryptographic Hash: SHA-256 (file integrity checks)
# 4. Password Hashing: Argon2id, bcrypt, PBKDF2 (salted, intentionally slow to prevent GPU brute-forcing)`,
          codeLanguage: 'python',
          interactive: true
        }
      ]
    }
  },

  // 9. Web Security & OWASP Top 10
  {
    id: 'cyber-web-attacks',
    title: 'Web Application Security & OWASP Top 10',
    slug: 'cyber-web-attacks',
    summary: 'Preventing critical web vulnerabilities: SQL Injection, Cross-Site Scripting (XSS), CSRF, and Broken Access Control.',
    readTime: '6 min',
    category: 'Application Security',
    content: {
      overview: 'The Open Worldwide Application Security Project (OWASP) identifies the most critical security risks facing web applications.',
      sections: [
        {
          heading: 'Remediating Web Vulnerabilities',
          body: 'Preventing SQL Injection and Cross-Site Scripting (XSS):',
          code: `// VULNERABLE SQL INJECTION:
// const query = "SELECT * FROM users WHERE email = '" + req.body.email + "'";

// SECURE PARAMETERIZED QUERY (PreparedStatement):
const query = "SELECT * FROM users WHERE email = $1";
await db.query(query, [req.body.email]);

// PREVENTING XSS:
// Never use innerHTML with untrusted input; use textContent or React automated JSX escaping:
// document.getElementById("name").textContent = userInput;`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 10. Identity & Access Management (IAM)
  {
    id: 'cyber-authentication',
    title: 'Identity & Access Management (IAM)',
    slug: 'cyber-authentication',
    summary: 'Authentication vs Authorization, Multi-Factor Authentication (MFA), OAuth 2.0 / OpenID Connect, and Role-Based Access Control (RBAC).',
    readTime: '5 min',
    category: 'Defensive Security',
    content: {
      overview: 'Authentication verifies who the user is; Authorization determines what resources they have permission to access.',
      sections: [
        {
          heading: 'Role-Based Access Control (RBAC)',
          body: 'Enforcing permissions cleanly:',
          code: `// RBAC Permission Middleware in Node.js:
function requireRole(requiredRole) {
  return (req, res, next) => {
    if (!req.user || !req.user.roles.includes(requiredRole)) {
      return res.status(403).json({ error: "Access Denied: Insufficient Permissions" });
    }
    next();
  };
}

// Protected route:
app.delete("/api/users/:id", requireRole("ADMIN"), deleteUserHandler);`,
          codeLanguage: 'javascript',
          interactive: true
        }
      ]
    }
  },

  // 11. Incident Response & Recovery
  {
    id: 'cyber-incident-response',
    title: 'Incident Response & Disaster Recovery',
    slug: 'cyber-incident-response',
    summary: 'The 6 NIST Incident Response stages: Preparation, Detection, Containment, Eradication, Recovery, and Post-Incident Review.',
    readTime: '4 min',
    category: 'Security Operations',
    content: {
      overview: 'When a security breach occurs, a structured incident response plan minimizes financial loss, ensures regulatory compliance, and restores normal services rapidly.',
      sections: [
        {
          heading: 'The 6 Stages of Incident Response (NIST SP 800-61)',
          body: '1. Preparation: Deploy SIEM tools, define playbooks, run tabletop exercises.\n2. Detection & Analysis: Monitor alerts to distinguish real intrusions from false positives.\n3. Containment: Quarantine infected endpoints and revoke compromised API keys.\n4. Eradication: Remove malware artifacts and close root exploit vulnerabilities.\n5. Recovery: Safely restore systems from verified clean backups.\n6. Post-Incident Activity: Document lessons learned to harden future defenses.',
          code: `# Incident containment command:
# Isolate compromised host from network while preserving RAM memory for forensic analysis:
sudo iptables -A INPUT -j DROP
sudo iptables -A OUTPUT -p tcp --dport 22 -d 10.0.0.50 -j ACCEPT # Allow SOC analyst bastion only`,
          codeLanguage: 'bash',
          interactive: true
        }
      ]
    }
  },

  // 12. Cloud Security & Shared Responsibility
  {
    id: 'cyber-cloud-security',
    title: 'Cloud Security & Shared Responsibility',
    slug: 'cyber-cloud-security',
    summary: 'The Cloud Shared Responsibility Model, IAM policies, S3 bucket misconfigurations, and cloud compliance.',
    readTime: '4 min',
    category: 'Cloud Security',
    content: {
      overview: 'In cloud computing (AWS, Azure, Google Cloud), security is a shared responsibility between the cloud provider (security OF the cloud) and the customer (security IN the cloud).',
      sections: [
        {
          heading: 'Customer vs Cloud Provider Responsibility',
          body: '1. Cloud Provider: Physical datacenter security, hardware infrastructure, virtualization hypervisors.\n2. Customer: IAM credentials, encryption of data at rest/in transit, OS patching on IaaS VMs, database firewall access lists.',
          code: `# Common Cloud Misconfiguration Remediation:
# Ensure S3 bucket blocks all public access:
aws s3api put-public-access-block \\
    --bucket company-vault-backup \\
    --public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"`,
          codeLanguage: 'bash',
          interactive: true,
          tryItCode: `<!DOCTYPE html>
<html>
<body style="font-family: system-ui, sans-serif; padding: 20px;">
  <div style="background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:16px;">
    <h3 style="margin-top:0; color:#4f46e5;">Cloud Security Audit</h3>
    <pre style="background:#0f172a; color:#86efac; padding:12px; border-radius:6px; font-family:monospace;">Bucket: company-vault-backup
Public Access Block: ENABLED (All 4 policies active)
Encryption: AES-256 (KMS Managed)
Audit Status: PASS (0 critical findings)</pre>
  </div>
</body>
</html>`
        }
      ]
    }
  }
];
