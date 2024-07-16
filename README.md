# 2077cms

Content management system written in Python(Django)

## Prerequisites

Before running the application, ensure you have the following installed:

- virtual environment `python3 -m venv .venv` and activate using `source .venv/bin/activate` for MacOS
- SQLite3 for database
- Git (for version control)

## Running the App

1. Clone the repository

   ```bash
   git clone https://github.com/2077-Collective/2077cms.git
   ```

2. Install dependencies for both backend and frontend:

   ```bash
    cd 2077cms
    cd pip3 install -r requirements.txt

   ```

3. Run the application in development mode:

   - Start Backend server:

   ```bash
    python3 manage.py makemigrations # To compile the migrations
    python3 manage.py migrate  # To migrate the changes in Database
    python3 manage.py runserver # To run the server

   ```
