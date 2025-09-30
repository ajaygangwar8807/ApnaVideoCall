# Zoom
A full stack video conferencing web application.
# ApnaVideoCall

A full-stack video calling application with authentication, meeting history, and real-time video chat.

## Features

- User authentication (login/register)
- Create and join video meetings
- Meeting history tracking
- Real-time video and chat (WebRTC, Socket.io)
- Responsive frontend (React)

## Technologies Used

- **Frontend:** React, CSS Modules
- **Backend:** Node.js, Express, Socket.io, MongoDB

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm
- MongoDB (local or cloud)

### Installation

1. **Clone the repository:**
	```powershell
	git clone https://github.com/ajaygangwar8807/ApnaVideoCall.git
	cd ApnaVideoCall
	```

2. **Install backend dependencies:**
	```powershell
	cd backend
	npm install
	```

3. **Install frontend dependencies:**
	```powershell
	cd ../frontend
	npm install
	```

### Running the Application

1. **Start MongoDB** (if running locally).

2. **Start the backend server:**
	```powershell
	cd backend
	npm start
	```

3. **Start the frontend:**
	```powershell
	cd ../frontend
	npm start
	```

4. Open your browser at `http://localhost:3000`

## Project Structure

- `backend/` - Node.js/Express API, Socket.io server, MongoDB models
- `frontend/` - React app, pages, contexts, styles

## Contributing

Pull requests are welcome. For major changes, please open an issue first.

## License

MIT
