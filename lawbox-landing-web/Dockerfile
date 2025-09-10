FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
ENV CI=true

RUN npm clean-install

COPY . .
EXPOSE 3000
CMD [ "npm", "run", "dev" ]