import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 5.6rem;    
    padding: 0 1.6rem;
    margin-top: 1.6rem;
    
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2.1rem;

    border: 0;
    border-radius: 1rem;

    &:disabled {
        opacity: 0.5;
    }

`