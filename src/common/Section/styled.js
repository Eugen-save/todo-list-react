import styled from "styled-components";

export const Segment = styled.section`
    margin: 10px 0;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.alto};
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.colors.alto};
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding-bottom: 0;
    }
`;

export const SectionBody = styled.div`
     padding: 20px;
`;