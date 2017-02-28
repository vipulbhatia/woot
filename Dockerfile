FROM node

RUN mkdir -p /usr/src/nodejs/woot
WORKDIR /usr/src/nodejs/woot
COPY . /usr/src/nodejs/woot
RUN npm install
