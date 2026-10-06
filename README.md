🏋️ Gym Management System

A simple and user-friendly Gym Management System built with HTML, CSS, and JavaScript.
The project provides a frontend solution for managing gym members, attendance, payments, and basic reports.

All application data is stored in the browser using LocalStorage, so the project does not require a backend or database.

📌 Features

🔐 Admin Login

Admin login page

Email and password validation

Login state stored using LocalStorage

Logout option

📊 Dashboard

Total members

Active members

Attendance information

Monthly revenue

Quick navigation to all major modules

👤 Member Management

Add new gym members

View all members

Search members by name or phone number

Edit member details

Delete members

Store member information in LocalStorage

Member details include:

Full name

Age

Gender

Phone number

Email

Membership plan

Joining date

Member status

📝 Attendance Management

Select an attendance date

Search members

Mark members as Present or Absent

Prevent duplicate attendance records for the same member/date

Store attendance records in LocalStorage

📚 Attendance History

View previous attendance records

Filter attendance by date

Edit attendance status

Delete attendance records

Show all attendance records

💳 Payment Management

Select a gym member

Enter payment amount

Select payment month

Record payment as paid

Display payment history

Generate and download a simple payment receipt

📈 Reports & Analytics

Total members

Active members

Total attendance

Monthly income

Print report functionality

🛠️ Technologies Used

Technology

Purpose

HTML5

Page structure and forms

CSS3

Styling, layout, and responsive UI

JavaScript (ES6+)

Application logic and DOM manipulation

LocalStorage

Client-side data persistence

📂 Project Structure

Gym Management System/
│
├── index.html
├── dashboard.html
├── add-member.html
├── edit-member.html
├── members.html
├── attendance.html
├── attendance-history.html
├── payments.html
├── reports.html
│
├── css/
│   ├── style.css
│   ├── dashboard.css
│   ├── add-member.css
│   ├── members.css
│   ├── attendance.css
│   ├── attendance-history.css
│   ├── payments.css
│   └── reports.css
│
├── js/
│   ├── login.js
│   ├── app.js
│   ├── dashboard.js
│   ├── add-member.js
│   ├── edit-member.js
│   ├── members.js
│   ├── attendance.js
│   ├── attendance-history.js
│   ├── payment.js
│   ├── reports.js
│   ├── expiry.js
│   └── script.js

💾 Data Storage

This project uses the browser's LocalStorage API instead of a backend database.

The application stores data such as:

members
attendance
payments
isLoggedIn

Because LocalStorage is browser-specific:

Data is stored locally on the user's device/browser.

Data is not shared between different browsers or devices.

Clearing browser storage can remove application data.

This project does not provide server-side data synchronization.

🔮 Future Improvements

The project can be further improved by adding:

Backend API using Node.js and Express.js

MongoDB database

Secure authentication with hashed passwords

JWT-based authorization

User roles such as Admin and Staff

Membership expiry notifications

Automatic membership renewal

Online payment integration

Charts and advanced analytics

Responsive mobile-first UI improvements

Cloud database storage

Data backup and restore

Member profile pages

Email/SMS notifications

Deployment to a cloud hosting platform