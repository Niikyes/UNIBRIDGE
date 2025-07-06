FROM ruby:3.2.2-slim

WORKDIR /usr/src/app

# Install system dependencies for building gems
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev --no-install-recommends && rm -rf /var/lib/apt/lists/*

# Copy Gem files
COPY Gemfile Gemfile.lock ./

# Install gems
RUN bundle install && rm -rf /usr/local/bundle/cache/*.gem

# Copy rest of app
COPY . .

EXPOSE 5005

CMD ["bundle", "exec", "puma", "-p", "5005", "config.ru"]









