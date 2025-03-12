FROM node:23

WORKDIR /app

COPY package.json yarn.lock ./
RUN corepack enable yarn && yarn install

COPY . .

EXPOSE 3030

CMD ["yarn", "dev"]
