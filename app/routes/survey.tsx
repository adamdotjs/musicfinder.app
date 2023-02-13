import { Outlet } from "@remix-run/react";

export default function Survey() {
	return (
		<div>
			<h2>Create a playlist</h2>
			<div>
				<Outlet />
			</div>
		</div>
	);
}
