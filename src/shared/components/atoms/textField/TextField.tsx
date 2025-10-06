import { InputHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

type TextFieldProps = {
    name?: string;
    label?: string;
    error?: string;
    fullWidth?: boolean;
    icon?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

const Wrapper = styled.div<{ $fullWidth?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: ${({ $fullWidth }) => ($fullWidth ? '100%' : '280px')};
`;

const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: var(--text-secondary);
`;

const InputWrapper = styled.div<{
    $error?: boolean;
    $disabled?: boolean;
    $icon?: ReactNode;
}>`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border: 1px solid
        ${({ $error }) =>
            $error ? 'var(--error, #e53935)' : 'var(--border, #ccc)'};
    border-radius: 8px;
    background: var(--bg-secondary);
    transition: border-color 0.2s ease;

    &:focus-within {
        border-color: ${({ $error }) =>
            $error ? 'var(--error, #e53935)' : 'var(--primary, #1976d2)'};
    }

    input {
        flex: 1;
        border: none;
        outline: none;
        font-size: 14px;
        background: var(--bg-secondary);
        color: var(--text-primary, #333);

        &::placeholder {
            color: var(--text-placeholder);
        }
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
            opacity: 0.7;

            input {
                cursor: not-allowed;
            }
        `}

    ${({ $icon }) => {
        if ($icon) {
            return css`
                display: flex;
                align-items: center;
                flex-direction: row-reverse;

                svg {
                    cursor: pointer;
                }

                input {
                    padding-right: 20px;
                }
            `;
        }
    }}
`;

const ErrorText = styled.span`
    font-size: 12px;
    color: var(--error, #e53935);
`;

export const TextField = ({
    name = '',
    label,
    error,
    fullWidth,
    icon,
    disabled,
    ...props
}: TextFieldProps) => {
    return (
        <Wrapper $fullWidth={fullWidth}>
            {label && <Label>{label}</Label>}
            <InputWrapper $error={!!error} $disabled={disabled} $icon={icon}>
                {icon && icon}
                <input name={name ? name : ''} disabled={disabled} {...props} />
            </InputWrapper>
            {error && <ErrorText>{error}</ErrorText>}
        </Wrapper>
    );
};
