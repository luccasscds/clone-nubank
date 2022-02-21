import {Container} from "./styles";

import { Account } from "../components/Account";
import {Header} from "../components/Header";
import {CreditCart} from "../components/CreditCart";
import {Loan} from "../components/Loan";
import {Investment} from "../components/Investment";

export function Home() {
    return (
        <Container>
            <Header />
            <Account />
            <CreditCart />
            <Loan />
            <Investment/>
        </Container>
    );
}