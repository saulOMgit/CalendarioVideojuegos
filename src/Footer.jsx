

export const Footer = () => {
    return (
        <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            {/* Aquí iba el icono de Bootstrap */}
          </a>
          <span className="mb-3 mb-md-0 text-body-light">Saúl Otero Melchor</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="https://github.com/saulomgit" target="_blank">              
                <i className="devicon-github-original"></i>
          
            </a>
          </li>
            <li className="ms-3">
                <a className="text-body-secondary" href="https://www.linkedin.com/in/sa%C3%BAl-otero-melchor-84b752282/" target="_blank">
                    <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
                    alt="LinkedIn"
                    width="24"
                    height="24"
                    />
                </a>
            </li>

        </ul>
      </footer>
    </div>
      );
}
