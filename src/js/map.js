// var myMap;
//
// ymaps.ready(init);
//
// function init() {
//   // Создание экземпляра карты и его привязка к контейнеру с
//   // заданным id ("map").
//   myMap = new ymaps.Map(
//     "map",
//     {
//       // При инициализации карты обязательно нужно указать
//       // её центр и коэффициент масштабирования.
//       center: [59.903646, 30.299408],
//       zoom: 17
//     },
//     {
//       searchControlProvider: "yandex#search"
//     }
//   );
//   myPlacemark = new ymaps.Placemark([59.903670, 30.300669]);
//   myMap.geoObjects.add(myPlacemark);
//   myMap.container.fitToViewport(true);
// }
//
// window.addEventListener("resize", function() {
//   myMap.container.fitToViewport(true);
// });
