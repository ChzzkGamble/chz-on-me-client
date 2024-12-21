export interface InputCustomProps {
  label?: string;
}

export interface InputStyleProps {
  size?: 'sm' | 'md' | 'lg';
}

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> & InputCustomProps & InputStyleProps;