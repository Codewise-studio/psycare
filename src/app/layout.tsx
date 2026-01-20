import "../styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
	title: "PsyCare - Human-Centered Mental Health, Powered by Technology",
	description: "PsyCare blends expert psychological care with innovative technology to deliver accessible, personalized, and compassionate mental health support.",
	icons: [{ rel: "icon", url: "/psycare.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		   <html lang="en" className={`${geist.variable}`}>
			   <body className="overflow-x-hidden">{children}</body>
		   </html>
	);
}
