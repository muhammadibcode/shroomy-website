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

          <div className="space-y-8 text-black text-sm leading-relaxed">
            <p>
              Last updated: January 2025
            </p>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Introduction</h2>
              <p>
                Shroomy (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is operated by Moment Apps. We are committed
                to protecting your privacy and ensuring you have a positive experience using our
                mental health app. This Privacy Policy explains how we collect, use, and safeguard
                your information when you use the Shroomy app.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Data Storage</h2>
              <p>
                Shroomy is designed with your privacy in mind. Your personal data, including journal
                entries, exercise responses, and progress information, is stored locally on your
                device. We do not maintain a central database of your personal mental health data.
                This means your most sensitive information stays with you and under your control.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">AI Processing</h2>
              <p>
                Shroomy uses artificial intelligence to provide personalised insights and exercise
                recommendations. Our AI features are powered by Anthropic. When you interact with
                AI-powered features, relevant context may be sent to Anthropic&apos;s servers for
                processing. Anthropic processes this data in accordance with their own privacy policy
                and does not use your data to train their models. We only send the minimum information
                necessary to provide you with helpful, personalised responses.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Subscriptions &amp; Payments</h2>
              <p>
                Shroomy offers premium features through in-app subscriptions. Our subscription
                management is handled by RevenueCat, a third-party service. RevenueCat processes
                your subscription status and purchase information to manage your access to premium
                features. Payment processing is handled directly by Apple (App Store) or Google
                (Google Play). We do not have access to your full payment card details.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Information We Collect</h2>
              <p className="mb-4">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Account information:</strong> Basic information needed to create and
                  manage your account.
                </li>
                <li>
                  <strong>Usage data:</strong> Anonymous analytics about how you use the app, such
                  as which features you access and how often, to help us improve the experience.
                </li>
                <li>
                  <strong>Device information:</strong> Basic device information such as device type,
                  operating system version, and app version for troubleshooting and compatibility
                  purposes.
                </li>
                <li>
                  <strong>Subscription data:</strong> Information about your subscription status,
                  processed through RevenueCat.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Data Sharing</h2>
              <p>
                We do not sell your personal data to third parties. We only share information with
                the service providers described above (Anthropic for AI processing, RevenueCat for
                subscription management) as necessary to provide the app&apos;s functionality.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Children&apos;s Privacy</h2>
              <p>
                Shroomy is not intended for use by children under the age of 13. We do not knowingly
                collect personal information from children under 13. If you are a parent or guardian
                and believe your child has provided us with personal information, please contact us
                so we can take appropriate action.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Your Rights</h2>
              <p>
                Since your personal mental health data is stored locally on your device, you have
                direct control over it. You can delete your data at any time by deleting the app
                or clearing the app&apos;s data in your device settings. If you have any questions about
                your data or wish to exercise any data protection rights, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any
                significant changes through the app or via other appropriate means. Your continued
                use of Shroomy after changes are made constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices,
                please contact us at{' '}
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
