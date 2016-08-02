# Introduction To HTML

## What is HTML?

HTML stands for HyperText Markup Language. A markup language is any language whose purpose is to annotate or classify text. Let's look at an example.

```md
# Big Header

## Medium Header

##### Small Header
```

which renders as:

------
# Big Header

### Medium Header

##### Small Header
------

In this case, the number of hash marks (`#`) indicates the size of the text. The point of a markup language is that is gives you a *means* to annotate and classify text. And it just so happens that every website on the internet is a text document :~) So now that you understand the ML (Markup Language), let's get to the HT.

HyperText is any document that contains a link to another document. Links are the primary way of navigating the internet. Google search is just a page full of links. HTML is a markup language that was engineered to build hypertext documents (aka web pages).

## Quick! Let's make something.

1. Read all of the instructions first.
2. Create a new file. Call it `whateverYouWant.html`. Open it up in your favorite browser. It'll be blank.
3. Put `<!DOCTYPE html>` at the top.
4. Create a pair of `<html></html>` tags.
5. Inside of the `<html>` tags, put a pair of `<head></head>` tags.
  * Be sure to format properly! HTML doesn't have helpful error messages like JavaScript. Bugs can be very hard to spot if you aren't formatting properly
  * Tags are separated by a new line. Each level of nesting needs an indentation
6. Inside of the `head` tags, put a pair of `<title></title>` tags. Inside of the `title` tags, type out some text. Reload your browser. Still blank. But look at the text in the tab.
7. Underneath the `head` tag, put a pair of `<body></body>` tags
8. Underneath the `body` tag, put a pair of `<script></script>` tags
9. Inside of the `script` tags, create a while loop:
  * The condition for the while loop is `document.body.clientHeight <= window.innerHeight`
  * In the while loop, first create a button: `var btn = document.createElement('button');`
  * Attach it to the document's body: `document.body.appendChild(btn);`
10. Refresh the page!
  * If you don't see anything, try debugging! Google `open the js console for [YOUR FAV BROWSER]` and follow the instructions
  * If all else fails, you can look at the [code](./quick.html) and try to understand your mistake.

### What you learned

**HTML**

* `<!DOCTYPE html>` - Tells the browser which version of HTML you are using. `<!DOCTYPE html>` means HTML5.
* `<html></html>` - The root level component for an html page.
* `<head></head>` - A place to put metadata, page styling, script loading, and more!
  * `<title></title>` - Sets the page title, which affects tabs, branding, SEO.
* `<body></body>` - This is where all of the content for the page goes.
* `<script></script>` - These tags are super useful! You can write JavaScript inside of them :-D

**JavaScript**

* `document` - This is a keyword that exists only in the browser environment. It gives us access to all of the tags in our html page
  * `document.createElement(elementName)` - Returns a new pair of `<elementName></elementName>` tags
  * `document.clientHeight` - The height of the body element (in pixels)
  * `document.body` - This gives us access to an API for manipulating and getting information from the `body` tag
    * `document.body.appendChild(element)` - Inserts the `element` into the tags of the `body` tag
* `window` - This is the global object for the browser.
  * `window.innerHeight` - The height of the browser window (in pixels)

## Thinking in HTML

TODO

tree structure, box model, semantics (header vs nav)

## CSS Light Intro

