import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
`;
export const ActorCard = styled.li`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  width: 200px;
  box-shadow: 2px 2px 2px 2px gray;
  border-radius: 4px;
`;

export const ActorImg = styled.img`
  width: 200px;
  height: 270px;
  border-radius: 4px;
`;

export const ActorInfoThumb = styled.div`
  padding: 10px;
`;

export const ActorInfo = styled.p`
  font-size: 14px;
`;

export const Character = styled.span`
  font-weight: 700;
`;
