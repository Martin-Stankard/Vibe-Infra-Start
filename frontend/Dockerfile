FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npx react-scripts build
CMD ["npx", "serve", "-s", "build"]
