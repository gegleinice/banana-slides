import type { Metadata } from "next";
import "@/styles/globals.css";
import { ClientProviders } from "@/components/providers/ClientProviders";

export const metadata: Metadata = {
	title: "Banana Slides",
	description: "AI-powered PPT generation — Profy edition",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang={process.env.NEXT_PUBLIC_LOCALE || "zh"}>
			<body>
				<ClientProviders>{children}</ClientProviders>
			</body>
		</html>
	);
}
