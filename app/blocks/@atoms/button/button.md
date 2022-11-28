# Компонент button

## Код

```twig
{% view '@button' with {
    button: {
      class: "test-btn",
      href: "#",
      text: {
        class: "test-class-text",
        text: "test button text"
      },
      icon: {

      }
    }
} %}
```

## Параметры

`href` - если указан, то ссылка

`class` - дополнительные классы

`text` - объект с двумя свойства - class (класс текста) и text (текст кнопки)

`icon` - иконка с кнопкой