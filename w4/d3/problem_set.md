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
```javascript
    btn.addEventListener('click', function() {
        canvas.style.backgroundColor = input.value;
    });
```

[CODE HERE (in case you get stuck)](./colorful_buttons.html)

If you finish, try and make something yourself!
