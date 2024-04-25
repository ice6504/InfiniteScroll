import PropTypes from "prop-types";

function Card(props) {
  const { data } = props;
  return (
    <>
      <div className="card h-96 bg-secondary text-primary-content shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{data.description}</h2>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = { data: PropTypes.object.isRequired };

export default Card;
