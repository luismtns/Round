export default function Home() {
  return (
    <main className="">
      <div className="backgroundImg bg-y-light"></div>
      <div className="container ">
        <div className="row">
          <div className="col-12 text-right">
            <h1 className="title text-primary display-4 text-bold">
              #CadaGrãoConta
            </h1>
            <h4 className="text-regular">
              Eficiência e sustentabilidade
              <br />
              para mudarmos o mundo
            </h4>
            <p>
              Conheça o Projeto Round e não
              <br /> esqueça de ajudar esta causa :)
            </p>
          </div>
        </div>
      </div>
      <div className="illustration__container">
        <img
          src="/images/illustration.png"
          className="illustration img-fluid"
        />
        <span className="illustration__footer" />
      </div>
      <div className="bg-p-dark">
        <div className="container text-light">
          <div className="row">
            <div className="col-12">
              <h2 className="text-w300 mt-5">
                “É melhor sobrar do que faltar.”
              </h2>
            </div>
          </div>
        </div>
      </div>

      <footer className="container text-primary text-right">
        <h3>Round</h3>
        <h4>#CadaGrãoConta</h4>
      </footer>
      <style jsx>{``}</style>
    </main>
  );
}
