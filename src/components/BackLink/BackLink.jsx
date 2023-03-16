import { PropTypes } from 'prop-types';
import { GoBackLink } from './BackLink.styled';
const BackLink = ({ to }) => {
  return <GoBackLink to={to}>GoBack</GoBackLink>;
};

BackLink.propTypes = {
  to: PropTypes.shape({}).isRequired,
};
export default BackLink;
