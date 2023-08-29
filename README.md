# RefCode: Intro to Chrome DevTools and Learning to Debug
This is a lession to introduce Chrome DevTools and some of their uses.

It is focused primarily on the Elements tab because that is what beginner students will use the most.

## Teaching this lesson
- Have the students download the code from the repository and open it in VS Code.
- Load the site and walk through the core information
- Show how to open Chrome's DevTools
- Show how to select elements and play with their CSS
- Show the Computed tab for CSS
- Look at how the navbar transition is happening as an example
- Look at the Network page and tab to see that you can see data being returned from an API endpoint
- Look at the bugs page and let the students brainstorm solving them

## The Bugs Page
### Bug 1 - Typo 1
There is a "<" that shouldn't be there. It is just a typo in the HTML

### Bug 2 - Typo 2
There is a missing paragraph. 
The opening p tag is `<p Why is this text not showing up?></p>`
In the Elements tab, if you try to edit the HTML, you see that each world of the sentence is acting like a property on the p tag.
And there is a closing p tag that the browser has added that is not in the code.
The opening p tag has a typo.
It should be `<p>Why is this text not showing up?></p>`

### Bug 3 - Wrong CSS property
The text should be red.
The CSS is `font-color: red;`
That makes sense, but is not how you set font color;
It should be `color: red;`

### Bug 4.1 - Misunderstanding how to create lists
The list does not have the list markers.
The items are in p tags instead of li tags

### Bug 4.2
The list is aligned wrong and some of the list markers are not all the same.]
The code misunderstands how to create lists.
There should be one ul tag with each item as an li tag.
But the code puts a ul tag around each li tag.

### Bug 5: Wrong CSS selector
It has a class `more-red-text`.
In the Styles tab  under Elements, it doesn't show up.
You can find it if you look hard by going to the Network tab and looking at the bugs.css file.
But it is easier just to search `more-red-text` in VS Code and finding the wrong CSS.
```css
div: color: .more-red-text {
    color: red;
}
```
It looks like someone doesn't quite understand how to apply styles to a class. They are just trying several things they have seen at once.
```css
.more-red-text {
    color: red;
}
```

### Bug 6.1: Convert strings to numbers
Adding the 1 + 2 in the form returns 12.
The input values are strings and they need to be converted to numbers in order to do math.

### Bug 6.2: = vs. ===
It always evaluates to true when checking whether the answer is 10.
The numberEqualsTen function mistakenly uses a single =, instead of === to evaluate.
It sets the value and always returns true.

## One More Built in bug

### CSS Bugs with the menu button hover affect on the Accessing, Elements, and Bugs pages
#### Bug 1: The scale transition is jumpy instead of smooth
- It doesn't transition smoothly like the nav bar
- Why not?
	- It doesn't have a transition 

#### Bug 2: Only the first tab seems to scale
- Some of the tabs use a span instead of a div for the button content
- Spans are `display: inline` by default and transforms like scale don't affect them.
- They either need to be divs, which would make the HTML more consistent
- Or they need to had a `display: inline-block` added to their styling
