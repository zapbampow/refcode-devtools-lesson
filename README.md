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
The site has some intentionally built in bugs to show how you use the dev tools to debug your code.

### HTML Bug: Elements page Has an extra `<` above 'View and Select HTML Elements'
- It has a typo in the HTML

### CSS Bugs with the menu button hover affect on the 'Accessing' and 'Elements' pages
#### Bug 1: The scale transition is jumpy instead of smooth
- It doesn't transition smoothly like the nav bar
- Why not?
	- It doesn't have a transition 

#### Bug 2: The CSS button on the Elements page doesn't transition at all
- The text is in a `span` instead of a `div`
- Solution 1: make it a `div`
- Solution 1: set it's `display` property to `block` or `inline-block`
	- transforms don't apply to `inline` elements

### JS Bug: Clicking the CSS button does not show what I want
- the `showCss` function in the elements tab has commented out the line that adds the `show` class to the css content