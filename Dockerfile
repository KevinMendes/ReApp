FROM node

WORKDIR /backend

COPY . /backend

RUN npm install

EXPOSE 3030

CMD ["node", "server.ts"]
