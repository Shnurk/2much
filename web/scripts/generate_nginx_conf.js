`
server {
  listen 80;
  server_name againstmanagement.com;

  # Tell Nginx and Passenger where your app's 'public' directory is
  root /opts/var/www/myapp/code/public;

  # Turn on Passenger
  passenger_enabled on;
  # Tell Passenger that your app is a Node.js app
  passenger_app_type node;
  passenger_startup_file app.js;
}
`
