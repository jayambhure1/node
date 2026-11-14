# my-node-app

A small Express app with a health-check endpoint at `/health`.

## Run locally

Prerequisites: Node.js and npm.

```bash
npm ci
npm test
npm start
```

The app listens on port `3000` by default. In another terminal, check it with:

```bash
curl http://localhost:3000/health
```

## Run with Docker

Prerequisite: Docker Engine.

Build the image from the project root:

```bash
docker build -t my-node-app:local .
```

Start the container and publish port `3000`:

```bash
docker run -d --name running-node-app -p 3000:3000 my-node-app:local
```

Check the health endpoint and container status:

```bash
curl http://localhost:3000/health
docker ps
docker logs running-node-app
```

Stop and remove the container when you are done:

```bash
docker stop running-node-app
docker rm running-node-app
```

To force-remove it in one step instead:

```bash
docker rm -f running-node-app
```
