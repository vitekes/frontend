up:
	docker-compose up --build
nginx: 
	docker build -t nginx:latest -f nginx/Dockerfile nginx
b:
	bun run build