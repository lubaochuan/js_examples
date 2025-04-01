# Interactive Mouse Maze
([source](http://www.webstepbook.com/supplements/labsection/lab6-maze/))

The theme of this lab is that we'll be writing a page with a simple "maze" that
the user must navigate with the mouse. The difficulty is not in finding the
exit, because the maze is trivial, but rather in having the dexterity to move
the mouse through the maze without touching any of the walls. When the user's
mouse cursor touches one of the maze walls, the walls turn red and a "You lose"
message is shown. Touching the Start button with the mouse will remove the red
coloring from the maze walls.

![screenshot](images/screen_shot.png)

You're given files `maze.html` and `maze.css`. You do not need to modify
these files. You should write a script file `maze.js` in the same directory
as these files that provides all event handling and behavior to make the maze
work as specified below.

The maze walls are implemented as 5 `div` elements on the page. The provided CSS
code already positions these div elements into their proper places on the page,
but they do nothing when you hover the mouse over them. The relevant section of
the `maze.html` code in the page's body that contains these elements is the
following:
```html
<div id="maze">
    <div id="start">S</div>
    <div class="boundary" id="boundary1"></div>
    <div class="boundary"></div>
    <div class="boundary"></div>
    <div class="boundary"></div>
    <div class="boundary"></div>
    <div id="end">E</div>
</div>
```

## Task 1: Single boundary turns red
The first task is to write event-handling code so that when the user moves the
mouse onto a single one of the maze's walls, that wall will turn red. Write your
JavaScript code *unobtrusively*, without modifying the maze.html page. You will
probably want to choose the first (top-left) wall; it is easier to access using
the DOM, since it has an `id` attribute. You may want to turn the wall red by
setting it to have the provided CSS class `youlose`, using the elements' `classList.add` method as follows:
```javascript
const element = document.getElementById('myElement');
element.classList.add('new-class');
```

The following are more detailed suggested steps for solving this exercise:
* Write a "window onload" handler that sets up any necessary event handlers on
  the page.
* Handle the appropriate event on the appropriate wall by making it turn red.

## Task 2: All boundaries glow red on hover
For your next task, make it so that all walls of the maze turn red when the
mouse enters any one of them. To do this, you'll need to attach an event handler
to each `div` representing a wall of the maze. It is a bit harder to select all of
these divs, since they do not have `id` attributes. However, they do share a
common `class` of `boundary`.

## Task 3: Alerts on successful completion of maze
Your next task is to make it so that if the user reaches the end of the maze,
a congratulatory "You win!" alert message appears. The end of the maze is a `div`
with an `id` of `end`.

It's not very difficult to create an event handler that pops up a message when
the mouse touches the ending `div`. But note that you shouldn't pop up the
"You win!" message unless the user makes it all the way to the end without
touching any of the maze walls. You'll need to keep track of whether the user
has hit any walls or not, and examine this information when the user touches
the end square.

## Task 4: Restartable maze
One annoying thing you may be noticing as you test the maze so far is that it
can't easily be reset to try again. So our next task will be to make it so that
when the user clicks the mouse on the Start square (a `div` with an `id` of `start`),
the maze state will reset. That is, if the maze boundary walls are red, they
will all return to their normal color, so that the user can try to get through
the maze again.

## Task 5: On-Page status updates
Alert boxes are generally annoying. Instead of an alert box, make the "You win"
and "You lose" messages appear inside the page itself. Place them into the
(initially empty) `h2` element on the page with an `id` of `status`.

## Task 6: Disallow cheating
It's currently too easy to cheat: Just move your mouse onto the `start` square,
around the outside of the maze, and onto the `end` square. Fix this by making it
so that if the user moves the mouse anywhere outside the maze after clicking the
`Start` area, the walls will light up red and the player will lose the game.
