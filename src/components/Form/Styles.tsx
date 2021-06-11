/* eslint-disable no-unused-vars */
import styled from "styled-components";

import images from "../../fonds.png";
import { IForm } from "./types";

const StyledFormContainer = styled.form<IForm>`
  & > div {
    height: 136px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${images});
    background-position: center;
    border-radius: 8px;
    transform: translate(-2px, 4px);

    & div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 57px;
      width: 312px;
      background-color: white;
      background-image: none;
      padding: 5px;
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
      transform: translate(1px, -1px);

      & input[type="submit"] {
        height: 46px;
        width: 104px;
        font-weight: 500;
        background-color: #1e86ff;
        color: white;
        border-radius: 4px;
        font-size: 1.2rem;
        border-style: none;
        transform: translate(3px, -1px);
      }

      & input[type="text"] {
        font-family: "roboto";
        color: #b9bdcf;
        font-weight: 400;
        font-size: 1rem;
        border: none;
        transform: translate(34px, -2px);
      }
    }
  }

  & > label {
    display: block;
    margin: 30px 20px auto 20px;
  }

  & > span {
    display: block;
  }

  & fieldset {
    display: flex;
    flex-direction: column;
    height: 135px;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 500;
    color: #004daa;
    border: none;

    & label {
      cursor: pointer;
    }

    & input[type="radio"] {
      margin-right: 12px;
    }
  }

  & span {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.2rem;
    color: #b9bdcf;
  }

  & span + label {
    display: block;
    box-shadow: 0px 2px 4px 0px #000000 5%;
    /* transform: translatey(5px); */

    & input[type="text"] {
      border-radius: 4px;
      width: 347px;
      height: 47px;
      font-family: "roboto";
      color: #b9bdcf;
      background-color: white;
      font-weight: 400;
      font-size: 1rem;
      border: none;
    }
  }

  & div + label {
    display: flex;
    align-items: center;
    color: #334680;
    font-size: 1.1rem;
    font-weight: 500;
    /* transform: translate(19px, 6px); */
    cursor: pointer;

    // TODO cambiar por un div
    & span {
      margin-right: 11px;
      cursor: pointer;
      display: block;
      width: 15px;
      height: 15px;
      border: 1px solid ${({ theme }) => theme.spanBorder};
      box-sizing: border-box;
      border-radius: 4px;
      background-color: ${({ isDone }) =>
        isDone
          ? ({ theme }) => theme.spanBackgroundDone
          : ({ theme }) => theme.spanBackground};
    }

    & input[type="checkbox"] {
      display: none;
    }
  }
`;

// const Search = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 57px;
//   width: 312px;
//   background-color: white;
//   padding: 5px;
//   box-sizing: border-box;
//   border-radius: 4px;
//   box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
//   transform: translate(1px, -1px);

//   & input[type="submit"] {
//     height: 46px;
//     width: 104px;
//     font-weight: 500;
//     background-color: #1e86ff;
//     color: white;
//     border-radius: 4px;
//     font-size: 1.2rem;
//     border-style: none;
//     transform: translate(3px, -1px);
//   }

//   & input[type="text"] {
//     font-family: "roboto";
//     color: #b9bdcf;
//     font-weight: 400;
//     font-size: 1rem;
//     border: none;
//     transform: translate(34px, -2px);
//   }
// `;

// const FormStyle = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const ContainerSearchJob = styled.div``;

// const FullTime = styled.label`
//   display: flex;
//   align-items: center;
//   color: #334680;
//   font-size: 1.1rem;
//   font-weight: 500;
//   transform: translate(19px, 6px);
//   cursor: pointer;

//   & span {
//     margin-right: 11px;
//     cursor: pointer;
//     display: block;
//     width: 15px;
//     height: 15px;
//     border: 1px solid ${({ theme }) => theme.spanBorder};
//     box-sizing: border-box;
//     border-radius: 4px;
//     background-color: ${({ isDone }) =>
//       isDone
//         ? ({ theme }) => theme.spanBackgroundDone
//         : ({ theme }) => theme.spanBackground};
//   }

//   & input[type="checkbox"] {
//     display: none;
//   }
// `;

// const MainForm = styled.form`
//   display: grid;
//   grid-row-gap: 28px;
// `;

// const Location = styled.span``;

// const InputSearchLocation = styled.label`
//   display: block;
//   box-shadow: 0px 2px 4px 0px #000000 5%;
//   transform: translatey(5px);

//   & input[type="text"] {
//     border-radius: 4px;
//     width: 347px;
//     height: 47px;
//     font-family: "roboto";
//     color: #b9bdcf;
//     background-color: white;
//     font-weight: 400;
//     font-size: 1rem;
//     border: none;
//   }
// `;

// const ContentRadio = styled.div`
//   display: grid;
//   grid-template-rows: repeat(4, 21px);
//   grid-row-gap: 17px;
//   padding-left: 1.1rem;

//   & label {
//     display: flex;
//     align-items: center;
//     font-weight: 500;
//     color: #334680;
//     font-size: 1.2rem;

//     & input {
//       margin-right: 1rem;
//       width: 22px;
//     }
//   }
// `;

export { StyledFormContainer };
