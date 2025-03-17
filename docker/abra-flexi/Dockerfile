# build stage
FROM node:22-alpine AS build-stage
WORKDIR /opt/app/
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build

# test stage
FROM node:22-alpine AS test-stage
WORKDIR /opt/app/
COPY jestconfig.json ./
COPY --from=build-stage /opt/app/ ./
RUN npm i -g jest
RUN npm run test

# publish stage
FROM node:22-alpine AS publish-stage
WORKDIR /opt/app/
COPY package*.json ./
COPY README.md ./
COPY LICENSE ./
COPY --from=build-stage /opt/app/lib/ ./

