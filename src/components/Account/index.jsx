import { useState } from "react";

import {
    Wrapper, DigitalAccount, TextAccount, ContainerInfo,
    ArrayButtons, ContainerButton, ImgButton, TextButton,
    MyCards, ImgCard, Text, ArrayInvestment, ContainerInvestment,
    TextColor, Img, ContainerAccount,BackgroundButton
} from "./styles";
// images
import next from "../../assets/images/next.png";
import pix from "../../assets/images/pix.svg";
import pay from "../../assets/images/pay.png";
import depositar from "../../assets/images/depositar.svg";
import card from "../../assets/images/card.svg";
import loan from "../../assets/images/loan.svg";
import recarga from "../../assets/images/recarga.svg";
import cobrar from "../../assets/images/cobrar.svg";
import heart from "../../assets/images/heart.png";
import international from "../../assets/images/international.png";

export function Account() {
    const [icons, setIcons] = useState([
        { url: pix, text: "Área Pix" },
        { url: pay, text: "Pagar" },
        { url: depositar, text: "Transferir" },
        { url: depositar, text: "Depositar" },
        { url: loan, text: "Pagar emprestimo" },
        { url: recarga, text: "Recarga de celular" },
        { url: cobrar, text: "Cobrar" },
        { url: heart, text: "Doação" },
        { url: international, text: "Transferir" },
    ]);

    const [investments, setInvestment] = useState([
        { text1: "Invista em ", textColor: "CDBs escolhidos pelo Nu", text2: ", a partir de R$100." },
        { text1: "Conhença ", textColor: "Nubank Vida: ", text2: "um seguro simples e que acabe no bolso." },
        { text1: "Salve seus amigos da burocracia. ", textColor: "Faça uma indicação ", text2: "e resgate eles da fila." }
    ]);
    return(
        <Wrapper>
            <DigitalAccount>
                <ContainerAccount>
                    <ContainerInfo>
                        <TextAccount fontSize={1.5} >Conta</TextAccount>
                        <Img src={next} />
                    </ContainerInfo>
                    
                    <TextAccount fontSize={1.5} pt={1} >R$ 10.000,00</TextAccount>
                </ContainerAccount>
                
                
                <ArrayButtons>
                    {icons.map( button => {
                        return(
                            <ContainerButton>
                                <BackgroundButton>
                                    <ImgButton src={button.url} />
                                </BackgroundButton>
                                <TextButton>{button.text}</TextButton>
                            </ContainerButton>
                        )
                    } )}
                    
                </ArrayButtons>
                <MyCards>
                    <ImgCard src={card} />
                    <Text>Meus Cartões</Text>
                </MyCards>
                <ArrayInvestment>
                    {investments.map( investment => {
                        return(
                            <ContainerInvestment>
                                <p>{investment.text1} <TextColor>{investment.textColor}</TextColor>{investment.text2}</p>
                            </ContainerInvestment>
                        )
                    })}
                </ArrayInvestment>
            </DigitalAccount>
        </Wrapper>
    );
}