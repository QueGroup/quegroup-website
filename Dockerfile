# Use an official Node runtime as a parent image
FROM node:20.11

# Set the working directory in the container
WORKDIR /frontend

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in package.json
RUN npm install && \
    npm rebuild node-sass \
    npm run build && \
    npm install -g serve

# Build the app
#RUN npm run build
#
## Install serve to run the application
#RUN npm install -g serve

# Make port 5000 available to the world outside this container
EXPOSE 3050

# Define environment variable
ENV NODE_ENV=production

# Run the app when the container launches
ENTRYPOINT ["npx", "serve", "-d", "build", "-l", "3050"]
#ENTRYPOINT [ "npm", "start" ]