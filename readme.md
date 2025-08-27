### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

1.Answer to the question number-1:
The main difference between getElementById and getElementByClassName is-
getElementById select one element at a time because all id is unique, that's why it return single element or null when no element with the given id is found.On the other hand
getElementByClassName select array of elements like object it return HTMLCollections which is all elements that share same class name.

The difference between querySelector and querySelectorAll is-
querySelector select first element that matching specific CSS selector,it returns single element object or null.On the other hand,
querySelectorAll select all matching element of CSS selector,it returns a NodeList of elements.

2.Answer to the question number-2:
To create and insert a new element like div,p,span etc into the DOM First of all create the element using document.createElement().Then insert it using append() to it's existing parent element to make it visible in the webpage.

3.Answer to the question number-3:
Event Bubbling is triggered on a child element and then bubbles up to it's parent element,all the way to the root allowing parent elements to respond same event.
How it's work-First of all clicking the button trigger the event on the child.Then it bubbles up to its parent in order.If the parent has a listener for the same event it will run too,But it also stop the event from going to its parent elements using e.stopPropagation(); then only child element will show.

4.Answer to the question number-4:
Event Delegation is a method in JavaScript where instead of adding event listeners to many elements, delegate the parent to the work based where the event originated.
It works for added elements dynamically later, don't need multiple event listener and also reduces memory usage though there are many child elements that's why it is useful.

5.Answer to the question number-5:
The difference between preventDefault() and stopPropagation() is-
preventDefault() prevents the browser's default action it's uses basically when user want to control Forms,links or any browser behavior to override.
And the stopPropagation() prevents the event from reaching parent elements , it is use when users want only target element not its parent elements.
