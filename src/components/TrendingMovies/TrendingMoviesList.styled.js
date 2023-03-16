import styled from 'styled-components';

export const TrendingTitle = styled.h2`
  margin-bottom: 10px;
`;
export const MovieList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 15px;
`;

export const MovieListItem = styled.li`
  width: 240px;
  background-color: white;
  box-shadow: 3px 3px 3px 3px lightgray;
`;
export const Img = styled.img`
  border-radius: 4px;
`;
export const MovieThumb = styled.div`
  padding: 10px;
`;

export const MovieTitle = styled.p`
  font-size: 14px;
  color: black;
`;
