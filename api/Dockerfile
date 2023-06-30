FROM python:3.11.3

ENV PYTHONUNBUFFERED=1

WORKDIR /api

RUN pip install django-cors-headers

COPY . .

EXPOSE 8000