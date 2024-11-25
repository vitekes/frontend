# Используем официальный образ Node.js
FROM oven/bun:latest

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./
COPY bun.lockb ./

# Устанавливаем Bun
RUN bun install

# Копируем остальные файлы приложения
COPY . .

# Строим Next.js приложение
RUN bun run build

# Открываем порт 3000
EXPOSE 3000

# Запускаем Next.js приложение
CMD ["bun", "run", "start"]



# # Используем официальный образ Bun
# FROM node:latest

# # Устанавливаем рабочую директорию
# WORKDIR /app

# # Копируем package.json и package-lock.json
# COPY package*.json ./
# COPY bun.lockb ./
# COPY yarn.lock ./

# # Устанавливаем зависимости
# RUN yarn

# # Копируем остальные файлы приложения
# COPY . .

# # Строим приложение
# RUN yarn build

# # Открываем порт 3000
# EXPOSE 3000

# # Запускаем приложение
# CMD ["yarn",  "start"]

