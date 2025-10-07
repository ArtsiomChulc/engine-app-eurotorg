import styled from 'styled-components';

export const Wrapper = styled.div<{ $fullWidth?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;
`;