FROM node:10-alpine as build-step
WORKDIR ./
RUN ls -al
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN ls -al
CMD ["npm","start"]