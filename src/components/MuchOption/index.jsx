import { Wrapper, Img, Text, Title, ImgIcon } from "./styles";
// Images
import next from "../../assets/images/next.png";

export function MuchOption(props) {
    return(
        <Wrapper>
            <Img src={props.icons} />
            <Title>
                <Text fontSize={1.5} fw="bolder" >{props?.text[0]}</Text>
                <ImgIcon src={next} />
            </Title>
            <Text fontSize={1.3} color="#6e7176" >{props?.text[1]}</Text>
            <Text className={props?.isHide} fontSize={1.3} color="#6e7176" >{props?.text[2]}</Text>
        </Wrapper>
    );
}