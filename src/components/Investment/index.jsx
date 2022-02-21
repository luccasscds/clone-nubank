import {
    Wrapper, Img, Text, Title
} from "./styles";

import loan from "../../assets/images/loan.svg";
import next from "../../assets/images/next.png";

export function Investment() {
    return(
        <Wrapper>
            <Img src={loan} />
            <Title>
                <Text fontSize={1.5} fw="bolder" >Investimentos</Text>
                <Img src={next} />
            </Title>
            <Text fontSize={1.3} color="#6e7176" >O jeito Nu de investir: sem asteristos, liguagem fácil e a partir de R$ 1. Saiba mais.</Text>
        </Wrapper>
    );
}