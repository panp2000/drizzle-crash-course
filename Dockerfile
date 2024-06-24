# Dockerfile
FROM postgres:16

RUN apt update && \
  apt install -y locales && \
  sed -i -E 's/# (ja_JP.UTF-8)/\1/' /etc/locale.gen && \
  locale-gen ja-JP.UTF-8