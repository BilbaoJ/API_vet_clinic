FROM node:18
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev
RUN --mount=type=secret,id=URI_MONGODB \
  --mount=type=secret,id=PORT \
  --mount=type=secret,id=DB_MONGODB \
  --mount=type=secret,id=COLLECTION_PETS \
  --mount=type=secret,id=COLLECTION_VETERINARIANS \
  export URI_MONGODB=$(cat /run/secrets/URI_MONGODB) && \
  export PORT=$(cat /run/secrets/PORT) && \
  export DB_MONGODB=$(cat /run/secrets/DB_MONGODB) && \
  export COLLECTION_PETS=$(cat /run/secrets/COLLECTION_PETS) && \
  export COLLECTION_VETERINARIANS=$(cat /run/secrets/COLLECTION_VETERINARIANS)
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]
