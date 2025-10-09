import styled, { keyframes } from 'styled-components';

const rotation   = keyframes `
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const SpinnerStyled = styled.span`
    background: var(--secondary);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 8px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    box-sizing: border-box;
    animation: ${rotation} 1s linear infinite;
`

export const Spinner = () => {
    return (
        <SpinnerStyled/>
    );
};