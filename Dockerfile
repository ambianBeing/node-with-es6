FROM node:10
RUN mkdir -p /home/node-rest-es6
WORKDIR /home/node-rest-es6
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5000
RUN npm run build
CMD [ "npm", "run", "serve" ]