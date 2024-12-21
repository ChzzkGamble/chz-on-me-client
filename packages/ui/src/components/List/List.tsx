import { HStack, VStack } from "_panda/jsx";
import { ListItemProps, ListProps } from "./List.type";
import { listStyle } from "./List.style";

function ListItem({ left, right, ...props }: ListItemProps) {
  return <HStack {...props}>
    {left}
    {right}
  </HStack>;
}

List.item = ListItem;

export function List({ children, ...props }: ListProps) {
  return <VStack {...props} className={listStyle()}>
    {children}
  </VStack>;
}