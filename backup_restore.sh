#!/bin/bash

# Configuration
CONTAINER_NAME="financial_tracker_db"
DB_USER="your_user"
DB_NAME="financial_tracker"
BACKUP_FILE="backup.sql"

# 1️⃣ Backup Script
backup() {
    echo "Backing up database..."
    docker exec -t $CONTAINER_NAME pg_dump -U $DB_USER $DB_NAME > $BACKUP_FILE
    echo "Backup completed: $BACKUP_FILE"
}

# 2️⃣ Restore Script
restore() {
    echo "Restoring database..."
    cat $BACKUP_FILE | docker exec -i $CONTAINER_NAME psql -U $DB_USER -d $DB_NAME
    echo "Database restore completed."
}

# 3️⃣ Migration Script
migrate() {
    echo "Starting database migration..."
    backup
    echo "Transferring backup file..."
    # Replace with actual transfer method (e.g., scp, rsync, or USB copy)
    echo "Move '$BACKUP_FILE' to the new machine manually or using SCP."
    echo "On the new machine, run this script with 'restore' to complete the process."
}

# Run the requested command
case "$1" in
    backup)
        backup
        ;;
    restore)
        restore
        ;;
    migrate)
        migrate
        ;;
    *)
        echo "Usage: $0 {backup|restore|migrate}"
        exit 1
        ;;
esac
