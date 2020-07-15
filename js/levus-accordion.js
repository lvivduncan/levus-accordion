// задротський варіант =)
// document.querySelectorAll('.levus-accordion .title').forEach(item => item.addEventListener('click', () => item.nextElementSibling.classList.toggle('show')));

/* document.querySelectorAll('.levus-accordion .title').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('open');
        this.nextElementSibling.classList.toggle('show');
    })
}); */

// 15-07-2020
class Accordion {
    constructor(title) {
            this.title = document.querySelectorAll(title);
        }
        // якщо тре розкривати/закривати тільки 1
    single() {
        this.title.forEach(item => {
            item.addEventListener('click', function() {
                this.classList.toggle('open');
                this.nextElementSibling.classList.toggle('show');
            })
        });
    }
    static closeAll() {
            this.title.forEach(item => {
                console.log(this.title)
                console.log(item)
            });
        }
        // якщо розкриває 1 і закриває усі решта
    multiply() {
        this.title.forEach(item => {
            const all = this.title;

            item.addEventListener('click', function() {

                all.forEach(item => {
                    item.classList.remove('open');
                    item.nextElementSibling.classList.remove('show');
                });

                this.classList.toggle('open');
                this.nextElementSibling.classList.toggle('show');
            })
        });
    }
}

// document.querySelectorAll('.levus-accordion .title') && new Accordion('.levus-accordion .title').single();
document.querySelectorAll('.levus-accordion .title') && new Accordion('.levus-accordion .title').multiply();