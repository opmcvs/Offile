const menu = [
    {
        id: 1,
        title: "Super pancakes",
        category: "breakfast",
        price: 13.99,
        img: "Menu-pics/pancakes-2291908__340.jpg",
        desc: `a thin, flat, usually 
            round cake made from a mixture of flour, 
            milk, and egg that is fried on both sides
            and usually eaten for breakfast: He poured 
            the maple syrup on his stack of pancakes`
    },

    {
        id: 2,
        title: "waffle hearts",
        category: "breakfast",
        price: 15.99,
        img: "Menu-pics/waffle-hearts-2697904__340.jpg",
        desc: `These little tickers hide a deeply tasty secret: 
        They're actually pockets made from store-bought puff 
        pastry that are stuffed with chocolate-hazelnut spread. 
        Whip up your own batch of "puffles" for Valentine's 
        Day (or any day, really), and serve your hearts on a platter.`
    },

    {
        id: 3,
        title: "Macarons",
        category: "dessert",
        price: 13.99,
        img: "Menu-pics/macarons-2548827__340.jpg",
        desc: `A macaron is a French pastry composed of two 
        shells and a filling in the middle. The shells are
         made with almond flour, egg white and sugar. The 
         filling is either a buttercream or a ganache 
         (butter replaced with white chocolate)`
    },
    {
        id: 4,
        title: "cake",
        category: "dessert",
        price: 18.99,
        img: "Menu-pics/cake-1971552__340.jpg",
        desc: `Tiramisu is an elegant and rich layered 
        Italian dessert made with delicate ladyfinger 
        cookies, espresso or instant espresso, mascarpone 
        cheese, eggs, sugar, Marsala wine, rum and cocoa powder. `
    },
    {
        id: 5,
        title: "hamburger",
        category: "lunch",
        price: 22.99,
        img: "Menu-pics/hamburger-494706__340.jpg",
        desc: `Hamburgers are traditionally made with ground
         beef and served with onions, tomatoes, lettuce, 
         ketchup, and other garnishes.`
    },
    {
        id: 6,
        title: "Salmon",
        category: "lunch",
        price: 23.99,
        img: "Menu-pics/salmon-518032__340.jpg",
        desc: `Grilled salmon is salmon that has been 
        cooked over coals or a gas flame and is one 
        of the oldest fish preparations known. `
    },

];
const sectionCenter = document.querySelectorAll('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');


window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu)
})

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', (e) => {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter((menuItem) => {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    })
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<article class='menu-item'>
    <img src =${item.img}
    class = 'photo' alt=${item.title}>  
    <div class ="item-info">
            <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
            </header>
            <P class="item-text">
            ${item.desc}
            </P>
          </div>`
    })



}