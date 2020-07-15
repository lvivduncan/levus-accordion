# levus-accordion

Простий ``class``, який може 2 речі:

1. відкривати/закривати плашку
2. відкривати плашку, автоматично закриваючи всі інші

Демо: https://lvivduncan.github.io/levus-accordion/

Для першого варіанту використовувати такий код: <br>```document.querySelectorAll('.levus-accordion .title') && new Accordion('.levus-accordion .title').single();```

Для другого варіанту такий: <br>```document.querySelectorAll('.levus-accordion .title') && new Accordion('.levus-accordion .title').multiply();```