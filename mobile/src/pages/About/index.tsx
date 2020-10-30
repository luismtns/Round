import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import styles from "./styles";

const bkImg = require("../../assets/background_2.png");

const About: React.FC = () => {
  return (
    <>
      <ImageBackground source={bkImg}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
          <Text style={styles.title}>Sobre nós</Text>
          <Text style={styles.text}>
            O Round visa{" "}
            <Text style={{ fontFamily: "Assistant_700Bold" }}>
              impactar a sociedade
            </Text>{" "}
            de diversas formas.
          </Text>
          <Text>{"     "}</Text>
          <Text style={styles.text}>
            Além do{" "}
            <Text style={{ fontFamily: "Assistant_700Bold" }}>
              benefício financeiro
            </Text>
            , o projeto espera ter resultados também no âmbito{" "}
            <Text style={{ fontFamily: "Assistant_700Bold" }}>
              sociocultural
            </Text>
            , reduzindo o pensamento da{" "}
            <Text style={{ fontFamily: "Assistant_700Bold" }}>
              cultura da fartura
            </Text>
            (“melhor sobrar do que faltar”) e alcançar um desenvolvimento mais
            sustentável.
          </Text>
          <Text>{"     "}</Text>
          <Text style={styles.text}>
            Propomos então a criação de um aplicativo que facilitaria a{" "}
            <Text style={{ fontFamily: "Assistant_700Bold" }}>comunicação</Text>{" "}
            entre setores de um hospital. Possibilitando o controle e a
            manutenção das informações por meio da{" "}
            <Text style={{ fontFamily: "Assistant_700Bold" }}>
              inteligência artificial
            </Text>
            , que aprende com o tempo e ajuda a{" "}
            <Text style={{ fontFamily: "Assistant_700Bold" }}>
              reduzir o desperdício de alimentos.
            </Text>
          </Text>

          <Text style={styles.title}>Cláusula de Reserva</Text>
          <Text style={styles.text}>
            CLÁUSULA DE RESERVA (Lei 9.610/98 -LEI DE DIREITOS AUTORAIS): Este
            site foi publicado e é mantido pelos discentes do 8º semestre, do
            Curso de Graduação em Design Digital, da Universidade Anhembi
            Morumbi, visando a atender às exigências do Projeto Final em Design
            Digital. Trata-se de uma publicação temporária para propósitos
            estritamente acadêmicos e sem fins lucrativos. Em atendimento às
            exigênciasda Lei 9.610/98, do parágrafo 4°, do Artigo 184, do Código
            Penal, os discentes responsáveis por esta publicação colocam-se à
            disposição, por intermédio do e-mail round@gmail.com, para dirimir
            quaisquer dúvidas referentes à eventual violação de direitos
            autorais,
          </Text>
        </View>
      </ImageBackground>
    </>
  );
};

export default About;
