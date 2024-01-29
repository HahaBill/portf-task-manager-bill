# PortF Task Manager
by Ton Hoang Nguyen (Bill)

<img width="1000" alt="PortF Task Manager Home Page" src="https://github.com/HahaBill/portf-task-manager-bill/assets/32552798/2e8fd584-2c4c-4379-b4c6-017a14f56e88">


## 📄 What is PortF Task Manager

A simple Task Management Application that allows users to create, update delete, and view tasks.


## 🚀  Getting Started

Welcome to the Task Manager coding challenge, in this challenge you will be tasked with building a simple Task Management Application that allows users to create, update delete, and view tasks.

Already scaffolded for you is a NextJS app with the following integrations:

- Prisma ORM with SQLite
- Nexus (GraphQL schema generation)
- Apollo Server
- Apollo Client
- GraphQL Code Generator (for apollo client requests)

### Prerequisites

- Node v20 is recommended.

### NPM

Kick off with an npm install

```
npm i
```

### Prisma

Migrate and seed your db

```
npx prisma migrate dev --name init
```

### Generate types

Generate your API and front-end types (remember to re-run these if you make any changes to your schema)

```
npm run generate
npm run codegen
```

### Run

Run the NextJS dev server

```bash
npm run dev
```

Which can be viewed here: http://localhost:3000

The GraphQL api can be viewed here: http://localhost:3000/api/graphql

### Instructions

Some guide tasks are provided in `prisma/seed.ts`

Complete as many as you want (or add more) in as much detail as you like.

There may be some bugs and you are also free to change any configuration if you want to.
