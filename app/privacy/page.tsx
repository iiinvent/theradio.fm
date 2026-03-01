import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | theradio.fm",
  description:
    "Privacy Policy for theradio.fm - How we collect, use, and disclose information.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto max-w-2xl px-6 py-8">
        {/* Back link */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Music Love
        </Link>

        {/* Logo */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-primary/30">
            <Image
              src="/images/logo.jpg"
              alt="theradio.fm"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            theradio.fm
          </h1>
        </div>

        {/* Privacy content */}
        <article className="prose-custom space-y-6 font-mono text-sm leading-relaxed text-muted-foreground">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-2 font-sans text-xl font-bold text-foreground">
              Privacy Policy for theradio.fm
            </h2>
            <p className="text-xs italic">Last Updated: 01 June 2023</p>
          </div>

          <p>
            theradio.fm (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            respects your privacy and is committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            disclose information when you interact with our mobile application
            (&quot;App&quot;) in compliance with the General Data Protection
            Regulation (GDPR) and applicable US laws. Please read this Privacy
            Policy carefully to understand our practices regarding your personal
            information.
          </p>

          <section className="space-y-4">
            <h3 className="font-sans text-lg font-bold text-foreground">
              1. Information We Collect
            </h3>
            <p>
              <strong className="text-foreground">
                1.1 Personal Information:
              </strong>{" "}
              We may collect certain personal information from you when you use
              the App. This may include your name, email address, billing
              information, shipping address, device information, and other
              information you provide during the registration or purchase
              process.
            </p>
            <p>
              <strong className="text-foreground">
                1.2 Usage Information:
              </strong>{" "}
              We may collect information about your interactions with the App,
              such as the features you use, the content you access, and your app
              preferences.
            </p>
            <p>
              <strong className="text-foreground">1.3 Log Data:</strong> We
              automatically collect certain information when you use the App,
              including your IP address, browser type, operating system, device
              information, and the pages or features of the App that you access.
            </p>
            <p>
              <strong className="text-foreground">
                1.4 Analytical Tools:
              </strong>{" "}
              We use analytical tools such as Vercel Analytics to collect and
              analyze information about how users interact with the App. These
              tools may collect information such as device identifiers, IP
              addresses, and usage data. The data collected by these tools is
              used to improve the functionality and user experience of the App.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans text-lg font-bold text-foreground">
              2. Use of Information
            </h3>
            <p>
              <strong className="text-foreground">
                2.1 Providing and Improving the App:
              </strong>{" "}
              We use the information collected to provide, personalize, and
              improve the App, including its features, content, and user
              experience.
            </p>
            <p>
              <strong className="text-foreground">2.2 Communications:</strong>{" "}
              We may use your email address to send you important updates,
              notifications, and promotional materials related to the App. You
              can opt out of receiving promotional emails at any time.
            </p>
            <p>
              <strong className="text-foreground">
                2.3 Legal Compliance:
              </strong>{" "}
              We may use and disclose your information to comply with applicable
              laws, regulations, legal processes, or enforceable governmental
              requests.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans text-lg font-bold text-foreground">
              3. Data Sharing
            </h3>
            <p>
              <strong className="text-foreground">
                3.1 Third-Party Service Providers:
              </strong>{" "}
              We may share your information with trusted third-party service
              providers who assist us in operating the App, conducting our
              business, or providing services to you. These service providers are
              bound by confidentiality obligations and are not permitted to use
              your information for any other purpose.
            </p>
            <p>
              <strong className="text-foreground">
                3.2 Aggregated or De-Identified Data:
              </strong>{" "}
              We may share aggregated or de-identified data with third parties
              for analytical, research, or other purposes. This data does not
              personally identify you.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans text-lg font-bold text-foreground">
              4. Data Security
            </h3>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              disclosure, alteration, and destruction. However, please be aware
              that no method of transmission over the internet or electronic
              storage is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans text-lg font-bold text-foreground">
              5. Your Rights
            </h3>
            <p>
              Under the GDPR and applicable US laws, you have certain rights
              regarding your personal information, including the right to access,
              correct, delete, and port your data. You may also have the right to
              object to or restrict certain types of data processing. To exercise
              your rights, please contact us using the contact information below.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans text-lg font-bold text-foreground">
              6. Children&apos;s Privacy
            </h3>
            <p>
              The App is not intended for children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If we become aware that we have collected personal information from
              a child under 13, we will take steps to delete the information as
              soon as possible.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans text-lg font-bold text-foreground">
              7. Changes to this Privacy Policy
            </h3>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable laws. We will notify you of
              any material changes by posting the updated Privacy Policy on the
              App or by other means. Your continued use of the App after the
              effective date of the updated Privacy Policy constitutes your
              acceptance of the changes.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="font-sans text-lg font-bold text-foreground">
              8. Contact Us
            </h3>
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us at
              theradio.fm.
            </p>
          </section>

          <div className="rounded-xl border border-border bg-card p-4 text-center text-xs">
            <p className="text-muted-foreground">
              By using our App, you acknowledge that you have read and understood
              this Privacy Policy and agree to its terms.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
