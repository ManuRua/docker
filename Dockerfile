FROM node:4.4.0
LABEL author="imanurua@gmail.com"

RUN groupadd -r nodejs && useradd -m -r -g -s /bin/bash nodejs nodejs

USER nodejs

WORKDIR /app
COPY app/ .

ENV  NODE_ENV develop
