import styled, { css } from "styled-components";

export const List = styled.ul`
   padding: 0;
   list-style: none;
   margin: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ddd;

    ${({ hidden }) => hidden && css`
     display: none;
    `}
`;

export const Content = styled.span`
   ${({ done }) => done && css`
     text-decoration: line-through;
   `}
`;

export const Button = styled.button`
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
       background-color: green;

       &:hover {
        background-color: hsl(120, 100%, 35%);  
       }

       &:active {
        background-color: hsl(120, 100%, 45%);
       }
    `}

    ${({ remove }) => remove && css`
        background-color: red;

        &:hover {
        background-color: hsl(0, 100%, 60%);  
       }

       &:active {
        background-color: hsl(0, 100%, 65%);
       }
    `}


`;