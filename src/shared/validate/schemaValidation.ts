// schemaValidation.ts
import { z } from 'zod';

export const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'Email обязателен')
        .email('Некорректный email адрес'),
    password: z
        .string()
        .min(1, 'Пароль обязателен')
});

export const registerSchema = z.object({
    name: z
        .string()
        .min(1, 'Имя обязательно')
        .min(2, 'Минимум 2 символа')
        .regex(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, 'Только буквы и дефисы'),
    surname: z
        .string()
        .min(1, 'Фамилия обязательна')
        .min(2, 'Минимум 2 символа')
        .regex(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, 'Только буквы и дефисы'),
    email: z
        .string()
        .min(1, 'Email обязателен')
        .email('Некорректный email адрес'),
    password: z
        .string()
        .min(6, 'Минимум 6 символов')
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
            'Пароль должен содержать заглавную, строчную букву и цифру'
        ),
    confirmPassword: z
        .string()
        .min(1, 'Подтвердите пароль'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
});
