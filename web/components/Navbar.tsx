import Link from "next/link";
import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
export default function Navbar() {
  interface NavLinks {
    href: string;
    name: string;
  }
  const NavLinksList: NavLinks[] = [
    {
      href: "#Problematica",
      name: "PROBLEMÁTICA",
    },
    {
      href: "#Projeto",
      name: "PROJETO",
    },
    {
      href: "#ComoFunciona",
      name: "COMO FUNCIONA?",
    },
  ];
  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-translucid">
      <div className="container py-1">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInUp"
          animationInDuration={1200}
          delay={200}
          animateOnce={true}
        >
          <Link href="/">
            <a className="navbar-brand navbar-brand--size">
              <img src="/images/logo.png" alt="Round Logo" />
            </a>
          </Link>
        </ScrollAnimation>
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
            {NavLinksList &&
              NavLinksList.map((el: NavLinks, i: number) => {
                return (
                  <li key={i} className="nav-item mr-md-3">
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInUp"
                      animationInDuration={1200}
                      delay={400 + i * 200}
                      animateOnce={true}
                    >
                      <Link href={el.href}>
                        <a className="nav-link">{el.name}</a>
                      </Link>
                    </ScrollAnimation>
                  </li>
                );
              })}
            <li className="nav-item">
              <ScrollAnimation
                offset={0}
                animateIn="fadeInUp"
                animationInDuration={1200}
                delay={1000}
                animateOnce={true}
              >
                <Link href="#Apoie">
                  <button className="btn btn-primary">APOIE O PROJETO</button>
                </Link>
              </ScrollAnimation>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
// 1k delay next 1200
