import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | My Ride Service Center",
  description: "Privacy policy for My Ride Service Center in Fredericksburg, VA. We do not sell or share your personal information or mobile phone numbers with third parties.",
  alternates: { canonical: "https://www.myrideserivcecenter.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-extrabold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: May 6, 2026</p>

        <div className="prose prose-zinc max-w-none space-y-8 text-foreground">

          <section>
            <h2 className="text-xl font-bold mb-3">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              My Ride Service Center ("we," "us," or "our") is committed to protecting the privacy of our customers. This policy explains how we collect, use, and protect the personal information you provide to us through our website, phone, or in person at 2715 Lafayette Blvd, Fredericksburg, VA 22408.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We may collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Name, phone number, and email address when you contact us or book an appointment</li>
              <li>Vehicle information (make, model, year) needed to provide service</li>
              <li>Service history related to your vehicle</li>
              <li>General website usage data (pages visited, browser type) via analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We use your information to:</p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Schedule and confirm service appointments</li>
              <li>Communicate with you about your vehicle and repairs</li>
              <li>Send appointment reminders and service updates via SMS or phone (with your consent)</li>
              <li>Improve our services and website experience</li>
            </ul>
          </section>

          <section className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-3 text-foreground">We Do Not Sell or Share Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              <strong className="text-foreground">We do not sell, rent, trade, or share your personal information — including your mobile phone number — with any third parties, affiliates, or partners for marketing or lead generation purposes.</strong>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Your contact information is used solely to provide services you have requested from My Ride Service Center. We will never disclose your phone number or personal data to outside companies for commercial use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">SMS Messaging</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              If you provide your mobile phone number and consent to receive SMS messages, we may send you:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Appointment reminders and confirmations</li>
              <li>Service updates and vehicle status notifications</li>
              <li>Occasional promotional offers from My Ride Service Center</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Message frequency varies (approximately 2–4 messages per month). Message and data rates may apply. Reply <strong className="text-foreground">HELP</strong> for assistance or <strong className="text-foreground">STOP</strong> to opt out at any time. Your mobile phone number will never be shared with third parties for any purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. Access to your data is limited to staff who need it to provide services to you.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use third-party tools such as Google Analytics for general traffic analysis. These services have their own privacy policies and do not receive your personal contact information from us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You may request to access, correct, or delete any personal information we hold about you at any time. To do so, contact us at:
            </p>
            <div className="mt-3 space-y-1 text-muted-foreground">
              <p><strong className="text-foreground">My Ride Service Center</strong></p>
              <p>2715 Lafayette Blvd, Fredericksburg, VA 22408</p>
              <p>Phone: <a href="tel:5404186626" className="text-primary hover:underline">540-418-6626</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated date. Continued use of our services after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
