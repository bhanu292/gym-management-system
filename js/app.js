const totalMembers = document.getElementById("totalMembers");
const activeMembers = document.getElementById("activeMembers");
const todayAttendance = document.getElementById("todayAttendance");
const monthlyIncome = document.getElementById("monthlyIncome");

let members =JSON.parse(localStorage.getItem("members")) || [];
totalMembers.innerText = members.length;
activeMembers.innerText = members.length;
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
let presentCount = attendance.filter(function (record) {
    return record.status === "Present";
}).length;
todayAttendance.innerText = presentCount;

let payments = JSON.parse(localStorage.getItem("payments")) || [];
let income = 0;
payments.forEach(function(payment){
        income += Number(payment.amount);
});
monthlyIncome.innerText = "₹" + income;