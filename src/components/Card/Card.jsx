import PropTypes from "prop-types";

function Card(props) {
  const { data } = props;
  return (
    <>
      <div className="card bg-secondary text-primary-content shadow-xl relative">
        <div className="absolute inset-x-5 top-4 text-xs font-semibold text-primary uppercase line-clamp-1">
          {data.topics
            .map((topic, index) => {
              return <span key={index}>{topic + " "}</span>;
            })
            }
        </div>
        <div className="card-body items-center gap-3">
          <div className=" w-full grid place-items-center text-center h-10 sm:h-36">
            <h2 className="card-title tracking-tight text-2xl">{data.description}</h2>
          </div>
          <div className="card-actions flex-col w-full gap-3">
            <p>
              Type :{" "}
              {data.types.map((type) => {
                return type + " ";
              })}
            </p>
            <div className="flex gap-1 flex-wrap items-end">
              {data.levels.map((topic, index) => {
                return (
                  <div key={index} className="badge">
                    {topic}
                  </div>
                );
              })}
            </div>
            <a className="btn btn-primary " href={data.url} target="_blank">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = { data: PropTypes.object.isRequired };

export default Card;
