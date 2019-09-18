
interface Person {
    name: String
    email: String
    phone: any
}


class Person{
    constructor(name: String, email: String, phone: any){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson: Person): void{
        console.log(`Hello ${otherPerson.name}, I am ${this.name}`)
    }
    contactInfo(): void{
        console.log(`Email: ${this.email} Phone: ${this.phone}`)
    }
}


const person1 = new Person('Sonny', 'sonny@hotmail.com', "483-485-4948");
const person2 = new Person('Jordan', 'jordan@aol.com', "4895-586-3456");


person1.greet(person2)


person2.greet(person1)

person1.contactInfo()
person2.contactInfo()


interface Card{
    point: any
    suit: String
}

class Card{
    constructor(point: any, suit: String){
        if(point <= 13){
            this.point = point;
            this.suit = suit;
        }else{
            console.error('Value must be lower than 13.')
        }
    }
    getImageUrl(): String{
        return `images/${this.point}_of_${this.suit}`
    }
}

interface Hand{
    cards: any[]
    points: Number
}


class Hand {
    constructor(){
        this.cards = [];
        this.points= 0
    }
    getPoints(): void{
        console.log(this.points)
    }
    addCard(card){
        this.points = this.points + card.point        
        return this.cards.push(card)
    }
}

class Deck extends Hand{
    constructor() {
        super()
        this.cards = createDeck();

    }

    shuffle(){
        this.cards = [...this.cards.sort(()=> 0.5 - Math.random())]
        return this.cards
    }
    draw(){
        const randomCard  = Math.floor(Math.random() * this.cards.length);
        const drawnCard = this.cards[randomCard]
        this.cards = [...this.cards.slice(0, randomCard), ...this.cards.slice(randomCard + 1)]
        return drawnCard
    }

    numCardsLeft(){
        console.log(this.cards.length)
    }

}


function createDeck(){
    const suits = ['diamond', 'hearts', 'spades', 'clubs']
    const deck = []
    for(let i=0; i < suits.length; i++){
        const currentSuit = suits[i]
        if(deck.filter(card => card[currentSuit]).length < 13){
            for(let j = 1; j < 14; j++){
                let cardPoints = j
                const newCard = new Card(cardPoints, currentSuit)
                deck.push(newCard)
            }
        }
    }
    return deck
}

const myHand = new Hand()
myHand.addCard(new Card(5, 'diamonds'))
myHand.addCard(new Card(13, 'spades'))
myHand.getPoints()


const myDeck = new Deck();

console.log(myDeck.draw())

console.log(myDeck.draw())
console.log(myDeck.draw())

myDeck.numCardsLeft()