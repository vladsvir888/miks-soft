# Компонент image

## Код

```twig
{% view '@image' with {
    image: {
      class: "test-class",
      name: "test-img",
      alt: "test-alt",
      sizes: {
        width: 500,
        height: 500
      },
      lazy: false
    }
} %}
```

## Параметры

`class` - дополнительные классы

`sizes` - размеры, объект с двумя свойствами width и height

`name` - имя картинки

`alt` - альтернативный текст картинки

`lazy` - картинка с lazyload, по дефолту true, т е с lazyload