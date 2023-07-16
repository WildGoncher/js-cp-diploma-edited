function request(callback, data) {
  let url = "https://jscp-diplom.netoserver.ru/";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onload = function () {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    } else {
      alert("Ошибка: " + xhr.status);
    }
  };

  xhr.onerror = function () {
    alert("Ошибка сети/неправильный URL");
  };

  xhr.send(data);
}
