# 🌍 UnityPulse - Social Development Events (Client)

Welcome to the frontend repository for **UnityPulse** — a modern, community-driven event management platform where users can discover, create, join, and track social service and development events in their local area.

---

## 🔗 Project Links

- **Frontend Live Site:** [https://social-unitypulse.vercel.app](https://social-unitypulse.vercel.app)
- **Backend Live Server:** [https://social-unitypulse-server.vercel.app](https://social-unitypulse-server.vercel.app)
- **Server Repository:** [https://github.com/asad4405/social-development-events-server](https://github.com/asad4405/social-development-events-server)

---

## ✨ Key Features (5+ Bullet Points)

- **🔐 Secure Authentication:** Robust email/password and social login (Google/GitHub) powered by Better Auth with MongoDB Adapter and JWT.
- **📅 Upcoming Events Discovery:** Browse upcoming social service events filtered chronologically and presented in a responsive grid layout.
- **🙋 Interactive Event Joining:** Authenticated users can easily join or RSVP to community drives with built-in duplicate registration prevention.
- **📊 Personalized User Dashboard:** Dedicated private routes enabling users to manage created events, update details, delete entries, and view joined events sorted by date.
- **🌗 Theme Customization:** Fully functional light and dark mode toggling across the entire application interface.
- **🍞 Modern Toast Notifications:** Instant, sleek user feedback utilizing Shadcn Sonner toast instead of standard browser alerts.

---

## 🛠️ Tech Stack & Dependencies

- **Framework:** Next.js (App Router)
- **Language:** TypeScript / JavaScript
- **Styling & UI:** Tailwind CSS, DaisyUI, Shadcn UI
- **Notifications:** Shadcn Sonner
- **Authentication:** Better Auth (MongoDB Adapter & JWT)
- **Deployment:** Vercel

---

## 📡 API Endpoints Integration

The client application connects securely with the backend server endpoints:
- **Public Routes:** `GET /events`, `GET /events/:id`, `GET /join-event/:eventId`
- **Protected Routes (JWT Required):** `POST /event-create`, `GET /events/manage/:userId`, `PATCH /events/:id`, `DELETE /events/:id`, `POST /join-event`, `GET /joined-event/:userId`

---

## ⚙️ Environment Variables Setup

Create a `.env` file in the root directory and configure the following variables:

```env
NEXT_PUBLIC_API_BASE_URL=[https://social-unitypulse-server.vercel.app](https://social-unitypulse-server.vercel.app)

BETTER_AUTH_SECRET=your_better_auth_secret_here
BETTER_AUTH_URL=[https://social-unitypulse.vercel.app](https://social-unitypulse.vercel.app)

MONGODB_URL=your_mongodb_connection_string_here

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret