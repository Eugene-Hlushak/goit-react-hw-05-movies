import { Link, Outlet } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  Container,
  AdditionalInfoTitle,
  InfoItem,
} from './AdditionalInfo.styled';
// eslint-disable-next-line
const AdditionalInfo = ({ fromLocation }) => {
  return (
    <>
      <Container>
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <ul>
          <InfoItem>
            <Link to="cast" state={fromLocation}>
              Cast
            </Link>
          </InfoItem>
          <InfoItem>
            <Link to="reviews" state={fromLocation}>
              Reviews
            </Link>
          </InfoItem>
        </ul>
      </Container>
      <Outlet />
    </>
  );
};

AdditionalInfo.propTypes = {
  fromLocation: PropTypes.shape({}).isRequired,
};

export default AdditionalInfo;
