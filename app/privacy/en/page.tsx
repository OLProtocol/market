import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              SAT20 Wallet Privacy Policy
            </h1>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {/* Section 1 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
                             <p className="text-gray-700 leading-relaxed mb-4">
                 This Privacy Policy describes how SAT20 Wallet (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the App&rdquo;) collects, uses, shares, and stores personal information from users of our website, browser extension, mobile application, or other services (collectively, the &ldquo;Services&rdquo;).
               </p>
              <p className="text-gray-700 leading-relaxed">
                By using the Services, you agree to this Privacy Policy and our Terms of Service. If you do not agree with any part of it, please stop using the Services immediately.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Blockchain network data:</strong> publicly available addresses, transaction history, and asset information (excluding private keys or seed phrases).</li>
                <li><strong>Contact information:</strong> such as your email address (only when voluntarily provided).</li>
                <li><strong>Feedback and communications:</strong> information you provide when submitting inquiries, participating in surveys, or contacting customer support.</li>
                <li><strong>Usage data:</strong> including timestamps, feature clicks, page visit duration, etc.</li>
                <li><strong>Device information:</strong> such as browser type, version, and operating system.</li>
                <li><strong>Marketing preferences:</strong> with your consent, we may record your interactions with marketing emails (e.g., opens, clicks).</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cookie Usage</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use cookies and similar technologies (such as local storage and pixel tags) within our website or application for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Maintain login sessions and user preferences;</li>
                <li>Analyze user behavior to optimize service experience;</li>
                <li>Provide personalized content and recommendations;</li>
                <li>Measure site traffic and conversion performance.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can disable or delete cookies via your browser settings, but doing so may affect certain functionalities of the Services.
              </p>
            </section>

            {/* Section 4 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party SDK Usage</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Services may integrate third-party Software Development Kits (SDKs) to provide certain functionalities, such as analytics, crash reporting, or payment processing. Examples include but are not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Analytics SDKs</strong> (e.g., Google Analytics): for collecting visit data and user interactions.</li>
                <li><strong>Crash reporting SDKs</strong> (e.g., Sentry): for error logging and diagnostics.</li>
                <li><strong>Payment SDKs</strong> (e.g., third-party Bitcoin payment gateways): for deposits, withdrawals, or cross-chain transactions.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                These SDKs may collect information such as device details and usage data. We limit their data collection to the minimum necessary and require compliance with applicable privacy regulations.
              </p>
            </section>

            {/* Section 5 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. How We Use Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Provide, maintain, and improve the Services;</li>
                <li>Support cross-chain, channel, and asset management functions;</li>
                <li>Respond to your inquiries and feedback;</li>
                <li>Detect and prevent security threats or abuse;</li>
                <li>Comply with legal requirements;</li>
                <li>Conduct marketing and personalization with your consent.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Sharing of Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell your personal information to third parties. We may share information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>With trusted affiliates or service providers;</li>
                <li>In connection with a merger, acquisition, or asset transfer;</li>
                <li>To comply with legal obligations or government requests.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Security and Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We take reasonable technical and administrative measures to protect your data, but absolute security cannot be guaranteed over the Internet. Data will be retained for the shortest period necessary to fulfill its intended purposes, unless extended retention is required by law.
              </p>
            </section>

            {/* Section 8 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Services are not intended for children under 16. If we discover that we have collected personal information from such individuals, we will promptly delete it.
              </p>
            </section>

            {/* Section 9 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. GDPR and International User Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you are located in the EU or other applicable jurisdictions, you have the right to request access, rectification, deletion, restriction, or objection to processing, as well as data portability. Contact us at <a href="mailto:support@sat20.org" className="text-blue-600 hover:text-blue-800 underline">support@sat20.org</a> to exercise your rights.
              </p>
            </section>

            {/* Section 9A */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9A. EU / EEA Specific Terms</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">(1) Lawful Bases for Processing</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We process your personal data based on the following legal grounds:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Your explicit consent;</li>
                    <li>Necessity for the performance of a contract with you or to take steps at your request prior to entering into a contract;</li>
                    <li>Compliance with a legal obligation;</li>
                    <li>Protection of your vital interests;</li>
                    <li>Performance of a task carried out in the public interest or in the exercise of official authority;</li>
                    <li>Pursuit of our legitimate interests, provided such interests are not overridden by your fundamental rights and freedoms.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">(2) Your Rights under GDPR</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    You have the right to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Access your personal data we hold;</li>
                    <li>Rectify inaccurate or incomplete data;</li>
                    <li>Erase your personal data (&ldquo;right to be forgotten&rdquo;) where legally permissible;</li>
                    <li>Restrict processing of your data in certain circumstances;</li>
                    <li>Object to processing based on legitimate interests or direct marketing;</li>
                    <li>Data portability — receive your personal data in a structured, commonly used, machine-readable format and transfer it to another controller.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">(3) International Data Transfers</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Where your personal data is transferred outside the EU/EEA, we implement appropriate safeguards, such as the EU Standard Contractual Clauses (SCCs), to ensure your data receives equivalent protection.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">(4) Data Protection Officer (DPO)</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    If you have any questions about your rights under the GDPR or our data processing practices, you may contact our Data Protection Officer at:
                  </p>
                  <p className="text-gray-700">
                    Email: <a href="mailto:dpo@sat20.org" className="text-blue-600 hover:text-blue-800 underline">dpo@sat20.org</a>
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">(5) Right to Lodge a Complaint</h3>
                  <p className="text-gray-700 leading-relaxed">
                    If you believe we have infringed upon your GDPR rights, you have the right to lodge a complaint with the data protection authority (DPA) in your EU member state. A list of DPAs can be found here: <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://edpb.europa.eu/about-edpb/about-edpb/members_en</a>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                                 We may update this Privacy Policy from time to time. Significant changes will be indicated by updating the &ldquo;Last Updated&rdquo; date and, where appropriate, notifying you in advance. Continued use of the Services indicates your acceptance of the updated policy.
              </p>
            </section>

            {/* Section 11 */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: <a href="mailto:support@sat20.org" className="text-blue-600 hover:text-blue-800 underline">support@sat20.org</a>
              </p>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
