import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-translucid">
      <div className="container py-1">
        <Link href="/">
          <a className="navbar-brand navbar-brand--size">
            <img src="images/Logo.png" alt="Round Logo" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src="images/menu.svg" alt="menu-svg" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-md-3">
              <a className="nav-link" href="#Problematica">
                PROBLEMÁTICA
              </a>
            </li>
            <li className="nav-item mr-md-3">
              <a className="nav-link" href="#Projeto">
                PROJETO
              </a>
            </li>
            <li className="nav-item mr-md-3">
              <a className="nav-link" href="#ComoFunciona">
                COMO FUNCIONA?
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary">APOIE O PROJETO</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
