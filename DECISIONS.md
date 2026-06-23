# DECISIONS.md

## 1. Why did you choose this technology stack?

I chose React, TypeScript, Vite, Redux Toolkit and RTK Query for the frontend because they provide a modern development experience, strong typing, efficient API state management and fast build times.

For the backend, I chose Node.js, Express, TypeScript and Sequelize because they provide a simple and productive environment for building REST APIs while maintaining type safety and clear separation of concerns.

This stack also allowed me to move quickly while still implementing production-oriented patterns such as validation, centralized error handling, authentication and logging.

---

## 2. Why did you choose this database?

I chose PostgreSQL because it is a mature, reliable and widely adopted relational database.

The application has structured entities such as Feedback and Categories with clear relationships, making a relational database a natural fit.

PostgreSQL also provides excellent indexing, scalability and analytical capabilities for future reporting requirements.

---

## 3. Why did you structure your application this way?

I followed a layered architecture:

* Controllers
* Services
* Models
* Routes
* Middleware

This separation keeps business logic isolated from HTTP concerns and makes the codebase easier to maintain, test and extend.

The frontend follows a feature-based structure where API logic, pages and reusable components are separated to improve maintainability.

---

## 4. What trade-offs did you make due to time constraints?

Due to time constraints, I focused on delivering the core functionality and deployment requirements.

I intentionally limited:

* Automated test coverage
* Advanced monitoring
* Background job processing
* Refresh token implementation
* Advanced analytics visualizations

These can be added incrementally without major architectural changes.

---

## 5. What would you improve if you had one more week?

If I had one more week, I would add:

* Comprehensive unit and integration tests
* Refresh token authentication
* Audit logging
* CI/CD pipelines using GitHub Actions
* Sentry error tracking
* Prometheus and Grafana monitoring
* More advanced analytics dashboards
* Role-based access control

---

## 6. What was the most difficult technical challenge you faced?

The most difficult challenge was designing a solution that balanced simplicity and scalability within a limited timeframe.

I spent significant effort ensuring the backend architecture remained clean while still supporting pagination, filtering, search, analytics aggregation and deployment requirements.

---

## 7. Which AI tools did you use?

I used:

* ChatGPT
* GitHub Copilot

These tools were used to accelerate development, review implementation ideas and validate architectural decisions.

---

## 8. Share one instance where AI helped you.

AI helped me quickly evaluate different approaches for structuring the backend architecture and organizing the frontend state management.

This allowed me to focus more time on implementation and deployment rather than boilerplate setup.

---

## 9. Share one instance where you disagreed with AI and why.

AI occasionally suggested solutions that were technically correct but unnecessarily complex for the scope of this assignment.

In those cases I preferred simpler implementations because maintainability and delivery speed were more important than introducing additional abstractions.

---

## 10. What would break first if this application suddenly had 100,000 users?

The analytics endpoints would likely become the first bottleneck because they perform aggregation queries against the database.

To address this, I would introduce:

* Database indexing
* Query optimization
* Redis caching
* Read replicas
* Precomputed analytics

before scaling application servers.

---

## 11. What is one thing in this assignment that you would improve, change, or challenge?

I would introduce a requirement around operational readiness.

Many applications function correctly at small scale but fail due to deployment, observability and reliability concerns.

Adding requirements around monitoring, logging and production readiness would better reflect real-world engineering challenges.
