const heading = document.querySelector('.my-heading'); // target the H1 tag
const words = heading.textContent.split(' '); // split the text into an array of words
const lastWord = words.pop(); // remove the last word from the array
heading.innerHTML = words.join('FILIPINO') + ' <span style="color: red">' + lastWord + '</span>'; // join the words back together, and add the last word with a different color

