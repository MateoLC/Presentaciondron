# Etapa de construcción
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Etapa de producción (servidor web ligero)
FROM nginx:alpine
# Copiamos los archivos de la build a nginx
COPY --from=builder /app/dist /usr/share/nginx/html
# Copiamos la configuración por defecto de Nginx para SPA (Single Page Applications)
# y configuramos el puerto (opcional, por defecto es 80)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
