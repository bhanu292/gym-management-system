const editForm = document.getElementById("editForm");

const memberId = Number(
    localStorage.getItem("editMemberId")
);

let members = JSON.parse(
    localStorage.getItem("members")
) || [];

const member = members.find(
    member => member.id === memberId
);

// If member not found

if (!member) {

    alert("Member not found!");

    window.location.href = "members.html";
}

// Fill form

document.getElementById("name").value = member.name;

document.getElementById("age").value = member.age;

document.getElementById("gender").value = member.gender;

document.getElementById("phone").value = member.phone;

document.getElementById("email").value = member.email;

document.getElementById("membership").value =
    member.membership;

document.getElementById("joinDate").value =
    member.joinDate;

document.getElementById("status").value =
    member.status;

// Update member

editForm.addEventListener("submit", function (e) {

    e.preventDefault();

    member.name = document.getElementById("name").value;

    member.age = document.getElementById("age").value;

    member.gender =
        document.getElementById("gender").value;

    member.phone =
        document.getElementById("phone").value;

    member.email =
        document.getElementById("email").value;

    member.membership =
        document.getElementById("membership").value;

    member.joinDate =
        document.getElementById("joinDate").value;

    member.status =
        document.getElementById("status").value;

    localStorage.setItem(
        "members",
        JSON.stringify(members)
    );

    localStorage.removeItem("editMemberId");

    alert("Member updated successfully!");

    window.location.href = "members.html";

});