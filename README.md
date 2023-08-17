## Запуск

1. Установите все необходимые зависимости

```shell
npm install
```

1.2 Соберите проект командой

```shell
npm run build
```

1.3 Запустите проект командой

```shell
npm run start
```

## Сборка под linux

```bash
npm run build:linux
```
## Сборка под windows

```bash
npm run build:win
```

## TypeScript, ESLint, Prettier, Husky

```bash
# Проверка линтером
$ npm run lint

# Исправление ошибок линтера
$ npm run lint:fix

# Проверка prettier
$ npm run prettier

# Исправление ошибок prettier
$ npm run prettier:fix
```

В проекте используется husky. При коммите запускается pre-commit hook, который запускает команды на проверку типов, линтер, prettier.
Так же проверяется сообщение коммита.

## Валидный шаблон сообщения коммита

```bash
chore: first commit
fix(server): #13 send cors headers
feat(blog): add comment section
```

## Типы коммитов<type>:

-   **feat** - используется при добавлении новой функциональности уровня приложения
-   **fix** - если исправили какую-то серьезную багу
-   **docs** - всё, что касается документации
-   **style** - исправляем опечатки, исправляем форматирование
-   **refactor** - рефакторинг кода приложения
-   **test** - всё, что связано с тестированием
-   **chore** - обычное обслуживание кода
-   **ci** - всё, что связано с ci/cd

Можно указывать несколько типов через запятую.
