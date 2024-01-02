import styled from "styled-components";

export const TextWrapper = styled.p<{ size: string; color: string }>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: 0;
`;
