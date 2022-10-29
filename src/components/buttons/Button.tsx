import React from 'react';
import './button.css';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
    /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? 'button--primary' : 'button--secondary';
  return (
    <button
      type="button"
      className={['button', mode].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};