import { Link } from "@remix-run/react";

export default function Header() {
	return (
		<header>
			<Link to="/">
				<h1 className="py-12 text-5xl font-bold text-brand">MusicFinder.app</h1>
			</Link>
		</header>
	);
}
