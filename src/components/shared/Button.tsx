import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  external?: boolean;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  external = false,
  className = '',
}: ButtonProps) => {
  // Size variants (padding + font adjustments)
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-7 py-3 text-base',
    lg: 'px-9 py-4 text-lg',
  };

  // Variant classes
  const variantClasses = {
    primary: clsx(
      'bg-yellow border-2 border-yellow text-black',
      'hover:bg-yellow-dark',
      'shadow-[3px_3px_0px_#000]',
      'hover:shadow-[5px_5px_0px_#000]',
      'hover:-translate-x-0.5 hover:-translate-y-0.5'
    ),
    secondary: clsx(
      'bg-transparent border-2 border-yellow text-yellow',
      'hover:bg-yellow hover:text-black',
      'shadow-[3px_3px_0px_#f5c518]',
      'hover:shadow-[5px_5px_0px_#000]',
      'hover:-translate-x-0.5 hover:-translate-y-0.5'
    ),
    ghost: clsx(
      'bg-transparent border-2 border-transparent text-text-secondary',
      'hover:text-yellow hover:border-yellow/30',
      'hover:bg-yellow/5'
    ),
  };

  const baseClasses = clsx(
    'inline-flex items-center gap-2 rounded',
    'font-comic tracking-wider uppercase',
    'transition-all duration-200',
    'cursor-pointer no-underline',
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  // Link behavior
  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: variant === 'ghost' ? 1.02 : 1 }}
        whileTap={{ scale: 0.98 }}
        {...linkProps}
      >
        {children}
      </motion.a>
    );
  }

  // Button behavior
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={baseClasses}
      whileHover={{ scale: variant === 'ghost' ? 1.02 : 1 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
