import styled from "styled-components";

export const Wrapper = styled.section`
    border-top: 3px solid #f1f1f5;
    padding: 1rem 1.5rem;
`;
export const Img = styled.img`
    width: 30px;
    margin-top: 1rem;
`;
export const Title = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const Text = styled.p`
    font-size: ${ props => props?.fontSize ? `${props?.fontSize}rem` : 'normal' };
    font-weight: ${ props => props?.fw ? props?.fw : 'normal' };
    color: ${ props => props?.color ? props?.color : 'black' };
    padding-bottom: .5rem;
`;