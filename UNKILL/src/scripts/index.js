// Burger Menu

const burgerBtn = document.getElementById('burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
const burgerWrraper = document.querySelector('.burger-wrraper');
const burgerLinks = document.querySelectorAll('.burger-menu__link');
const burgerClose = document.querySelector('.burger-menu__icon');

const hideBurgerMenu = () => {
  document.body.style.overflow = '';
  burgerWrraper.classList.remove('flex');
  burgerMenu.classList.remove('show');
  burgerBtn.classList.remove('active');
}
const showBurgerMenu = () => {
  document.body.style.overflow = 'hidden';
  burgerWrraper.classList.add('flex');
  burgerMenu.classList.add('show');
  burgerBtn.classList.add('active');
}

const toggleBurgerMenu = () => {
  if (burgerMenu.classList.contains('show')) {
    hideBurgerMenu()
  } else {
    showBurgerMenu()
  }
};

burgerBtn.addEventListener('click', toggleBurgerMenu);

burgerLinks.forEach(link => {
  link.addEventListener('click', toggleBurgerMenu);
})

burgerClose.addEventListener('click', hideBurgerMenu)

//  Select

try {
  const getTemplate = (data = [], placeholder, selectedId) => {
    let text = placeholder ?? 'placeholder не указан'
  
    const items = data.map(item => {
        let cls = ''
        if (item.id === selectedId) {
            text = item.value
            cls = 'selected'
        }
        return `
            <li class="select__item ${cls}" data-type="item" data-id="${item.id}">${item.value}</li>
        `
    })
    return `
        <input type="hidden" class="hidden__input">
        <div class="select__backdrop" data-type="backdrop"></div>
        <div class="select__input" data-type="input">
            <span data-type="value">${text}</span>
            <svg class="select__icon" width="16" height="10" viewBox="0 0 16 10" data-type="arrow">
                  <use xlink:href="#selectArrow"></use>
            </svg>
        </div>
        <div class="select__dropdown">
            <ul class="select__list">
                ${items.join('')}
            </ul>
        </div>
    `
  }
  class Select {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.options = options
        this.selectedId = options.selectedId
  
        this.render()
        this.setup()
    }
  
    render() {
        const { placeholder, data } = this.options;
        this.$el.classList.add('select');
        this.$el.innerHTML = getTemplate(data, placeholder, this.selectedId);
    }
    setup() {
        this.clickHandler = this.clickHandler.bind(this);
        this.$el.addEventListener('click', this.clickHandler);
        this.$arrow = this.$el.querySelector('[data-type="arrow"]');
        this.$value = this.$el.querySelector('[data-type="value"]');
    }
  
    clickHandler(event) {
        const { type } = event.target.dataset;
        if (type === 'input') {
            this.toggle();
        } else if (type === 'item') {
            const id = event.target.dataset.id
            this.select(id);
        }  else if (type === 'backdrop') {
            this.close();
        }
    }
  
    get isOpen() {
        return this.$el.classList.contains('open');
    }
  
    get current() {
        return this.options.data.find(item => item.id === this.selectedId);
    }
  
    select(id) {
        this.selectedId = id;
        this.$value.textContent = this.current.value;
  
        this.$el.querySelectorAll(`[data-type="item"]`).forEach( el => el.classList.remove('selected'));
        this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected');
  
        this.options.onSelect ? this.options.onSelect(this.current) : null;
        this.close();
    }
  
    toggle() {
        this.isOpen ? this.close() : this.open();
    }
  
    open() {
        this.$el.classList.add('open');
        this.$arrow.classList.add('open');
    }
  
    close() {
        this.$el.classList.remove('open');
        this.$arrow.classList.remove('open');
    }
  
    destroy() {
        this.$el.removeEventListener('click', this.clickHandler);
        this.$el.innerHTML = '';
    }
  }
  
  const headerSelect = new Select('.header__select', {
    placeholder: 'Меню',
    selectedId: '1',
    data: [
        {id: 'journal', value: 'Журналы'},
        {id: 'author', value: 'Авторам'},
        {id: 'contact', value: 'Контакты'},
    ],
    onSelect(item) {
        const input = document.querySelector('.hidden__input')
        input.value = item.value
    } 
  })
} catch (error) {
  console.log(`Возникла ошибка ${error.name} : ${error.message}`);
}


// slider

const bookSlider = new Swiper('.bool-slider', {
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 24,
  });
