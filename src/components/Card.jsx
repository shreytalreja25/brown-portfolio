import PropTypes from 'prop-types';

export function Card({ title, description, children }) {
  return (
    <div className="card-container p-4 bg-cream rounded-md shadow-md mb-4">
      <h3 className="text-xl font-semibold text-dark-brown">{title}</h3>
      {description && <p className="text-muted-foreground">{description}</p>}
      <div className="card-content mt-2">{children}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  description: null,
  children: null,
};
