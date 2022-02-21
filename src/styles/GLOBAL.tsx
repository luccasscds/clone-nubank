import { createGlobalStyle } from "styled-components";

export const AppGlobal = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;

        box-sizing: content-box;
        font-family: sans-serif;
    }
    .hide {
        background: #f1f1f5;
        font-size: 0;
        width: 300px;
        height: 10px;
        padding: .5rem 0;
    }
    a{ text-decoration: none; }
`;