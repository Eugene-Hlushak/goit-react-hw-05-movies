import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 10px;
`;

export const SearchInput = styled.input`
  width: 240px;
  height: 30px;
  margin-right: 10px;
  border: none;
  border-bottom: 1px solid orange;
  background-color: whitesmoke;
  &:focus-visible {
    outline-color: orange;
  }
`;

export const Button = styled.button`
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 4px;
  background-color: orange;
`;
