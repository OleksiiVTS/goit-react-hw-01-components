import styled from '@emotion/styled';

export const AllTable = styled.table`
  margin-right: auto;
  margin-left: auto;
  min-width: 400px;
  border-radius: 5px;
  border-collapse: collapse;
  box-shadow: 1px 1px 5px #494848;
`;

export const HeaderTable = styled.thead`
  background-color: #1dd7f8;
  color: #ffffff;
`;

export const HeaderBody = styled.thead`
  background-color: #1dd7f8;
  color: #4e4d4d;
`;

export const Cell = styled.th`
  border: 1px solid #000000;
  padding: 5px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: inherit;
`;

export const Line = styled.tr`
  background-color: white;
  &:nth-of-type(2n) {
    background-color: #c7c4c4;
  }
`;
