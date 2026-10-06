const memberBody = document.getElementById("memberTable");
const search = document.getElementById("search");

let members = JSON.parse(localStorage.getItem("members")) || [];

function displayMembers(memberList) {

    memberBody.innerHTML = "";

    memberList.forEach(function (member) {

        memberBody.innerHTML += `
        <tr>
            <td>${member.name}</td>
            <td>${member.age}</td>
            <td>${member.gender}</td>
            <td>${member.phone}</td>
            <td>${member.email}</td>
            <td>${member.membership}</td>

            <td>
                <button class="edit-btn" onclick="editMember(${member.id})">Edit</button>

                <button class="delete-btn" onclick="deleteMember(${member.id})">Delete</button>
            </td>
        </tr>
        `;

    });

}

displayMembers(members);

function deleteMember(id) {

    if (confirm("Are you sure you want to delete this member?")) {

        members = members.filter(member => member.id !== id);

        localStorage.setItem("members", JSON.stringify(members));

        displayMembers(members);

    }

}
search.addEventListener("keyup", function () {

    const searchValue = search.value.toLowerCase();

    const filteredMembers = members.filter(function (member) {

        return (
            member.name.toLowerCase().includes(searchValue) ||
            member.phone.includes(searchValue)
        );
    });

    displayMembers(filteredMembers);

});
function editMember(id) {

    localStorage.setItem("editMemberId", id);

    window.location.href = "edit-member.html";

}