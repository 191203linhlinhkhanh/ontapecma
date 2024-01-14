users.forEach(function (user) {
  var li = document.createElement("li");
  var genderText = user.gender === 1 ? "male" : "female";
  var liContent = document.createTextNode(
    user.id + " - " + user.name + " - " + genderText
  );
  li.appendChild(liContent);
  li.classList.add("user_item", user.gender === 1 ? "male" : "female");
  target.appendChild(li);
});
