import { Box } from "_panda/jsx";

interface DimmedLayerProps {
  zIndex?: number;
}

export function DimmedLayer({zIndex = 0}: DimmedLayerProps) {
  return <Box bg="black" opacity={0.8} position="fixed" top={0} left={0} right={0} bottom={0} zIndex={zIndex} />
}