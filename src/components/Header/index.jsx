import { useState } from "react";

import {
    Wrapper, ContainerPrimary, ContainerProfile, Img,
    ContainerIcons, ContainerSecondary, ProfileName
} from "./styles";

import nuProfile from "../../assets/images/nu-person-icon.svg";
import olhoAberto from "../../assets/images/olho-aberto.png";
import olhoFechado from "../../assets/images/olho-fechado.png";
import help from "../../assets/images/help.svg";
import email from "../../assets/images/email.svg";


export function Header() {
    const userName = "Lucas";
    const [ olho, setOlho ] = useState(olhoAberto);
    const [ show, setShow ] = useState(true);
    
    function isShow() {
        if(show === true) {
            setShow(false);
            setOlho(olhoFechado);
        }else {
            setShow(true);
            setOlho(olhoAberto);
        }
    }

    return(
        <Wrapper>
            <ContainerPrimary>
                <ContainerProfile>
                    <Img src={nuProfile} alt="avatar" />
                </ContainerProfile>

                <ContainerIcons>
                    <Img src={olho} alt="vendo" onClick={isShow} />
                    <Img src={help} alt="ajuda" />
                    <Img src={email} alt="email" />
                </ContainerIcons>
            </ContainerPrimary>

            <ContainerSecondary>
                <ProfileName>Olá, {userName}</ProfileName>
            </ContainerSecondary>
        </Wrapper>
    );
}