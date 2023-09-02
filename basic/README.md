> # BASICS OF HOW TO INJECT THE JAVASCRIPT TO THE HTML

---

- First we need to create an basic HTML template
- The template is created using the following Emmet of vscode **html:5**
- Then create a div with the id = root
- Then in the script tag we need to write an javascript to create an h1 tag and render it in the div that has id = root.

lets see this in the code snippet

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>

    <script>
      const root = document.getElementById("root");
      const heading = document.createElement("h1");
      heading.innerHTML = "Hello World Form Version";
      root.appendChild(heading);
    </script>
  </body>
</html>
```

- As we can see the by using browser api (document.getElementById('root')) document is comes form browser and it has some methods in it so we are using one of its method called getElementById.
- In our example we already created an div with an id = root so it finds it and store it in the variable name root.
- Next we created and variable name heading and we are now using createElement methhod to create an h1 tag and store it in the variable name heading.
- Next we assign the value to the heading tag using heading.innerHTML.
- After that we are appending this heading to the root.
- Now after refrashing the page we will see the heading that was created.

> What is CDN ?

- CDN stands for (Content delivery network)
- A Content Delivery Network (CDN) is a network of interconnected servers that speed up the delivery of web content by bringing it closer to where users are. CDNs use caching, a process that temporarily stores copies of files, to cache content like web pages, images, and video in proxy servers near to the user's physical location.

---

## USING REACT CDN LINKS

- We are Now using CDN links of REACT from link https://legacy.reactjs.org/docs/cdn-links.html
- Add the links in the body we can see in below code.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>

    <script>
      const heading = React.createElement("h1", {}, "Hello world from React!");
      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(heading);
    </script>
  </body>
</html>
```

- Here we can see that we are using now react and react-dom for rendering the content.
- we use React.createElement to create h1 tag and as a third argument we pass what we have to assign to the h1 tag.
- And we are using ReactDOM to create an root element also we are using document.getElementById to get the root element itself in it and after that we using render function to render the heading by passing the heading in it.

> What is crossorigin in the script tag?

- The crossorigin attribute on a script> tag specifies that CORS is supported when loading an external script file from a third party server or domain.
