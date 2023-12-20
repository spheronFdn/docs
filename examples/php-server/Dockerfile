# Use an official PHP image with Apache
FROM php:8.0-apache

# Set the working directory in the container
WORKDIR /var/www/html

# Copy the PHP files and CSS files into the container
COPY index.php styles.css /var/www/html/

# Expose port 8080
EXPOSE 8000

# Start Apache in the foreground
CMD ["apache2-foreground"]
