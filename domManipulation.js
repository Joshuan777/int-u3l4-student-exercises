// html button elements
let contentButton = document.querySelector('.content-button');
let image1Button = document.querySelector('.image-1-button');
let image2Button = document.querySelector('.image-2-button');

// html content elements
let myName = document.querySelector('.name');
let myHobby = document.querySelector('.hobby');
let myLocation = document.querySelector('.location');
let image = document.querySelector('.image');


// CODE ALONG
// 1. An event listener is provided for the `contentButton`
// 2. When clicked, it should change the content of:
//   - The `name` header.
contentButton.addEventListener('click', function(){
    myName.innerHTML = "Joshuan";
});
// -- RETURN TO LESSON --

// CODE SOLO
//   - The `hobby` paragraph.
//   - The `location` paragraph.

contentButton.addEventListener('click',function(){
    myHobby.innerHTML = "I like to gamble";
    myLocation.innerHTML = "I live at Indianapolis";
});

// 3. Add an event listener to the `image1Button`

image1Button.addEventListener('click',function() {
image.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3NsaWpyZ3N4emh1bTkwOWJnbDFpMWJvcTFtMWdxcW91NmRpYmN3YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VRhsYYBw8AE36/giphy.webp";
});

// 4. When clicked, it should change the source of `image` to another image URL.





// 5. Add an event listener to the `image2Button`
// 6. When clicked, it should change the source of `image` to another image URL.
image2Button.addEventListener("click", function(){
    image.src = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3NsaWpyZ3N4emh1bTkwOWJnbDFpMWJvcTFtMWdxcW91NmRpYmN3YSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/jBGTKzZPffoZ2/200.webp";
});
// BONUS
// 7. Try using different event types for your buttons.

