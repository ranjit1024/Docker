FROM node:16-alpine

WORKDIR /app 

COPY package* .

RUN npm install

COPY . .

RUN npm run build

CMD [ "node", "./dist/index.js" ]