export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  ...props
}: {
  className?: string;
  size?: string;
  variant?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 cursor-pointer";

  const sizeClasses: { [key: string]: string } = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses: { [key: string]: string } = {
    primary: "bg-primary hover:bg-primary/90 shadow-primary/25",
    secondary:
      "glass-strong hover:bg-primary/10 hover:text-primary shadow-primary/25",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
