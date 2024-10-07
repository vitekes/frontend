up:
	docker-compose up -d
# build:
# 	docker build -t vifyx .
# run:
# 	docker run -p 80:80 vifyx
nginx: 
	docker build -t nginx:latest -f nginx/Dockerfile nginx