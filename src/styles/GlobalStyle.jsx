import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        --color-primary: #4E4E4E;
        --color-secondary: #717171;
        --color-green: #1EFF00;
        --color-orange: #FF8800;
        --color-text-one: white;
        --color-text-two: #e4e4e4;
        --box-shadow: 2px 2px 5px #313131;
        
    }

    html {
        height: 100%;
    }
    body {
        height: 100%;
        background: #cfcfcf;
        margin: 0;
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    main {
        display: flex;
        justify-content: center;
        padding: 5px;
        margin-top: 75px;
        min-height: 80vh;
    }

    a {
        text-decoration: none;
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`;

export default GlobalStyle;
