import styled, { keyframes, css } from 'styled-components';

type SkeletonProps = {
    isOverall?: boolean
}

const shimmer = keyframes`
    0% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0 0;
    }
`;

const SkeletonStyled = styled.div<{$isOverall?: boolean}>`
    width: 100%;
    height: ${({$isOverall}) => $isOverall ? '80px' : '100%'};
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
    
    ${({$isOverall}) => $isOverall && css`
        border-radius: 8px;
    `}
`

export const Skeleton = ({isOverall = false}: SkeletonProps) => {
    return (
        <SkeletonStyled $isOverall={isOverall}/>
    );
};