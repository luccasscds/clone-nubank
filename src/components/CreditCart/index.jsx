import {
    Wrapper, Img, Text, Title, WrapperButtons, Button
} from "./styles";

import cart from "../../assets/images/card.svg";
import next from "../../assets/images/next.png";

export function CreditCart() {
    return(
        <Wrapper>
            <Img src={cart} />
            <Title>
                <Text fontSize={1.5} fw="bolder" >Cartão de crédito</Text>
                <Img src={next} />
            </Title>
            <Text fontSize={1.3} color="#6e7176" >Fatura fechada</Text>
            <Text className={"isHide"} fontSize={1.5} fw="bolder" >R$ 150,73</Text>
            <Text fontSize={1.3} color="#6e7176" >Vencimento dia 25</Text>
            <WrapperButtons>
                <Button color="#ff4662" textColor="white" >Pagar fatura</Button>
                <Button color="#f1f1f5" >Parcelar</Button>
            </WrapperButtons>
        </Wrapper>
    );
}