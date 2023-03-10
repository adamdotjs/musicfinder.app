import type { MetaFunction } from "@remix-run/node";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { Container } from "./components/Container";
import Header from "./components/Header";
import styles from "./styles/app.css";

export function links() {
	return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "MusicFinder.app",
	viewport: "width=device-width,initial-scale=1",
});

export default function App() {
	return (
		<html lang="en" className="h-full">
			<head>
				<Meta />
				<Links />
			</head>
			<body className="h-full bg-black text-white">
				<Container>
					<Header />
					<main>
						<Outlet />
					</main>
				</Container>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
