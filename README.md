# Student Management Web App

A lightweight, static Student Management web app built with vanilla HTML5, CSS3, and JavaScript.

## Features

- **Students Directory (`students.html` / `index.html`):**
  - Table listing students with Name, Enrollment Year, Faculty (AC, ETC, CT, EE, ARH, CHEM), and a Details action.
  - Real-time client-side search filtering by student name.
  - Interactive Details modal showing Birth Year, Total Credits, GPA, and Email.

- **Courses Directory (`courses.html`):**
  - Table listing courses with Course Name, Faculty, Enrolled Students count, and a Details action.
  - Real-time client-side search filtering by course name.
  - Interactive Details modal showing Academic Year, Semester, Credits, and Instructor.

- **Login Modal & Authentication:**
  - Accessible from the header on all pages.
  - Credential validation for username `teacher` and password `password`.
  - Inline error feedback on invalid credentials.
  - Redirects to Teacher Portal (`teacher.html`) upon successful login.

- **Teacher Portal & Exam Scheduler (`teacher.html`):**
  - Teacher dashboard with "Welcome, teacher" greeting and exam list.
  - Multi-step Exam Planner modal form:
    - Step 1: Basic Information (Exam Name, Course selection)
    - Step 2: Schedule & Details (Date Picker, Time Picker, Notes textarea)
    - Step 3: Review & Confirmation
  - Submission confirmation with success notification: "Exam has been planned successfully."

## How to Run

Open `index.html` (or any `.html` file) directly in any modern web browser, or serve using any static web server:

```bash
# Example with Python:
python -m http.server 8000
```
