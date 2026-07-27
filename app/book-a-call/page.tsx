import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendlyEmbed from "@/components/CalendlyEmbed";

export const metadata: Metadata = {
  title: "Book a Call — Nova Digitals",
  description:
    "Book a free 15-minute call with Nova Digitals and let's talk about how we can grow your brand.",
};

// Query params arrive here when someone submits the "Let's Talk" form on the
// homepage — see components/Contact.tsx — so Calendly opens pre-filled.
interface BookACallPageProps {
  searchParams: {
    name?: string;
    email?: string;
    a1?: string;
    a2?: string;
  };
}

export default function BookACallPage({ searchParams }: BookACallPageProps) {
  return (
    <main>
      <Navbar />

      <section className="bg-grid-fade py-16 md:py-20">
        <div className="container-px mx-auto max-w-4xl text-center">
          <p className="section-eyebrow">Book a Call</p>
          <h1 className="section-title mt-3">Let&apos;s Talk About Your Brand</h1>
          <p className="mx-auto mt-4 max-w-xl text-ink-500">
            Pick a time that works for you. It&apos;s a free 15-minute call —
            no pressure, just a conversation about how we can help your ads
            perform better.
          </p>
        </div>

        <div className="container-px mx-auto mt-12 max-w-4xl">
          <CalendlyEmbed
            name={searchParams.name}
            email={searchParams.email}
            a1={searchParams.a1}
            a2={searchParams.a2}
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