[Watch This: Intro](https://vimeo.com/album/3732382/video/151188850) (8 minutes)

[Watch This: Workflow](https://vimeo.com/168826664) (12 minutes)

The password for both videos is: go_video_go

## Popular Tags

### Paragraphs and Headers

```html
<p>A paragraph tag is used to wrap a multi-line body of text</p>

<h1>A Header1 tag is used to denote the largest title on the page</h1>
```

**N.B.** The H1 tag is that it is used in site ranking algorithms by search engines such as Google. It is important to only have one H1 tag per page and to have it contain a keyword summarizing the page content.

```html
<h2>Used for titles with a smaller font size than H1</h2>
```

These header tags should be used in descending order with regards to their containing font sizes. The smallest size is a:

```html
<h5>Header five tag</h5>
```

### Lists

Lists are used to contain a series of list elements. These may be ordered or unordered but must contain at least one element. There are three different types of HTML list tags. The following is an example of the first, most common type, the unordered list.

```html
<ul>
    <li>Unordered List</li>
    <li>Ordered List</li>
    <li>Definition List</li>
</ul>
```

The ordered list is usually used to display numbered list elements.
```html
<ol>
    <li>First</li>
    <li>Second</li>
    <li>Third</li>
</ol>
```

The definition list it not as common but is used to hold definition data and definition term elements.
```html
<dl>
    <dt>Unordered List</dt>
    <dd>An HTML element made up of list elements in no particular order</dd>
    <dt>Ordered List</dt>
    <dd>An HTML element made up of list elements in order</dd>
    <dt>Definiton List</dt>
    <dd>An HTML element with definition term and definition data elements</dd>
</dl>
```
### Links

What is commonly referred to around the internet as a "Link" is a clickable element that directs the browser to another page or area on the page. This is not to be confused with a link tag, which will be discussed in future sections.

To create a link using an html element we use what is called an anchor tag:

```html
<a href="http://appacademy.io">App Academy</a>
```

Notice that the URL for which this clickable anchor tag element will make a GET request to is provided through an href attribute. The text within the anchor tag element is the what appears as clickable on the page.

In the following code we create two anchor tags. One is self-closing with a name attribute and the other contains text that has an href attribute with the same name value preceded by a `#`. This is how we create in-page links. Clicking the 'Back to top' link wherever it is placed on the page will now take the user to the location of the named anchor tag.

```html
<a name="top-of-page"/>
    <!-- Imagine all of your other content in between. By the way, this is how we denote comments in HTML. -->
<a href="#top-of-page">Back to top</a>
```

The use of the `#` in the beginning of the url tells the browser to find an element on the page with the given name attribute instead of making a new GET request.

### Images

We create image elements in html using a self-closing image tag with the src attribute referring to the path to the image data.

```html
`<img src="http://appacademy.io/images/app-academy-logo.img" alt="app-academy-logo"/>`
```

The alt attribute provides alternate text for the image which is used in image search rankings, speech-accessibility, and displayed when a user hovers over the image.

## Colorful Buttons

1. Go ahead and write out the skeleton for your HTML page (DOCTYPE, html, head, and body)
2. Give the page the `<title>` "Colorful Buttons"
3. In the body:
  * Create a pair of `div` tags
  * Inside the `div`, create an `input` tag. Give it the attributes `type` and set it equal to `"text"`
    * `<input type="text" />` A single tag, not a pair of tags
  * Underneath the `input` tag, create a pair of `button` tags
  * Inside the `button` tags, put the word 'Change'
4. Look at you html page in browser! Wow! An input field AND a button!
5. We've made some pre-defined styling for you. Copy and paste the code into the `head` tags
  * ```html
    <style>
      html, body {
        height: 100%;
        margin: 0px;
        padding: 0px;
      }

      .container {
        width: 33%;
        height: 100%;
        text-align: center;
        display: inline-block;
      }
    </style>
    ```
6.  Now we need to link our styling to our html elements. Add the attribute `class` to the `div` and set it equal to `container`.
7. Time to write some code! But first, we need to create a 'handle' on html elements so we can refer to them in our JavaScript:
  * In the `div`, add an attribute of `id` and set it equal to `"canvas1"`
  * In the `input`, add an attribute of `id` and set it equal to `"input1"`
  * In the `button`, add an attribute of `id` and set it equal to `"button1"`
  * Add a pair of `script` tags underneath the `body`
8. In the script tags:
  * Using the `document.getElementById` method, initialize a variable to the `div`, `input`, and `button` elements
    * Example: `var input = document.getElementById("input1")`
  * The variable that holds the `button` element (we'll call it `btn` for simplicity's sake) needs to listen to the "click" event (when a user clicks the button). When the button is clicked, it will take the text in the `input` and set it equal to the background color of the `div`
  * ```js
    btn.addEventListener('click', function() {
      canvas.style.backgroundColor = input.value;
    });
    ```

[CODE HERE](./colorful_buttons.html)
