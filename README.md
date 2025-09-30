# Airbnb Clone Project

This is a full-stack web application inspired by Airbnb, built with Node.js, Express, MongoDB, and EJS. It allows users to sign up, log in, create, view, edit, and review property listings.

## Features
- User authentication (signup, login, logout) with Passport.js
- Create, edit, and delete property listings
- Add and manage reviews for listings
- Flash messages for user feedback
- Responsive EJS-based UI
- MongoDB database integration
- Session management and persistent login

## Technologies Used
- Node.js
- Express.js
- MongoDB & Mongoose
- Passport.js (Local Strategy)
- EJS & EJS-Mate
- Bootstrap (for styling, if included in public assets)
- Cloudinary (for image uploads)

## Getting Started

### Prerequisites
- Node.js (v22.19.0 recommended)
- MongoDB Atlas account (or local MongoDB)
- Cloudinary account (for image uploads)

### Installation
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd airbnbupdated-main
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the following:
   ```env
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_KEY=your_cloudinary_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   ```
4. Start the server:
   ```sh
   node app.js
   ```
5. Visit [http://localhost:8080](http://localhost:8080) in your browser.

## Project Structure
```
app.js                # Main application entry point
controllers/          # Route controllers
models/               # Mongoose models
routes/               # Express route files
views/                # EJS templates
public/               # Static assets (CSS, JS)
utils/                # Utility modules
init/                 # Data initialization scripts
classroom/            # Additional classroom-related modules
```

## License
This project is licensed under the ISC License.
