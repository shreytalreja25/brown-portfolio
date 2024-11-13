import PropTypes from 'prop-types';
import './Avatar.css'; // Import the CSS file

export function Avatar({ src, alt, fallback }) {
  return (
    <div className="avatar-container">
      {src ? (
        <img src={src} alt={alt} className="avatar-image" />
      ) : (
        <span className="avatar-fallback">{fallback}</span>
      )}
    </div>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string.isRequired,
  fallback: PropTypes.string.isRequired,
};

Avatar.defaultProps = {
  src: null,
};
