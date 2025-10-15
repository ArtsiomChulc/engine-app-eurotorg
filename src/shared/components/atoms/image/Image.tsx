import { useState, ImgHTMLAttributes } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Skeleton } from '@/shared/components/atoms/skeleton/Skeleton';

type ImageProps = {
    isLoading?: boolean;
} & ImgHTMLAttributes<HTMLImageElement>;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const ImageContainerStyled = styled.div<{ $fullwidth: boolean }>`
    width: ${({ $fullwidth }) => ($fullwidth ? '100vw' : '300px')};
    height: ${({ $fullwidth }) => ($fullwidth ? '100vh' : '250px')};
    position: ${({ $fullwidth }) => ($fullwidth ? 'fixed' : 'relative')};
    top: 0;
    left: 0;
    z-index: ${({ $fullwidth }) => ($fullwidth ? 9999 : 1)};
    background: ${({ $fullwidth }) =>
        $fullwidth ? 'rgba(0,0,0,0.9)' : 'transparent'};
    display: flex;
    border-radius: ${({ $fullwidth }) => ($fullwidth ? '0' : '12px')};
    overflow: ${({ $fullwidth }) => ($fullwidth ? 'scroll' : 'hidden')};
    justify-content: center;
    align-items: center;
    cursor: ${({ $fullwidth }) => ($fullwidth ? 'zoom-out' : 'zoom-in')};
    transition: all 0.3s ease;

    ${({ $fullwidth }) =>
        $fullwidth &&
        css`
            padding: 20px;
            box-sizing: border-box;
        `}
`;

const ImageStyled = styled.img<{
    $loaded?: boolean;
    $fullwidth?: boolean;
}>`
    width: 100%;
    height: 100%;
    overflow: ${({ $fullwidth }) => ($fullwidth ? 'scroll' : 'hidden')};
    object-fit: ${({ $fullwidth }) => ($fullwidth ? 'contain' : 'cover')};
    cursor: ${({ $fullwidth }) => ($fullwidth ? 'zoom-out' : 'zoom-in')};
    opacity: 0;
    transition: opacity 0.3s ease;
    ${({ $loaded }) =>
        $loaded &&
        css`
            animation: ${fadeIn} 0.5s ease forwards;
        `}
    ${({ $fullwidth }) =>
        $fullwidth &&
        css`
            height: auto;
            min-width: 100%;
            min-height: 100%;
        `}
`;

export const Image = ({ isLoading, ...props }: ImageProps) => {
    const [loaded, setLoaded] = useState(false);
    const [fullwidth, setFullwidth] = useState(false);

    const getFullwidthHandler = () => {
        setFullwidth(prevState => !prevState);
    };

    return (
        <ImageContainerStyled
            onClick={getFullwidthHandler}
            $fullwidth={fullwidth}
        >
            {isLoading && <Skeleton />}
            <ImageStyled
                {...props}
                $fullwidth={fullwidth}
                onLoad={() => setLoaded(true)}
                $loaded={loaded}
                style={{ display: loaded ? 'block' : 'none' }}
            />
        </ImageContainerStyled>
    );
};
