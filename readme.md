
# Book Nest Server 📚

## Project Description
**Book Nest Server** is a backend API for managing a library system. It enables library staff and members to organize books, manage memberships, and track borrow/return activities. This project is built to facilitate efficient library management and allow for smooth book lending and return processes.


## [Live Link: https://book-nest-server-amber.vercel.app/](https://book-nest-server-amber.vercel.app/)

## Technology Stack & Packages
- **Backend Framework**: Node.js, Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma ORM
- **Language**: TypeScript
- **UUID Generation**: Prisma (for unique identification in all tables)

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone <repo-url>
   cd book-nest-server

2. **Install Dependencies:**:
   ```bash
   npm install
3. **Environment Variables:**:
   ```bash
   DATABASE_URL=your_database_url
4. **Database Setup:**:
   ```bash
   npx prisma migrate dev --name init
5. **Run the Server:**:
   ```bash
   npm run dev


## Key Features & Functionality
- **CRUD Operations** for managing Books, Members, and Borrow Records.
- **Overdue Tracking**: Automatically tracks overdue books past the 14-day return window.
- **UUID for Unique Identification**: All entries are identified by unique UUIDs.
- **Error Handling**: Comprehensive error responses to handle failed requests gracefully.


