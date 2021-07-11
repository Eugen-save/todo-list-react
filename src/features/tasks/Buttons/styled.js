import styled from "styled-components";

export const Container = styled.div`
    display: flex;

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
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
    color: ${({ theme }) => theme.colors.teal};

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            flex-basis: 100%;
            margin: 10px;
        }

        &:hover {
            filter: brightness(105%);
        }

        &:active {
            filter: brightness(110%);
        }

        &:disabled {
            color: ${({ theme }) => theme.colors.silver};
        }
`;