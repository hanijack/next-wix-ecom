A complete fullstack project which handles an E-commerce website using Wix .
This headles CMS offers alot of cusomization and handles most of backend setups for us which makes it a great headless platform to use in combine with NEXT Js .
Also , it suitable for small and medium applications because of its versitality and its wide range functionality
For authentication we have two ways for implementing the login process :
1- we can create the wix-managed login which provide a fast and simple implementation for the auth feature.
2-we can make our own custom login implementation provided by wix-client as well (the actual implementation of this app)

State management libraries:
state management libraries usage depend on how large the app is , here we just need a state management for the cart component and then we can use some light-weight library such as react query or zustand due their effeciency and scalability with small chunks of data flow in our app 
if we'r using a large scale project that handles complex processes with servers ,then the redux-toll kit is the answer ,so choosing one of the libraries above will be legit in this case 
and zustand will be suitable . 