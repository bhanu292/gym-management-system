const historyTable = document.getElementById("historyTable");
const filterDate = document.getElementById("filterDate");
const showAllBtn = document.getElementById("showAllBtn");

let attendance = JSON.parse(localStorage.getItem("attendance")) || [];
let members = JSON.parse(localStorage.getItem("members")) || [];

// Display records

function displayRecords(records) {

    historyTable.innerHTML = "";

    records.forEach((record, index) => {

        const member = members.find(
            m => m.id === record.memberId
        );

        historyTable.innerHTML += `

        <tr>

            <td>${member ? member.name : "Unknown"}</td>

            <td>${member ? member.phone : "-"}</td>

            <td>${record.date}</td>

            <td>${record.status}</td>

            <td>

                <button
                    class="edit-btn"
                    onclick="editAttendance(${index})">
                    Edit
                </button>

                <button
                    class="delete-btn"
                    onclick="deleteAttendance(${index})">
                    Delete
                </button>

            </td>

        </tr>

        `;
    });
}

displayRecords(attendance);

// Filter by date

filterDate.addEventListener("change", () => {

    const selectedDate = filterDate.value;

    const filtered = attendance.filter(
        record => record.date === selectedDate
    );

    displayRecords(filtered);
});

// Show all

showAllBtn.addEventListener("click", () => {

    displayRecords(attendance);

});

// Edit attendance

function editAttendance(index) {

    const newStatus = prompt(
        "Enter status (Present / Absent)"
    );

    if (
        newStatus === "Present" ||
        newStatus === "Absent"
    ) {

        attendance[index].status = newStatus;

        localStorage.setItem(
            "attendance",
            JSON.stringify(attendance)
        );

        displayRecords(attendance);
    }
}

// Delete attendance

function deleteAttendance(index) {

    const confirmDelete = confirm(
        "Delete this record?"
    );

    if (confirmDelete) {

        attendance.splice(index, 1);

        localStorage.setItem(
            "attendance",
            JSON.stringify(attendance)
        );

        displayRecords(attendance);
    }
}