import { InputsRegister } from '@/shared/components/organizms/authForm/AuthForm';
import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

type HideInputProps = {
    value: string;
    name: string;
    register?: UseFormRegister<InputsRegister>;
} & InputHTMLAttributes<HTMLInputElement>;

const HideInputStyled = styled.input`
    display: none;
`;

export const HideInput = ({ value, name, register, ...props }: HideInputProps) => {
    if (register) {
        return (
            <HideInputStyled
                {...register(name as keyof InputsRegister)}
                value={value}
                {...props}
            />
        );
    }

    return <HideInputStyled name={name} value={value} {...props} />;
};