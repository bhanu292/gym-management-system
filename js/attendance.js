const attendanceTable = document.getElementById("attendanceTable");
const searchInput = document.getElementById("search");
const attendanceDate = document.getElementById("attendanceDate");

attendanceDate.value = new Date().toISOString().split("T")[0];

let members = JSON.parse(localStorage.getItem("members")) || [];
let attendance = JSON.parse(localStorage.getItem("attendance")) || [];

// Display members

function displayMembers(memberList) {

    attendanceTable.innerHTML = "";

    if (memberList.length === 0) {

        attendanceTable.innerHTML = `
        <tr>
        <td colspan="4">No members found</td>
        </tr>
        `;
        return;
    }

    const selectedDate = attendanceDate.value;

    memberList.forEach(member => {

        const existingAttendance = attendance.find(item =>

            Number(item.memberId) === Number(member.id) &&
            item.date === selectedDate

        );

        const currentStatus = existingAttendance
            ? existingAttendance.status
            : "Not Marked";

        attendanceTable.innerHTML += `

        <tr>

            <td>${member.name}</td>

            <td>${member.phone}</td>

            <td id="status-${member.id}">
                ${currentStatus}
            </td>

            <td>

                <button
                    class="present-btn"
                    onclick="markAttendance(${member.id}, 'Present')">
                    Present
                </button>

                <button
                    class="absent-btn"
                    onclick="markAttendance(${member.id}, 'Absent')">
                    Absent
                </button>

            </td>

        </tr>

        `;
    });

}
// Search by name

searchInput.addEventListener("input", function () {

    const value = searchInput.value.toLowerCase();

    const filteredMembers = members.filter(member =>
        member.name.toLowerCase().includes(value)
    );

    displayMembers(filteredMembers);

});
// Refresh on date change

attendanceDate.addEventListener("change", function () {

    displayMembers(members);

});

// Mark attendance

function markAttendance(memberId, status) {

    const selectedDate = attendanceDate.value;

    const existing = attendance.find(item =>

        Number(item.memberId) === Number(memberId) &&
        item.date === selectedDate

    );

    if (existing) {

        existing.status = status;

    } else {

        attendance.push({

            memberId: Number(memberId),
            date: selectedDate,
            status: status

        });

    }

    localStorage.setItem(
        "attendance",
        JSON.stringify(attendance)
    );

    displayMembers(members);

    alert(`Attendance marked as ${status}`);

}

// Initial display

displayMembers(members);