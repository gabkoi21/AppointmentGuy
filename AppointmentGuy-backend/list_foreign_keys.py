import sqlite3

# Replace this with the actual path to your SQLite database file
db_path = 'your_database.db'

# Connect to the SQLite database
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Execute the PRAGMA command to list foreign keys on the 'appointments' table
cursor.execute("PRAGMA foreign_key_list('appointments');")

# Fetch and print all results
foreign_keys = cursor.fetchall()
for fk in foreign_keys:
    print(fk)

# Close the connection
conn.close()
