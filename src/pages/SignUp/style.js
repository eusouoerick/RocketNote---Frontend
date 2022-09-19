import styled from "styled-components";
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 13.6rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-size: 4.8rem;
        font-weight: 700;
        line-height: 6.3rem;
        color: ${({ theme }) => theme.COLORS.ORANGE}
    }

    > p {
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.8rem;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 500;
        line-height: 3.2rem;
        margin: 4.8rem 0;
    }

    > button {
        margin-bottom: 12.4rem;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`