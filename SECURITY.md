# 🔒 Security Policy

## 📦 Supported Versions

The following table outlines which versions of **Zada Afrique** are currently supported for security updates and maintenance:

| Version           | Status             | Notes |
|-------------------|--------------------|--------|
| v0.1.x (Pre-Launch) | ✅ Supported        | Active development and patch updates |
| v0.0.x (Internal)   | ❌ Not supported    | Deprecated local development builds |

---

## 🧩 Reporting a Vulnerability

We take security seriously and appreciate your help in keeping **Zada Afrique** safe for users.

If you discover a vulnerability or potential security issue, please **do not** open a public issue. Instead, report it directly via:

📧 **Email:** zadaafrique@gmail.com  
🔒 **Preferred Subject Line:** `[Security Report] - Vulnerability in Zada Afrique`

Please include:
- A clear description of the issue and where it was found  
- Steps to reproduce (if applicable)  
- The environment or deployment version where it occurred  

You can expect:
- **Acknowledgment** within 48 hours  
- **Status update** within 5 business days  
- **Resolution timeline** depending on the issue’s severity  

---

## ⚙️ Security Best Practices (For Developers)

- Do not commit `.env` or credential files to version control  
- Restrict Firebase rules to authenticated access for read operations  
- Validate all form inputs and sanitize user-submitted data  
- Use HTTPS for all API and database communication  
- Regularly update dependencies and scan for vulnerabilities using  
  ```bash
  npm audit

---

## Disclosure Policy

We follow a responsible disclosure policy.
If a vulnerability is verified, a fix will be released promptly, followed by a patch version update (e.g., v0.1.1).
Security-related commits will be clearly noted in release changelogs.
