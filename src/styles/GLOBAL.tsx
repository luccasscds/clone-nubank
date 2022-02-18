import { createGlobalStyle } from "styled-components";

export const AppGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;

        box-sizing: content-box;
        font-family: sans-serif;
    }
    a{ text-decoration: none; }
`;