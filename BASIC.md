# Nest
Decorators -> couple functionality
Providers -> anything that not be Controller
@Injectable -> should be declarate in providers

Obs: Injection is different of

$ yarn add class-validator (obs: add in main: "app.useGlobalPipes(new ValidationPipe());")
$ yarn add class-transformer

# Prisma
$ yarn add prisma --dev
$ yarn add prisma init --datasource-provider SQLite
$ yarn add prisma migrate dev (obs: example "Create members table")
$ yarn add @prisma/client (obs: cli prisma)
$ npx prisma studio

Obs: Provider "Postgres" is invalid or not supported. Try again with "postgresql", "mysql", "sqlite", "sqlserver", "mongodb" or "cockroachdb".

Example for url connection in .env file:
- DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"