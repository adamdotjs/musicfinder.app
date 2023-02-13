import type { LoaderArgs } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/Button";

import { spotifyStrategy } from "~/services/auth.server";

export async function loader({ request }: LoaderArgs) {
	return spotifyStrategy.getSession(request);
}

export default function Index() {
	const data = useLoaderData<typeof loader>();
	const user = data?.user;

	return (
		<>
			<h2 className="text-3xl">Welcome to MusicFinder!</h2>
			{user ? (
				<>
					<p>You are logged in as: {user?.email}</p>
					<Link to="/survey">Create a Playlist</Link>
				</>
			) : (
				<p>Log in with Spotify to get started</p>
			)}
			<Form action={user ? "/logout" : "/auth/spotify"} method="post">
				<Button variant="primary" className="mt-4">
					{user ? "Logout" : "Log in with Spotify"}
				</Button>
			</Form>
		</>
	);
}
