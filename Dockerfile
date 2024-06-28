FROM node:21.7.3-alpine AS deploy

RUN mkdir -p /usr/app/uflower
WORKDIR /usr/app/uflower

COPY ./ ./
RUN mv .env.development.bak .env.production

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]