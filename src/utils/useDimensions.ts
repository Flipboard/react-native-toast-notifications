import { useEffect, useState } from "react";
import { Dimensions, ScaledSize } from "react-native";

export function useDimensions() {
  const [dimensions, setDimensions] = useState(Dimensions.get("window"));

  const onChange = ({ window }: { window: ScaledSize }) => {
    setDimensions(window);
  };

  useEffect(() => {
    const subscription = Dimensions.addEventListener("change", onChange);

    return () => {
        subscription.remove();
    };
  }, []);

  return dimensions;
}
