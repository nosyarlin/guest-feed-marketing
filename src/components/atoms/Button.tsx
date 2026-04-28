import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary";
type ButtonSize = "default" | "compact";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

function joinClasses(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-contrast hover:bg-accent/90 disabled:bg-accent/50",
};

const sizeClasses: Record<ButtonSize, string> = {
  default: "px-6 py-3.5",
  compact: "px-5 py-2.5",
};

export function Button({
  variant = "primary",
  size = "default",
  fullWidth = false,
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={joinClasses(
        "max-w-[360px] rounded-sm text-sm font-semibold uppercase tracking-[0.08em] transition-colors hover:cursor-pointer disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "mx-auto w-full",
        className,
      )}
      {...props}
    />
  );
}
