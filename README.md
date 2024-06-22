23devs
Тестовое задание.
1. Реализовать html-страницу с формой регистрации. Список полей формы:

    Имя;
    Фамилия;
    Email;
    Пароль;
    Подтверждение пароля;
    Дата рождения. Так же должна присутствовать кнопка "Отправить". Ко всем полям должны быть соответствующие заголовки. Требований по расположению формы, заголовков и полей ввода нет.

2. Реализовать валидацию полей формы средствами Javascript. Требования к валидации

полей формы:

    Поля Имя и Фамилия содержат только допустимые символы для имени и фамилии и должны иметь адекватное ограничение по длине. Адекватность длины придется обосновывать.
    Поле Электронный адрес должно содержать только валидный email-адрес.
    Значения полей Пароль и Подтверждение пароля должны совпадать.
    Минимальная длина пароля 8 символов. Пароль должен содержать минимум одну цифру, по одной заглавной и строчную буквы и один символ.
    Возраст пользователя на момент регистрации в форме должен быть не младше 18 лет.
    Валидация данных должна происходить после ввода пользователем и потере фокуса на элементе формы. Кнопка "Отправить" должна быть заблокирована свойством "disabled", пока пользователь не введёт валидные значения.
    Пользователь должен иметь возможность понять ошибку(и) и исправить их с минимальным количеством попыток.

Требования к реализации:

    Использование любых JS-фреймворков категорически неприемлемо. При невозможности реализовать без JS-фреймворка просьба сообщить об этом сразу.
    Использование любых примеров, найденных в интернете, которые реализуют ту или иную часть задания, категорически неприемлемо.
    Код должен запуститься в браузерах Firefox, Chrome и Edge последних версий.
    Типы элементов формы должны соответствовать вводимым значениям.
    HTML-код страницы должен проходить валидацию через https://validator.w3.org/ Все предупреждения, ошибки и предложения по оптимизации кода, которые выдает валидатор, должны быть устранены (в случае предложений по оптимизации - должны быть учтены).
    Каждый элемент формы должен иметь атрибут id, включая сообщения, используемые для валидации.
    Придерживаемся следующих наименований для инпутов:

    id="first-name"
    id="last-name"
    id="email"
    id="password"
    id="password-confirm"
    id="birth-day"
    id="form-button"

    По результатам валидации, теги form и все элементы формы ( теги input \ textarea \ etc ) дополняются классом "invalid" в случае невалидности формы \ элемента формы и "valid" в случае валидности.
    Сразу после валидного заполнения формы кнопка отправки должна быть разблокирована, т.е. не требуется делать клик вне формы для разблокировки кнопки.
    Результат задания должен быть в виде zip архива со всеми необходимыми файлами для его работы. После распаковки архива, результат задания должен открываться в браузерах, описанных в пункте (3) требований к реализации, без ошибок. Желаем удачи

