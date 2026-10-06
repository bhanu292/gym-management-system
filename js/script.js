const totalMembers = document.getElementById("totalMembers");
const activeMembers = document.getElementById("activeMembers");
const todayAttendance = document.getElementById("todayAttendance");
const monthlyIncome = document.getElementById("monthlyIncome");

const members = JSON.parse(localStorage.getItem("members")) || [];
const attendance = JSON.parse(localStorage.getItem("attendance")) || [];
const payments = JSON.parse(localStorage.getItem("payments")) || [];

totalMembers.innerText = members.length;

const today = new Date().toISOString().split("T")[0];

const presentMembers = attendance.filter(function (record) {
    return record.date === today && record.status === "Present";
});

todayAttendance.innerText = presentMembers.length;

activeMembers.innerText = members.length;

let income = 0;

payments.forEach(function (payment) {
    income += Number(payment.amount);
});

monthlyIncome.innerText = "₹" + income;