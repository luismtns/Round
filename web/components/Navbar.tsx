import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-translucid">
      <div className="container py-1">
        <Link href="/">
          <a className="navbar-brand navbar-brand--size">
            <img src="/images/logo.png" alt="Round Logo" />
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
              <Link href="#Problematica">
                <a className="nav-link">PROBLEMÁTICA</a>
              </Link>
            </li>
            <li className="nav-item mr-md-3">
              <Link href="#Projeto">
                <a className="nav-link">PROJETO</a>
              </Link>
            </li>
            <li className="nav-item mr-md-3">
              <Link href="#ComoFunciona">
                <a className="nav-link">COMO FUNCIONA?</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#Apoie">
                <button className="btn btn-primary">APOIE O PROJETO</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
