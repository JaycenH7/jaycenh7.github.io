FROM mhart/alpine-node:6

COPY ./package.json /srv/package.json

WORKDIR /srv

RUN npm install -g gulp-cli
RUN npm install gulp --save-dev

CMD ["gulp"]
