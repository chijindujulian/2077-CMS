import os
from dotenv import load_dotenv
from notion_client import Client

load_dotenv()

notion = Client(auth=os.getenv("NOTION_TOKEN"))
NOTION_DB = os.getenv("NOTION_DATABASE_ID")

if NOTION_DB is None:
    raise Exception("NOTION_DATABASE_ID environment variable is not set")

users = notion.users.list()

for user in users.get("results"):
    name, user_type = user["name"], user["type"]
    emoji = "😅" if user["type"] == "bot" else "🙋‍♂️"
    print(f"{name} is a {user_type} {emoji}")

def main():
    database_id = NOTION_DB
    notion = Client(auth=os.getenv("NOTION_TOKEN"))
    response = notion.databases.retrieve(database_id=database_id)
    filtered_response = [entry for entry in response.get("properties", {}).values() if entry.get("type") == "status" and entry.get("status", {}).get("name") == "Done"]

    print(filtered_response)
    #print(response)

main()