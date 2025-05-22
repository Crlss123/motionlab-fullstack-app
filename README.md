# MotionLab Fullstack Application

***Note:** This is not the original repository. This version consolidates both the backend and frontend components into a single structure for demonstration purposes. The original repositories will be linked below*

- [Backend](https://github.com/Crlss123/motionlab-backend)
- [Frontend](https://github.com/KimberlyMarquez/motionlab-frontend)

## Description
MotionLab is an interactive educational web application focused on teaching physics through simulation. Teachers can create a lobby and generate a unique code that students use to join. Once connected, students run simulations of a car ascending a ramp, applying physics concepts in real time. The application records each student's results, including scores, completion times, and positioning. These are displayed as performance statistics, enabling teachers to monitor student progress and assess their understanding effectively.

## Technologies
1. **Frontend**: ReactJS with TypeScript. Used to build a fast, component-based user interface. TypeScript enhances code quality and increases its maintanability by adding static styping.
2. **Backend**: ExpressJS with TypeScript. Handles routing, API endpoints, and business logic including user management, user creation and simulation control. 
3. **Database**: PostreSQL. A robust and scalable relational database used to store user data, simulation results, lobby sessions, and scoring statistics

## Main Features
- **Teacher Lobby Creation:** Instructors can create custom lobbies and generate a unique access code for students to join the session.
- **Physics Simulation:** Students simulate a car going up a ramp, applying real-world physics concepts as mass and power. All calculations are performed in a server to decrease stress on the client. 
- **Student Tracking:** The system tracks simulation progress and results in real time, offering feedback to students. 
- **Performance Statistics Dashboard:** Teachers can view individual and group performance metrics, including scores, success rates, and time taken, to assess learning outcomes.

## My Role
As a backend developer on the team, I contributed to building the server-side logic of the application using **Express.js** and **TypeScript**. Working collaboratively with other backend developers, my main responsibilities included:

- Implementing RESTful API endpoints for authentication, lobby creation, and simulation processing.
- Designing parts of the **PostgreSQL** database schema to store users, simulation data, and performance metrics.
- Assisting with real-time data handling, including simulation results and scoring logic.
- Participating in code reviews, debugging sessions, and integration with the frontend team.

## Installation
### Backend Setup
1. Clone this repository
2. Access the backend directory through CLI
3. Setup environment variables in a .env
    1. PORT=3000
    2. DB_URL= *The URL for your database* 
4. Run the `npm install` command
5. Run the `npm run dev` command
### Frontend Setup
1. Clone this repository
2. Access the frontend directory through CLI
3. Run the `npm install` command
3. Setup environment variables in a .env
    1. VITE_API_URL: http://localhost:3000
5. Run the `npm run dev` command
6. Open http://localhost:5173 in your prefered browser to view the webpage deployed
