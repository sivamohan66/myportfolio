FROM mhart/alpine-node

# Create app directory
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

# Install server dependencies
COPY package.json /usr/src/server
RUN yarn

# Bundle server source
COPY . /usr/src/server

CMD [ "yarn", "start" ]