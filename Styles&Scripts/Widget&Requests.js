// Константа Исходного текста запросов - передаем строку с запросами через запятую.
const initialText = 'проблемы в общении, поиск себя, неуверенность в себе/низкая самооценка, трудности в отношениях, прокрастинация/выгорание, стресс/депрессия, тревоги, страхи, отношения в семье, детско-родительские отношения, сексуальные отношения, непонятные эмоции, апатия/потеря смысла жизни, карьера/планы/деньги, навязчивые мысли, релокация/иммиграция, семейная/парная терапия'
// Константа ссылки на виджет -  передаюм строку src на виджет онлайн бронирования.
const widgetLink = "https://lk.teta.su/frame?doctor=1686149&clinic=24457&hideClinic=true&hideService=true&consultationType=visit&uuid=91040568-4b56-4db2-a93c-4dfcda2f030b";
// Создаем массив исходных текстов запросов по разделителю запятая с пробелом.
const initialTextsArray = initialText.split(', ');

// Находим на странице родительский блок для виджета.
let widgetParent = document.querySelector('.t762__col:last-of-type');
// Находим на странице родительский блок для запросов.
let requestsParent = document.querySelector('.t762');

// Создаем переменную с iframe для вставки виджета.
let widgetContainer = document.createElement('iframe');
// Создаем контейнер для списка запросов.
let requestsContainer = document.createElement('div');   
// Создаем список запросов.
let requestsList = document.createElement('ul');

// Добавлем класс для контейнера виджета.
widgetContainer.className = 'widget__container';
// Добавляем source атрибут контейнеру виджета.
widgetContainer.src = widgetLink;
// Добавляем класс контейнеру запросов.
requestsContainer.className = 'requests__container';
// Добавляем класс списку запросов.
requestsList.className = 'requests__list';

// Проходимся по массиву запросов и создаем новый элемент.
initialTextsArray.map((item) => {
  // Создаем элемент списка запросов.
  let requestsText = document.createElement('li');
  // Добавляем запросы текст.
  requestsText.textContent = item;
  // Добавляем запросу класс.
  requestsText.className = 'requests__text';
  // Вставляем запрос в список
  requestsList.appendChild(requestsText)
});

// Добавляем в контейнер запросов список
requestsContainer.appendChild(requestsList);

// Добавляем виджет в родительский контейнер
widgetParent.appendChild(widgetContainer);
// Добавляем контейнер запросов в родительский контейнер
requestsParent.appendChild(requestsContainer);