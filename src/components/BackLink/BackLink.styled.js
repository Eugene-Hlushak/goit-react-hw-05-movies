import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
  display: flex;
  /* text-align: center; */
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 30px;
  margin-bottom: 15px;
  border-radius: 4px;
  background-color: orange;
  color: black;
`;
