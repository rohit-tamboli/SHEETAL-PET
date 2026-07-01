import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#0A4EA3] text-white hover:bg-[#123B72] focus:ring-[#0A4EA3] shadow-sm hover:shadow",
    secondary: "bg-white text-[#111827] border border-gray-200 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-200 shadow-sm",
    outline: "border-2 border-[#0A4EA3] text-[#0A4EA3] hover:bg-blue-50 focus:ring-[#0A4EA3]",
    dark: "bg-[#111827] text-white hover:bg-[#1F2937] focus:ring-[#111827] shadow-sm"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-2.5 text-sm gap-2",
    lg: "px-8 py-3.5 text-base gap-2.5"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
}
