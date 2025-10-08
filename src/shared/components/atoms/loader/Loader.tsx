import styled, { keyframes } from 'styled-components';

const moveX  = keyframes `
    0% {
        top: 0% ;
        transform: translateX(-50%) scale(1.5);
    }
    50% {
        top: -75% ;
        transform: translateX(-50%) scale(0.5);
    }
    100% {
        top: -200%;
        transform: translateX(-50%) scale(1.5);
    }
`



const LoaderStyled = styled.span`
    display: inline-block;
    width: 32px;
    height: 32px;
    transform: translateY(100%) rotate(90deg);
    border-radius: 50%;
    background: var(--secondary);
    position: relative;

    &:after,
    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: var(--secondary);
        left: 50%;
        transform: translateX(-50%);
        top: -200%;
    }

    &:after {
        animation: ${moveX} 0.5s infinite linear alternate;
    }
`

export const Loader = () => {
    return (
        <LoaderStyled/>
    );
};