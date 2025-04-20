import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | YourSiteName',
  description: 'Read the Terms of Use for YourSiteName. Understand your rights, responsibilities, and our legal disclaimers when using our website.',
  robots: 'index, follow',
};

export default function TermOfUse() {
  return (
    <section className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-teal-500 mb-10">
          Terms of Use
        </h1>

        <article className="space-y-10 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-teal-400">Agreement to Terms</h2>
            <p>
              Please review these terms and conditions of use carefully before using savett.cc. By using the Website, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">Jurisdiction Notice</h2>
            <p>
              This Site is not intended for distribution or use in jurisdictions where such distribution would be contrary to local laws. Users are responsible for compliance with local laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">Use License</h2>
            <p>
              You are granted a temporary, non-commercial license to use materials from this website. Under this license, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Repurpose data from the site to create directories or collections without written permission.</li>
              <li>Harm, harass, or abuse others using site content or features.</li>
              <li>Reverse engineer or copy the site's software or design elements.</li>
              <li>Exploit the site for commercial or competitive purposes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">Term and Termination</h2>
            <p>
              We reserve the right to terminate or block your access to the Site for any reason, without notice, if you violate these Terms or applicable laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">Advertisers</h2>
            <p>
              Advertisers are responsible for the content and legality of their advertisements. We provide ad space only and hold no additional relationship or responsibility.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">Disclaimer</h2>
            <p>
              The Site is provided "as is" without warranties. We are not liable for any damages or losses resulting from your use of the site or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">Limitation of Liability</h2>
            <p>
              We are not liable for direct or indirect damages, data loss, or any issues arising from site use, even if we were advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-teal-400">Indemnification and Release</h2>
            <p>
              You agree to indemnify us against all claims or expenses arising from your use of the site or any violation of these Terms. You also release us from liability in disputes involving other users or third parties.
            </p>
          </section>
        </article>
      </div>
    </section>
  );
}
