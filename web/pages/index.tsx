import { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";

export default function Home() {
  const [email, setEmail] = useState("");

  const animationsDuration: number = 1800;
  const [feedback, setFeedback] = useState(false);
  const [warning, setWarning] = useState(false);
  const [response, setResponse] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res: any) => {
        console.log(res);
        setFeedback(true);
        setResponse("Obrigado por nos apoiar, logo entraremos em contato!");
        setEmail("");

        if (res.status === 400) {
          setResponse(
            "Tivemos um problema no envio do seu e-mail, confira se ele está correto."
          );
        }
      })
      .catch((err) => {
        console.log(err);
        setWarning(true);
        setFeedback(false);
        setResponse(
          "Tivemos um problema no envio do seu e-mail, confira se ele está correto."
        );
        setEmail("");
      });
  };
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
            <ScrollAnimation
              offset={0}
              animateIn="fadeInUp"
              animationInDuration={animationsDuration}
              delay={1200}
              animateOnce={true}
            >
              <h2 className="title font-weight-bold">#CadaGrãoConta</h2>
            </ScrollAnimation>
            <h4 className="font-weight-normal">
              <ScrollAnimation
                offset={0}
                animateIn="fadeInUp"
                animationInDuration={animationsDuration}
                delay={1400}
                animateOnce={true}
              >
                Eficiência e sustentabilidade
              </ScrollAnimation>
              <ScrollAnimation
                offset={0}
                animateIn="fadeInUp"
                animationInDuration={animationsDuration}
                delay={1800}
                animateOnce={true}
              >
                para mudarmos o mundo
              </ScrollAnimation>
            </h4>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInUp"
              animationInDuration={animationsDuration}
              delay={2000}
              animateOnce={true}
            >
              <form className="w-100 mt-1" onSubmit={subscribe}>
                <div className="input-group mb-1 mt-3">
                  <input
                    className="form-control form-control-lg"
                    placeholder="Seu e-mail"
                    aria-label="Seu e-mail"
                    aria-describedby="basic-addon2"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />

                  <div className="input-group-append">
                    <button className="btn btn-primary btn-lg" type="submit">
                      APOIAR
                    </button>
                  </div>
                </div>
              </form>
            </ScrollAnimation>
            <ScrollAnimation
              offset={0}
              animateIn="fadeInUp"
              animationInDuration={animationsDuration}
              delay={2200}
              animateOnce={true}
            >
              {!feedback ? (
                <p>Cadastre-se para saber como apoiar essa iniciativa.</p>
              ) : (
                <p>{response}</p>
              )}
              {warning && <p className="text-danger">{response}</p>}
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div
        className="high-borders bg-p-dark text-light py-3 mb-5"
        id="Problematica"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <ScrollAnimation
                offset={0}
                animateIn="fadeInUp"
                animationInDuration={animationsDuration}
                delay={2600}
                animateOnce={true}
              >
                <div>
                  <small className="">Conheça o Projeto</small>
                  <br />

                  <img
                    sizes=""
                    className="img-fluid"
                    src="/images/keyboard_arrow_down.svg"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={200}
                animateOnce={true}
              >
                <h2 className="font-weight-light mt-3">
                  “É melhor sobrar do que faltar.”
                </h2>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-md-6 text-center">
              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={200}
                animateOnce={true}
              >
                <h1 className="text-secondary font-weight-bold">1,3</h1>
                <h3 className="font-weight-bold">
                  bilhão de toneladas<br></br>
                  <span className="h4">
                    de alimentos são desperdiçados no mundo
                  </span>
                </h3>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-md-6 text-center">
              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={400}
                animateOnce={true}
              >
                <h1 className="text-secondary font-weight-bold">40kg</h1>
                <h3 className="font-weight-bold">
                  <span className="h4">é desperdiçado por cada</span>
                  <br></br>brasileiro por ano
                </h3>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={200}
                animateOnce={true}
              >
                <h3 className="font-weight-light">
                  Hoje, <strong className="text-secondary">821 milhões</strong>{" "}
                  vivem em condição de fome,
                  <br />
                  sendo <strong className="text-secondary">
                    5,2 milhões
                  </strong>{" "}
                  no Brasil.
                </h3>
              </ScrollAnimation>
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
              <ScrollAnimation
                animateIn="fadeInUp"
                animationInDuration={animationsDuration}
                delay={200}
                animateOnce={true}
              >
                <h2 className="font-weight-bold ">Nossa solução</h2>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={400}
                animateOnce={true}
              >
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
              </ScrollAnimation>
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
              <ScrollAnimation
                animateIn="fadeInUp"
                animationInDuration={animationsDuration}
                delay={200}
                animateOnce={true}
              >
                <h2 className="font-weight-bold ">
                  O Round visa impactar a sociedade.{" "}
                </h2>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={400}
                animateOnce={true}
              >
                <h5 className="py-3">
                  Além do benefício financeiro, o projeto espera ter resultados
                  também no âmbito sociocultural, reduzindo o pensamento da
                  cultura da fartura{" "}
                  <strong className="text-primary">
                    (“melhor sobrar do que faltar”)
                  </strong>{" "}
                  e alcançar um desenvolvimento mais sustentável.
                </h5>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Impactar */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ScrollAnimation
              animateIn="fadeInUp"
              animationInDuration={animationsDuration}
              delay={200}
              animateOnce={true}
            >
              <h2 className="font-weight-bold ">
                O GRAACC foi nossa escolha para <wbr />a primeira aplicação, mas
                porque?
              </h2>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6">
            <ScrollAnimation
              animateIn="fadeIn"
              animationInDuration={animationsDuration}
              delay={400}
              animateOnce={true}
            >
              <h5 className="pb-4">
                Além de ser uma instituição com uma{" "}
                <strong className="text-primary">causa nobre</strong>, uma
                estrutura única, eles são um instituto social sem fins
                lucrativos, <strong>morada perfeita para nossa proposta</strong>
                .
              </h5>
            </ScrollAnimation>
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
              <ScrollAnimation
                animateIn="fadeInUp"
                animationInDuration={animationsDuration}
                delay={200}
                animateOnce={true}
              >
                <h1 className="text-center font-weight-bold">Como Funciona?</h1>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-md-4 mb-3">
              <ScrollAnimation
                animateIn="fadeInDown"
                animationInDuration={animationsDuration}
                delay={400}
                animateOnce={true}
              >
                <img
                  src="/images/earth_icon.png"
                  className="w-50 img-fluid"
                  alt="Earth Icon Illustrate"
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={600}
                animateOnce={true}
              >
                <h3 className="font-weight-bold my-1">Sustentabilidade</h3>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={800}
                animateOnce={true}
              >
                {" "}
                <p className="h5">
                  Se é importante para você, é importante para o meio ambiente.
                  ROUND te ajuda a diminuir o gasto de papel, reduz o
                  desperdício de alimentos e reafirma seu compromisso com o meio
                  ambiente.
                </p>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <ScrollAnimation
                animateIn="fadeInDown"
                animationInDuration={animationsDuration}
                delay={600}
                animateOnce={true}
              >
                <img
                  src="/images/efficiency.png"
                  className="w-50 img-fluid"
                  alt="Efficiency Illustrate"
                />
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={800}
                animateOnce={true}
              >
                <h3 className="font-weight-bold my-1">Eficiência</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={1000}
                animateOnce={true}
              >
                <p className="h5">
                  Reaproximar setores e facilitar a comunicação?
                  <br />
                  Sim! ROUND simplifica o fluxo de trabalho, facilitando o
                  acesso as informações e disponibilizando em tempo real a
                  atualização de dados e informações.
                </p>
              </ScrollAnimation>
            </div>
            <div className="col-12 col-md-4 mb-3">
              <ScrollAnimation
                animateIn="fadeInDown"
                animationInDuration={animationsDuration}
                delay={1200}
                animateOnce={true}
              >
                <img
                  src="/images/smartphone.png"
                  className="w-50 img-fluid"
                  alt="Smartphone Illustrate"
                />
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={1400}
                animateOnce={true}
              >
                <h3 className="font-weight-bold my-1">
                  Inteligência artificial
                </h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                animationInDuration={animationsDuration}
                delay={1600}
                animateOnce={true}
              >
                <p className="h5">
                  Todo o potencial da inteligencia artificial nas suas mãos.
                  ROUND aprende com o que você faz e possibilita a predição de
                  cenários, a análise detalhada de alterações comportamentais e
                  a compilação de dados.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 my-5">
        <ScrollAnimation
          animateIn="fadeIn"
          animationInDuration={animationsDuration}
          delay={200}
          animateOnce={true}
        >
          <img
            src="/images/Mockup_Large.png"
            className="w-100 img-fluid"
            alt="Mockup Round"
          />
        </ScrollAnimation>
      </div>

      <div className="container" id="Apoie">
        <div className="row align-items-end">
          <div className="col-12 col-md-6 offset-md-1 py-4">
            <ScrollAnimation
              animateIn="fadeInUp"
              animationInDuration={animationsDuration}
              delay={600}
              animateOnce={true}
            >
              <h2 className="font-weight-light mb-3">Curtiu? Fale conosco!</h2>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              animationInDuration={animationsDuration}
              delay={1200}
              animateOnce={true}
            >
              <h5>
                Cadastre seu e-mail e crie essa ponte com a nossa iniciativa.
              </h5>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="fadeIn"
              animationInDuration={animationsDuration}
              delay={1200}
              animateOnce={true}
            >
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
            </ScrollAnimation>
          </div>
          <div className="col-8 col-md-3 offset-md-1">
            <ScrollAnimation
              animateIn="fadeInDown"
              animationInDuration={animationsDuration}
              delay={200}
              animateOnce={true}
            >
              <img
                src="/images/Persons_Hospital_Ilu.png"
                className="w-100 img-fluid"
                alt="Hospital Persons Illustrate"
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <footer className="container-fluid text-primary text-right bg-p-dark py-4 ">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-3 col-md-1">
              <img
                src="/images/Icon_white.svg"
                className="w-100 img-fluid"
                alt="Icon White"
              />
            </div>
            <div className="col-9 col-md-10 text-right">
              <p>Round - Todos os direitos reservados ©</p>
            </div>
          </div>
        </div>
      </footer>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    </main>
  );
}
