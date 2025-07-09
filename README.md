# 🎧 GraphQL Music Streaming App — WIP

A fullstack music streaming demo app built with GraphQL, NestJS, and Prisma — designed to showcase fullstack architecture, deep relational data modeling, and modern developer tooling.

---

## 🏗️ Tech Stack

| Layer    | Tech                          |
| -------- | ----------------------------- |
| Frontend | Next.js (TBD)                 |
| Backend  | NestJS + GraphQL (Apollo)     |
| ORM      | Prisma (PostgreSQL)           |
| Database | PostgreSQL (Dockerized)       |
| Infra    | Docker + Docker Compose (TBD) |

---

## 📁 Project Structure

```
.
├── server/        # NestJS GraphQL API (code-first)
│   └── prisma/    # Prisma schema & client
│   └── src/       # Modules, resolvers, and services
│
├── web/           # Next.js frontend (TBD)
│
├── docker-compose.yml (TBD)
└── README.md
```

---

## ✅ Current Progress

- [x] GraphQL API scaffolded with NestJS
- [x] Prisma schema with relational models (`User`, `Artist`, `Album`, `Song`, `Playlist`)
- [ ] Seed script for generating sample data (TBD)
- [ ] Docker support for local dev (TBD)
- [ ] Next.js frontend (TBD)
- [ ] Playground queries and mutations (TBD)

---

## 🧠 Project Goals

This is not a Spotify clone. The goal is to build a flexible, well-architected music streaming backend that can support:

- Complex GraphQL queries with deeply nested relationships
- Prisma-managed relational models with sensible defaults
- Modular, scalable NestJS architecture
- Future expansion into a clean modern frontend with Next.js

Example query you'll eventually be able to run:

```graphql
query {
  users {
    displayName
    playlists {
      name
      songs {
        title
        album {
          title
          artist {
            name
          }
        }
      }
    }
  }
}
```

---

## 📦 Running the Backend (Manual Dev)

```bash
cd server
npm install
npx prisma generate
npm run start:dev
```

> Requires a local or Dockerized PostgreSQL instance.
> Set `DATABASE_URL` in a `.env` file under `/server`.
