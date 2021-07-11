import styled from "styled-components";

export const Wrapper = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
}
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.alto};
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    border: none;
    transition: 0.3s;

&:hover {
    filter: brightness(105%);
    transform: scale(1.2);

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        transform: none;
}
}

&:active {
    filter: brightness(110%);
}
`;