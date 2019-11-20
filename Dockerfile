FROM node:10-alpine

WORKDIR /app

COPY package.json yarn.lock
RUN yarn install --no-cache --frozen-lockfile

COPY . ./
RUN yarn run build

FROM nginx:stable-alpine

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/dist /usr/share/nginx/html

EXPOSE 3000
