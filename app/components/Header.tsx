import { Link } from "@remix-run/react";
import Container from "./Container";

export default function Header() {
	return (
		<header>
			<Container>
				<Link to="/">
					<h1 className="py-12 text-5xl font-bold text-brand">MusicFinder.app</h1>
				</Link>
			</Container>
		</header>
	);
}
