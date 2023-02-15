import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { Toggle } from "~/components/Toggle";
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

export async function action({ request }: ActionArgs) {
	const form = await request.formData();
	return form.getAll("genre");
}

export default function Genres() {
	const { genres } = useLoaderData();
	const selectedGenres = useActionData<typeof action>();
	console.log(selectedGenres);

	return (
		<>
			<h3>Choose up to 10 of your favorite genres</h3>
			<p>Note: All of your selections will be included in a single playlist</p>
			<Form className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-5" method="post">
				{genres &&
					genres.map((genre: string) => (
						<Toggle label={genre} key={genre} name="genre" value={genre} />
					))}
				<button>Next</button>
			</Form>
		</>
	);
}
