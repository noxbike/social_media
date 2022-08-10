FROM node:latest

WORKDIR /App

COPY ./package.json .

RUN npm install
RUN npm install nodemon

COPY . .

EXPOSE 3001:3001

CMD ["npm", "run", "dev"]