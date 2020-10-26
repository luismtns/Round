import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-transparent my-4 py-2">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand navbar-brand--size">
            <img src="/images/logo.png" alt="Round Logo" />
          </a>
        </Link>
      </div>
    </nav>
  );
}
