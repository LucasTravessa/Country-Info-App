FROM node:20.12.2-alpine as BUILD_IMAGE
WORKDIR /app

COPY . .
# install dependencies
RUN npm ci
# build
RUN npm run build

FROM node:20.12.2-alpine
WORKDIR /app
# copy from build image

COPY --from=BUILD_IMAGE /app/package.json ./package.json
COPY --from=BUILD_IMAGE /app/node_modules ./node_modules
COPY --from=BUILD_IMAGE /app/.next ./.next
COPY --from=BUILD_IMAGE /app/public ./public

EXPOSE 3000

CMD ["npm","run" , "start"]