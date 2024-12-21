export interface ListItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  left: React.ReactNode;
  right: React.ReactNode;
}

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {
  
}