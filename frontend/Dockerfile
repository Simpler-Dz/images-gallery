FROM node

WORKDIR /app

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm config set registry https://registry.npm.taobao.org
RUN npm install

COPY . ./

CMD [ "npm", "start" ]