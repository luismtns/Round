import React from "react";
import { ImageBackground, View, Image, Text } from "react-native";
import { List } from "react-native-paper";
import styles from "./styles";

const bkImg = require("../../assets/background_2.png");

const Help: React.FC = () => {
  return (
    <>
      <ImageBackground source={bkImg} resizeMode="cover">
        <View style={{ maxHeight: 1200, height: 1200 }}>
          <View style={styles.container}>
            <Image
              style={styles.logo}
              resizeMode="contain"
              source={require("../../assets/logo.png")}
            />
            <Text style={styles.title}>FAQ</Text>

            <List.Section style={{ height: "100%", maxHeight: 1100 }}>
              <List.Accordion title="Por que utilizar o ROUND?">
                <List.Item
                  titleNumberOfLines={10}
                  title="Focado em melhorar a comunicação entre setores, ROUND é uma alternativa digital para que o trabalho seja otimizado. 
Na atual aplicação, no GRAAC, ROUND faz a intermediação entre clínica e cozinha para controle da dieta dos paciêntes
e redução do desperdício de alimentos. "
                />
              </List.Accordion>

              <List.Accordion title="Quais as vantagens de ter um sistema como o ROUND?">
                <List.Item
                  titleNumberOfLines={10}
                  title="Indo de encontro com as tendências de digitalização de sistemas analógicos ROUND vai um passo além e se debruça sobre
                a utilização da Inteligência Artificial para alcançar resultados personalizados e adaptáveis a quaisquer ambiente e aplicação."
                />
              </List.Accordion>

              <List.Accordion title="Como posso utilizar ROUND no meu empreendimento?">
                <List.Item
                  titleNumberOfLines={10}
                  title="Fácil! Cadastre seu e-mail para estabelecer o primeiro contato e receber nosso conteúdo. Você terá acesso livre ao código base e
                a documentação do ROUND, sendo necessária a personalização e ajustes por sua conta."
                />
              </List.Accordion>

              <List.Accordion title="Onde ROUND é aplicável?">
                <List.Item
                  titleNumberOfLines={10}
                  title="Hospitais, hoteis, restaurantes e cozinhas industriais."
                />
              </List.Accordion>
            </List.Section>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Help;
