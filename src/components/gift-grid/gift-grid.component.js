import PropTypes from "prop-types";

import { useFetchGift } from '../../hooks/useFetchGift';

export const GiftGrid = ({ category }) => {

  const { images, isLoading } = useFetchGift(category);

  return (
    <div className="row mb-3">
      <h1 className="text-capitalize">{category}</h1>

      {
        isLoading && (<p>Cargando ...</p>)
      }

      <hr />
      {
        images.map(img => {
          return <div className="col-xs-6 col-sm-4 col-md-4"  key={img.id}>
                    <div className="card mb-3">
                      <img src={img.image} />
                      <div className="card-body">
                        <h3 className="card-title">{img.title}</h3>
                        <p className="card-text">{img.id}</p>
                      </div>
                    </div>
                  </div>;
        })
      }
    </div>
  );
};

GiftGrid.propTypes = {
  category: PropTypes.string
};