

class Card{
    constructor(props){
        this.title = props.title
        this.img = props.img
        this.sub_title = props.sub_title
        this.description = props.description
        this.index = null;
        this.position = null;
        this.html = this.generateInterface(this);
    }
    generateInterface($){
        const container = document.createElement('li'),
            h3 = document.createElement('h3'),
            img = document.createElement('img'),
            h4 = document.createElement('h4'),
            p = document.createElement('p');
        h3.innerText = $.title
        console.log($.img);
        img.src = $.img
        h4.innerText = $.sub_title
        p.innerText = $.description
        container.className = "card_carrou"
        // append
        container.appendChild(h3)
        container.appendChild(img)
        container.appendChild(h4)
        container.appendChild(p)
        return container;
    }
    setIndex(index){
        this.index = index;
    }
    setPosition(position){
        this.html.style.gridColumn = position;
        this.position = position;
    }
}



class Container{
    constructor(props){
        this.cards = props.cards;
        this.where = props.where;
        this.html = this.generateInterface(this);
    }
    generateInterface($){
        const container = document.createElement('div');
        const list = document.createElement('ul');
        const list_dots = document.createElement('ul');
        list_dots.className = "scroller"
        container.className = "carrou_container"
        // LIST CARDS
        list.className ="list_carrou"
        $.cards.forEach((element,index) => {
            const dot = document.createElement('li')
            const button = document.createElement('button')
            button.className = "dot"
            list.appendChild(element.html)
            element.setIndex(index)
            element.setPosition(index+1)
            // event change
            button.addEventListener('click',(e)=>{
                $.cards.forEach(element => {
                    if (index === element.index) {
                        button.className = "dot selected"
                        element.setPosition(1)
                    } else {
                        element.setPosition(2)
                    }
                });
            })
            
            dot.appendChild(button)
            list_dots.appendChild(dot)
        });
        // LIST DOTS
        container.appendChild(list)
        container.appendChild(list_dots)
        document.getElementById($.where).appendChild(container)
    }
}


new Container(
    {
        where:"cards",
        cards:[
            new Card({
                title: "Testimonial",
                img: "./assets/photo.png",
                sub_title: "Carolyn Clark",
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo"
            }),
            new Card({
                title: "Mes Couilles",
                img: "./assets/photo.png",
                sub_title: "dsqdsqdsqd Stark",
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
            }),
            new Card({
                title: "La table",
                img: "./assets/photo.png",
                sub_title: "dsqdsqdsqd Stark",
                description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
            })
        ]
    })