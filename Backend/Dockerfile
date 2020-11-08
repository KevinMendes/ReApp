FROM node

WORKDIR /Backend

COPY package.json /Backend
COPY tslint.json /Backend
COPY tsconfig.json /Backend
COPY tsconfig.build.json /Backend

RUN npm install

COPY . /Backend

EXPOSE 3030

CMD ["npm", "start"]
