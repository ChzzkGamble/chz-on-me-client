import { ElementType } from 'react';
import { textStyles } from './Text.style';
import { TextProps } from './Text.type';

export const Text = ({
  size = 'body',
  className,
  children,
  color = 'black',
  ...props
}: TextProps) => {
  let TagComponent: ElementType = 'p';
  
  if (size === 'heading') TagComponent = 'h1';
  else if (size === 'title') TagComponent = 'h2';
  else if (size === 'subtitle') TagComponent = 'h3';
  else if (size === 'large') TagComponent = 'h4';
  
  return (
    <TagComponent className={textStyles({ size, color })} {...props}>
      {children}
    </TagComponent>
  );
};
