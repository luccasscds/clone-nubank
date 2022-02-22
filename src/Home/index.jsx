import {Container} from "./styles";

import { Account } from "../components/Account";
import {Header} from "../components/Header";
import {CreditCart} from "../components/CreditCart";
import {MuchOption} from "../components/MuchOption";

// Images
import rede from "../assets/images/sinal-de-rede.png";
import loan from "../assets/images/loan.svg";
import heart from "../assets/images/heart.png";
import shopping from "../assets/images/shopping.svg";

export function Home() {
    return (
        <Container>
            <Header />
            <Account />
            <CreditCart />
            <MuchOption icons={loan} text={["Empréstimo", "Valor disponível de até", "R$ 1.000.000,00"]} />
            <MuchOption icons={rede} text={["Investimentos", "O jeito Nu de investir: sem asteristos, liguagem fácil e a partir de R$ 1. Saiba mais."]} />
            <MuchOption icons={heart} text={["Seguro de vida", "Conheça Nubank: um seguro mais simples e que cabe no bolso."]} />
            <MuchOption icons={shopping} text={["Shopping", "Vantagens exclusivas das nossas marcas preferidas"]} />
        </Container>
    );
}