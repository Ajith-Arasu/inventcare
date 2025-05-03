import "./PrivacyPolicy.css";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <div className="background-image" />
      <div className="privacy-policy-content">
        <h1>Privacy Policy</h1>

        <p>
          InventCare Systems Pvt.Ltd is a digital platform designed to empower children aged 6–16 by allowing them to
          create, share, and showcase their talents. Children can upload artwork, write books,
          participate in contests, store certificates, and earn rewards in a gamified, collaborative
          environment.
        </p>

        <p>
          We are committed to protecting children's privacy and complying with all applicable laws
          including:
        </p>

        <ul>
          <li>Children's Online Privacy Protection Act (COPPA) – USA</li>
          <li>General Data Protection Regulation (GDPR) – EU</li>
          <li>Digital Personal Data Protection Act, 2023 (DPDPA) – India</li>
        </ul>

        <h2>Information We Collect</h2>

        <p><strong>Parent Information:</strong></p>
        <ul>
          <li>Full Name</li>
          <li>Email Address</li>
        </ul>

        <p><strong>Child Information:</strong></p>
        <ul>
          <li>Full Name</li>
          <li>Age</li>
          <li>Date of Birth</li>
          <li>Profile Picture</li>
          <li>Country of Residence</li>
          <li>Interests</li>
          <li>App Feedback</li>
        </ul>

        <h2>How We Use This Information</h2>
        <ul>
          <li>Create and manage accounts</li>
          <li>Enable participation in contests and activities</li>
          <li>Provide personalized content and rewards</li>
          <li>Facilitate artwork and book sales/display</li>
          <li>Maintain communication with guardians</li>
          <li>Ensure platform safety and usability</li>
        </ul>

        <h2>Features Offered</h2>
        <ul>
          <li>Sharing artworks and writings</li>
          <li>Uploading certificates</li>
          <li>Virtual coin use and redemption</li>
          <li>Publishing books</li>
          <li>Subscriptions (free/paid)</li>
          <li>Virtual gifting</li>
          <li>Participating in contests and challenges</li>
          <li>Monetizing content</li>
          <li>Cross-border platform access</li>
        </ul>

        <h2>Parental Control & Consent</h2>
        <p>
          Parental consent is mandatory before any child data is collected. Parents can view, update, or
          delete their child’s information at any time.
        </p>

        <h2>Data Storage and Security</h2>
        <p>
          InventCare Systems Pvt.Ltd secures data with industry-standard measures and retains it only as long as necessary
          or required by law.
        </p>

        <h2>Data Sharing and Third Parties</h2>
        <p>
          We don’t share personal data with advertisers. We may use third-party services like cloud storage
          or payment gateways which comply with relevant privacy laws.
        </p>

        <h2>Your Rights Over Your Data</h2>
        <ul>
          <li>Right to Be Informed</li>
          <li>Right to Access</li>
          <li>Right to Rectification</li>
          <li>Right to Deletion</li>
          <li>Right to Restrict Processing</li>
          <li>Right to Data Portability</li>
          <li>Right to Object</li>
          <li>Parental Rights under COPPA</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          We retain data while the account is active. Upon deletion, data is removed within 30 days unless
          required by law.
        </p>

        <h2>International Data Transfers</h2>
        <p>
          Personal data may be stored or processed internationally with proper safeguards in place.
        </p>

        <h2>Children’s Data Policy</h2>
        <p>
          We do not knowingly collect data from children under 13. If identified, we immediately delete
          such data. Parents can contact us for concerns.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
