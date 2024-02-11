document.addEventListener('DOMContentLoaded', function () {
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote');
    const ownerText = document.getElementById('owner');
    const newQuoteButton = document.getElementById('new-quote');
    const animationBg = document.querySelector('.animation-bg');

    function getRandomQuote() {
        const quotes = [
            // Insert all your quotes here...
    {
                quote:"Determination is the power that sees us through all our frustration and obstacles. It helps in building our willpower which is the very basis of success.",
                owner: "Dr.A.P.J.Abdul Kalam",
                bg: "https://source.unsplash.com/random/1920x1080?technology"
     },
    {
        quote: "The only way to achieve the impossible is to believe it is possible.",
        owner: "Charles Kingsleigh (Alice in Wonderland)",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        owner: "Vidal Sassoon",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        owner: "Roy T. Bennett",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        owner: "Franklin D. Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Good things come to people who wait, but better things come to those who go out and get them.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        owner: "Albert Schweitzer",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    
    {
        quote: "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        owner: "Colin R. Davis",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Success is not in what you have, but who you are.",
        owner: "Bo Bennett",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        owner: "John D. Rockefeller",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Life is 10% what happens to us and 90% how we react to it.",
        owner: "Charles R. Swindoll",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        owner: "Vidal Sassoon",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Opportunities don't happen, you create them.",
        owner: "Chris Grosser",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        owner: "Winston Churchill",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Dream big and dare to fail.",
        owner: "Norman Vaughan",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        owner: "Franklin D. Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        owner: "Zig Ziglar",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        owner: "Albert Schweitzer",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "If you want to achieve greatness stop asking for permission.",
        owner: "Anonymous",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        owner: "Franklin D. Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "If you are not willing to risk the usual you will have to settle for the ordinary.",
        owner: "Jim Rohn",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        owner: "Franklin D. Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        owner: "Franklin D. Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        owner: "Franklin D. Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        owner: "Franklin D. Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        owner: "Franklin D. Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        owner: "Franklin D. Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        owner: "Franklin D. Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        owner: "Steve Jobs",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        owner: "Winston Churchill",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Believe you can and you're halfway there.",
        owner: "Theodore Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        owner: "Confucius",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Everything you’ve ever wanted is on the other side of fear.",
        owner: "George Addair",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
        owner: "C.S. Lewis",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
        owner: "Albert Schweitzer",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "I am a slow walker, but I never walk back.",
        owner: "Abraham Lincoln",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Your limitation—it’s only your imagination.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        owner: "Franklin D. Roosevelt",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Push yourself, because no one else is going to do it for you.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Great things never come from comfort zones.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Dream it. Wish it. Do it.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Success doesn’t just find you. You have to go out and get it.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Dream bigger. Do bigger.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Don’t stop when you’re tired. Stop when you’re done.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Wake up with determination. Go to bed with satisfaction.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Do something today that your future self will thank you for.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Little things make big days.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "It’s going to be hard, but hard does not mean impossible.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Don’t wait for opportunity. Create it.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The key to success is to focus on goals, not obstacles.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Dream it. Believe it. Build it.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Remember why you started.",
        owner: "Unknown",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        owner: "Winston Churchill",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        owner: "Walt Disney",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        owner: "Steve Jobs",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        owner: "Nelson Mandela",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
        quote: "It always seems impossible until it is done.",
        owner: "Nelson Mandela",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
    },
    {
         quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        owner: "Nelson Mandela",
        bg: "https://source.unsplash.com/random/1920x1080?nature"
            },
            {
                quote: "The way to get started is to quit talking and begin doing.",
                owner: "Walt Disney",
                bg: "https://source.unsplash.com/random/1920x1080?technology"
            },
            {
                quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
                owner: "Steve Jobs",
                bg: "https://source.unsplash.com/random/1920x1080?city"
            },
            {
                quote: "Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action.",
                owner: "Dr.A.P.J.Abdul Kalam",
                bg: "https://source.unsplash.com/random/1920x1080?nature"
            },

];
const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[randomQuoteIndex];

                // Update the quote text and author
                quoteText.textContent = `"${randomQuote.quote}"`;
                ownerText.textContent = `- ${randomQuote.owner}`;

                // Update the background image
                const randomBgIndex = Math.floor(Math.random() * quotes.length);
                const randomBg = quotes[randomBgIndex].bg;
                animationBg.style.backgroundImage = `url(${randomBg})`;

                // Apply animation to the quote container
                quoteContainer.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                setTimeout(() => {
                    quoteContainer.style.backgroundColor = 'transparent';
                }, 1000);
            }

            // Add event listener to the new quote button
            newQuoteButton.addEventListener('click', function() {
                // Reload the webpage when the button is clicked
                location.reload();
            });

            // Call getRandomQuote() when the page loads to set initial quote and background image
            getRandomQuote();
        });