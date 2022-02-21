import styled from "styled-components";

export const Wrapper = styled.section`
    padding: 1.5rem;
`;
export const DigitalAccount = styled.section``;
export const ContainerAccount = styled.div`
    padding-bottom: 1rem;
`;
export const Img = styled.img`
    width: 20px;
    cursor: pointer;
`;
export const ContainerInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const TextAccount = styled.p`
    font-size: ${ props => `${props?.fontSize}rem`};
    padding-top: ${ props => props?.pt ? `${props?.pt}rem` : 0 };
`;
export const ArrayButtons = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
`;
export const ContainerButton = styled.div`
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const BackgroundButton = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
    clip-path: circle();
    background: #f1f1f5;
    padding: 2rem;
    margin-bottom: 1rem;
    cursor: pointer;
`;
export const ImgButton = styled.img`
    width: 25px;
    height: 25px;
`;
export const TextButton = styled.p`
    max-width: 84px;
    overflow: hidden;
    white-space: nowrap;
`;
export const MyCards = styled.div`
    display: flex;
    align-items: center;
    background: #f1f1f5;
    border-radius: 1rem;
    padding: 1rem;
    margin: 2rem 0;
    cursor: pointer;
`;
export const ImgCard = styled.img`
    width: 30px;
    margin-right: 1rem;
`;
export const Text = styled.p``;
export const ArrayInvestment = styled.div`
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    
    ::-webkit-scrollbar{
        display: none;
    }
`;
export const ContainerInvestment = styled.div`
    min-width: 200px;
    background: #f1f1f5;
    border-radius: 1rem;
    padding: 2rem 1rem;
    margin-right: 1rem;
    cursor: pointer;
    
    p{
        height: 45px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5rem;
        text-overflow: clip ellipsis;
    }
`;
export const TextColor = styled.span`
    color: rgb(130, 10, 209);
`;