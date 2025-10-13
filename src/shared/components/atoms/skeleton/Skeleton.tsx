import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
    0% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0 0;
    }
`;

const SkeletonStyled = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        #ededed 30%,
        #dcdcdc 50%,
        #ededed 70%
    );
    background-size: 400%;
    animation: ${shimmer} 1.5s infinite linear;
    cursor: not-allowed;

    div svg {
        display: none;
    }
`

export const Skeleton = () => {
    return (
        <SkeletonStyled/>
    );
};