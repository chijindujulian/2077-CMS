# 2077cms

Content management system written in Python(Django)

## Prerequisites

Before running the application, ensure you have the following:

- Notion for database
- Git (for version control)

## Running the App

1. Clone the repository

   ```bash
   git clone https://github.com/2077-Collective/2077cms.git
   cd 2077cms
   ```

2. Create virtual environment

- For MacOS,
  
    ```bash
    python3 -m venv .venv
    source .venv/bin/activate
    ```

- For Windows,
  
    ```bash
    pip3 install virtualenv
    virtualenv myenv
    myenv\Scripts\activate
    ```

1. Install dependencies for the project:

   ```bash
    pip3 install -r requirements.txt
   ```

2. Setup Environment Variables:

   Create a .env file in the root directory with the following variables:

   ```
   NOTION_TOKEN=<secret token here>
   NOTION_DATABASE_ID=<database id here>
   ```

3. Run the application in development mode:

   - Start Backend server:

   ```bash
    python3 manage.py makemigrations # To compile the migrations
    python3 manage.py migrate  # To migrate the changes in Database
    python3 manage.py runserver # To run the server

   ```

4. API Testing: `http://127.0.0.1:8000/<ROUTE>`

   | Method |   Route   |    Description     |
   | :----: | :-------: | :----------------: |
   |  GET   |     /     |   2077 main page   |
   |  GET   | /research | research blog page |

Working in Progress...stay tuned
