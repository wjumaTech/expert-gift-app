import PropTypes from 'prop-types';

export const Card = ({ id, image, title }) => {
	return(
		<div className="card mb-3">
      <img src={image} alt={title} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{id}</p>
      </div>
    </div>
	);
};

Card.propTypes = {
	id: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
};