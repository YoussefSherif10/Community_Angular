# Mycommunity

community website where users can talk, read blogs, and participate in forums
There is a Forums area where you can browse through all of the forum's topics before viewing each topic's posts individually. Additionally, there is a Blogs area.

A list of blog entries that you can view separately is visible. Last but not least, you can communicate with an automated robot while perusing the rest of the website using a chat function that appears over the other information. Additionally, the application features login functionality and an error page for unrecognised URLs.
There is at least one route for each of these features.

*	List of forums, which also acts as the default view
*	Individual forum, which shows a list of topics
*	Individual topic, which shows the posts in the topic
*	List of blog posts
*	Individual blog post
*	Chat box for selecting another user to chat with
*	Chat box for talking with another user
*	Login view
*	Not found error view

## Structure 

In order to facilitate separation and improve code maintainability, each feature has its own module. further to provide lazy loading of a module's child components.

In order to do many functions simultaneously, I developed auxiliary routes for the talking features.

I used the auth guard canActivate to protect the views, allowing users to access them using the username they entered while logging in and storing it in local storage.

## Styling

I used angular material for styling as well as the bootstrap library. I made sure that the UI is responsive.

## Backend

Using a data service where a variety of forums are stored, I simulated the backend. The data file also contains information on the users and the chatbot.

## Application in Action

![](https://github.com/YoussefSherif10/Community_Angular/blob/main/a1.png?raw=true)

![](https://github.com/YoussefSherif10/Community_Angular/blob/main/a2.png?raw=true)

![](https://github.com/YoussefSherif10/Community_Angular/blob/main/a3.png?raw=true)

![](https://github.com/YoussefSherif10/Community_Angular/blob/main/a4.png?raw=true)

![](https://github.com/YoussefSherif10/Community_Angular/blob/main/a5.png?raw=true)
