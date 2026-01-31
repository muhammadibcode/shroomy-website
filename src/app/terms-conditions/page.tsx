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
            Terms &amp; Conditions
          </h1>

          <div className="space-y-10 text-black text-sm leading-relaxed">
            <p>
              <strong>Last updated: January 2025</strong>
            </p>

            <p>
              These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;you&quot;, &quot;your&quot;, or &quot;User&quot;) and Moment Apps Ltd., a company registered in England and Wales (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;, or &quot;Company&quot;). By downloading, installing, accessing, or using the Shroomy mobile application (&quot;App&quot; or &quot;Shroomy&quot;), you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not download, access, or use the App.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                1.1 By using Shroomy, you confirm that you are at least 13 years of age (or the minimum age of digital consent in your jurisdiction, whichever is higher), and that you have the legal capacity to enter into these Terms.
              </p>
              <p className="mb-4">
                1.2 If you are between 13 and 18 years of age (or the age of majority in your jurisdiction), you represent that a parent or legal guardian has reviewed and agreed to these Terms on your behalf.
              </p>
              <p>
                1.3 We reserve the right to modify these Terms at any time. Continued use of the App following any changes constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">2. Description of Service</h2>
              <p className="mb-4">
                2.1 Shroomy is a self-help wellness application that uses artificial intelligence (&quot;AI&quot;) to generate personalized exercises, guided audio experiences, writing prompts, and supportive chat interactions designed to assist users in developing anxiety and stress management skills.
              </p>
              <p className="mb-4">
                2.2 The App uses third-party AI services (including Anthropic&apos;s Claude and ElevenLabs text-to-speech technology) to generate content including but not limited to: weekly therapeutic plans, daily exercises, breathing and meditation scripts, journaling prompts, insight cards, and conversational responses through an in-app chat feature with &quot;Shroomy,&quot; an AI-powered virtual companion.
              </p>
              <p>
                2.3 The App collects information you provide during onboarding and through ongoing use—including responses to surveys about your emotional state, life circumstances, goals, and preferences—to personalize the AI-generated content. This personalized content is generated dynamically based on your inputs and may vary in quality, relevance, and appropriateness.
              </p>
            </div>

            {/* Section 3 - Critical Health Disclaimer */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl md:text-2xl font-display mb-4">3. Critical Health and Safety Disclaimer</h2>
              <p className="mb-4 font-semibold">
                PLEASE READ THIS SECTION CAREFULLY. IT CONTAINS IMPORTANT LIMITATIONS ON THE NATURE OF THE APP AND ITS SUITABILITY FOR YOUR NEEDS.
              </p>

              <h3 className="text-lg font-display mt-6 mb-3">3.1 Shroomy is NOT Medical or Psychological Treatment</h3>
              <p className="mb-4">
                Shroomy is a self-help wellness tool designed to complement—not replace—professional mental health care. Shroomy:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>IS NOT</strong> a medical device, therapeutic treatment, psychotherapy, counseling, or any form of professional mental health service</li>
                <li><strong>IS NOT</strong> a substitute for professional diagnosis, treatment, or advice from qualified healthcare providers, psychologists, psychiatrists, licensed therapists, or counselors</li>
                <li><strong>IS NOT</strong> intended to diagnose, treat, cure, or prevent any mental health condition, illness, or disease</li>
                <li><strong>IS NOT</strong> designed or equipped to handle mental health crises, psychiatric emergencies, or situations involving risk of harm to yourself or others</li>
                <li><strong>DOES NOT</strong> establish a therapist-patient, doctor-patient, or any professional-client relationship between you and the Company, the App, or any AI system</li>
              </ul>

              <h3 className="text-lg font-display mt-6 mb-3">3.2 AI-Generated Content Limitations</h3>
              <p className="mb-4">
                All content generated by Shroomy—including weekly plans, daily exercises, guided audio scripts, chat responses, and insight cards—is produced by artificial intelligence systems. You acknowledge and accept that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>AI-generated content may be inaccurate, incomplete, inappropriate, or unsuitable</strong> for your specific circumstances, mental health needs, or personal situation, regardless of the information you have provided to the App.</li>
                <li><strong>AI systems cannot fully understand context, nuance, or the complexity of human mental health.</strong> The personalization provided is based on pattern matching and algorithmic processing, not clinical judgment or professional assessment.</li>
                <li><strong>AI-generated therapeutic suggestions, coping strategies, or exercises may not be clinically appropriate</strong> for your condition and could potentially be unhelpful or counterproductive in certain circumstances.</li>
                <li><strong>The App cannot assess risk factors, contraindications, or the full clinical picture</strong> that a qualified mental health professional would consider before recommending interventions.</li>
                <li><strong>Breathing exercises, meditation guidance, and other techniques generated by the App</strong> may not be suitable for all individuals, including those with certain respiratory conditions, cardiovascular issues, trauma histories, or other health concerns.</li>
              </ul>

              <h3 className="text-lg font-display mt-6 mb-3">3.3 Professional Help Is Essential</h3>
              <p className="mb-4">You should seek professional mental health support if you:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Are experiencing symptoms of depression, anxiety disorders, panic attacks, PTSD, or other mental health conditions</li>
                <li>Have a history of mental health conditions or are currently under treatment</li>
                <li>Are taking or considering medication for mental health concerns</li>
                <li>Have experienced trauma or are processing difficult life events</li>
                <li>Feel that your mental health is significantly impacting your daily functioning, relationships, or quality of life</li>
              </ul>
              <p className="font-semibold">
                You should ALWAYS consult with a qualified healthcare professional before making any decisions about your mental health care based on information or suggestions from this App.
              </p>

              <h3 className="text-lg font-display mt-6 mb-3">3.4 Crisis Situations</h3>
              <p className="mb-4 font-bold text-red-800">
                SHROOMY IS NOT A CRISIS INTERVENTION SERVICE AND DOES NOT PROVIDE CRISIS SUPPORT.
              </p>
              <p className="mb-4">
                If you are experiencing a mental health crisis, having thoughts of suicide or self-harm, or are in danger of harming yourself or others:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4 font-semibold">
                <li>STOP USING THIS APP IMMEDIATELY</li>
                <li>Contact emergency services (999 in the UK, 911 in the US, or your local emergency number)</li>
                <li>Contact a crisis helpline in your country</li>
                <li>Go to your nearest emergency department</li>
                <li>Contact your mental health provider, if you have one</li>
              </ul>
              <p>
                We do not provide crisis hotline links or resources within the App. It is your responsibility to maintain access to appropriate crisis resources for your region.
              </p>

              <h3 className="text-lg font-display mt-6 mb-3">3.5 No Warranty of Therapeutic Benefit</h3>
              <p className="mb-4">We make no representations, warranties, or guarantees that:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Using Shroomy will improve your mental health, reduce anxiety or stress, or provide any therapeutic benefit</li>
                <li>The exercises, techniques, or information provided are based on the most current evidence or best practices</li>
                <li>The AI-generated content is consistent with any particular therapeutic modality or clinical guideline</li>
                <li>The App will be effective for any particular user or condition</li>
              </ul>

              <h3 className="text-lg font-display mt-6 mb-3">3.6 Assumption of Risk</h3>
              <p>By using Shroomy, you expressly acknowledge and assume all risks associated with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Relying on AI-generated content for self-help purposes</li>
                <li>Engaging in breathing exercises, meditation, journaling, or other activities suggested by the App</li>
                <li>Sharing personal, sensitive, or health-related information with the App</li>
                <li>Using the App instead of, or in addition to, professional mental health services</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">4. User Obligations and Acceptable Use</h2>
              <p className="mb-4">
                4.1 <strong>Lawful Use.</strong> You agree to use the App only for lawful purposes and in accordance with these Terms.
              </p>
              <p className="mb-4">
                4.2 <strong>Accurate Information.</strong> While we do not require or verify your identity, you agree that any information you provide to the App—including during onboarding surveys and chat interactions—will be provided in good faith and will not include false, misleading, or harmful content.
              </p>
              <p className="mb-4">
                4.3 <strong>Third-Party AI Policies.</strong> The App utilizes AI services provided by Anthropic and other third parties. You agree to comply with all applicable terms and policies of these third-party providers, including Anthropic&apos;s Acceptable Use Policy. You shall not input content that:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Is illegal, hateful, extremist, threatening, or promotes violence</li>
                <li>Violates the rights of any third party</li>
                <li>Is intended to manipulate, deceive, or &quot;jailbreak&quot; the AI systems</li>
                <li>Contains malware, harmful code, or attempts to exploit vulnerabilities</li>
                <li>Is designed to generate content that violates any applicable laws or regulations</li>
              </ul>
              <p className="mb-4">
                4.4 <strong>Personal Responsibility.</strong> You accept sole responsibility for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Your decision to use or continue using the App</li>
                <li>Any actions you take or decisions you make based on the App&apos;s content</li>
                <li>Determining whether the App is suitable for your needs and circumstances</li>
                <li>Seeking professional help when appropriate</li>
              </ul>
              <p className="mb-4">
                4.5 <strong>Prohibited Uses.</strong> You shall not use the App:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>On behalf of another person without their knowledge and consent</li>
                <li>To provide advice or treatment to others</li>
                <li>For any commercial purpose without our prior written consent</li>
                <li>In any manner that could damage, disable, overburden, or impair the App or interfere with any other party&apos;s use of the App</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">5. Data and Privacy</h2>
              <p className="mb-4">
                5.1 <strong>Local Data Storage.</strong> The App stores data locally on your device, including your psychological profile, chat history, exercise completion records, and other personalization data. This data is not uploaded to our servers except where necessary to process requests through third-party AI services.
              </p>
              <p className="mb-4">
                5.2 <strong>AI Service Data Processing.</strong> To generate personalized content, certain information you provide (including your psychological profile, chat messages, and onboarding responses) is transmitted to third-party AI service providers (including Anthropic) for processing. This data is used solely for the purpose of generating responses and content within the App and is subject to the privacy policies of those third-party providers.
              </p>
              <p className="mb-4">
                5.3 <strong>No User Accounts.</strong> The App uses anonymous authentication. We do not collect or store personally identifiable information such as your name, email address, or phone number unless you voluntarily provide it.
              </p>
              <p className="mb-4">
                5.4 <strong>Device-Dependent Data.</strong> Because your data is stored locally on your device:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Deleting the App will permanently delete all your data</strong>, including your progress, chat history, and personalization information</li>
                <li><strong>Data cannot be transferred</strong> between devices</li>
                <li><strong>We cannot recover lost data</strong> if your device is lost, damaged, or reset</li>
              </ul>
              <p className="mb-4">
                5.5 <strong>Privacy Policy.</strong> Our Privacy Policy explains in detail what data we collect, how it is processed, and your rights regarding that data. By using the App, you consent to the data practices described in the Privacy Policy.
              </p>
              <p>
                5.6 <strong>Sensitive Information.</strong> Given the nature of the App, you may provide sensitive information about your mental health, emotions, relationships, and personal circumstances. You do so at your own risk and should carefully consider what information you choose to share.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">6. Subscriptions, Free Trial, and Billing</h2>
              <p className="mb-4">
                6.1 <strong>Subscription Required.</strong> Access to certain features of the App requires a paid subscription.
              </p>
              <p className="mb-4">
                6.2 <strong>Free Trial.</strong> A free trial period may be offered once per Apple ID or Google Play account. The trial period length is specified at the time of signup.
              </p>
              <p className="mb-4">
                6.3 <strong>Automatic Renewal.</strong> Unless you cancel your subscription at least 24 hours before the end of the current billing period (including the free trial period), your subscription will automatically renew, and the applicable subscription fee will be charged to your payment method on file with Apple or Google.
              </p>
              <p className="mb-4">
                6.4 <strong>No Cancellation Reminders.</strong> We do not send reminders before your free trial ends or before subscription renewal. It is your responsibility to manage your subscription and cancel if you do not wish to continue.
              </p>
              <p className="mb-4">
                6.5 <strong>How to Cancel.</strong> Subscriptions are managed through Apple App Store or Google Play Store. To cancel:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>iOS:</strong> Go to Settings &gt; [Your Name] &gt; Subscriptions &gt; Shroomy &gt; Cancel Subscription</li>
                <li><strong>Android:</strong> Go to Google Play Store &gt; Menu &gt; Subscriptions &gt; Shroomy &gt; Cancel Subscription</li>
              </ul>
              <p className="mb-4">
                Deleting the App does not cancel your subscription.
              </p>
              <p className="mb-4">
                6.6 <strong>Refunds.</strong> All purchases are processed by Apple or Google, and their respective refund policies apply. We do not directly process payments or issue refunds. To request a refund, contact Apple or Google support.
              </p>
              <p className="mb-4">
                6.7 <strong>Price Changes.</strong> We may change subscription prices at any time. Price changes will not affect your current subscription period but will apply upon renewal.
              </p>
              <p>
                6.8 <strong>No Guarantees.</strong> Payment of a subscription fee does not guarantee that the App will meet your expectations, provide therapeutic benefit, or be suitable for your needs. Section 3 (Critical Health and Safety Disclaimer) applies regardless of whether you are a paying subscriber.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">7. Intellectual Property</h2>
              <p className="mb-4">
                7.1 <strong>Our Property.</strong> All content, features, functionality, design, code, graphics, logos, trademarks, and other intellectual property comprising the App (excluding AI-generated content based on your inputs) are owned by or licensed to the Company and are protected by intellectual property laws.
              </p>
              <p className="mb-4">
                7.2 <strong>Limited License.</strong> Subject to these Terms, we grant you a personal, non-exclusive, non-transferable, revocable, limited license to download, install, and use the App on devices you own or control, solely for your personal, non-commercial use.
              </p>
              <p className="mb-4">
                7.3 <strong>Restrictions.</strong> You may not:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Copy, modify, distribute, sell, or lease any part of the App</li>
                <li>Reverse engineer, decompile, or disassemble the App except where permitted by law</li>
                <li>Remove, alter, or obscure any proprietary notices</li>
                <li>Use the App&apos;s content to train AI systems or for machine learning purposes</li>
                <li>Scrape, mine, or extract data from the App</li>
              </ul>
              <p className="mb-4">
                7.4 <strong>Your Content.</strong> You retain ownership of any original content you input into the App (such as journal entries). By providing content to the App, you grant us a limited license to use that content solely for the purpose of providing the App&apos;s services to you.
              </p>
              <p>
                7.5 <strong>AI-Generated Content.</strong> Content generated by AI systems within the App (including weekly plans, exercises, and chat responses) is provided for your personal use only and may be subject to limitations imposed by third-party AI providers.
              </p>
            </div>

            {/* Section 8 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h2 className="text-xl md:text-2xl font-display mb-4">8. Limitation of Liability</h2>
              <p className="mb-4 font-semibold">
                THIS SECTION LIMITS OUR LIABILITY. PLEASE READ IT CAREFULLY.
              </p>
              <p className="mb-4">
                8.1 <strong>Disclaimer of Warranties.</strong> THE APP IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>ACCURACY, RELIABILITY, COMPLETENESS, OR TIMELINESS OF AI-GENERATED CONTENT</li>
                <li>NON-INFRINGEMENT OF THIRD-PARTY RIGHTS</li>
                <li>UNINTERRUPTED, ERROR-FREE, OR SECURE OPERATION</li>
                <li>CORRECTION OF DEFECTS</li>
                <li>FREEDOM FROM VIRUSES OR HARMFUL COMPONENTS</li>
                <li>THERAPEUTIC EFFECTIVENESS OR CLINICAL APPROPRIATENESS</li>
              </ul>
              <p className="mb-4">
                8.2 <strong>No Liability for Health Outcomes.</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Mental or physical health outcomes resulting from your use of the App</li>
                <li>Decisions you make based on AI-generated content</li>
                <li>Failure to seek or delay in seeking professional help</li>
                <li>Harm resulting from reliance on the App&apos;s exercises, suggestions, or chat responses</li>
                <li>Emotional distress, worsening of symptoms, or adverse effects</li>
              </ul>
              <p className="mb-4">
                8.3 <strong>Liability Cap.</strong> TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE APP SHALL NOT EXCEED THE GREATER OF:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>(a) The total amount you paid to us for the App in the twelve (12) months immediately preceding the event giving rise to the claim; or</li>
                <li>(b) Fifty pounds sterling (£50).</li>
              </ul>
              <p className="mb-4">
                8.4 <strong>Exclusion of Consequential Damages.</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Loss of profits, goodwill, use, or data</li>
                <li>Personal injury or emotional distress (except where caused by our gross negligence)</li>
                <li>Cost of substitute services</li>
                <li>Any other intangible losses</li>
              </ul>
              <p className="mb-4">
                This exclusion applies whether the claim is based on warranty, contract, tort (including negligence), strict liability, or any other legal theory, even if we have been advised of the possibility of such damages.
              </p>
              <p className="mb-4">
                8.5 <strong>Preserved Liability.</strong> Nothing in these Terms excludes or limits our liability for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Death or personal injury caused by our negligence</li>
                <li>Fraud or fraudulent misrepresentation</li>
                <li>Any other liability that cannot be excluded or limited under applicable law</li>
              </ul>
              <p>
                8.6 <strong>Consumer Rights.</strong> If you are a consumer, you may have statutory rights under the laws of your country that cannot be waived by contract. Nothing in these Terms affects those statutory rights.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">9. Indemnification</h2>
              <p>
                To the fullest extent permitted by law, you agree to indemnify, defend, and hold harmless the Company, its affiliates, officers, directors, employees, agents, licensors, and service providers from and against any and all claims, damages, liabilities, costs, and expenses (including reasonable legal fees) arising out of or relating to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Your use of or inability to use the App</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of a third party</li>
                <li>Your violation of any applicable law or regulation</li>
                <li>Any content you provide to the App</li>
                <li>Any claim that your use of the App caused harm to you or a third party</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">10. Termination</h2>
              <p className="mb-4">
                10.1 <strong>Termination by You.</strong> You may stop using the App at any time by deleting it from your device. Deleting the App does not automatically cancel your subscription (see Section 6).
              </p>
              <p className="mb-4">
                10.2 <strong>Termination by Us.</strong> We may suspend or terminate your access to the App at any time, with or without cause, and with or without notice, including if we reasonably believe:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>You have violated these Terms</li>
                <li>Your use of the App poses a risk to us, our users, or third parties</li>
                <li>Continued operation of the App has become impractical</li>
              </ul>
              <p>
                10.3 <strong>Effect of Termination.</strong> Upon termination, your license to use the App immediately ceases, all locally stored data will be deleted if you uninstall the App, and sections of these Terms that by their nature should survive termination shall survive (including Sections 3, 7, 8, 9, 11, and 12).
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">11. Third-Party Services and Beneficiaries</h2>
              <p className="mb-4">
                11.1 <strong>Third-Party Services.</strong> The App relies on third-party services including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Anthropic (Claude AI API) for content generation</li>
                <li>ElevenLabs for text-to-speech audio</li>
                <li>Apple and Google for app distribution and payment processing</li>
                <li>Firebase for backend infrastructure</li>
                <li>RevenueCat for subscription management</li>
              </ul>
              <p className="mb-4">
                Your use of the App is subject to the terms, conditions, and privacy policies of these third-party providers. We are not responsible for the availability, reliability, or performance of third-party services.
              </p>
              <p className="mb-4">
                11.2 <strong>Third-Party Beneficiaries.</strong> Apple Inc., Google LLC, and their respective subsidiaries are third-party beneficiaries of these Terms solely with respect to their respective app store policies. They may enforce these Terms as they relate to your use of their platforms.
              </p>
              <p>
                11.3 <strong>App Store Terms.</strong> You acknowledge that these Terms are between you and the Company only, not with Apple or Google. However, your use of the App must also comply with the Apple App Store Terms of Service or Google Play Terms of Service, as applicable.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">12. General Provisions</h2>
              <p className="mb-4">
                12.1 <strong>Governing Law.</strong> These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles.
              </p>
              <p className="mb-4">
                12.2 <strong>Jurisdiction.</strong> Subject to Section 12.3, the courts of England and Wales shall have exclusive jurisdiction over any dispute arising out of or relating to these Terms or your use of the App.
              </p>
              <p className="mb-4">
                12.3 <strong>Consumer Protection.</strong> If you are a consumer residing in a country with mandatory consumer protection laws, nothing in these Terms deprives you of the protection of the mandatory provisions of those laws or of your right to bring legal proceedings in the courts of your country of residence.
              </p>
              <p className="mb-4">
                12.4 <strong>Severability.</strong> If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
              <p className="mb-4">
                12.5 <strong>Waiver.</strong> Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.
              </p>
              <p className="mb-4">
                12.6 <strong>Entire Agreement.</strong> These Terms, together with our Privacy Policy, constitute the entire agreement between you and the Company regarding your use of the App and supersede all prior and contemporaneous agreements, representations, and understandings.
              </p>
              <p className="mb-4">
                12.7 <strong>Assignment.</strong> You may not assign or transfer these Terms or your rights hereunder without our prior written consent. We may assign these Terms without restriction.
              </p>
              <p className="mb-4">
                12.8 <strong>Force Majeure.</strong> We shall not be liable for any failure or delay in performing our obligations where such failure or delay results from circumstances beyond our reasonable control.
              </p>
              <p className="mb-4">
                12.9 <strong>No Agency.</strong> Nothing in these Terms creates any agency, partnership, joint venture, or employment relationship between you and the Company.
              </p>
              <p>
                12.10 <strong>Language.</strong> These Terms are written in English. If these Terms are translated into any other language and there is a discrepancy between the English text and the translated text, the English text shall prevail.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">13. Updates to the App and Availability</h2>
              <p className="mb-4">
                13.1 <strong>App Updates.</strong> We may from time to time issue updates to the App, which may include bug fixes, feature additions, or changes to functionality. Some updates may be mandatory, and you may not be able to continue using the App until you have installed the update.
              </p>
              <p className="mb-4">
                13.2 <strong>No Guaranteed Availability.</strong> We do not guarantee that the App will always be available or that it will be uninterrupted. We may suspend, withdraw, discontinue, or change all or any part of the App without notice.
              </p>
              <p className="mb-4">
                13.3 <strong>AI Service Availability.</strong> The App&apos;s AI-powered features depend on third-party services that may experience downtime, degraded performance, or discontinuation. We are not liable for any loss or inconvenience caused by unavailability of these services.
              </p>
              <p>
                13.4 <strong>Local Data Risk.</strong> Because your data is stored solely on your device, you are responsible for maintaining backups of important information. We are not responsible for loss of data due to device failure, App updates, or any other cause.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-xl md:text-2xl font-display mb-4">14. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms or the App, please contact us at:
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

            {/* Section 15 - Acknowledgment */}
            <div className="bg-gray-100 p-6 rounded-lg border border-gray-300">
              <h2 className="text-xl md:text-2xl font-display mb-4">15. Acknowledgment</h2>
              <p className="mb-4 font-semibold">
                BY DOWNLOADING, INSTALLING, OR USING SHROOMY, YOU ACKNOWLEDGE THAT:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>YOU HAVE READ AND UNDERSTOOD THESE TERMS IN THEIR ENTIRETY</li>
                <li>YOU AGREE TO BE BOUND BY THESE TERMS</li>
                <li>YOU UNDERSTAND THAT SHROOMY IS NOT A SUBSTITUTE FOR PROFESSIONAL MENTAL HEALTH CARE</li>
                <li>YOU ACCEPT THAT ALL AI-GENERATED CONTENT MAY BE INACCURATE, INCOMPLETE, OR UNSUITABLE FOR YOUR NEEDS</li>
                <li>YOU ASSUME ALL RISKS ASSOCIATED WITH YOUR USE OF THE APP</li>
                <li>YOU ARE SOLELY RESPONSIBLE FOR SEEKING PROFESSIONAL HELP WHEN APPROPRIATE</li>
              </ol>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
