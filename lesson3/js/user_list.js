// ユーザーデータの配列
var users = [
  { id: 1, name: "User1", email: "user1@example.com", password: "xxxxxx" },
  { id: 2, name: "User2", email: "user2@example.com", password: "xxxxxx" },
  { id: 3, name: "User3", email: "user3@example.com", password: "xxxxxx" },
];

// テーブルのtbodyにユーザーデータを動的に追加する関数
function populateTable() {
  var tbody = document.getElementById("userTableBody");

  // ユーザーデータの配列をループして、テーブルの行を生成し、tbodyに追加する
  users.forEach(function (user) {
    var row = document.createElement("tr");

    // ID列
    var idCell = document.createElement("td");
    idCell.textContent = user.id;
    row.appendChild(idCell);

    // Name列
    var nameCell = document.createElement("td");
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    // Email列
    var emailCell = document.createElement("td");
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    tbody.appendChild(row);
  });
}

// ページがロードされたらテーブルを動的に生成する
document.addEventListener("DOMContentLoaded", function () {
  populateTable();
});
