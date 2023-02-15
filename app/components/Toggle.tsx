import { Switch } from "@headlessui/react";
import { useState } from "react";

type Props = {
	label: string;
	name: string;
	value: string;
};

export function Toggle({ label, name, value }: Props) {
	const [enabled, setEnabled] = useState(false);

	return (
		<Switch.Group>
			<Switch
				checked={enabled}
				onChange={setEnabled}
				name={name}
				value={value}
				className={`${
					enabled ? "bg-brand" : "bg-black"
				} truncate rounded-full border-2 border-white p-4 transition-colors hover:border-brand`}
			>
				<span>{label}</span>
			</Switch>
		</Switch.Group>
	);
}
