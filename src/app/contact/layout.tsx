import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach KOM Building Materials by phone, email, or visit our Redford Township showroom. (313) 559-1888 · Jordan@KOM-USA.com.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
