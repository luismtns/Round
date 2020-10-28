export default function Home() {
  return (
    <main>
      <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <img
              src="images/Girl_world_Illustration.png"
              className="img-fluid illustration"
              alt="Girl and World Illustration"
            />
          </div>
          <div className="col-12 col-md-6 text-right order-1 order-md-2">
            <h2 className="title font-weight-bold">#CadaGrãoConta</h2>
            <h3 className="font-weight-normal">
              Eficiência e sustentabilidade
              <br />
              para mudarmos o mundo
            </h3>
            <form className="row mt-5">
              <div className="col-12 col-md-8 offset-md-4">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Seu e-mail"
                    aria-label="Seu e-mail"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary btn-lg" type="button">
                      APOIAR
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <p>Cadastre-se para saber como apoiar essa iniciativa.</p>
          </div>
        </div>
      </div>
      <div className="bg-p-dark text-light py-5" id="Problematica">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <small className="">Conheça o Projeto</small>
              <br />
              <img
                src="images/keyboard_arrow_down-24px.svg"
                alt="arrow-down-svg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="font-weight-light mt-5">
                “É melhor sobrar do que faltar.”
              </h2>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 col-md-6 text-center">
              <h1 className="text-secondary font-weight-bold">1,3</h1>
              <h3 className="font-weight-bold">
                bilhão de toneladas<br></br>
                <span className="h4">
                  de alimentos são desperdiçados no mundo
                </span>
              </h3>
            </div>
            <div className="col-12 col-md-6 text-center">
              <h1 className="text-secondary font-weight-bold">40kg</h1>
              <h3 className="font-weight-bold">
                <span className="h4">é desperdiçado por cada</span>
                <br></br>brasileiro por ano
              </h3>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="font-weight-light">
                Hoje, <strong className="text-secondary">821 milhões</strong>{" "}
                vivem em condição de fome,
                <br />
                sendo <strong className="text-secondary">5,2 milhões</strong> no
                Brasil.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix pt-5" id="Projeto">
        <div className=" illustration--width float-md-right">
          <img
            src="images/TrashGuy_Illustration.png"
            alt="Trash and Guy Illustration"
            className="img-fluid"
          />
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h2 className="font-weight-bold ">Nossa solução</h2>

              <h5 className="mt-5">
                Propomos então a criação de{" "}
                <strong>
                  um aplicativo que facilitaria a comunicação entre setores de
                  um hospital
                </strong>
                . Possibilitando o controle e a manutenção das informações por
                meio da <strong>inteligência artificial</strong>, que aprende
                com o tempo e ajuda a{" "}
                <strong className="text-primary">
                  reduzir o desperdício de alimentos
                </strong>
                .
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3></h3>
            <h5></h5>
          </div>
        </div>
      </div>

      <footer className="container text-primary text-right">
        <h3>Round</h3>
        <h4>#CadaGrãoConta</h4>
      </footer>
      <style jsx>{``}</style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </main>
  );
}
