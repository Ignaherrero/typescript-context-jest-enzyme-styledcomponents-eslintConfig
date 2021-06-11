import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    font-size: 12px;
  }

  /* reset */
  ul {
   list-style: none;
   padding: 0;
   margin: 0;
  }
  
  a {
   color: blue;
   text-decoration: none;
  }

 input[type="button"] {
      border-style: none;
  }

  /* Typography */
  body{
    font-family: "Poppins", sans-serif;
    width: 100%;
    min-height: 100vh;
    font-weight: 300;
    user-select: none;
    display: grid;
    grid-template-columns: 375px;
    justify-content: center;
    background-color: #f6f7fb;
  }
`;

export default GlobalStyles;
