import styled from "styled-components";

export const Wrapper = styled.header`
    background: rgb(130, 10, 209);
    color: white;
    padding: 1.5rem;
`;
export const ContainerPrimary = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const ContainerProfile = styled.figure``;

export const Img = styled.img`
    width: 45px;
    cursor: pointer;
`;
export const ContainerIcons = styled.div`
    Img {
        width: clamp(25px, 5vw, 30px);
        margin-right: 1rem;
        :nth-child(3){
            margin: 0;
        }
    }
`;
export const ContainerSecondary = styled.div`
    padding-top: 1.5rem;
`;
export const ProfileName = styled.p`
    font-weight: bolder;
`;