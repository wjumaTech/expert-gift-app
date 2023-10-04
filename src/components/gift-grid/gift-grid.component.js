import PropTypes from "prop-types";

export const GiftGrid = ({ category }) => {
  return (<li className="list-group-item"> { category } </li>);
};

GiftGrid.propTypes = {
  category: PropTypes.string
};