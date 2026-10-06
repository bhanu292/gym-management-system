const members = JSON.parse(localStorage.getItem("members")) || [];
const attendance = JSON.parse(localStorage.getItem("attendance")) || [];
const payments = JSON.parse(localStorage.getItem("payments")) || [];

// Total Members

document.getElementById("totalMembers").textContent =
    members.length;

// Active Members

const activeMembers = members.filter(
    member => member.status === "Active"
);

document.getElementById("activeMembers").textContent =
    activeMembers.length;

// Monthly Income

const monthlyIncome = payments.reduce(
    (total, payment) =>
        total + Number(payment.amount),
    0
);

document.getElementById("monthlyIncome").textContent =
    `₹${monthlyIncome}`;

// Attendance

document.getElementById("totalAttendance").textContent =
    attendance.length;

// Print

function printReport() {
    window.print();
}