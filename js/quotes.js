const quotes = [
    {
        auote: "The way get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        auote: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
        author: "Steve Jobs",
    },
    {
        auote: "Your time is limited, so don't waste it living someone else's life.",
        author: "Steve Jobs",
    },
    {
        auote: "People who are crazy enough to think they can change the world are the ones who do.",
        author: "Rob siltanen",
    },
    {
        auote: "Knowing is not enough we must apply. Wishing is not enough we must do.",
        author: "Johann Wolfgang Von Goethe",
    },
    {
        auote: "Security is mostly a superstition. Life is either a daring adventure or nothing.",
        author: "Helen Keller",
    },
    {
        auote: "The only limit to our realization of tomorrow will be out doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        auote: "Creativity is intelligence having fun.",
        author: "Albert Einstein",
    },
    {
        auote: "Whatever the mind of man can conceive and believe, it can achieve.",
        author: "Napoleon Hill",
    },
    {
        auote: "Life is 10% what happens to me and 90% of how I react to it.",
        author: "Charles Swindoll",
    },
    {
        auote: "Winning isn't everything, but wanting to win is.",
        author: "Vince Lombardi",
    },
    {
        auote: "Build your own dreams, or someone else will hire you to build theirs.",
        author: "Farrah Gray",
    },
];

function authorHandleOver() {
    author.innerText = todaysQuote.author;
    
}
function authorHandleOut() {
    author.innerText = null;
}

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.auote;

quote.addEventListener("mouseenter", authorHandleOver)
quote.addEventListener("mouseleave", authorHandleOut)