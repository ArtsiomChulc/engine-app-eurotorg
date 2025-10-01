📋 Engineering Stores Management System

<div align="center">
https://img.shields.io/badge/React-18.2-blue?style=for-the-badge&logo=react
https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript
https://img.shields.io/badge/NestJS-10.0-red?style=for-the-badge&logo=nestjs
https://img.shields.io/badge/PostgreSQL-16.0-blue?style=for-the-badge&logo=postgresql

Система управления инженерной информацией по торговым объектам

Особенности • Демо • Установка • Разработка • Документация

</div>

<div align="center">
🚀 Особенности
Frontend (React + TypeScript)
⚡ Vite - быстрая сборка и горячая перезагрузка

🎨 Styled Components - CSS-in-JS с темной/светлой темой

📚 Storybook - каталог компонентов и документация

🎯 TypeScript - полная типизация

🧭 React Router - навигация между страницами

🎪 React Hook Form - управление формами

⚛️ Custom Hooks - переиспользуемая бизнес-логика

Backend (NestJS + Prisma)
🏗️ NestJS - enterprise-фреймворк на TypeScript

🗄️ Prisma - современный ORM для PostgreSQL

🔐 JWT Authentication - безопасная аутентификация

🛡️ Role-Based Access Control - система ролей и прав

📡 REST API - чистые и документированные эндпоинты

✅ Validation - встроенная валидация DTO

🧪 Testing - готовые тестовые сценарии

Бизнес-функции
🏪 Управление торговыми объектами - полный CRUD

🌍 Региональное разделение - мульти-региональная поддержка

👥 Система ролей - гость, редактор, администратор

🔌 Инженерные системы - учет электроэнергии, водоснабжения, отопления

📊 Приборы учета - управление счетчиками и их состоянием

🖼️ Фотографии объектов - загрузка и управление медиа

📈 Аналитика - статистика и отчетность

📸 Демо
Скриншоты интерфейса
Главная страница	Детали магазина	Админ-панель
https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Stores+List	https://via.placeholder.com/300x200/10B981/FFFFFF?text=Store+Details	https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Admin+Panel
Storybook Демо
# Запуск Storybook
npm run storybook

# Доступно на http://localhost:6006


🛠️ Установка
Предварительные требования
Node.js 18+

PostgreSQL 14+

npm или yarn

1. Клонирование репозитория
2. git clone https://github.com/your-username/engineering-stores.git
cd engineering-stores

2. Настройка окружения
3. # Копируем файлы окружения
cp server/.env.example server/.env
cp client/.env.example client/.env


3. Настройка переменных окружения
4. Сервер (.env)
5. # База данных
DATABASE_URL="postgresql://username:password@localhost:5432/engineering_stores"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# Приложение
PORT=3001
NODE_ENV="development"

# CORS
CLIENT_URL="http://localhost:5173"

Клиент (.env)
VITE_API_URL="http://localhost:3001/api"
VITE_APP_NAME="Engineering Stores"


4. Установка зависимостей
5. # Установка для клиента и сервера
npm run install:all

# Или по отдельности
cd client && npm install
cd ../server && npm install


5. Настройка базы данных
6. # Генерация Prisma клиента
cd server
npm run db:generate

# Создание и миграция БД
npm run db:push

# Заполнение тестовыми данными
npm run db:seed


6. Запуск приложения
7. # Запуск в development режиме
npm run dev

# Или по отдельности
npm run dev:client    # http://localhost:5173
npm run dev:server    # http://localhost:3001


🏗️ Архитектура
Структура проекта
engineering-stores/
├── 📁 client/                 # React TypeScript Frontend
│   ├── src/
│   │   ├── 📁 components/     # React компоненты
│   │   ├── 📁 pages/          # Страницы приложения
│   │   ├── 📁 hooks/          # Custom React hooks
│   │   ├── 📁 types/          # TypeScript типы
│   │   ├── 📁 styles/         # Стили и темы
│   │   └── 📁 utils/          # Вспомогательные функции
│   └── package.json
├── 📁 server/                 # NestJS Backend
│   ├── src/
│   │   ├── 📁 modules/        # Модули приложения
│   │   ├── 📁 common/         # Общие утилиты
│   │   └── main.ts            # Точка входа
│   └── package.json
├── 📁 shared/                 # Общие типы
└── 📄 README.md


Модули системы
🔐 Auth - Аутентификация и авторизация

🏪 Stores - Управление торговыми объектами

🌍 Regions - Управление регионами

👥 Users - Управление пользователями

📊 Analytics - Аналитика и отчеты

🎯 Использование
Роли пользователей
Роль	Доступ	Возможности
Гость	Только чтение	Просмотр магазинов в любом регионе
Редактор	Чтение/запись в своем регионе	Управление магазинами региона
Администратор	Полный доступ	Все функции системы
Основные сценарии
1. Просмотр магазинов
2. // Любой пользователь может просматривать магазины
GET /api/stores?regionId=1&search=магазин
// Любой пользователь может просматривать магазины
GET /api/stores?regionId=1&search=магазин

