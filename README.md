# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Edward Chew**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/heather-wax-cheese

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] To have better feedback for the user, the button turns red with a border if they make a mistake and the number of lives decreases by one!

## Video Walkthrough

**Here's an example of winning:**

![](https://i.imgur.com/ft670b2.gif)

**Here's an example of losing:**

![](https://i.imgur.com/i8T22GH.gif)




## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://www.w3schools.com/jsref/jsref_push.asp
https://www.w3schools.com/cssref/css_colors.asp
https://stackoverflow.com/questions/1358810/how-do-i-change-the-text-of-a-span-element-using-javascript
https://stackoverflow.com/questions/5394116/outline-radius
https://www.w3schools.com/cssref/pr_class_display.asp
https://www.w3schools.com/css/css_specificity.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

One challenge I had was adding in the functionality for the "3 strikes" or three lives and its associated styling components. I first had to consider what this would actually look like to the user. When the user makes a wrong guess, should they need to start over the round, or take another guess? I decided to go with the latter, with the consideration that this is a memory game and it seems cruel to make them repeat themselves. This decision led me to think about the feedback the user is actually getting from the game. If they make a wrong guess, they need to know they made a wrong guess. Otherwise, they would continue inputting what they think is the correct pattern. I decided to have the buttons turn red with a border when a wrong guess is inputted and have a text indicator with the number of lives remaining. The logical component was implemented in the Javascript by adding a counter for lives, and adding a check for the number of lives to trigger a game over. Strangely, the game over popup would be triggered when a user made a mistake at 2 lives left. I eventually discovered that I had been decrementing the lives left before making the check for loseGame(), so 1 life left would be passed to loseGame() when the mistake was really made at 2 lives. After adding the CSS code, the appearance of the buttons was unchanged. I had added a “wrong” class to the buttons that included the CSS property “background: red”. I was puzzled why, but I saw that I had styles associated with the active state of the buttons, in addition to the “wrong” class. This meant I was trying to set the background color in two separate places. I realized that the styles for the active state were taking precedence over the “wrong” class styles due to CSS specificity. I solved this by increasing the specificity of my selector. Instead of just using the “wrong” class, I targeted the “wrong” class within the button IDs, and put the CSS code at the bottom of the document. The two conflicting selectors had equal specificity, but the option at the bottom of the doc would take precedence. I tested things again, and it looked great!

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

This was my first time working with pure Javascript, so it was definitely a learning experience. The syntactical similarities to C++ or Java made things pretty straightforward in any case. When it comes to web development, I am more interested in learning how external tools might be used. I have worked with HTML/CSS before, which is great to create nice looking, static websites. With some Javascript, it may be possible to create a useful web tool. However, I would love to know more about how to store data, communicate with internet sources, or implement prebuilt tools like a map, for example. How might a website allow users to interact with other users? How might a website keep track of accounts and remember who ahs visited them before? How might we build an innovative new tool that becomes the next big startup?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

For starters, I would want to tackle the suggested extensions to the project, like sprucing up the buttons and adding a ticking clock. When writing the code for this game, I found myself going up the the top of the Javascript code to edit the global variables, like the length of the game or the speed of the game. It would be great to allow the user to have control over these variables through the game interface. This could come in the form of input fields that gather that data, or maybe we could prompt the user with difficulty options. Three buttons with “Easy”, “Medium, and “Hard” could replace the start button, and each option could be associated with a different number of items to remember as well as a speed that the buttons light up. Another interesting addition could be a score as well as something to keep track of those scores. Each correct response and remaining life could correspond to a number of points. When the game is complete, the score could be stored in an array that prints the high scores on the page.



## License

    Copyright Edward Chew

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.