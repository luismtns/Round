export default function Home() {
  return (
    <main>
      <div className="container pt-4">
        <div className="row align-items-end">
          <div className="col-12 col-md-7 order-2 order-md-1 illustration">
            <img
              src="/images/Girl_world_Illustration.png"
              className="img-fluid illustration illustration__first"
              alt="Girl and World Illustration"
            />
          </div>
          <div className="col-12 col-md-5 text-right order-1 order-md-2 pb-4">
            <h2 className="title font-weight-bold">#CadaGrãoConta</h2>
            <h4 className="font-weight-normal">
              Eficiência e sustentabilidade
              <br />
              para mudarmos o mundo
            </h4>
            <form className="w-100 mt-1">
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
            </form>
            <p>Cadastre-se para saber como apoiar essa iniciativa.</p>
          </div>
        </div>
      </div>
      <div className="bg-p-dark text-light py-3 mb-5" id="Problematica">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <small className="">Conheça o Projeto</small>
              <br />

              <img
                sizes=""
                className="img-fluid"
                src="/images/keyboard_arrow_down.svg"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="font-weight-light mt-3">
                “É melhor sobrar do que faltar.”
              </h2>
            </div>
          </div>
          <div className="row mt-3">
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
          <div className="row mt-3">
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

      {/* Projeto */}
      <div className="clearfix py-4 my-4" id="Projeto">
        <div className=" illustration--width-41 float-md-right">
          <img
            src="/images/Guy_Trash_Ilu.png"
            alt="Trash and Guy Illustration"
            className="img-fluid"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-3">
              <h2 className="font-weight-bold ">Nossa solução</h2>

              <h5 className="mt-3">
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

      {/* Impactar */}
      <div className="clearfix py-4 my-4" id="Projeto">
        <div className=" illustration--width-33 float-md-left">
          <img
            src="/images/Impact_Ilu.png"
            alt="Impact Illustration"
            className="img-fluid"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-2">
              <h2 className="font-weight-bold ">
                O Round visa impactar a sociedade.{" "}
              </h2>

              <h5 className="mt-3">
                Além do benefício financeiro, o projeto espera ter resultados
                também no âmbito sociocultural, reduzindo o pensamento da
                cultura da fartura (“melhor sobrar do que faltar”) e alcançar um
                desenvolvimento mais sustentável.
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/* Impactar */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="font-weight-bold ">
              O GRAACC foi nossa escolha para <wbr />a primeira aplicação, mas
              porque?
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-end">
          <div className="col-12 col-md-6">
            <h5 className="mt-3">
              Além do benefício financeiro, o projeto espera ter resultados
              também no âmbito sociocultural, reduzindo o pensamento da cultura
              da fartura (“melhor sobrar do que faltar”) e alcançar um
              desenvolvimento mais sustentável.
            </h5>
          </div>
          <div className="col-12 col-md-6">
            <img
              src="/images/Hospital_Ilu.png"
              alt="Trash and Guy Illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <div className="w-100 bg-p-dark text-white py-4" id="ComoFunciona">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center font-weight-bold">Como Funciona?</h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <img
                src="/images/earth_icon.png"
                className="w-50 img-fluid"
                alt="Earth Icon Illustrate"
              />
              <h4 className="font-weight-bold my-1">Sustentabilidade</h4>
              <p className="h5">
                Se é importante para você, é importante para o meio ambiente.
                ROUND te ajuda a diminuir o gasto de papel, reduz o desperdício
                de alimentos e reafirma seu compromisso com o meio ambiente.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <img
                src="/images/efficiency.png"
                className="w-50 img-fluid"
                alt="Efficiency Illustrate"
              />
              <h4 className="font-weight-bold my-1">Eficiência</h4>
              <p className="h5">
                Reaproximar setores e facilitar a comunicação?
                <br />
                Sim! ROUND simplifica o fluxo de trabalho, facilitando o acesso
                as informações e disponibilizando em tempo real a atualização de
                dados e informações.
              </p>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <img
                src="/images/smartphone.png"
                className="w-50 img-fluid"
                alt="Smartphone Illustrate"
              />
              <h4 className="font-weight-bold my-1">Inteligência artificial</h4>
              <p className="h5">
                Se é importante para você, é importante para o meio ambiente.
                ROUND te ajuda a diminuir o gasto de papel, reduz o desperdício
                de alimentos e reafirma seu compromisso com o meio ambiente.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 my-5">
        <img
          src="/images/Mockup_Large.png"
          className="w-100 img-fluid"
          alt="Mockup Round"
        />
      </div>

      <div className="container" id="Apoie">
        <div className="row align-items-end">
          <div className="col-12 col-md-6 offset-md-1 py-4">
            <h2 className="font-weight-light mb-3">Curtiu? Fale conosco!</h2>
            <h5>
              Cadastre seu e-mail e crie essa ponte com a nossa iniciativa.
            </h5>
            <form className="w-100 mt-1">
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
            </form>
          </div>
          <div className="col-12 col-md-3 offset-md-1">
            <img
              src="/images/Persons_Hospital_Ilu.png"
              className="w-100 img-fluid"
              alt="Hospital Persons Illustrate"
            />
          </div>
        </div>
      </div>

      <footer className="container-fluid text-primary text-right bg-p-dark py-4 ">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-6 col-md-2">
              <img
                src="/images/Icon_white.svg"
                className="w-100 img-fluid"
                alt="Icon White"
              />
            </div>
            <div className="col-6 col-md-10 text-right">
              <p>Round - Todos os direitos reservados ©</p>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{``}</style>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </main>
  );
}
