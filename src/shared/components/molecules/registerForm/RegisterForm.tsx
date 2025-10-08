import { BlockFormStyled } from '@/shared/components/atoms/blockForm/BlockForm';
import { Button } from '@/shared/components/atoms/button/Button';
import {
    Select,
    OptionType,
} from '@/shared/components/atoms/select/Select';
import { TextField } from '@/shared/components/atoms/textField/TextField';
import { InputsRegister } from '@/shared/components/organizms/authForm/AuthForm';
import { registerSchema } from '@/shared/validate/schemaValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { ReactNode } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type BlockFormProps = {
    showPassword: string;
    getIconForField: () => ReactNode;
};

// mock!!todo
export const mockOptions: OptionType[] = [
    { region: 'Витебский', id: 'asd' },
    { region: 'Оршанский', id: 'sss' },
    { region: 'Полоцкий', id: 'qqq' },
];

export const RegisterForm = ({
    showPassword,
    getIconForField,
}: BlockFormProps) => {
    const {
        handleSubmit,
        register,
        setValue,
        formState: { errors },
    } = useForm<InputsRegister>({
        resolver: zodResolver(registerSchema),
        mode: 'onChange',
    });

    const handleRegionChange = (option: OptionType | null) => {
        setValue('selectRegion', option?.region || '');
        console.log('Region selected:', option);
    };

    const onSubmit: SubmitHandler<InputsRegister> = data =>
        console.log(data, errors);
    return (
        <BlockFormStyled onSubmit={handleSubmit(onSubmit)}>
            <TextField
                fullWidth
                label={'Имя'}
                placeholder={'Имя'}
                {...register('name')}
                name={'name'}
                error={errors?.name?.message}
            />
            <TextField
                fullWidth
                label={'Фамилия'}
                placeholder={'Фамилия'}
                {...register('surname')}
                name={'surname'}
                error={errors?.surname?.message}
            />
            <Select options={mockOptions} register={register} onChange={handleRegionChange} />
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
            <TextField
                fullWidth
                label={'Подтвердите' + ' пароль'}
                placeholder={'Подтвердите' + ' пароль'}
                type={showPassword}
                icon={getIconForField()}
                {...register('confirmPassword')}
                name={'confirmPassword'}
                error={errors.confirmPassword?.message}
            />
            <Button type={'submit'} fullWidth>
                Регистрация
            </Button>
        </BlockFormStyled>
    );
};
