import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Shroomy',
  description: 'Terms of service for the Shroomy mental health app.',
}

export default function Terms() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 md:pb-24 px-8 md:px-12 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display mb-12">
            Terms of Service
          </h1>

          <div className="space-y-8 text-black text-sm leading-relaxed">
            <p>
              Last updated: January 2025
            </p>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using Shroomy (&quot;the App&quot;), operated by Moment Apps (&quot;we&quot;,
                &quot;our&quot;, or &quot;us&quot;), you agree to be bound by these Terms of Service. If you do not
                agree to these terms, please do not use the App.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Important Health Disclaimer</h2>
              <p className="mb-4">
                <strong>
                  Shroomy is not medical advice and is not a substitute for professional mental
                  health care.
                </strong>
              </p>
              <p className="mb-4">
                The App provides general wellness tools, exercises, and information based on
                cognitive behavioural therapy (CBT) and other evidence-based techniques. These
                are intended for educational and self-help purposes only.
              </p>
              <p className="mb-4">
                Shroomy does not provide medical diagnoses, clinical treatment, or therapy. The
                AI-powered features within the App are not a replacement for a licensed therapist,
                psychologist, psychiatrist, or any other qualified healthcare professional.
              </p>
              <p>
                If you are experiencing a mental health crisis, suicidal thoughts, or any medical
                emergency, please contact your local emergency services, a crisis helpline, or go
                to your nearest emergency department immediately. Do not rely on Shroomy for
                emergency support.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Eligibility</h2>
              <p>
                You must be at least 13 years of age to use Shroomy. By using the App, you represent
                and warrant that you meet this age requirement. If you are under 18, you should
                review these terms with a parent or guardian.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Use of the App</h2>
              <p className="mb-4">You agree to use Shroomy only for its intended purpose as a personal wellness tool. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the App for any unlawful purpose or in violation of any applicable laws.</li>
                <li>Attempt to reverse-engineer, decompile, or disassemble any part of the App.</li>
                <li>Interfere with or disrupt the integrity or performance of the App.</li>
                <li>Use the App to generate harmful, abusive, or inappropriate content.</li>
                <li>Share your account credentials with others or allow unauthorised access.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Subscriptions &amp; Payments</h2>
              <p className="mb-4">
                Shroomy offers premium features through subscription plans. Subscriptions are
                processed through the Apple App Store or Google Play Store and managed via
                RevenueCat.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Subscription fees are charged according to the plan you select at the time of
                  purchase.
                </li>
                <li>
                  Subscriptions automatically renew unless cancelled at least 24 hours before the
                  end of the current billing period.
                </li>
                <li>
                  You can manage or cancel your subscription through your device&apos;s app store
                  settings.
                </li>
                <li>
                  Refunds are handled by the respective app store in accordance with their refund
                  policies.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Intellectual Property</h2>
              <p>
                All content, features, and functionality of Shroomy, including but not limited to
                text, graphics, logos, icons, images, and software, are the property of Moment Apps
                and are protected by applicable intellectual property laws. You may not reproduce,
                distribute, or create derivative works from any part of the App without our prior
                written consent.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Moment Apps shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising out of or
                related to your use of the App. This includes, without limitation, any damages
                resulting from reliance on information provided through the App, interruptions to
                the service, or loss of data. Our total liability shall not exceed the amount you
                have paid for the App in the twelve months preceding the claim.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Disclaimer of Warranties</h2>
              <p>
                Shroomy is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of
                any kind, either express or implied. We do not warrant that the App will be
                uninterrupted, error-free, or free of viruses or other harmful components. We make
                no guarantees about the accuracy, reliability, or completeness of any content or
                information provided through the App.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify
                you of significant changes through the App or by other appropriate means. Your
                continued use of Shroomy after changes take effect constitutes acceptance of the
                revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Governing Law</h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws
                of England and Wales. Any disputes arising from or relating to these terms or your
                use of Shroomy shall be subject to the exclusive jurisdiction of the courts of
                England and Wales.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Contact Us</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:contact@momentapps.co.uk" className="underline hover:opacity-70 transition-opacity">
                  contact@momentapps.co.uk
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
