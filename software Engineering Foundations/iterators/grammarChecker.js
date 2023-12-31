let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

//Create a var that stores number 0, after it, call a itherator method to count the number of words inside storyWords. Then log the result to kwnow the count.
var count = 0;

storyWords.forEach(word =>{
    return count++;
});

console.log(count);

//Filter words that are unnecessary from the story. Filter the words and return every other that is not equal to unncessary word.
storyWords = storyWords.filter(word =>{
    return (word != unnecessaryWord);
})

//Then call a mehotd to take care of misspelled words. reassing the value of storyWords by calling the method and replacing the misspelled words with the correct way. Log the result.
storyWords = storyWords.map(word =>{
    return (word === misspelledWord? 'beatiful': word);
})

console.log(storyWords);

//Now call a method to find the bad word how is inside the story, once you find it, replace to something more appropriate.
const badWordIndex = storyWords.findIndex(word =>{
    return word === badWord;
})

console.log(badWordIndex);

storyWords[78] = 'really';

//Know lets look if it exists words with 10 or less characters if yes, return true, if not false. If response is false, find the word(s) longer than 10 characters and replace it to a shorter one.
const lengthCheck = storyWords.every(word =>{
    return word.length <= 10;
})

console.log(lengthCheck);

const longest =  storyWords.findIndex(word =>{
    return word.length > 10;
})

storyWords[longest] = 'stunning';

//By last put all thogether and check the final story, verify that all the steps are developed correctly and fix them if not.

story = storyWords.join(' ');

console.log(story);
