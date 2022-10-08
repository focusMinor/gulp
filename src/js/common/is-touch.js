// проверка на то зашол ли пользователь на телефоне
let isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      );
   },
};
// получаем тело документа
let body = document.querySelector("body");
// при открытии на мобилке
// any() проверяет любые переменные на значение true
if (isMobile.any()) {
   // добавляем класс дял использования мобилки
   body.classList.add("touch");
} else {
   // добавляем класс использования мышки(при пользовании на компе)
   body.classList.add("mouse");
}
