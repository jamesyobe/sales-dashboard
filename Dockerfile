# Use official Node.js image for building
FROM node:latest as build

WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Run a clean install of dependencies
RUN npm ci

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Copy the entire project and build the Angular app
COPY . .

# Build the application
RUN npm run build --configuration=production

# Use Nginx to serve the app
FROM nginx:latest

# Copy the custom Nginx configuration file
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy build files to Nginx directory
COPY --from=build /app/dist/sales_dashboard/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Commands
# docker build -t salesdashboardapp .
# docker run -d -p 9090:80 salesdashboardapp
# # Start Nginx
# CMD ["nginx", "-g", "daemon off;"]
