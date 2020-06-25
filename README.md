# chibitales.org - Milestone Project 2 - Interactive Frontend Development
Bringing chibitales.org to the next level, the website for players of Chibi Fighters 2.0 goes interactive.

After providing players and potential players with information around the game in the first Milestone project, now they can search for their favorite cards.

The new search page provides them with all available information about the cards and where they come from.

## UX
As a potential player, I want to get a visual impression of the game, to find out if I like the game's style and what to expect.

As a new player, I want to find out where to get my first cards from, so I can progress within the game.

As an advanced player, I want to find out more about the cards I am still missing, so I can start collecting them.

As a senior player, I want to be able to take at least a look at the cards I can't get, to complete the game's feeling.


The new interactive page allows players and potential players to browse the game cards and their statistical information in multiple ways: 

* For users who want to get a visual and information on a specific card: Searching card-information by card-name. Just type the name in and click the search button.

* For users who want to get a visual and information on a specific card: Searching card-information by card-number.  Just type the ID in and click the search button.

* For users who want to see a collection of card-types: Searching by selecting none to four card-features.  Just select the  and click the search button.

To get an impression on the visualization, take a look into the wireframes folder.

## Features
* Clicking "Find" in the navigation brings you to the new search.

* Inthe left hand section you can define the search. In the right hand section the results are presented.

* Search by ID allows to search all existing and potential existing cards by card ID. Submit checks if the input is valid and responds accordingly if not.

* Search by name allows you to freely type in and select out of the existing and potential existing card's names. Submit checks if the input is valid and responds accordingly if not.

* Both fields reset the value when clicked into again to avoid the necessity of manual deletion of the previous input.
 
* The four search but statsfields allow users to narrow down the search by selecting predefined values. There is no way for wrong input.

* Submit will 
  * either return all cards matching the selection
  * or a notification that this combination does not exist

* You can search without any input and see all existing cards or narrow down by
  * Card type
  * Card Rarity
  * The source of the card, which is the way how to get it
  * Sets

* The search result is a styled and fully responsive div element which contains:
  * Card Name and ID
  * The existing, created and burnt amount of this card
  * The card image, which is the main visual focus
  * Information about the card's rarity, its type and how many slots the card offers
  * Information about the card's base juice, health and damage
  * The skill the card offers
  * The charged skill the card offers

* The search combines accessing the Chibi API, the online stored card image and a javaScript object containing information, which is not available elsewhere.

* Depending on the defined search the loading process can take a moment. Users will see a message that the page is loading, when this is the case.

* The search function is the main focus of this project. But there are some other changes in comparison to the first Milestoneproject:
  * The footer is re-done and completly responsive now
  * The focus was taken from directing users to invest, since this is not part of the game any more
  * The game is changing fast, very fast indeed. Some information was updated, but unfortunately not all.
  * This submit won't be published via GitHub.
  * Instead I will publish a version with more additions shortly after handing the project in.
  * The submission itself won't be changed though.

## Future Features

* chibitales.org is meant to be work in progress and an ongoing project over the course.
* Possible features are legion. To name a few:
  * Integration of a newsletter
  * Integration of an email contact
  * Video tutorials on how to get into and how to play the game
  * Additional tooltip information on keywords
  * More statistics on scaling stats
  * More detailed information on where to find cards 

## Technologies used

* HTML5
  * to build the site
* CSS3
  * to style the site
* javaScript
  * to build the search function
* jQuery 3.5.1.min
  * to build the search function and reduce coding
* Bootstrap 4.3.1.min
  * to style the site and make it responsive
* FontAwesome
  * to get all those lovely icons
* Popper
  * will be used for tooltips
* Hover 2.3.1.min
  * will be used for tooltips
* Google Fonts
  * to get all those lovely fonts

## Testing
All HTML5 code is tested via the W3C Markup Validation Service.\
All CSS3 code is tested via the W3C CSS Validation Service.\
All javaScript and jQuery code was tested manually.\
* this was tested intensly but not with Jasmine
  * any possible wrong input was tested
    * try to type in anything that isn't 1 - 111 into the search by ID field and submit.
    * try to type in anything that is not part of the list into the search by name field and submit.
    * search for a non existing combination in search by stats e.g. a rare trinket, a legendary skill, a commen A1 investment
  * any possible wrong output was tested
    * hard to prove, but there is none

Navigation and responsive design was tested on laptop with the latest versions of:
* Google Chrome
* Firefox
* MS Edge
* Brave
* Opera

Navigation and responsive design was tested on:
* Mobile Alacatel A1
* Amazon Fire tablet

### Hard /impossible to solve
* Styling datasets and select the same way
* Dealing with missing cards and stats and a rudimentary API
* Creating a search for all the possible options
  * I considered a free search field but stopped following this path. It would not offer all the available options implemented now.
  * e.g. a user would not be able to search for legendary trinkets

## Deployment
The domain chibitales.org was purchased on godaddy.com.\
The open project repository is available under https://github.com/RaphaelRohner/chibitales.org_milestoneproject2 \
The project is deployed under https://raphaelrohner.github.io/chibitales.org_milestoneproject2/ \

## Credits

### Content
Graphics, content and colors: Chibifighters.com by Gary Runke

### chibitales.org is based on modified:

#### Codeinstitute's Resume Walkthrough project
#### Codeinstitute's Whiskey Drop Walkthrough project
#### Bootstrap

### Acknowledgements
Major Thanks @ Gary for the OK to use Chibi Fighters graphics and for the game itself! Let's make it a success - it's so cool!\
Thanks @terminali for https://stackoverflow.com/a/42794613 and how to remove a box-shadow!\
And big thumbs up to everyone @Slack, w3schools and stackoverflow. Without your answers to other problems, I wouldn't have figured out the solutions to mine!