2. Добавление магазина
// Только редакторы и администраторы
POST /api/stores
{
  "name": "Магазин 'Весна'",
  "address": "ул. Ленина, 15",
  "regionId": "1",
  "area": 150,
  "installedPower": 45,
  "meters": [
    {
      "type": "electricity",
      "number": "123456",
      "installationDate": "2023-01-15"
    }
  ]
}

3. Управление приборами учета
📊 Учет электроэнергии, воды, тепла

📅 Отслеживание поверок

⚠️ Уведомления об истечении сроков

🧪 Разработка
Доступные команды
# 📦 Установка
npm run install:all          # Установка всех зависимостей

# 🚀 Запуск
npm run dev                  # Запуск клиента и сервера
npm run dev:client           # Только клиент (Vite)
npm run dev:server           # Только сервер (NestJS)

# 🏗️ Сборка
npm run build                # Сборка клиента и сервера
npm run build:client         # Сборка клиента
npm run build:server         # Сборка сервера

# 🗄️ База данных
npm run db:generate          # Генерация Prisma клиента
npm run db:push              # Миграция БД
npm run db:seed              # Заполнение тестовыми данными
npm run db:studio            # Prisma Studio

# 📚 Storybook
npm run storybook            # Запуск Storybook
npm run build-storybook      # Сборка Storybook

# 🧪 Тестирование
npm run test                 # Запуск всех тестов
npm run test:client          # Тесты клиента
npm run test:server          # Тесты сервера
npm run test:e2e             # E2E тесты

# 🔍 Линтинг
npm run lint                 # Проверка кода
npm run lint:fix             # Автоисправление
npm run type-check           # Проверка типов TypeScript

Добавление нового компонента
# 1. Создание структуры компонента
mkdir src/components/ui/NewComponent
touch src/components/ui/NewComponent/NewComponent.tsx
touch src/components/ui/NewComponent/NewComponent.styles.ts
touch src/components/ui/NewComponent/NewComponent.stories.ts
touch src/components/ui/NewComponent/index.ts

# 2. Экспорт из папки компонентов
echo "export { NewComponent } from './NewComponent';" >> src/components/ui/index.ts

Работа с API
// Пример использования API клиента
import { api } from '@lib/api';

// Получение магазинов
const { stores } = await api.get('/stores', { 
  params: { regionId: '1' } 
});

// Создание магазина
const newStore = await api.post('/stores', storeData);

// Обновление магазина
const updatedStore = await api.put(`/stores/${id}`, updateData);


📊 База данных
Диаграмма схемы
-- Основные таблицы
users (id, email, role, region_id)
regions (id, name, code)
stores (id, name, address, region_id, installed_power, ...)
meters (id, store_id, type, number, installation_date)
store_photos (id, store_id, url, is_primary)

Миграции
# Создание новой миграции
npx prisma migrate dev --name add_new_field

# Применение миграций
npx prisma migrate deploy

# Просмотр данных
npx prisma studio


🧩 API Документация
Основные эндпоинты
Метод	Эндпоинт	Описание	Права доступа
GET	/api/stores	Список магазинов	Все
POST	/api/stores	Создание магазина	Editor, Admin
GET	/api/stores/:id	Детали магазина	Все
PUT	/api/stores/:id	Обновление магазина	Editor, Admin
DELETE	/api/stores/:id	Удаление магазина	Admin
GET	/api/regions	Список регионов	Все
POST	/api/auth/login	Авторизация	Все
Примеры запросов
# Получение магазинов с фильтрацией
curl -X GET "http://localhost:3001/api/stores?regionId=1&search=магазин" \
  -H "Authorization: Bearer {token}"

# Создание нового магазина
curl -X POST "http://localhost:3001/api/stores" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer {token}" \
  -d '{"name": "Новый магазин", "address": "...", "regionId": "1"}'


  🎨 Дизайн система
Темы
Светлая тема - для дневного использования

Компоненты
Все компоненты документированы в Storybook

Используется styled-components для стилизации

Полная поддержка TypeScript

Цветовая палитра
// Основные цвета
primary: '#3b82f6'    // Синий
success: '#22c55e'    // Зеленый
warning: '#f59e0b'    // Желтый
error: '#ef4444'      // Красный


🤝 Вклад в проект
Мы приветствуем вклад в развитие проекта!

Процесс внесения изменений
🍴 Форкните репозиторий

🌿 Создайте feature-ветку (git checkout -b feature/amazing-feature)

💾 Коммитьте изменения (git commit -m 'Add amazing feature')

📤 Push в ветку (git push origin feature/amazing-feature)

🔃 Создайте Pull Request

Стандарты кода
Используйте TypeScript для всего нового кода

Следуйте правилам ESLint и Prettier

Пишите тесты для новой функциональности

Обновляйте документацию

📄 Лицензия
Этот проект распространяется под лицензией MIT. Подробнее см. в файле LICENSE.

👥 Команда
Разработчик - Artsiom

Дизайнер - Artsiom

<div align="center">
⭐ Не забудьте поставить звезду репозиторию!
⬆ Наверх

</div>
</div>
