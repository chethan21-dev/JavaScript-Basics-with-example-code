1. JavaScript Can Change HTML Content.
2. One of many JavaScript HTML methods is getElementById().
3. A method of an object is called via the following syntax: objectName. methodName(); 
4. If a method is called without parenthesis, it is being called as a property, which means it will return the function definition, not execute the method.

The example below "finds" an HTML element (with id="demo"), and changes the element content (innerHTML) to "Hello JavaScript":
Example - 
document.getElementById("demo").innerHTML = "Hello JavaScript";

JavaScript accepts both double and single quotes:
Example
<!DOCTYPE html>
<html>
<body>
<h2>Jva Script</h2>
<p id="demo">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("demo").innerHTML = "it changes another text when you click once this!"'>Click here....</button>
</body>
</html>

JavaScript Can Change HTML Attribute Values
In this example JavaScript changes the value of the src (source) attribute of an <img> tag:
Example of JavaScript using image src and clicking option. :
<!DOCTYPE html>
<html>
<body>
<h2>JavaScript image example</h2>
<p>In this case JavaScript changes the value of the src (ie.,source) attribute of an image.</p>
<button onclick="document.getElementById('myImage').src='pic_bulbon.gif'">Light on</button>
<img id="myImage" src="pic_bulboff.gif" style="width:200px">
<button onclick="document.getElementById('myImage').src='pic_bulboff.gif'">Light off</button>
</body>
</html>
