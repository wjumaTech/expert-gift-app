import PropTypes from 'prop-types';

export const Card = ({ id, image, title }) => {

	return(
		<div className="card mb-3">
      <img src={image} />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{id}</p>
      </div>
    </div>
	);
};

Card.propTypes = {
	id: PropTypes.string,
	image: PropTypes.string,
	title: PropTypes.string
};