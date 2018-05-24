FROM node:alpine
ADD . /app
WORKDIR /app
RUN npm install -g yarn
RUN yarn
RUN yarn
CMD ["yarn", "start"]
