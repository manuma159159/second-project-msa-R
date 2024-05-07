FROM python:3.9-slim-bullseye

WORKDIR /app
COPY ./api/requirements.txt /app/requirements.txt

RUN pip install --no-cache-dir -r /app/requirements.txt

COPY ./api /app/api
ENV PYTHONPATH=/app
    USERID=clouds \
    PASSWD=clouds \
    DBNAME=clouds \
    DBHOST=13.125.245.89 \
    GMAIL_PASS='zpcb gtbm baks hxlh'
EXPOSE 8000
VOLUME /app/visitor.db
CMD ["python", "api/main.py"]