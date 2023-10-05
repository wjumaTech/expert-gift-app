import PropTypes from "prop-types";

import { useFetchGift } from '../../hooks';

import { Card } from '../../components';

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
          return <div className="col-xs-6 col-sm-4 col-md-4 col-lg-3"  key={img.id}>
                    <Card 
                      id={img.id} 
                      image={img.image} 
                      title={img.title} 
                    />
                  </div>;
        })
      }
    </div>
  );
};

GiftGrid.propTypes = {
  category: PropTypes.string
};