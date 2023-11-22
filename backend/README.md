# Django Backend

## Install existing dependencies

```
pip install -r requirements.txt
```

## Install new dependency

```
pip install <package>
pip freeze > requirements.txt
```

## Create new app

```
python3 manage.py startapp <app_name>
```

## Run migrations

```
python3 manage.py makemigrations <app_name>
python3 manage.py migrate
```

## Run server

```
python3 manage.py runserver
```
