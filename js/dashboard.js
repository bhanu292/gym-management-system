// Get data from localStorage

const members = JSON.parse(localStorage.getItem("members")) || [];
const attendance = JSON.parse(localStorage.getItem("attendance")) || [];
const payments = JSON.parse(localStorage.getItem("payments")) || [];

// Dashboard elements

const totalMembersEl = document.getElementById("totalMembers");
const activeMembersEl = document.getElementById("activeMembers");
const incomeEl = document.getElementById("monthlyIncome");
const attendanceEl = document.getElementById("attendance");

// Total members

const totalMembers = members.length;

// Active members

const activeMembers = members.filter(
    member => member.status === "Active"
).length;

// Monthly income

let monthlyIncome = 0;

payments.forEach(payment => {
    monthlyIncome += Number(payment.amount);
});

// Today's attendance

const today = new Date().toISOString().split("T")[0];

const todayAttendance = attendance.filter(
    record =>
        record.date === today &&
        record.status === "Present"
).length;

// Display data

totalMembersEl.textContent = totalMembers;
activeMembersEl.textContent = activeMembers;
incomeEl.textContent = `₹${monthlyIncome}`;
attendanceEl.textContent = todayAttendance;

// Greeting message

const greeting = document.getElementById("greeting");

if (greeting) {
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good Morning";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon";
    } else {
        greeting.textContent = "Good Evening";
    }
}

// Logout

const logoutBtn = document.getElementById("logout");

    if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        window.location.href = "index.html";
    });
}