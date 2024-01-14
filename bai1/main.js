users.forEach(function (user) {
  var li = document.createElement("li");

  // Tạo nội dung của thẻ li
  var genderText = user.gender === 1 ? "male" : "female";
  var liContent = document.createTextNode(
    user.id + " - " + user.name + " - " + genderText
  );

  // Thêm nội dung vào thẻ li
  li.appendChild(liContent);

  // Thêm lớp cho thẻ li tùy thuộc vào giới tính
  li.classList.add("user_item", user.gender === 1 ? "male" : "female");

  // Thêm thẻ li vào phần tử có id là "target"
  target.appendChild(li);
});
