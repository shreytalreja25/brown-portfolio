import PropTypes from 'prop-types';

export function Button({ children, variant = 'primary', onClick }) {
  const className =
    variant === 'outline'
      ? 'button-outline border-2 border-dark-brown text-dark-brown px-4 py-2 rounded-md'
      : 'button-primary bg-dark-brown text-white px-4 py-2 rounded-md';
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'primary',
  onClick: () => {},
};
