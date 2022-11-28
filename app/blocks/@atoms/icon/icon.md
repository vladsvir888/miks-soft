# Компонент icon

## Код

```twig
{% view '@icon' with {
    icon: {
      class: "test-icon",
      name: "sprite-mono.svg#test-icon",
      sizes: {
        width: 33,
        height: 33
      }
    }
} %}
```

## Параметры

`class` - дополнительные классы

`sizes` - размеры, объект с двумя свойствами width и height

`name` - имя иконки