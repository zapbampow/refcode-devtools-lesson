# RefCode: Intro to Chrome DevTools and Learning to Debug
This is a lession to introduce Chrome DevTools and some of their uses.

It is focused primarily on the Elements tab because that is what beginner students will use the most.

## Teaching this lesson
- Load the site and walk through the core information
- Show how to open Chrome's DevTools
- Show how to select elements and play with their CSS
- Show the Computed tab for CSS

- look at how the navbar transition is happening (will use this info later in debugging)
- look at the bugs on the elements page and let the students brainstorm solving them

- look at the network page and see how you can see the data that is retrieve from the api

## Built in bugs
In addition to the Bugs page, the site has a couple of intentionally built in bugs to show how you use the dev tools to debug your code.

### CSS Bugs with the menu button hover affect on the 'Accessing' and 'Elements' pages
#### Bug 1: The scale transition is jumpy instead of smooth
- It doesn't transition smoothly like the nav bar
- Why not?
	- It doesn't have a transition 

