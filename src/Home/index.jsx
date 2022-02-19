import {Container} from "./styles";

import { Account } from "../components/Account";
import {Header} from "../components/Header";
import {CreditCart} from "../components/CreditCart";

export function Home() {
    return (
        <Container>
            <Header />
            <Account />
            <CreditCart />
        </Container>
    );
}