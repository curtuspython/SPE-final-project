FROM node:10-alpine as build-step
WORKDIR ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# start app
CMD ["npm", "start"]