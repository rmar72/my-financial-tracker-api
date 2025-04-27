# my-financial-tracker-api

# Developemnt 
# Interactive UI for Database provided by Prisma
npx prisma studio

# Accessing Docker PostgresqlDB
1. docker ps (open new terminal and retrieve the NAMES column)
2. docker exec -it name bash (exec into dockers container shell)
3. psql -U your_user -d financial_tracker (connect to Postgres DB CLI) (you should be inside PG now)
4. \l (list databases)
5. \c nameofdatabaseindockerfile (connect to specific DB) (you will be connected iunside this db now)
6. then you can read/write/update/etc run your sql commands
