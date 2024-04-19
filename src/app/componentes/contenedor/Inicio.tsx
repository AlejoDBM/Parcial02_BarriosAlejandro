export const Inicio = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-6">
          <div className="h-100 p-5 text-bg-dark rounded-3">
            <h2>Bienvenidos al mejor sitio de peliculas </h2>
            <p>Aca encontraras las mejores peliculas</p>

            <main className="container">
              <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
                <div className="lh-1">
                  <h1 className="h6 mb-0 text-white lh-1">Usuarios</h1>
                </div>
              </div>

              <div className="my-3 p-3 bg-body rounded shadow-sm">
                <h6 className="border-bottom pb-2 mb-0">Recent updates</h6>
                <div className="d-flex text-body-secondary pt-3">
                  <svg
                    className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#007bff"></rect>
                    <text x="50%" y="50%" fill="#007bff" dy=".3em">
                      32x32
                    </text>
                  </svg>
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">@protagonista</strong>
                    es el protagonista de la serie.
                  </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                  <svg
                    className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#e83e8c"></rect>
                    <text x="50%" y="50%" fill="#e83e8c" dy=".3em">
                      32x32
                    </text>
                  </svg>
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">@usuario</strong>
                   otro protganista. 
                  </p>
                </div>
                <div className="d-flex text-body-secondary pt-3">
                  <svg
                    className="bd-placeholder-img flex-shrink-0 me-2 rounded"
                    width="32"
                    height="32"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 32x32"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#6f42c1"></rect>
                    <text x="50%" y="50%" fill="#6f42c1" dy=".3em">
                      32x32
                    </text>
                  </svg>
                  <p className="pb-3 mb-0 small lh-sm border-bottom">
                    <strong className="d-block text-gray-dark">@otro usuario</strong>
                   otro protagonista.
                  </p>
                </div>
                <small className="d-block text-end mt-3">
                  <a href="#">All updates</a>
                </small>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
