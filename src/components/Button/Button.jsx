import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

const Button = ({ type = 'button', disabled = false, children, onClick }) => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
