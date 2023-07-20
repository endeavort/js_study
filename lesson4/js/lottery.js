var rarities = [
  {
    type: "N",
    name: "Normal",
    color: "black",
    backgroundColor: "white",
    probability: 70,
  },
  {
    type: "R",
    name: "Rare",
    color: "white",
    backgroundColor: "blue",
    probability: 20,
  },
  {
    type: "SR",
    name: "Super Rare",
    color: "white",
    backgroundColor: "green",
    probability: 6,
  },
  {
    type: "SSR",
    name: "Super Special Rare",
    color: "white",
    backgroundColor: "red",
    probability: 3,
  },
  {
    type: "LR",
    name: "Legend",
    color: "#B1063A",
    backgroundColor: "#FFD42F",
    probability: 1,
  },
];

function getRandomItem() {
  var randnum = Math.floor(Math.random() * 100);
  var selectedItem = null;

  // ランダムな確率に基づいてアイテムを選択する
  for (var i = 0; i < rarities.length; i++) {
    if (randnum < rarities[i].probability) {
      selectedItem = rarities[i];
      break;
    } else {
      randnum -= rarities[i].probability;
    }
  }

  return selectedItem;
}

function drawLottery() {
  var text = document.getElementById("text");
  var resultHead = document.getElementById("result-head");
  var resultBody = document.getElementById("result-body");
  var item = getRandomItem();

  resultBody.innerHTML = ""; // テーブルの中身をリセット

  if (item !== null) {
    text.textContent = "以下のアイテムを取得しました！";
    // テーブルを表示
    resultHead.style.display = "table-header-group";

    // テーブルに行を追加
    var row = resultBody.insertRow();
    var typeCell = row.insertCell(0);
    var nameCell = row.insertCell(1);

    // アイテム情報をセルに追加
    typeCell.textContent = item.type;
    typeCell.style.color = item.color;
    typeCell.style.backgroundColor = item.backgroundColor;
    nameCell.textContent = item.name;
  } else {
    text.textContent = "何も当たりませんでした...";
  }
}
