FROM node:18.14.2 as list-courses
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm i
COPY --chown=node:node . .
EXPOSE 3001
CMD ["node", "server.js"]

