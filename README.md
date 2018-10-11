## Reverse Proxy

This project experiments with creating an nginx reverse proxy, using Docker, to proxy requests for a front-end and a node back-end.

### Getting Started

- Clone the repo
- Within the project directory, run `docker-compose up -d`


**Front-end**:
- Runs on port `8080`
- url [http://localhost:8080/](http://localhost:8080/)

**Back-end**:
- Runs on port `3000`
- urls:
	- http://localhost:3000/api/developers
	- http://localhost:3000/api/developers/:id (1 or 2)


