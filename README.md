# Bank Website

## Build with docker-compose

In the project directory, you run:

```
docker-compose build
docker-compose up
```

In a new terminal, with the other terminal running, you need to run:

```
docker-compose exec backend python manage.py makemigrations
docker-compose exec backend python manage.py migrate
```
