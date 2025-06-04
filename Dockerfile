FROM node:lts-alpine
WORKDIR /app

COPY package*.json .
RUN npm install

EXPOSE 443 80
COPY . /app
CMD ["npm","start"]