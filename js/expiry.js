const expiryBody = document.getElementById("expiryBody");
const searchMembership = document.getElementById("searchMembership");

let members = JSON.parse(localStorage.getItem("members")) || [];

function loadExpiryMembers(memberList) {

    expiryBody.innerHTML = "";

    if (memberList.length === 0) {

        expiryBody.innerHTML = `
            <tr>
                <td colspan="6">No Members Found</td>
            </tr>
        `;

        return;
    }

    memberList.forEach(function (member) {

        let startDate = new Date(member.startDate);

        let expiryDate = new Date(startDate);

        switch (member.membership) {

            case "Monthly":
                expiryDate.setMonth(expiryDate.getMonth() + 1);
                break;

            case "Quarterly":
                expiryDate.setMonth(expiryDate.getMonth() + 3);
                break;

            case "Half-Yearly":
                expiryDate.setMonth(expiryDate.getMonth() + 6);
                break;

            case "Yearly":
                expiryDate.setFullYear(expiryDate.getFullYear() + 1);
                break;
        }

        const today = new Date();

        const difference = expiryDate.getTime() - today.getTime();

        const daysLeft = Math.ceil(
            difference / (1000 * 60 * 60 * 24)
        );

        const status = daysLeft >= 0 ? "Active" : "Expired";

        expiryBody.innerHTML += `
            <tr>

                <td>${member.name}</td>

                <td>${member.membership}</td>

                <td>${member.startDate}</td>

                <td>${expiryDate.toLocaleDateString()}</td>

                <td>${daysLeft >= 0 ? daysLeft : 0}</td>

                <td class="${status === "Active" ? "active" : "expired"}">
                    ${status}
                </td>

            </tr>
        `;

    });

}

loadExpiryMembers(members);

searchMembership.addEventListener("keyup", function () {

    const value = searchMembership.value.toLowerCase().trim();

    const filteredMembers = members.filter(function (member) {

        return member.name.toLowerCase().includes(value);

    });

    loadExpiryMembers(filteredMembers);

});