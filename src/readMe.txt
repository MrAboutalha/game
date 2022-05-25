DISCLAIMER: You should definitely read this readMe file in order to understand how our team member Mr @ABOUTALHA MOHAMMED has proceeded to develop this react single page application.
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////

One million game has a well defined structure:
1-There is two major components
    A) App.js, it is the one who holds them up together:
           + Component number 1 shows up by default: Before the player clicks the play button.
           + Component number 2 shows up after he or she clicks the button.
           (For more infos, go check them out in App.js, they are called landingPage and QuizPage respectively)

///// NOTES:

1-The style sheet we have been working with all over our application is  *** Bootstrap *** css framework (grid system and some other positioning classes were used), all that to not worry about writing too many styles of our own,
PS: For future uses, you may want to consider to write your own style sheet, no need for *** Bootstrap *** framework then.
2-For the animations, we do that by calling the css library that gives life to any of your html elements; it is called *** Animate.css ***.
    => You can find a set of variables that were defined in *** /assets/dummyData/animationNames ***, they hold the animations that were used in  *** One Million Game ***.
       To discover more of the animations available, please visit the website "https://animate.style/", copy whatever animation you want, paste it into *** /assets/dummyData/animationNames ***, and voila!! enjoy new animations.
3-In order to display the questions and their propositions to the player, not only that but also all the levels of the game, we give you as an option adding them, by your self, to the files *** /assets/dummyData/questions *** *** /assets/dummyData/levels *** that holds the questions and the levels of the levels respectively
    => For now there is 15 levels and 15*4 questions along with 15*4*4 propositions in total.
4-All of the (png,mp3,and woff2..) files, are included in the assets folder where you can find them all compressed for a better performance all getting the same quality.
PS: For future uses, You might want to change some or all of the audio files, you could do that really easily only by swapping the old audio files out of the assets folder and then add the new audio files back in. easy!!


////////////////////////////////
///// WHAT THIS APP GIVES YOU: (the main use case)

// GLOBAL DESCRIPTION:

- We have 15 questions and 4 propositions for every one of them.
- 4 propositions we have, one is correct, the three others are wrong.
- As a player you have to guess the correct answer in order to pass that level (WIN_THE_LEVEL).
- You keep guessing the correct answer until you reach the top level (LEVEL_15).
- Game is Over.

// DETAILED DESCRIPTION:

- First we land in the *** landingPage ***, the first thing a player can see and interact with.
    (the logo shows up in the middle of the screen, with some additional floating golden coins around it, take a look at the design blueprint given previously )
- The player clicks on the play button which triggers the +++ startPlayingHandler() +++ function that setup all the local storage fields as follows:
    There is 2 case scenarios that we provide in One million Game:
    DEV SCENARIO: ( 
                    a-Maximum one question to answer to in 10 seconds range, whether you submit it or time is up.
                    b-Maximum one checkpoint per 20 seconds to pass
                  )
    PROD SCENARIO: ( 
                    a-Maximum one question to answer to in 10 seconds range, whether you submit it or time is up.
                    b-Maximum one checkpoint per 20 seconds to pass
                  )
    1-let's go with the first one: 
        => After he clicks the play button, +++ startPlayingHandler() +++ function makes sure to fill in the local storage fields with the appropriate values in order to make sure that a player cannot exceed 1 question in 10 seconds range and that 1 checkpoint in 20 seconds range.