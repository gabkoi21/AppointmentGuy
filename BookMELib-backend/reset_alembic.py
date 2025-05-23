import sqlite3

conn = sqlite3.connect("database.db")  # Change to your actual SQLite DB name if different
cursor = conn.cursor()

cursor.execute("DELETE FROM alembic_version")
conn.commit()

print("Deleted alembic_version record.")
conn.close()
