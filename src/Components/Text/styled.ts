import styled from "styled-components";

export const TextWrapper = styled.p<{ size: string; color: string }>`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: 0;
  width: 100%;
  &: hover {
    background: #efe6e6;
    cursor: pointer;
  }
`;
