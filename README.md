# react4_30.08

ДЗ 4. Todo with Lifting State Up: List & Statistics & ColorPicker

👩🏻‍💻 Приклад реалізації у прикріпленому відео.

1. Створюємо компоненту Todo, яка складається з 3-х компонентів:
a. Компонента List:
i. В state містить масив list. Масив рендеримо у вигляді таблички, в якій кожен об'єкт відображається у вигляді <tr> з:
1. Перша <td> – item.title.
a. Якщо item.completed: true, то колір першої td – червоний;
b. Якщо item.completed: false, то колір першої td – зелений;
2. Друга <td> – кнопка:
a. Якщо item.completed: true, то кнопка Delete. При натисканні на кнопку – видаляємо item з масиву і tr з таблички.
b. Якщо item.completed: false, то кнопка Complete. При натисканні на кнопку – змінюємо властивість item.completed на true і ререндимо <tr> (при item.completed: true колір першої td – червоний і кнопка Delete).
b. Компонента Statistics:
i. Виводить список, який відображає статистику масиву з компоненти List:
1. All tasks: кількість об'єктів в масиві List.
2. Completed tasks: кількість об'єктів в масиві List з властивістю completed: true.
3. In progress tasks: кількість об'єктів в масиві List з властивістю completed: false.
ii. При зміні/видаленні об'єктів в компоненті List – статистика має оновлюватись.
c. Компонента ThemeMode:
i. В state містить властивість themeMode зі значенням "light".
ii. Виводть select з варіантами:
1. light – дефолтний варіант. При виборі даного option в компоненті List змінюється кольорова гама (наприклад, фон таблички рожевий, колір border білий).
2. dark – При виборі даного option в компоненті List змінюється кольорова гама (наприклад, фон таблички чорний, колір border і тексту білий).
