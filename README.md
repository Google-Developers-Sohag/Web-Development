# Web-Development
**Basic and advanced module based js.**

## What js can do ? 
- Build dynamic web pages.
- Display alert boxes.
- Write messages to the browser status bar.
- Control features of the browser.
- Open new browser windows.
- Customize reactions to mouse actions and keystrokes.
- Validate information in forms.
- Perform calculations.
- Display `tooltips` when rolling over objects on the screen.
- Create interactive `forms`.
- Set date and time.
- Identify browsers and browser plug-ins such as `Flash`.

## What js cannot do ? 
- Write files to the hard disk.
- Read files from the hard disk -- except for cookies.
- Close windows other than those the JavaScript applications opened.
- Write server-side applications, called `Common Gateway interface (CGI) applications`,
which must be written using languages such as `Java`, `PHP`, `Perl` and `ASP`.
- Read information from a web page that resides on a domain different from the domian where the javascript code resides.

## We will be using these resources to tackle down javascript : 
| JavaScript O'Really | JavaScript demystified | JavaScript Mozilla docs |
|-------|------|-------|
| <a href="https://book4you.org/book/5533416/34944c"><img src="https://user-images.githubusercontent.com/60224159/162418457-0ff8f39c-8c13-4040-8795-289a47233628.png" width="200"></a> | <a href="https://book4you.org/book/639026/4296e7"><img src="https://user-images.githubusercontent.com/60224159/162418628-894a3c88-1b5c-48eb-aa59-94ac164ea82a.png" width="200"></a> | <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://user-images.githubusercontent.com/60224159/162418795-0d4c0f28-edfd-4d14-9aa3-20c07ccd1689.png" width="200"></a> 

## Getting down to JavaScript : 
JavaScript Program Anatomy : 
- Objects : are the instantiation of classes and encloses some member functions and member variables (properties or attributes).
- Properties : are the object's member variables.
- Methods : are the object's member functions, a fucntion differs from a method that it can have a return and can be assigned to another value,
member methods can be accessed from the object using the dot syntax `foobar.startRenderer();`.
- Event Handlers : are overridable interfaces with some methods that are used for invoking some actions when something remotely takes place (like listening for sensor's data or button clicks or an analog device).

## Spice up : 
Copy this code into `index.html` and run into a browser :
```xhtml
<!DOCTYPE html>
<!-- This is an HTML5 file -->
<html>
<!-- The root element -->
<head>
    <!-- Title, scripts & styles can go here -->
    <title>Digital Clock</title>
</head>
<body>
    <!-- The body holds the content of the document. -->
    <h1>Spice Up !</h1>
    <script language="js" type="text/JavaScript">
      const hello = "Hello World !";
      document.write(hello);
      alert(hello);
  </script>
</body>
</html>
```
