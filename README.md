## В чем польза проекта?
Четыре года назад я основал линейку региональных рейтинговых турниров по историческому фехтованию в клубе NoName. Для этого написал MVP бекенд и бота на C#. С годами турниры не только не прекратились, но и растут. Стало понятно, что нужен полноценный фронт. Как организаторам, так и участникам.

## Технические особенности

### Технологии
React, Typescript, CSS Modules, FSD, Webpack

### Архитектура - FSD
Не лучшее решение для маленького проекта. Но я решил, что оно того стоит, потому что:
1. Это хорошая возможность попрактиковаться в востребованной архитектурной методологии
2. Проект имеет реальные шансы жить долго и разрастаться. Как я понимаю, переход на FSD с другой архитектуры довольно тяжелое занятие. Поэтому лучше заложить сразу.

### Билд
Webpack конфиг написан с нуля. Используются только актуальные зависимости, node_modules не раздут. Чем меньше зависимостей, тем проще ими управлять + экономим время сборки.
Декомпозиция конфига простая и понятная, а значит легко дорабатывать.

### lazy-loading
Использую ленивую загрузку, чтобы подгружать только то, что необходимо. При текущих размерах проекта это несет учебную, а не практическую цель.

### Светлая и темная темы
В приложении реализованы две цветовые темы. Код написан так, что добавить новую тему можно буквально несколькими строчками кода.

### CSS
Для простоты разработки и уникальности имён используются CSS Modules.
Я отказался от препроцессоров, потому что решил, что хочу сэкономить время сборки. И что пока обычных возможностей CSS проекту хватает.

### Ближайшие планы
Реализую функциональность отправки и получения боев
