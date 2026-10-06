const memberForm = document.getElementById("memberForm");

memberForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const member = {
        id: Date.now(),

        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        gender: document.getElementById("gender").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        membership: document.getElementById("membership").value,
        joinDate: document.getElementById("joinDate").value,
        status: document.getElementById("status").value
    };

    let members = JSON.parse(localStorage.getItem("members")) || [];

    members.push(member);

    localStorage.setItem("members", JSON.stringify(members));

    alert("Member added successfully!");

    memberForm.reset();

    window.location.href = "members.html";
});