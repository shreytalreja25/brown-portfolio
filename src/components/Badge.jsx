import PropTypes from 'prop-types';

export function Badge({ children }) {
  return (
    <span className="badge px-2 py-1 rounded-md bg-light-brown text-dark-brown text-sm font-semibold">
      {children}
    </span>
  );
}

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};
