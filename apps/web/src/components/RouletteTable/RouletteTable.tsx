import { List, Text } from "@chz-on-me/ui";
import { RoulettePie } from "@chz-on-me/ui/src/components/Roulette/Roulette.type";
import { HStack, Wrap } from "_panda/jsx";
import { nameStyle, percentageStyle, voteStyle } from "./RouletteTable.style";

export function RouletteTable({options}: {options: RoulettePie[]}) {
  return <List>
        {options.map(option => (
          <List.item key={option.id}
          left={
          <Wrap className={nameStyle()}>
            <Text>{option.name}</Text>
          </Wrap>
          }
          right={
          <HStack>
            <Wrap justify="center" className={voteStyle()}>
              <Text>{option.vote}</Text>
            </Wrap>
            <Wrap justify="end" className={percentageStyle()}>
              <Text color="light">{option.percentage}</Text>
            </Wrap>
          </HStack>
          }
          />
        ))}
      </List>;
}