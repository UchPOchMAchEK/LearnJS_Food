//Глобальный обработчик событий
window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item'), //Вкладки
        tabsContent = document.querySelectorAll('.tabcontent'), //Контент
        tabsParent = document.querySelector('.tabheader__items'); //Блок вкладок

    //Скрытие ненужного контента
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });

        //Изменение классов активности
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    //Отображение контента
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    //Обработчик событий клика
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) { //Проверка на попадание в tab
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});