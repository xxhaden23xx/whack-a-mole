# whack-a-mole

The first Whac-A-Mole game began as an arcade game with an air cylinder system to power the moles popping out of the "dirt". Take this game to the web!

## Objective

Use **Window setInterval** methods, **HTML Audio**, **JavaScript Functions** and more to create this arcade classic on the web,

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of HTML structures.
* CSS FlexBox
* Intermediate understanding of JavaScript and DOM (setInterval, Functions, Event Listeners)

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* JS file
* Assets folder (from repo)
3. Link all of your files correctly.

---

### Part II HTML

To complete Part II, fulfill the following requirements:

1. Create a ```div``` with an ```id``` of "container". **Inside** of this div, create the following with their correct relationships as indicated by the indentations:
* ```audio``` with ```id``` of "sound" and ```src``` to the whack.mp3 sound file.
* ```div``` with ```id``` of "dirt-box".
  * ```div``` with ```class``` of "row".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".
  * ```div``` with ```class``` of "row".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".
  * ```div``` with ```class``` of "row".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".
    * ```div``` with ```class``` of "dirt".

---

### Part III CSS

To complete Part III, fulfill the following requirements:

1. Target the ```id``` of "container".
* Set the ```width``` to the full view width of the window.
* Set the ```height``` to the full view height of the window.
* Activate flexbox!
* CENTER the items HORIZONTALLY using Flexbox.
* CENTER the items VERTICALLY using Flexbox.

2. Target the ```id``` of "dirt-box".
* Set the ```width``` to "600px".
* Set the ```height``` to "600px".
* Set the ```background-color``` to "rgb(127,204,51)".
* Activate flexbox!
* Allow wrapping to occur using Flexbox.
* CENTER the items HORIZONTALLY using Flexbox.
* CENTER the items VERTICALLY using Flexbox.
* Curve the edges a little (30px). Which property influences the edges of our element?
* Set the ```border``` to "10px solid darkgreen".

3. Target the ```class``` of "row".
* Set the ```width``` to the full width of its parent element.
* Activate Flexbox!
* Place SPACE-AROUND the elements HORIZONTALLY.

4. Target the ```id``` of "mole".
* Set the ```width``` to "80px".
* Set the ```height``` to "80px".
* Make the element a circular shape!
* Set the ```background-color``` to "grey".

5. Target the ```class``` of "dirt".
* Set the ```width``` to "80px".
* Set the ```height``` to "80px".
* Make the element a circular shape!
* Set the ```background-color``` to "rgb(205,133,63)".
* Set the ```border``` to "10px solid rgb(139,69,19)".

---

### Part IV JS

To complete Part IV, fulfill the following requirements: 
