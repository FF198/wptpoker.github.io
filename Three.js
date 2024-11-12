// Create a 3D card
const cardGeometry = new THREE.BoxGeometry(1, 0.1, 1.4);
const cardMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const card = new THREE.Mesh(cardGeometry, cardMaterial);

// Position the card on the table
card.position.set(0, 0.05, 0);
scene.add(card);

// Card Deck Object
const suits = ['♠', '♣', '♦', '♥'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function createDeck() {
    let deck = [];
    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push({ rank, suit });
        }
    }
    return deck;
}

function shuffleDeck(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Swap elements
    }
    return deck;
}

const deck = shuffleDeck(createDeck());
console.log(deck); // View shuffled deck

// Create card texture
const textureLoader = new THREE.TextureLoader();
const cardTexture = textureLoader.load('path_to_card_image.jpg'); // Use a card image texture

const cardMaterial = new THREE.MeshBasicMaterial({ map: cardTexture });
const card = new THREE.Mesh(cardGeometry, cardMaterial);
scene.add(card);

function placeBet(amount) {
    // Handle placing a bet
    console.log('Placing bet of $' + amount);
}

function fold() {
    // Handle folding action
    console.log('You folded');
}

function call() {
    // Handle calling action
    console.log('You called');
}

// Play sound when a card is dealt
let audio = new Audio('path_to_deal_sound.mp3');
audio.play();

