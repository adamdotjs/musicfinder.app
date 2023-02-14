import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { spotifyStrategy } from "~/services/auth.server";

export async function loader({ request }: LoaderArgs) {
	const user = await spotifyStrategy.getSession(request);
	const url = "https://api.spotify.com/v1/recommendations/available-genre-seeds";
	const response = await fetch(url, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${user?.accessToken}`,
		},
	});
	return response.json();
}

export default function Genres() {
	const { genres } = useLoaderData();
	return (
		<>
			<h3>Choose up to 10 of your favorite genres</h3>
			<p>Note: All of your selections will be included in a single playlist</p>
			<ul>{genres && genres.map((genre: string) => <li key={genre}>{genre}</li>)}</ul>
		</>
	);
}
