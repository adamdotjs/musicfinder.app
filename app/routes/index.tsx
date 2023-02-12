import type { LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { Button } from "~/components/Button";
import Container from "~/components/Container";

import { spotifyStrategy } from "~/services/auth.server";

export async function loader({ request }: LoaderArgs) {
	return spotifyStrategy.getSession(request);
}

export default function Index() {
	const data = useLoaderData<typeof loader>();
	const user = data?.user;

	return (
		<Container>
			<h2 className="text-3xl">Welcome to MusicFinder!</h2>
			{user ? <p>You are logged in as: {user?.email}</p> : <p>You are not logged in yet!</p>}
			<Form action={user ? "/logout" : "/auth/spotify"} method="post">
				<Button className="mt-4">{user ? "Logout" : "Log in with Spotify"}</Button>
			</Form>
		</Container>
	);
}
