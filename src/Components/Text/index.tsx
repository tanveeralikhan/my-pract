import { TextProps } from "./interface";
import { TextWrapper } from "./styled";

const Text = (props: TextProps) => {
  const { label, color = "black", size = "0.75rem" } = props;
  return (
    <TextWrapper size={size} color={color}>
      {label}
    </TextWrapper>
  );
};

export default Text;
