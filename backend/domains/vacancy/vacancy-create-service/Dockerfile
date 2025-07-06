FROM ruby:3.2.2

WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

EXPOSE 5005

# Remove "-C config/puma.rb" because you do not have it
CMD ["bundle", "exec", "puma", "config.ru"]







