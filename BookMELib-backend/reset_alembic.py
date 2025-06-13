import os
import sqlite3
import shutil

# Database paths
DB_PATH = 'instance/database.db'
MIGRATIONS_PATH = 'migrations'

def reset_database():
    # Remove existing database
    if os.path.exists(DB_PATH):
        try:
            os.remove(DB_PATH)
            print(f"Removed existing database at {DB_PATH}")
        except PermissionError:
            print(f"Could not remove database at {DB_PATH} - file is in use")
            return False

    # Remove existing migrations
    if os.path.exists(MIGRATIONS_PATH):
        try:
            shutil.rmtree(MIGRATIONS_PATH)
            print(f"Removed existing migrations at {MIGRATIONS_PATH}")
        except PermissionError:
            print(f"Could not remove migrations at {MIGRATIONS_PATH} - directory is in use")
            return False

    return True

if __name__ == '__main__':
    if reset_database():
        print("Database and migrations reset successfully")
    else:
        print("Failed to reset database and migrations")
