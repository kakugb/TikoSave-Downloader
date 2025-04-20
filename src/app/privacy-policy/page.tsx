import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | YourSiteName',
  description: 'Read our Privacy Policy to understand how YourSiteName handles your personal information, cookies, and data usage.',
  robots: 'index, follow',
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-500 mb-8">
            Privacy Policy
          </h1>

          <p className="text-lg text-center mb-2">Last Revised: <span className="font-medium">April 19, 2025</span></p>

          <article className="mt-8 space-y-6 text-lg leading-relaxed">
            <p>
              Pursuant to our Terms of Use, this document describes how we treat personal information related to your use of this website and the services offered on and through it (the “Service”), including information you provide when using it.
            </p>

            <p>
              We strictly limit the Service to adults over 18 years of age (or age of majority in your jurisdiction). We do not knowingly collect personal data from anyone under this age.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-teal-400">Data Collected</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Using the Service:</strong> We collect non-personal data like IP address, country, device info, etc.</li>
              <li><strong>Usage Information:</strong> Search terms, downloads, and activity may be logged.</li>
              <li><strong>Uploaded Content:</strong> Any uploaded files may be stored.</li>
              <li><strong>Correspondence:</strong> Messages exchanged with us may be recorded.</li>
              <li><strong>Cookies:</strong> We use cookies for session handling and personalization.</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 text-teal-400">Data Usage</h2>
            <p>
              Information collected helps us enhance your experience, store preferences, analyze performance, and offer personalized content or ads.
            </p>
            <p>
              Aggregated, anonymized data may be shared with partners or advertisers.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-teal-400">Disclosures of Information</h2>
            <p>
              We may disclose your data to comply with legal obligations, enforce our Terms of Use, or protect our users and systems from harm or misuse.
            </p>

            <h2 className="text-2xl font-semibold mt-8 text-teal-400">Security Notice</h2>
            <p>
              While we use standard security measures to protect your data, no online transmission is 100% secure. You share information at your own risk.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
