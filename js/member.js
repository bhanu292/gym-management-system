const memberForm = document.getElementById("memberForm");
let members = JSON.parse(localStorage.getItem("members")) || [];
let editIndex = localStorage.getItem("editIndex");
if (editIndex !== null) {

    const member = members[editIndex];

    document.getElementById("name").value = member.name;
    document.getElementById("age").value = member.age;
    document.getElementById("gender").value = member.gender;
    document.getElementById("phone").value = member.phone;
    document.getElementById("email").value = member.email;
    document.getElementById("membership").value = member.membership;
    document.getElementById("startDate").value = member.startDate || "";

    document.querySelector("button[type='submit']").innerText = "Update Member";
}

memberForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const member = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        membership: document.getElementById("membership").value,
        startDate: document.getElementById("startDate").value
    };

    if (editIndex !== null) {

        members[editIndex] = member;
        localStorage.removeItem("editIndex");

    } else {

        members.push(member);

    }

    localStorage.setItem("members", JSON.stringify(members));

    alert(editIndex !== null ? "Member Updated Successfully!" : "Member Added Successfully!");

    window.location.href = "members.html";

});