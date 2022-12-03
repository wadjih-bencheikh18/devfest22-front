FROM python:3.10-alpine
RUN apk update
COPY app /app
WORKDIR /app
RUN pip install -r requirements 
RUN chown -R nobody:nogroup /app
USER nobody
ENTRYPOINT ["flask", "run"]
