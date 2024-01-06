import { TextProps } from "./interface";
import { TextWrapper } from "./styled";

const Text = (props: TextProps) => {
  const { label, color = "black", size = "0.75rem", onClickEvent } = props;
  return (
    <TextWrapper
      size={size}
      color={color}
      onClick={() => onClickEvent?.(label)}
    >
      {label}
    </TextWrapper>
  );
};

export default Text;
