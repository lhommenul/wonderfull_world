
function generateCards(where,cards) {
    const main_container = document.getElementById(where)  ;
    //   GENERATE CARDS
    const list_cards = document.createElement('ul')
        list_cards.className = "list_slider_cards"
    const list_btn = document.createElement('ul')
        list_btn.className = "list_slider_btn"
    cards.forEach((element,index) => {
        // document button
        const container_button = document.createElement('li'),
            button_switch = document.createElement('button');
        button_switch.className = "dot"
        // document card
        const card = document.createElement('li'),
            h2 = document.createElement('h2'),
            img = document.createElement('img'),
            h3 = document.createElement('h3'),
            p = document.createElement('p');
        card.className = "slider_card"
        h2.innerText = element.title
        img.src = element.img
        h3.innerText = element.sub_title
        p.innerText = element.description
        // append button
        container_button.appendChild(button_switch)
        list_btn.appendChild(container_button)
        // append card
        card.appendChild(h2)
        card.appendChild(img)
        card.appendChild(h3)
        card.appendChild(p)
        list_cards.appendChild(card)

        let state = true;
        button_switch.addEventListener('click',()=>{
            state = false
            const i = document.getElementsByClassName('slider_card')
            const sw = document.getElementsByClassName('dot')
            console.log(sw);
            for (let index = 0; index < i.length; index++) {
                const element = i[index];
                const btn = sw[index]
                element.style.gridColumn = 2
                btn.className = "dot"
            }
            button_switch.className = "dot selected"
            card.style.gridColumn = 1;
        })
        if(state){
            button_switch.addEventListener('focus',()=>{
                const i = document.getElementsByClassName('slider_card')
                const sw = document.getElementsByClassName('dot')
                console.log(sw);
                for (let index = 0; index < i.length; index++) {
                    const element = i[index];
                    const btn = sw[index]
                    element.style.gridColumn = 2
                    btn.className = "dot"
                }
                button_switch.className = "dot selected"
                card.style.gridColumn = 1;
            })
        }   

    });
    main_container.appendChild(list_cards)
    main_container.appendChild(list_btn)
}

generateCards("cards",[
    {
        title: "Testimonial",
        img: "./assets/photo.png",
        sub_title: "Carolyn Clark",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo"
    },
    {
        title: "Mes Bananes",
        img: "./assets/photo.png",
        sub_title: "dsqdsqdsqd Stark",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
    },
    {
        title: "La table",
        img: "./assets/photo.png",
        sub_title: "dsqdsqdsqd Stark",
        description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
    }
])