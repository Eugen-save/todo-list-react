import styled, {css} from "styled-components";

export const Blank = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

@media (max-width: 767px) {
        grid-template-columns: 1fr;
}
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    background-color: teal;
    color: white;
    padding: 10px;
    border: none;
    transition: 0.3s;

&:hover {
    background-color: hsl(180, 100%, 35%);
    transform: scale(1.2);
}

&:active {
    background-color: hsl(180, 100%, 40%);
}
`;