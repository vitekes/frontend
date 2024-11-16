# Используем официальный образ Bun
FROM oven/bun:alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./
COPY bun.lockb ./

# Устанавливаем зависимости
RUN bun install

# Копируем остальные файлы приложения
COPY . .

# Строим приложение
RUN bun run build

# Открываем порт 3000
EXPOSE 3000

# Запускаем приложение
CMD ["bun", "run", "start"]
