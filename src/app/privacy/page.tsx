import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "SuperAISuite Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
    return (
        <div className="pt-24 pb-16">
            <article className="container px-4 md:px-6 max-w-4xl mx-auto prose prose-gray dark:prose-invert">
                <h1>Privacy Policy</h1>
                <p className="lead">Last updated: January 2024</p>

                <p>
                    SuperAISuite ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                    how we collect, use, disclose, and safeguard your information when you use our mobile application.
                </p>

                <h2>Information We Collect</h2>

                <h3>Information You Provide</h3>
                <ul>
                    <li><strong>Account Information:</strong> When you create an account, we may collect your name, email address, and profile information.</li>
                    <li><strong>User Content:</strong> Documents, messages, and other content you submit for AI processing.</li>
                    <li><strong>Feedback:</strong> Information you provide when contacting us for support or providing feedback.</li>
                </ul>

                <h3>Automatically Collected Information</h3>
                <ul>
                    <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers.</li>
                    <li><strong>Usage Data:</strong> How you interact with our app, features used, and time spent.</li>
                    <li><strong>Log Data:</strong> Error logs and performance data to improve our services.</li>
                </ul>

                <h2>How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Provide, maintain, and improve our AI services</li>
                    <li>Process and respond to your requests</li>
                    <li>Personalize your experience</li>
                    <li>Send you updates and promotional communications (with your consent)</li>
                    <li>Detect, prevent, and address technical issues</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h2>Data Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to protect your personal information.
                    However, no method of transmission over the Internet or electronic storage is 100% secure.
                </p>

                <h2>Data Retention</h2>
                <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy,
                    unless a longer retention period is required by law.
                </p>

                <h2>Third-Party Services</h2>
                <p>
                    Our app may contain links to third-party websites or services. We are not responsible for the privacy practices
                    of these third parties. We encourage you to read their privacy policies.
                </p>

                <h2>Children's Privacy</h2>
                <p>
                    Our services are not intended for users under 13 years of age. We do not knowingly collect personal information
                    from children under 13.
                </p>

                <h2>Your Rights</h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul>
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to or restrict processing</li>
                    <li>Data portability</li>
                </ul>

                <h2>Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                    Privacy Policy on this page and updating the "Last updated" date.
                </p>

                <h2>Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul>
                    <li>Email: privacy@superaisuite.xyz</li>
                </ul>
            </article>
        </div>
    );
}
