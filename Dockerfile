# Stage 1 - the build process
FROM node:14 as build-deps
WORKDIR /appl
COPY package.json yarn.lock .npmrc ./
RUN yarn
COPY . ./
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-deps /appl/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
