# syntax=docker/dockerfile:1

# From https://docusaurus.community/knowledge/deployment/docker/?package-managers=npm
FROM node:22
RUN corepack enable
WORKDIR /opt/docusaurus
COPY . .
RUN npm install 
EXPOSE 3002
CMD ["/bin/sh", "-c", "npm run start -- --host 0.0.0.0 --poll 1000"]
