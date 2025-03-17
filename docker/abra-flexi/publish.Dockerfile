# build stage
FROM node:22-alpine AS build-stage
WORKDIR /opt/app/
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build

# publish stage
FROM node:22-alpine AS publish-stage
WORKDIR /opt/app/
COPY package*.json ./
COPY README.md ./
COPY LICENSE ./
COPY --from=build-stage /opt/app/build/ ./
RUN npm publish