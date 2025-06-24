'use client';

import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight, Info } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useState } from "react";

// Button Types
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  className?: string;
  iconDescription?: string; // Description for the icon for screen readers
}

// Link Button Props
interface LinkButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  icon?: ReactNode;
  className?: string;
  external?: boolean;
  iconDescription?: string; // Description for the icon for screen readers
  ariaLabel?: string; // Aria label for the link
}

// Section Props
interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'dark' | 'gradient';
  id?: string;
}

// Typography Props
interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  color?: 'default' | 'primary' | 'light';
}

// Card Props
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: boolean;
  role?: string; // ARIA role
  ariaLabel?: string; // Accessible label
}

// FFCAM Button
export function FFCAMButton({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-md transition-colors duration-200 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ffcam';
  
  const variantStyles = {
    primary: 'bg-ffcam text-white hover:bg-ffcam-dark hover:text-white',
    secondary: 'bg-white text-ffcam hover:bg-gray-100',
    outline: 'border border-ffcam text-ffcam hover:bg-ffcam hover:text-white focus:text-white',
    text: 'text-ffcam hover:text-ffcam-dark underline-offset-4 hover:underline',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const classes = twMerge(
    clsx(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size]
    ),
    className
  );
  
  return (
    <button className={classes} {...props}>
      {children}
      {icon && <span className="ml-2" aria-hidden={!props.iconDescription} aria-label={props.iconDescription || undefined}>{icon}</span>}
    </button>
  );
}

// FFCAM Link Button
export function FFCAMLinkButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  external = false,
  iconDescription,
  ariaLabel,
}: LinkButtonProps) {
  const baseStyles = 'font-medium rounded-md transition-colors duration-200 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-ffcam text-white hover:bg-ffcam-dark hover:text-white',
    secondary: 'bg-white text-ffcam hover:bg-gray-100',
    outline: 'border border-ffcam text-ffcam hover:bg-ffcam hover:text-white focus:text-white',
    text: 'text-ffcam hover:text-ffcam-dark underline-offset-4 hover:underline',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const classes = twMerge(
    clsx(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size]
    ),
    className
  );
  
  const externalProps = external ? { 
    target: '_blank', 
    rel: 'noopener noreferrer',
    'aria-label': ariaLabel ? `${ariaLabel} (s'ouvre dans un nouvel onglet)` : `${typeof children === 'string' ? children : ''} (s'ouvre dans un nouvel onglet)`
  } : { 'aria-label': ariaLabel };
  
  return (
    <Link href={href} className={classes} {...externalProps}>
      {children}
      {icon && <span className="ml-2" aria-hidden={!iconDescription} aria-label={iconDescription || undefined}>{icon}</span>}
      {external && <span className="sr-only">(S'ouvre dans un nouvel onglet)</span>}
    </Link>
  );
}

// FFCAM Section
export function FFCAMSection({
  children,
  className = '',
  background = 'white',
  id,
}: SectionProps) {
  const baseStyles = 'py-16 md:py-24';
  
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'bg-ffcam-dark text-white',
    gradient: 'bg-gradient-to-br from-ffcam to-ffcam-dark text-white',
  };
  
  const classes = twMerge(
    clsx(
      baseStyles,
      backgroundStyles[background]
    ),
    className
  );
  
  return (
    <section className={classes} id={id}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

// FFCAM Heading
export function FFCAMHeading({
  children,
  level = 2,
  className = '',
  color = 'default',
}: HeadingProps) {
  const baseStyles = 'font-bold leading-tight';
  
  const sizeStyles = {
    1: 'text-3xl sm:text-4xl lg:text-5xl',
    2: 'text-2xl sm:text-3xl lg:text-4xl',
    3: 'text-xl sm:text-2xl lg:text-3xl',
    4: 'text-lg sm:text-xl font-semibold',
    5: 'text-base sm:text-lg font-semibold',
    6: 'text-sm sm:text-base font-semibold',
  };
  
  const colorStyles = {
    default: 'text-gray-900',
    primary: 'text-ffcam',
    light: 'text-white',
  };
  
  const classes = twMerge(
    clsx(
      baseStyles,
      sizeStyles[level],
      colorStyles[color]
    ),
    className
  );
  
  const HeadingTag = React.createElement(`h${level}`, { className: classes }, children);
  
  return HeadingTag;
}

// FFCAM Subheading
export function FFCAMSubheading({
  children,
  className = '',
  color = 'primary',
}: Omit<HeadingProps, 'level'>) {
  const baseStyles = 'text-xl font-semibold';
  
  const colorStyles = {
    default: 'text-gray-700',
    primary: 'text-ffcam',
    light: 'text-white',
  };
  
  const classes = twMerge(
    clsx(
      baseStyles,
      colorStyles[color]
    ),
    className
  );
  
  return <p className={classes}>{children}</p>;
}

// FFCAM Card
export function FFCAMCard({
  children,
  className = '',
  hover = true,
  padding = true,
}: CardProps) {
  const baseStyles = 'bg-white rounded-lg shadow-md overflow-hidden';
  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  const paddingStyles = padding ? 'p-6' : '';
  
  const classes = twMerge(
    clsx(
      baseStyles,
      hoverStyles,
      paddingStyles
    ),
    className
  );
  
  return <div className={classes}>{children}</div>;
}

// FFCAM Badge
export function FFCAMBadge({
  children,
  className = '',
  role,
}: {
  children: ReactNode;
  className?: string;
  role?: string;
}) {
  const classes = twMerge(
    'inline-flex items-center rounded-full bg-ffcam/15 px-2.5 py-0.5 text-xs font-medium text-ffcam-dark',
    className
  );
  
  return <span className={classes} role={role}>{children}</span>;
}

// FFCAM Arrow Link
export function FFCAMArrowLink({
  href,
  children,
  className = '',
  external = false,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  const classes = twMerge(
    'inline-flex items-center font-medium text-ffcam hover:text-ffcam-dark',
    className
  );
  
  const externalProps = external ? { 
    target: '_blank',
    rel: 'noopener noreferrer',
    'aria-label': ariaLabel ? `${ariaLabel} (s'ouvre dans un nouvel onglet)` : `${typeof children === 'string' ? children : ''} (s'ouvre dans un nouvel onglet)`
  } : { 'aria-label': ariaLabel };
  
  return (
    <Link href={href} className={classes} {...externalProps}>
      {children}
      <ArrowRight className="ml-1 w-4 h-4" aria-hidden="true" />
      {external && <span className="sr-only">(S'ouvre dans un nouvel onglet)</span>}
    </Link>
  );
}

export const FFCAMVisioBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => setIsVisible(false);

  const zoomLink = "https://us02web.zoom.us/j/82223666901";

  if (!isVisible) return null;

  return (
    <div
      className="flex fixed top-0 left-0 z-50 flex-wrap gap-3 justify-center items-center px-4 py-2 w-full text-black bg-yellow-300 shadow-md"
      role="alert"
      aria-label="Annonce visio"
      tabIndex={-1}
    >
      <div className="flex items-center">
        <Info className="mr-2 w-5 h-5" aria-hidden="true" />
        <span className="text-base font-semibold sm:text-lg">
          Le code de connexion pour la visio du 23 juin est : <span className="font-bold">152671</span>
        </span>
      </div>

      <FFCAMButton
        variant="primary"
        size="sm"
        onClick={() => window.open(zoomLink, '_blank')}
        className="text-white bg-ffcam-dark hover:bg-ffcam-dark/90"
        aria-label="Rejoindre la visioconférence sur Zoom"
      >
        Rejoindre la visio
      </FFCAMButton>
      
      <button
        onClick={handleClose}
        aria-label="Fermer la bannière d'information visio"
        className="absolute right-2 top-1/2 p-1 rounded-full -translate-y-1/2 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-black"
        tabIndex={0}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
  );
};