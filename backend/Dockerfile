FROM node:8.11.4
RUN npm install sails -g
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json","package-lock.json","npm-shrinkwrap.json*","./"]
RUN npm install
COPY . .
EXPOSE 1339
CMD sails lift