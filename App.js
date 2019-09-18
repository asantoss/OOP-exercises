var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var Person = /** @class */ (function () {
    function Person(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    Person.prototype.greet = function (otherPerson) {
        console.log("Hello " + otherPerson.name + ", I am " + this.name);
    };
    Person.prototype.contactInfo = function () {
        console.log("Email: " + this.email + " Phone: " + this.phone);
    };
    return Person;
}());
var person1 = new Person('Sonny', 'sonny@hotmail.com', "483-485-4948");
var person2 = new Person('Jordan', 'jordan@aol.com', "4895-586-3456");
person1.greet(person2);
person2.greet(person1);
person1.contactInfo();
person2.contactInfo();
var Card = /** @class */ (function () {
    function Card(point, suit) {
        if (point <= 13) {
            this.point = point;
            this.suit = suit;
        }
        else {
            console.error('Value must be lower than 13.');
        }
    }
    Card.prototype.getImageUrl = function () {
        return "images/" + this.point + "_of_" + this.suit;
    };
    return Card;
}());
var Hand = /** @class */ (function () {
    function Hand() {
        this.cards = [];
        this.points = 0;
    }
    Hand.prototype.getPoints = function () {
        console.log(this.points);
    };
    Hand.prototype.addCard = function (card) {
        this.points = this.points + card.point;
        return this.cards.push(card);
    };
    return Hand;
}());
var Deck = /** @class */ (function (_super) {
    __extends(Deck, _super);
    function Deck() {
        var _this = _super.call(this) || this;
        _this.cards = createDeck();
        return _this;
    }
    Deck.prototype.shuffle = function () {
        this.cards = __spreadArrays(this.cards.sort(function () { return 0.5 - Math.random(); }));
        return this.cards;
    };
    Deck.prototype.draw = function () {
        var randomCard = Math.floor(Math.random() * this.cards.length);
        var drawnCard = this.cards[randomCard];
        this.cards = __spreadArrays(this.cards.slice(0, randomCard), this.cards.slice(randomCard + 1));
        return drawnCard;
    };
    Deck.prototype.numCardsLeft = function () {
        console.log(this.cards.length);
    };
    return Deck;
}(Hand));
function createDeck() {
    var suits = ['diamond', 'hearts', 'spades', 'clubs'];
    var deck = [];
    var _loop_1 = function (i) {
        var currentSuit = suits[i];
        if (deck.filter(function (card) { return card[currentSuit]; }).length < 13) {
            for (var j = 1; j < 14; j++) {
                var cardPoints = j;
                var newCard = new Card(cardPoints, currentSuit);
                deck.push(newCard);
            }
        }
    };
    for (var i = 0; i < suits.length; i++) {
        _loop_1(i);
    }
    return deck;
}
var myHand = new Hand();
myHand.addCard(new Card(5, 'diamonds'));
myHand.addCard(new Card(13, 'spades'));
myHand.getPoints();
var myDeck = new Deck();
console.log(myDeck.draw());
console.log(myDeck.draw());
console.log(myDeck.draw());
myDeck.numCardsLeft();
