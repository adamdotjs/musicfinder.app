import { Switch } from "@headlessui/react";
import { Fragment, useState } from "react";

type Props = {
	label: string;
};

export function Toggle({ label }: Props) {
	const [enabled, setEnabled] = useState(false);

	return (
		<Switch checked={enabled} onChange={setEnabled} as={Fragment}>
			{({ checked }) => (
				<button
					className={`${
						checked ? "bg-blue-600" : "bg-gray-200"
					} relative inline-flex h-6 w-11 items-center rounded-full`}
				>
					<span className="sr-only">{label}</span>
					<span
						className={`${
							checked ? "translate-x-6" : "translate-x-1"
						} inline-block h-4 w-4 transform rounded-full bg-white transition`}
					/>
				</button>
			)}
		</Switch>
	);
}
