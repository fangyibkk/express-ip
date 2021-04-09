FROM node
RUN mkdir -p /app
WORKDIR /app
COPY . .
EXPOSE 9999
CMD ["node", "./app.js"]