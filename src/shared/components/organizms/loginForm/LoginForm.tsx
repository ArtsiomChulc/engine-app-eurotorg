import { useLoginMutation } from '@/api/auth-api';
import {
    BlockFormStyled
} from '@/shared/components/atoms/blockForm/BlockForm';
import { Button } from '@/shared/components/atoms/button/Button';
import { TextField } from '@/shared/components/atoms/textField/TextField';
import { InputsLogin } from '@/shared/components/organizms/authForm/AuthForm';
import { loginSchema } from '@/shared/validate/schemaValidation';
import { setAccessToken } from '@/store/slices/auth-slice';
import { AppDispatch } from '@/store/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

type BlockFormProps = {
    showPassword: string;
    getIconForField: () => ReactNode;
};

export const LoginForm = ({
    showPassword,
    getIconForField,
}: BlockFormProps) => {
    const [loginUser] = useLoginMutation()
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<InputsLogin>({
        resolver: zodResolver(loginSchema),
        mode: 'onChange',
    });

    const dispatch = useDispatch<AppDispatch>()

    const onSubmit: SubmitHandler<InputsLogin> = async (data) => {
        const res = await loginUser(data).unwrap()
        dispatch(setAccessToken(res.accessToken))
    };
    return (
        <BlockFormStyled onSubmit={handleSubmit(onSubmit)}>
            <TextField
                fullWidth
                label={'Электронная почта'}
                placeholder={'Электронная почта'}
                {...register('email')}
                name={'email'}
                error={errors?.email?.message}
            />
            <TextField
                fullWidth
                label={'Пароль'}
                placeholder={'Пароль'}
                type={showPassword}
                icon={getIconForField()}
                {...register('password')}
                name={'password'}
                error={errors?.password?.message}
            />

            <Button type={'submit'} fullWidth>
                Войти
            </Button>
        </BlockFormStyled>
    );
};
