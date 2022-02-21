import {
    Wrapper, Img, Text, Title
} from "./styles";

import loan from "../../assets/images/loan.svg";
import next from "../../assets/images/next.png";

export function Loan() {
    return(
        <Wrapper>
            <Img src={loan} />
            <Title>
                <Text fontSize={1.5} fw="bolder" >Empréstimo</Text>
                <Img src={next} />
            </Title>
            <Text fontSize={1.3} color="#6e7176" >Valor disponível de até</Text>
            <Text fontSize={1.3} color="#6e7176" >R$ 1.000.000,00</Text>
        </Wrapper>
    );
}