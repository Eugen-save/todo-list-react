import styled from "styled-components";

export const Container = styled.div`
    display: flex;

@media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Button = styled.button`
    border: none;
    background: transparent;
    margin: 0 0 0 20px;
    transition: color 0.3s;
    font-size: 15px;
    color: teal;

@media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
}

&:hover {
    color: hsl(180, 100%, 30%);
}

&:active {
    color: hsl(180, 100%, 35%);
}

&:disabled {
    color: #ccc;
}
`;