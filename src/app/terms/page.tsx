import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "SuperAISuite Terms of Service - Read the terms and conditions for using our AI platform.",
};

export default function TermsPage() {
    return (
        <div className="pt-24 pb-16">
            <article className="container px-4 md:px-6 max-w-4xl mx-auto prose prose-gray dark:prose-invert">
                <h1>Terms of Service</h1>
                <p className="lead">Last updated: January 2024</p>

                <p>
                    Welcome to SuperAISuite. By accessing or using our mobile application and services, you agree to be bound
                    by these Terms of Service ("Terms"). Please read them carefully.
                </p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By downloading, installing, or using SuperAISuite, you agree to these Terms. If you do not agree,
                    please do not use our services.
                </p>

                <h2>2. Description of Service</h2>
                <p>
                    SuperAISuite provides AI-powered tools for document analysis, market insights, communication assistance,
                    wellness support, and fitness coaching. Our services are provided "as is" and may be updated or modified
                    at any time.
                </p>

                <h2>3. User Accounts</h2>
                <ul>
                    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li>You must provide accurate and complete information when creating an account.</li>
                    <li>You are responsible for all activities that occur under your account.</li>
                    <li>You must notify us immediately of any unauthorized use of your account.</li>
                </ul>

                <h2>4. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul>
                    <li>Use our services for any illegal or unauthorized purpose</li>
                    <li>Violate any laws in your jurisdiction</li>
                    <li>Upload malicious content or attempt to harm our systems</li>
                    <li>Impersonate others or provide false information</li>
                    <li>Interfere with or disrupt our services</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use our services to harm, threaten, or harass others</li>
                </ul>

                <h2>5. Intellectual Property</h2>
                <p>
                    All content, features, and functionality of SuperAISuite are owned by us and protected by intellectual
                    property laws. You may not copy, modify, distribute, or create derivative works without our permission.
                </p>

                <h2>6. User Content</h2>
                <p>
                    You retain ownership of content you submit to our services. By submitting content, you grant us a
                    license to use, process, and store it as necessary to provide our services.
                </p>

                <h2>7. AI-Generated Content</h2>
                <p>
                    Our AI features generate content based on your inputs. While we strive for accuracy, AI-generated
                    content may contain errors. You should review and verify any AI output before relying on it.
                </p>

                <h2>8. Health and Financial Disclaimers</h2>
                <p>
                    <strong>Wellness features:</strong> Our wellness and mental health features are for informational purposes
                    only and do not constitute medical advice. Always consult a healthcare professional for medical concerns.
                </p>
                <p>
                    <strong>Market analysis:</strong> Our market analysis features are for informational purposes only and do
                    not constitute financial advice. We are not responsible for any financial decisions you make based on
                    our insights.
                </p>

                <h2>9. Limitation of Liability</h2>
                <p>
                    To the maximum extent permitted by law, SuperAISuite shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages arising from your use of our services.
                </p>

                <h2>10. Termination</h2>
                <p>
                    We may terminate or suspend your access to our services at any time, without notice, for conduct that
                    we believe violates these Terms or is harmful to other users or us.
                </p>

                <h2>11. Changes to Terms</h2>
                <p>
                    We may modify these Terms at any time. We will notify you of significant changes by posting a notice
                    in the app or sending you an email.
                </p>

                <h2>12. Governing Law</h2>
                <p>
                    These Terms are governed by and construed in accordance with applicable laws, without regard to
                    conflict of law principles.
                </p>

                <h2>13. Contact Us</h2>
                <p>
                    If you have questions about these Terms, please contact us at:
                </p>
                <ul>
                    <li>Email: legal@superaisuite.xyz</li>
                </ul>
            </article>
        </div>
    );
}
