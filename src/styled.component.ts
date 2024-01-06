import styled from "styled-components";
import Text from "./Components/Text";

export const SearchWrapper = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: flex-start;
`;

export const ResultWrapper = styled.div`
  border: 1px solid #bdb7b7;
  box-shadow: 1px 1px #bdb7b7;
  width: 99%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextWrapper = styled.div`
  width: 100%;
`;

export const TextField = styled(Text)`
  width: 100%;
  &: hover {
    background: #efe6e6;
  }
`;
