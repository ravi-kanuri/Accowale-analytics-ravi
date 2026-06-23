# Acowale Analytics Platform

## Overview

Acowale Analytics Platform is a full-stack feedback management system that allows users to submit feedback and enables administrators to analyze, manage, and monitor customer feedback through a centralized dashboard.

The application follows an API-first architecture and consists of a React frontend and a Node.js backend with PostgreSQL as the primary database.

---

## Live Demo

### Frontend

https://accowale-analytics-ravi.vercel.app/

### Backend

https://accowale-analytics-ravi.onrender.com

---

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* Redux Toolkit
* RTK Query
* React Router
* React Hot Toast
* Recharts
* Lucide React

### Backend

* Node.js
* Express.js
* TypeScript
* PostgreSQL
* Sequelize ORM
* JWT Authentication
* Zod Validation
* Helmet
* Morgan
* Express Rate Limit

### DevOps

* GitHub
* Render
* Vercel

---

## Features

### Public Feedback Portal

* Submit feedback
* Select feedback category
* User name and email capture
* Feedback validation
* Success and error handling

### Admin Dashboard

* JWT Authentication
* Analytics Overview
* Total Feedback Statistics
* Category Distribution
* Recent Feedback Overview

### Feedback Management

* Paginated Feedback Listing
* Search by Name
* Search by Email
* Search by Comment
* Category Filtering
* Responsive UI

### Security

* JWT Authentication
* Request Validation
* Helmet Security Headers
* Rate Limiting
* Centralized Error Handling

### Observability

* Morgan Request Logging
* Health Check Endpoint

---

## Architecture

Monorepo Structure:

```text
Acco-Analytics/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── repositories/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   └── validations/
│   │
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── routes/
│   │   └── services/
│   │
│   |
│   └── package.json
│
├
└── README.md
```

---

## API Endpoints

### Authentication

#### Login

```http
POST /api/v1/auth/login
```

Request:

```json
{
  "email": "admin@acowale.com",
  "password": "Admin@123"
}
```

---

### Categories

#### Get Categories

```http
GET /api/v1/categories
```

---

### Feedback

#### Create Feedback

```http
POST /api/v1/feedback
```

Request:

```json
{
  "categoryId": "uuid",
  "name": "John Doe",
  "email": "john@example.com",
  "comment": "Great platform"
}
```

#### Get Feedback

```http
GET /api/v1/feedback?page=1&limit=10
```

#### Search Feedback

```http
GET /api/v1/feedback?search=john
```

#### Filter Feedback

```http
GET /api/v1/feedback?categoryId=uuid
```

---

### Analytics

#### Dashboard Analytics

```http
GET /api/v1/analytics
```

---

### Health Check

```http
GET /api/v1/health
```

Response:

```json
{
  "success": true,
  "status": "OK"
}
```

---

## Environment Variables

### Backend (.env)

```env
PORT=5000

DATABASE_URL=postgresql://username:password@localhost:5432/database

JWT_SECRET=your_secret_key

NODE_ENV=development
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api/v1
```

---

## Local Setup

### Clone Repository

```bash
git clone https://github.com/ravi-kanuri/Accowale-analytics-ravi.git
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---


## Deployment

### Frontend

* Hosted on Vercel
* Automatic deployment through GitHub integration

### Backend

* Hosted on Render
* PostgreSQL Database
* Automatic deployment through GitHub integration

---

## Engineering Decisions

### Why Sequelize?

* Strong TypeScript support
* Mature ORM ecosystem
* Easy migrations and associations
* PostgreSQL integration

### Why RTK Query?

* Built-in caching
* Request lifecycle management
* Reduced boilerplate
* Efficient API state management

### Why Monorepo?

* Shared project structure
* Easier development workflow
* Simplified deployment management

---

## Future Improvements

* Refresh Token Authentication
* Audit Logs
* Role-Based Access Control (RBAC)
* Sentry Error Monitoring
* OpenTelemetry Tracing
* Prometheus Metrics
* Grafana Dashboards
* CI/CD Pipeline with GitHub Actions
* Dockers

---

## Author

Ravi Kumar

Full Stack Developer

Built as part of the Acowale Full Stack Developer Assessment.
