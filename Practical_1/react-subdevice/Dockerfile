# builder phase
FROM node:16-alpine AS builder

WORKDIR '/app'

COPY package.json ./
RUN npm install --legacy-peer-deps
COPY ./ ./
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html