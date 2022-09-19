import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 10.5rem;
    padding: 0 8rem;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; 

`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;

    > img {
        width: 5.6rem;
        height: 5.6rem;
        border-radius: 50%;
    }

    > div {
        display: flex;
        flex-direction: column;

        span {
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 1.8rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }

`

export const Logout = styled.button`
    background: none;
    border: none;
    width: 4.9rem;
    height: 3.6rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 3.6rem;
    }

`