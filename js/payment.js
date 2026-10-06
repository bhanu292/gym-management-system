const memberSelect = document.getElementById("memberSelect");
const amountInput = document.getElementById("amount");
const monthSelect = document.getElementById("month");
const payBtn = document.getElementById("payBtn");
const paymentTable = document.getElementById("paymentTable");

let members = JSON.parse(localStorage.getItem("members")) || [];
let payments = JSON.parse(localStorage.getItem("payments")) || [];

// Remove payments whose members no longer exist

payments = payments.filter(payment => {

    return members.some(member =>

        Number(member.id) === Number(payment.memberId)

    );

});

localStorage.setItem(
    "payments",
    JSON.stringify(payments)
);

// Load members in dropdown

function loadMembers() {

    memberSelect.innerHTML =
        '<option value="">Select Member</option>';

    members.forEach(member => {

        memberSelect.innerHTML += `

        <option value="${member.id}">
            ${member.name}
        </option>

        `;
    });
}

loadMembers();

// Display payments

function displayPayments() {

    paymentTable.innerHTML = "";

    payments.forEach(payment => {

        const member = members.find(
            m => m.id == payment.memberId
        );

        paymentTable.innerHTML += `

        <tr>

            <td>${member ? member.name : "Unknown"}</td>

            <td>₹${payment.amount}</td>

            <td>${payment.month}</td>

            <td>${payment.status}</td>

            <td>

                <button
                    class="receipt-btn"
                    onclick="downloadReceipt(${payment.id})">

                    Download

                </button>

            </td>

        </tr>

        `;
    });
}

displayPayments();

// Create payment

payBtn.addEventListener("click", () => {

    const payment = {

        id: Date.now(),
        memberId: Number(memberSelect.value),
        amount: amountInput.value,
        month: monthSelect.value,
        status: "Paid"

    };

    if (
        !payment.memberId ||
        !payment.amount ||
        !payment.month
    ) {

        alert("Please fill all fields.");
        return;
    }

    payments.push(payment);

    localStorage.setItem(
        "payments",
        JSON.stringify(payments)
    );

    displayPayments();

    amountInput.value = "";
    monthSelect.value = "";

    alert("Payment added successfully!");

});

// Download receipt

function downloadReceipt(id) {

    const payment = payments.find(
        item => Number(item.id) === Number(id)
    );

    if (!payment) {
        alert("payment not found!");
        return;
    }

    const member = members.find(
        m => Number(m.id) === Number(payment.memberId)
    );

    if (!member) {
        alert("Member not found!");
        return;
    }

    const receipt = `

GYM RECEIPT
------------------------

Member : ${member.name}

phone :${member.phone}

Amount : ₹${payment.amount}

Month : ${payment.month}

Status : ${payment.status}

Receipt ID : ${payment.id}

`;

    const blob = new Blob([receipt], {
         type: "text/plain" 
        });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = `receipt-${payment.id}.txt`;

    link.click();
}