# Uses node version 22 as our base image
FROM node:22

WORKDIR /app

COPY package.json ./

RUN npm install 

RUN npm install express

COPY . .

ENV PORT=1000

#Expose the port so our computer can access it
EXPOSE 1000

# Docker uses CMD to START the container after building it
CMD ["npm", "start"]