import { Form } from "@remix-run/react";

export default function Index() {
	return (
		<div className="px-48 py-24">
			<h1 className="text-3xl font-bold text-brand">MusicFinder</h1>
			<Form method="post">
				<label className="flex flex-col items-start justify-center text-center">
					<span>Username</span>
					<input type="text" />
				</label>
				<label className="flex flex-col items-start justify-center text-center">
					<span>Password</span>
					<input type="password" />
				</label>
				<button>Log in</button>
			</Form>
		</div>
	);
}
