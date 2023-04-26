export default function GenreDisplay({ movie }) {
  return (
    <div className="card mb-4">
      <div className="card-header">Genres</div>
      <div className="card-body text-center">
        <table className="table table-borderless">
          <tbody>
            <tr>
              <td>
                <a href="#!" className="text-decoration-none link-dark">
                  <b>{movie?.genres?.[0]?.name}</b>
                </a>
              </td>
              <td>
                <a href="#!" className="text-decoration-none link-dark">
                  <b>{movie?.genres?.[1]?.name}</b>
                </a>
              </td>
              <td>
                <a href="#!" className="text-decoration-none link-dark">
                  <b>{movie?.genres?.[2]?.name}</b>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
