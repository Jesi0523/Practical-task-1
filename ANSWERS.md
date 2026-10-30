# QUESTIONS AND ANSWERS

## ENGLISH

1. What is the default value of `flexDirection` in React Native? How is it different from CSS on the web?

- The default value of `flexDirection` in React Native is `column`. The difference between React Native and CSS on the web is that in CSS the default value is `row`.

2. What is the difference between `justifyContent` and `alignItems`?

- The difference is that `justifyContent` aligns child elements along the main axis, while `alignItems` aligns them along the cross axis.

3. What does `flex: 1` do inside a row? And on the outermost `View` of a screen?

- Inside a row, the `flex: 1` property allows child elements to proportionally occupy the available space within that same row. If the same property is applied to an outer `View`, it will occupy all the available space within its parent container.

4. What is the difference between `resizeMode="cover"` and `resizeMode="contain"`?

- The difference is that `resizeMode="cover"` scales the image to cover the entire space of the parent container, but it may cut the image. On the other hand, `resizeMode="contain"` scales the image to fit inside the parent container, but it may leave some empty space.

5. Why do we use `StyleSheet.create` instead of plain objects inside the JSX?

- Because it allows us to reuse the same style across multiple components. It also helps organize the code and is a good practice for keeping it clean.

6. Why does a shadow written with `shadowColor` not appear on Android?

- Because shadow properties do not work the same way across all operating systems. That is why elevation is used on Android to achieve this effect.

## ESPAÑOL

1. ¿Cuál es el valor predeterminado de `flexDirection` en React Native? ¿En qué se diferencia del CSS en la web?

- El valor por defecto de `flexDirection` en React Native es `column`. La diferencia de esa propiedad en React Native y el CSS de la web es que en la web el valor por defecto es `row`.

2. ¿Cuál es la diferencia entre `justifyContent` y `alignItems`?

- La diferencia es que `justifyContent` alinea los elementos hijos en el eje principal, mientras que `alignItems` los alinea en el eje secundario.

3. ¿Qué hace `flex: 1` dentro de una fila? ¿Y cuando se aplica al `View` más externo de una pantalla?

- Dentro de una fila, la propiedad `flex: 1` permite que los elementos hijos ocupen proporcionalmente el espacio disponible dentro de esa misma fila. Si se aplica esa misma propiedad a un `View` externo, este ocupará todo el espacio disponible de su contenedor padre. 

4. ¿Cuál es la diferencia entre `resizeMode="cover"` y `resizeMode="contain"`?

- La diferencia es que `resizeMode="cover"` escala la imagen hasta que cubra todo el espacio del contenedor padre, pero puede que se recorte la imagen, mientras que `resizeMode="contain"` escala la imagen para que esté dentro del contenedor padre, pero puede que no cubra todo el espacio del contenedor padre.

5. ¿Por qué utilizamos `StyleSheet.create` en lugar de objetos simples dentro del JSX?

- Porque puedes reutilizar un estilo a varios componentes. Además de que permite organizar mejor el código, es una mejor práctica y ayuda a tener un código limpio.

6. ¿Por qué una sombra definida con `shadowColor` no aparece en Android?

- Porque no tiene soporte en todos los sistemas operativos, es por ello que en Android se usa `elevation` para lograr el mismo efecto.