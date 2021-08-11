import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const List = styled.ul`
    display: grid;
    justify-content: center;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    background-color: ${({ theme }) => theme.colors.teal};
    padding: 20px;
    margin: 0px;
`;

export const ListItem = styled.li`
    list-style-type: none;
    font-size: 18px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    &.${activeClassName} {
        font-weight: bold;
    }

    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    
`;

