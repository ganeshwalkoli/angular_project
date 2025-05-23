# Use official Node image to serve the app
FROM nginx:alpine

# Copy the build output from Jenkins workspace to nginx html folder
COPY dist/my-nginx-app/ /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

