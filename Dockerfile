# Use an official Node.js image as the base image for building the React app
FROM node:18 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install project dependencies only (not devDependencies)
RUN npm install 

# install typescript tsc compiler
RUN npm install -g typescript
COPY . .

# Generate variables from tokens and build storybook
RUN npm run generate-variables
RUN npm run build-storybook

#add .npmrc file to container
RUN npm publish --access public

# Use an official Nginx image as the base image for serving the app
FROM nginx:alpine

# Copy the Nginx configuration
COPY ./nginx/staging.conf /etc/nginx/conf.d/default.conf

# Copy the 'dist' folder from the build stage to the Nginx web root
COPY --from=build /app/storybook-static /usr/share/nginx/html
# COPY ./dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# The Nginx container will start serving the React app automatically