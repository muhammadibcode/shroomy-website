import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Shroomy',
  description: 'Privacy policy for the Shroomy mental health app.',
}

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 md:pb-24 px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-12">
            Privacy Policy
          </h1>

          <div className="space-y-10 text-black text-sm leading-relaxed">
            <p>
              <strong>Last updated: January 2025</strong>
            </p>

            {/* Company Info */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="mb-2">
                <strong>Moment Apps Ltd.</strong><br />
                Company No. 15926946<br />
                Registered office: 44 Carlton Avenue West, London HA0 3QU, United Kingdom
              </p>
              <p>
                <strong>Contact:</strong>{' '}
                <a href="mailto:contact@momentapps.co.uk" className="underline hover:opacity-70 transition-opacity">
                  contact@momentapps.co.uk
                </a>
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">1. Who We Are</h2>
              <p>
                Moment Apps Ltd. (&quot;Shroomy&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) develops the Shroomy mobile application, which helps users build a daily mental-wellness practice. We act as the controller of the personal data described below.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">2. What Data We Collect and Why</h2>
              
              <div className="space-y-6">
                {/* Wellness Content */}
                <div className="border-l-4 border-gray-300 pl-4">
                  <h3 className="text-lg font-display mb-3">Wellness Content You Provide</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Examples:</strong> Vent text you type, voice-to-text transcripts, answers to onboarding questions about stress, anxiety, triggers, or prior treatments.</li>
                    <li><strong>Purpose:</strong> To generate personalised exercises and insights via AI.</li>
                    <li><strong>Lawful basis:</strong> Explicit consent – you choose to provide this information.</li>
                    <li><strong>Retention:</strong> Sent to AI providers and kept by them for up to 30 days; not stored on our servers.</li>
                  </ul>
                </div>

                {/* On-device Data */}
                <div className="border-l-4 border-gray-300 pl-4">
                  <h3 className="text-lg font-display mb-3">On-Device Wellness Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Examples:</strong> Daily self-care score, historical entries, exercise picks.</li>
                    <li><strong>Purpose:</strong> Display your history and trends locally in the app.</li>
                    <li><strong>Storage:</strong> Saved only on your device; never uploaded.</li>
                    <li><strong>Retention:</strong> Until you delete the data or uninstall the app.</li>
                  </ul>
                </div>

                {/* Usage Data */}
                <div className="border-l-4 border-gray-300 pl-4">
                  <h3 className="text-lg font-display mb-3">Usage and Event Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Examples:</strong> Anonymous Firebase Analytics events, crash logs, in-app actions.</li>
                    <li><strong>Purpose:</strong> Measure performance and improve features.</li>
                    <li><strong>Lawful basis:</strong> Legitimate interests (product analytics).</li>
                    <li><strong>Retention:</strong> Up to 14 months (Firebase default).</li>
                  </ul>
                </div>

                {/* Device Identifiers */}
                <div className="border-l-4 border-gray-300 pl-4">
                  <h3 className="text-lg font-display mb-3">Device and Attribution Identifiers</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Examples:</strong> IDFA/AAID, AppsFlyer ID, notification-permission status.</li>
                    <li><strong>Purpose:</strong> Marketing attribution and fraud prevention.</li>
                    <li><strong>Lawful basis:</strong> Consent (gathered via Apple ATT / Google Play prompts).</li>
                    <li><strong>Retention:</strong> Up to 24 months (AppsFlyer default).</li>
                  </ul>
                </div>

                {/* Payment Data */}
                <div className="border-l-4 border-gray-300 pl-4">
                  <h3 className="text-lg font-display mb-3">Payment and Subscription Data</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Examples:</strong> Transaction ID, subscription status reported by RevenueCat.</li>
                    <li><strong>Purpose:</strong> Provide paid features and billing support.</li>
                    <li><strong>Lawful basis:</strong> Performance of contract.</li>
                    <li><strong>Retention:</strong> While your subscription is active plus six years for accounting.</li>
                  </ul>
                </div>

                {/* What We Don't Collect */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-800">
                    We do not collect names, email addresses, precise location data, or health-care identifiers.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">3. How and Where Your Data Is Processed</h2>
              <p className="mb-4">
                Our trusted processors (all engaged under UK GDPR-compliant contracts) are:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left font-display">Provider</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-display">Purpose</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-display">Location &amp; Safeguards</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Anthropic</td>
                      <td className="border border-gray-300 px-4 py-2">Generate AI responses</td>
                      <td className="border border-gray-300 px-4 py-2">USA; UK-US Data Privacy Framework &amp; SCCs</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">ElevenLabs</td>
                      <td className="border border-gray-300 px-4 py-2">Text-to-speech audio generation</td>
                      <td className="border border-gray-300 px-4 py-2">USA; DPF &amp; SCCs</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Google Firebase</td>
                      <td className="border border-gray-300 px-4 py-2">Analytics, crash reports, Cloud Functions</td>
                      <td className="border border-gray-300 px-4 py-2">EU &amp; USA; DPF &amp; SCCs</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">RevenueCat</td>
                      <td className="border border-gray-300 px-4 py-2">Subscription fulfilment</td>
                      <td className="border border-gray-300 px-4 py-2">EU &amp; USA; DPF &amp; SCCs</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">Apple / Google</td>
                      <td className="border border-gray-300 px-4 py-2">App distribution &amp; payments</td>
                      <td className="border border-gray-300 px-4 py-2">EU &amp; USA; DPF &amp; SCCs</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2 font-semibold">AppsFlyer</td>
                      <td className="border border-gray-300 px-4 py-2">Marketing attribution</td>
                      <td className="border border-gray-300 px-4 py-2">USA; DPF &amp; SCCs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                All traffic is encrypted in transit (TLS). Firebase automatically encrypts data at rest.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">4. Your Choices and Rights</h2>
              <p className="mb-4">Under UK GDPR, you have the following rights:</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-lg">🛑</span>
                  <div>
                    <strong>Withdraw consent</strong>
                    <p className="text-gray-600">Simply stop entering vent text or uninstall the app.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-lg">📋</span>
                  <div>
                    <strong>Access, erasure, portability</strong>
                    <p className="text-gray-600">We do not hold any data that identifies you directly; transient data held by our processors is deleted automatically after the periods listed above.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-lg">📊</span>
                  <div>
                    <strong>Analytics opt-out</strong>
                    <p className="text-gray-600">Disable tracking via your device&apos;s ATT/AAID settings.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="text-lg">❓</span>
                  <div>
                    <strong>Questions</strong>
                    <p className="text-gray-600">
                      Email{' '}
                      <a href="mailto:contact@momentapps.co.uk" className="underline hover:opacity-70 transition-opacity">
                        contact@momentapps.co.uk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">5. Children</h2>
              <p>
                Shroomy is intended only for users aged 13 years or older. We do not knowingly collect data from children under 13. If you believe that a child has provided data, please contact us so we can delete it.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">6. International Transfers</h2>
              <p className="mb-4">
                Personal data may be processed in countries outside the UK. Transfers rely on:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>UK-US Data Privacy Framework certifications, and/or</li>
                <li>The UK addendum to the EU Standard Contractual Clauses.</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">7. Security</h2>
              <p>
                We apply industry best practices, including encryption in transit and at rest, least-privilege access controls, and periodic security reviews. No method is 100 percent secure, but we take reasonable steps to protect your data.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">8. Changes</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post any revisions in-app; continued use after changes are posted constitutes your acceptance of the revised notice.
              </p>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl md:text-2xl font-display mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
              </p>
              <p className="mb-2">
                <strong>Moment Apps Ltd.</strong><br />
                44 Carlton Avenue West<br />
                London HA0 3QU<br />
                United Kingdom
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:contact@momentapps.co.uk" className="underline hover:opacity-70 transition-opacity">
                  contact@momentapps.co.uk
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
