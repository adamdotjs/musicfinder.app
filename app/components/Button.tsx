import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

export interface Props
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonStyles> {}

const buttonStyles = cva("rounded-full px-9 py-4 font-bold border-2 transition-all", {
	variants: {
		variant: {
			primary: "bg-brand text-white border-transparent hover:border-brand hover:bg-transparent",
			secondary:
				"bg-transparent text-white border-white hover:border-brand hover:text-brand hover:bg-transparent",
			danger: "bg-red-500 text-white hover:border-red-500 hover:bg-transparent border-transparent",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

export function Button({ className, variant, children, ...props }: Props) {
	return (
		<button className={buttonStyles({ variant, className })} {...props}>
			{children}
		</button>
	);
}
