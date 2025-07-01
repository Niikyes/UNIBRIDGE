# Use official Ruby image
FROM ruby:3.2

# Set work directory
WORKDIR /app

# Copy Gemfile and Gemfile.lock first
COPY Gemfile Gemfile.lock ./

# Install dependencies
RUN bundle install

# Copy the application
COPY . .

# Expose port
EXPOSE 5005

# Start the service
CMD ["ruby", "app.rb"]
