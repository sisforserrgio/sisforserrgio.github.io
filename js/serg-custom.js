
$('#FFAB').click(function() {
    if ($('#FFAB').hasClass('active')){
         $('.overlay').css({
        'opacity': '0.9',
             'transform': 'scale(0)',
             /*'background-color': '#f44336'*/
    })
    } else {
         $('.overlay').css({
        'opacity': '0.9',
             'transform': 'scale(120)',
             'background-color': '#fff'
    })
      }
});

$('#overlay').click(function() {
    $('.fixed-action-btn').closeFAB();
    $('.overlay').css({
        'opacity': '0.9',
        'transform': 'scale(0)'
    })
});



//TYPED.JS SETTINGS


$(function () {
    $(".typetype").typed({
        strings: ["Лара","Евдуша","Леня","Лидуха","Алеша","Антонинка","Ольгуша","Еммануил","Евдуня","Людуся","Моня","Витушка","Лека","Ульяха","Кирюша","Аннечка","Яня","Светуха","Варюха","Машука","Митрич","Анастасей","Олена","Гуля","Геруша","Роня","Лилиана","Федан","Енюта","Таиска","Алексинка","Людмил","Рона","Филюха","Матяха","Тимофей","Анастасиюшка","Эдюня","Антонин","Витуня","Дрона","Марга","Натаха","Толяха","Аря","Марьяха","Петруха","Нинура","Конон","Инеска","Лукася","Федор","Алексей","Ронюша","Стеша","Юраша","Ядя","Кирюня","Ефросиныч","Михайлинка","Лизуха","Дина","Палюня","Емеля","Нил","Иня","Грунятка","Милюша","Людаша","Дария","Алексий","Дуклида","Нонуся","Мир","Лукинична","Аннуся","Димаша","Таиса","Малания","Виня","Иша","Галюся","Евдоня","Владимир","Любаха","Эмиля","Ефросиньюшка","Генюся","Христюша","Яна","Павлик","Сергеич","Васяха","Ростиславка","Петюня","Руся","Вася","Юлюся","Варюся","Евгеньич","Таися","Емельяныч","Паля","Эльвира","Людаха","Санюша","Павлиныч","Поляна","Алека","Ася","Витяхя","Вероник","Нинока","Летта","Лаврюша","Маня","Дося","Ваня","Полюся","Катюля","Геля","Вовуша","Васюня","Има","Дуня","Ангеля","Генюха","Катюня","Вовуня","Лексана","Ноня","Владя","Левонтий","Кузюта","Лин","Киряша","Викторина","Максимка","Гога","Борислав","Оляня","Витюля","Матфей","Граша","Лела","Толюня","Марьяна","Меланья","Танюся","Евка","Володяша","Русланыч","Майка","Женюра","Лидуля","Ануся","Тора","Вераха","Данило","Евдя","Маринуша","Альбин","Викториныч","Димуля","Дашуня","Армен","Эмилия","Петруся","Микита","Линуша","Лизаветка","Христинья","Ефросин","Станислав","Олюся","Витяня","Аннюся","Павлуса","Валерия","Василисса","Игуся","Юня","Маргоша","Виталий","Кирилл","Василиса","Лукаря","Васяй","Мариша","Арюша","Вероня","Паха","Матяша","Маримьянка","Дашуля","Ритуня","Егуня","Елена","Арсюта","Васюша","Тонюра","Толяша","Емилий","Анастасий","Макс","Сашуня","Иванна","Екатерина","Лаврюха","Арся","Валер","Пава","Меля","Кузя","Ядвига","Тонюся","Горя","Ким","Леонтий","Нинелька","Кирила","Эсфирь","Марюха","Марьяся","Натаня","Амалия","Сюра","Василиск","Тамара","Эма","Кузьминична","Катуня","Эсфира","Лукич","Владиславка","Митюша","Ростислава","Петруня","Шура","Вадимыч","Витюня","Иулиана","Вениаминка","Нюра","Виша","Лавруха","Тонюня","Дануся","Егорий","Васс","Машара","Ритуша","Юша","Грипа","Лизута","Иуния","Корнелий","Юла","Аксюха","Вяча","Ростяна","Варварий","Андроша","Меланьюшка","Петюша","Лукаша","Захария","Лариса","Алексаша","Эвелина","Ирена","Павлуся","Евгеха","Николаха","Валяха","Андроник","Антоний","Ольга","Манюня","Елюся","Желика","Кулина","Вила","Валерьяныч","Нина","Анюша","Гуня","Юния","Авдоня","Ируня","Евгеныч","Луизка","Колюся","Зина","Веля","Сенюша","Феоза","Идуся","Варюта","Риммична","Лера","Альбинка","Лидуша","Люсиша","Танюша","Сергейка","Мина","Татьяна","Анатолия","Манюра","Эмилианыч","Арсен","Костюха","Инесса","Настеха","Серж","Настуня","Албина","Дюся","Николаич","Груша","Милана","Ивасик","Владимирыч","Макся","Фленка","Дарина","Пашата","Манюся","Костюня","Нюрася","Аникитич","Филипп","Ола","Марианыч","Виолка","Лена","Поликсюша","Евдокуша","Станиславка","Гермес","Аграфенка","Ириша","Настасья","Галла","Иоанн","Андрей","Даруня","Марьян","Леоныч","Ксюта","Люда","Коляша","Ланя","Михаил","Фрося","Дмитрич","Артемия","Полина","Доша","Наталья","Витя","Адамыч","Марина","Ритоха","Ариша","Зоря","Васюра","Евдения","Даня","Корнейка","Емельян","Венюра","Анастасьюшка","Игоша","Ируша","Натала","Эмма","Евдокея","Глебка","Иваныч","Артамон","Руслана","Марлен","Ольгуня","Панюша","Рена","Алиска","Корнюха","Тоня","Аникита","Витуля","Аксиньюшка","Ладуся","Александра","Павлина","Дионисий","Георгий","Ира","Ротя","Коляня","Степанидка","Митрий","Мирон","Викта","Петрай","Людмила","Юлиания","Кама","Деня","Кузена","Катя","Алевтина","Марленка","Кононка","Милена","Софьюшка","Настена","Наталя","Бориславка","Вероничка","Гали","Емилиан","Герма","Аникитка","Маруля","Лексейка","Козьминична","Линуха","Гаша","Виктор","Элюня","Алевтинка","Корнеич","Еленя","Гася","Ольгуся","Дарена","Нилла","Арсений","Галика","Матюша","Коняша","Валенсия","Алюся","Катена","Натолий","Стеня","Виктора","Варя","Филиппина","Христоня","Риммич","Ильинична","Катюша","Киря","Оксана","Вавуля","Феозка","Элюша","Доня","Мишата","Ростя","Виталинка","Ксюра","Леша","Рипа","Аленка","Констанция","Валюня","Марианна","Дана","Лидоня","Корнила","Альба","Пета","Луиза","Димуся","Лада","Боряша","Карина","Кора","Кельтск","Эмилианка","Гала","Сеня","Евдений","Элюна","Тама","Антоныч","Катяха","Таисьюшка","Валюся","Павлуха","Веньямин","Нета","Митра","Мишута","Димитриан","Ион","Светлана","Анатольич","Марися","Олегушка","Петуха","Надюха","Геннадий","Михайла","Нинака","Костяша","Феодора","Полюха","Филипка","Мироныч","Антония","Филя","Софья","Эля","Котя","Сенюра","Славуся","Марьяша","Ангелин","Кирилка","Таня","Валена","Валерьян","Васеня","Ксана","Маря","Петуся","Арсеньич","Миколай","Илия","Корней","Сила","Зорина","Фросюшка","Толяна","Диана","Машуня","Ульян","Егорич","Лина","Матвейка","Витюша","Дениса","Мила","Маняша","Артамоныч","Алена","Федора","Венедей","Стефа","Стина","Гаря","Данил","Нала","Емельянка","Денисий","Викторин","Артемида","Ленин","Тура","Муся","Галиха","Евгеньюшка","Танюра","Маринка","Аида","Веселье","Егор","Тимофеич","Миша","Настя","Авдотька","Дионисия","Любуша","Декабриныч","Камилька","Тимаха","Тонюха","Леруша","Денисья","Ионична","Катерина","Рома","Лавреня","Афросин","Галка","Торя","Вава","Павла","Мариан","Готя","Любуся","Петрята","Наталия","Витюха","Андроня","Полинарий","Николка","Виола","Сенюха","Александрыч","Инуля","Костюра","Маланья","Катюха","Константин","Митя","Максимилиан","Дашута","Митяша","Натоша","Маюня","Лексей","Вовуся","Леоня","Светланка","Христена","Ромаха","Артемей","Вероника","Васяка","Ама","Степаня","Денис","Иван","Геря","Кузяша","Евфросиния","Александрушка","Витуша","Коля","Мишура","Миронка","Амельян","Галинуша","Ларуся","Алевтиныч","Надиша","Мариня","Петряй","Васса","Феозва","Арсюша","Васильюшка","Линыч","Софа","Декабрин","Надюся","Нюша","Коста","Василия","Адамушка","Юлия","Анда","Любаня","Елисавета","Евген","Артамоша","Анастасея","Миня","Ильюша","Мира","Настюха","Ксеша","Тарасыч","Даниша","Пашута","Игорь","Васена","Агрипинка","Веруха","Ростислав","Артамонка","Гена","Евдося","Иляха","Александр","Всева","Груня","Аннуша","Никиха","Марея","Вячеславка","Ануша","Никеша","Доняха","Максиан","Тая","Анастаска","Мишуня","Матвей","Федяка","Всеволодыч","Римуля","Алеха","Витюшка","Паня","Эдя","Сема","Дареша","Стефания","Мария","Валюша","Лидуня","Леонида","Нилыч","Максимиан","Сережа","Лилюша","Павша","Федюка","Лаврентьич","Венедикт","Варварка","Иулиания","Нуня","Доняша","Матя","Зинуля","Аннета","Ульяна","Римуся","Марьяныч","Пашуха","Настюра","Филипий","Петраня","Захарка","Арса","Татуся","Кира","Орина","Инюша","Дениска","Ниноха","Эладка","Миланка","Дуняша","Мишака","Еленка","Лександра","Веня","Алюня","Авдуля","Петраха","Егоня","Маюша","Вира","Настасьюшка","Лилия","Нида","Луня","Томуля","Юрьич","Аленя","Декабринка","Евгена","Алекся","Арсеныч","Левон","Максюта","Ангела","Сона","Эмилий","Дара","Петраша","Линуся","Артемчик","Яша","Васяк","Милуша","Антонюшка","Ромася","Юраня","Дия","Эдуард","Романя","Стася","Иннушка","Наташа","Алексеич","Сашура","Артя","Феля","Ефросиния","Артурка","Ирина","Константинка","Зинура","Мишука","Майя","Зинаша","Галя","Петеша","Мироша","Маля","Сима","Тоша","Элладий","Ярополк","Ироида","Венедикта","Митрей","Ана","Натуня","Эмуня","Людуха","Михаля","Наста","Матвеич","Антоня","Санюта","Козьмич","Ниноша","Миля","Александрин","Романыч","Артемка","Емельяша","Гермуся","Милетий","Галлии","Верка","Никаша","Толя","Гуся","Филипьич","Ена","Нонюся","Михай","Галиша","Шуруня","Андря","Камилл","Дарья","Аксюня","Муня","Боруля","Витаха","Декабрист","Веденей","Маша","Витюся","Павлиня","Антонка","Олеся","Леда","Геннадьич","Арсения","Митраша","Адя","Павлуня","Филиппа","Миленка","Килина","Минаша","Нинона","Виолетта","Митря","Беня","Ленуша","Луконя","Андроныч","Ларуля","Надея","Гана","Витаня","Апа","Артемий","Енюша","Дмитрий","Петоша","Тонюша","Лизуша","Ванюра","Ванята"],
        typeSpeed: 0,
        backSpeed: 4,
        startDelay: 0,
        backDelay: 2500,
        loop: true,
        shuffle: true,
        showCursor: false
        
        });
    });



