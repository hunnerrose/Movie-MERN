export default function ProductionInfo({ movie }) {
  const convertRuntime = (num) => {
    let hours = num / 60;
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
  };

  return (
    <div className="card mb-4">
      <div className="card-header">Production Info</div>
      <div className="card-body">
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>
                <b>Budget:</b>
              </td>
              <td>
                {movie?.budget === 0 ? (
                  <text>Not Available</text>
                ) : (
                  <text>{"$" + movie?.budget?.toLocaleString()}</text>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <b>Revenue:</b>
              </td>
              <td>
                {movie?.revenue === 0 ? (
                  <text>Not Available</text>
                ) : (
                  <text>{"$" + movie?.revenue?.toLocaleString()}</text>
                )}
              </td>
            </tr>
            <tr>
              <td>
                <b>Production Companies:</b>
              </td>
              <td>
                {movie?.production_companies?.[0]?.name} |{" "}
                {movie?.production_companies?.[1]?.name}
              </td>
            </tr>
            <tr>
              <td>
                <b>Run Time:</b>
              </td>
              <td>{convertRuntime(movie?.runtime)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
