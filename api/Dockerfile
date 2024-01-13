FROM python:3.11

WORKDIR /app

EXPOSE 5050

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
RUN pipenv install --system --deploy --ignore-pipfile

COPY . ./

CMD [ "python", "main.py"] 