#  Todo Management Application

A modern, full-stack todo management application built with React and Node.js. This project features a sleek, responsive UI with comprehensive task management capabilities and persistent data storage.

## Features

- **Create Tasks**: Add new tasks with titles and optional descriptions
- **Update Tasks**: Edit existing tasks inline with a modern form interface
- **Delete Tasks**: Remove completed or unwanted tasks
- **Mark Complete**: Toggle task completion status with visual feedback
- **Filter Tasks**: View all, active, or completed tasks with dynamic filtering
- **Persistent Storage**: Tasks are saved to JSON file for data persistence
- **Responsive Design**: Modern, mobile-friendly interface with glassmorphism effects
- **Real-time Statistics**: Live task counters showing total, active, and completed tasks

##  Architecture

### Frontend (React)

**Location**: `./frontend/`

**Tech Stack:**

- **React 18** - Modern functional components with hooks
- **Axios** - HTTP client for API communication
- **CSS3** - Modern styling with gradients, animations, and glassmorphism
- **Inter Font** - Professional typography

**Key Components:**

- `App.js` - Main application component with state management
- `Header.jsx` - Application header with task statistics
- `TaskForm.jsx` - Form component for creating and editing tasks
- `TaskList.jsx` - Task list with filtering capabilities
- `TaskItem.jsx` - Individual task component with actions
- `useTasks.js` - Custom hook for task state management

**Features:**

- Modern glassmorphism UI design
- Smooth animations and hover effects
- Responsive layout for all devices
- Real-time task statistics
- Filter system (All/Active/Completed)
- Loading states and error handling
- Form validation and user feedback

### Backend (Node.js)

**Location**: `./backend/`

**Tech Stack:**

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **UUID** - Unique identifier generation
- **fs-extra** - Enhanced file system operations

**API Endpoints:**

```
GET    /api/tasks        - Retrieve all tasks
POST   /api/tasks        - Create a new task
PUT    /api/tasks/:id    - Update an existing task
DELETE /api/tasks/:id    - Delete a task
```

**Key Components:**

- `server.js` - Express server configuration and startup
- `taskController.js` - Business logic for task operations
- `Task.js` - Task model with data structure
- `tasks.js` - API routes definition
- `tasks.json` - JSON file for data persistence

**Features:**

- RESTful API design
- JSON file-based data persistence
- Error handling and validation
- CORS enabled for frontend communication
- UUID-based unique task identification
- Automatic data file initialization

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd todo-app
   ```

2. **Install Backend Dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd backend
   npm run dev
   ```

   Server runs on: `http://localhost:3001`

2. **Start the Frontend Development Server**

   ```bash
   cd frontend
   npm start
   ```

   Frontend runs on: `http://localhost:3000` (or next available port)

3. **Access the Application**
   Open your browser and navigate to the frontend URL shown in the terminal.

##  Project Structure

```
todo-app/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Header.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskItem.jsx
│   │   │   └── TaskList.jsx
│   │   ├── hooks/           # Custom React hooks
│   │   │   └── useTasks.js
│   │   ├── services/        # API service layer
│   │   │   └── api.js
│   │   ├── App.js           # Main application component
│   │   ├── App.css          # Application styles
│   │   └── index.js         # Application entry point
│   └── package.json
├── backend/                 # Node.js backend application
│   ├── src/
│   │   ├── controllers/     # Business logic
│   │   │   └── taskController.js
│   │   ├── models/          # Data models
│   │   │   └── Task.js
│   │   └── routes/          # API routes
│   │       └── tasks.js
│   ├── data/                # Data storage
│   │   └── tasks.json       # Task data file
│   ├── server.js            # Express server
│   └── package.json
├── .gitignore               # Git ignore rules
└── README.md                # Project documentation
```

##  API Documentation

### Task Object Structure

```json
{
  "id": "uuid-string",
  "title": "Task title",
  "description": "Optional description",
  "completed": false,
  "createdAt": "2025-10-17T...",
  "updatedAt": "2025-10-17T..."
}
```

### API Endpoints

#### GET /api/tasks

Returns all tasks

```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Sample Task",
    "description": "This is a sample task",
    "completed": false,
    "createdAt": "2025-10-17T10:30:00.000Z",
    "updatedAt": "2025-10-17T10:30:00.000Z"
  }
]
```

#### POST /api/tasks

Create a new task

```json
// Request body
{
  "title": "New Task",
  "description": "Optional description"
}

// Response
{
  "id": "new-uuid",
  "title": "New Task",
  "description": "Optional description",
  "completed": false,
  "createdAt": "2025-10-17T...",
  "updatedAt": "2025-10-17T..."
}
```

#### PUT /api/tasks/:id

Update an existing task

```json
// Request body (partial update)
{
  "title": "Updated Task Title",
  "completed": true
}
```

#### DELETE /api/tasks/:id

Delete a task (returns 204 No Content on success)

##  Design Features

- **Modern Glassmorphism UI** - Translucent elements with backdrop blur
- **Smooth Animations** - CSS transitions and hover effects
- **Responsive Design** - Optimized for desktop, tablet, and mobile
- **Professional Typography** - Inter font family with proper hierarchy
- **Color-coded Actions** - Intuitive color scheme for different actions
- **Visual Feedback** - Loading states, hover effects, and status indicators

##  Deployment

### Frontend Deployment

```bash
cd frontend
npm run build
# Deploy the build/ folder to your preferred hosting service
```

### Backend Deployment

The backend can be deployed to services like:

- Heroku
- Railway
- DigitalOcean App Platform
- AWS Elastic Beanstalk

Make sure to:

1. Set environment variables for production
2. Update CORS settings for your frontend domain
3. Configure file storage for the tasks.json file

##  Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

##  License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and Node.js
