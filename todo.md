Привет, подробил проект на задачи, в квадратных скобках написал сколько примерно в часах займет каждая.

# Общее [11]


1) поддержать переключение по 1 картинке ()
2) главная или фотки или модели, отключить news
3)




[x] (1) разработать архитектуру бд
[x] (3) сделать верстку зависещей от данных
[ ] (1) сохранять данные при сабмите application
[ ] (3) слать email при сабмите application
[ ] (3) правки верстки:
 — контакты (переделать)
 — главная (добавить social links)
 [x] отображение превьюшек новостей (центрирование, макс. 3 в ряд)
 [x] слайдер: поддержать слайд двух вертикальных
 — слайдер: поддержать слайд фото + текст

# PDF-генерация [4]

[ ] (2) написать html -> pdf функцию
[ ] (1) сверстать pdf-вид
[ ] (1) логика pdf-генерации (две вертикальные из базы на одной странице)

# Админка [23]

[x] (4) разработка и верстка админ-интерфейсов
[x] (3) отображение данных из базы в интерфейсе
[x] (12) создание/удаление/редактирование всех видов данных
[x] (3) drag-and-drop интерфейс
[x] (1) обработка изображений при сохранении

# Развертывание [3]

[ ] (1) настройка сервера и бд
[ ] (1) деплой-скрипты
[ ] (1) автодампы базы





main page
  - social links like http://dnkmodels.com/

news
  [x] no categories
  - sort by month + year
  [x] vertical only
  [x] max 3 in a row
  [x] news and models are assosiated (m2m)
  [x] preview is first from all

join
  - send form to email (link)
  - view full screen images

pdf choose photos
  - only vertical
  - 2 per page
  - name + params on every page
  - file:///Users/imkost/Downloads/SUCCESS%20MODELS%20SHOWPACK%20SS%2018.pdf
  - agency information on every page

contacts
  [x] like http://dnkmodels.com/contacts/

