# eBay Kleinanzeigen frontend coding challenge

Congratulations! You made it to the eBay Kleinanzeigen remote frontend coding challenge. Here, we want to get a taste of your hands-on coding skills.

## Introduction

There are three required tasks that should be solved. You can adapt everything, add libraries, layers and other tools if this makes your life easier.

Before you start, keep in mind that you can skip parts of the challenge if you are stuck. If you have anything to comment then feel free to add comments at certain places. You can also add comments at the end of this file about general things, problems and remarks. If the time is short, it's also useful to describe quickly what you would have done in a required task that was not completely implemented.

After **5 hours** you have to upload the result as .zip file to a public file hoster like <https://filebin.net/>. You have 5 hours to solve the challenge. The exercises are feasible in less time, but we added some buffer to make it less stressful.

No need to be hyper-punctual (e.g. 10 minutes earlier or sooner won't make a difference).

Coding guidance:

- Combine "clean code" with "working software",
- Apply basic architecture principles in your frontend application,
- Usability and the basic design should be state of the art. The usage of component frameworks is allowed but not mandatory.
- Old browser support is nice to have but not necessary
- We appreciate any kind of tests to ensure requirements are fulfilled

## Preparation / Setup

1. Make sure that the following is installed and ready to be used:

  - Node.js >= 12
  - Your preferred IDE/editor

2. Make sure that our example frontend application works. Your frontend application should listen on port 3000.

You can start our example react app by executing:

```
cd 3_marketplace_app/client
npm install
npm start
```

Your frontend runs if you get a valid response from <http://localhost:3000/>.

## Tasks

### 1. Refactor the fake data generator (~ 60 min)

We have a fake data generator in place that generates user data for our test systems. Luckily, there are a few tests to ensure that the basic generator is working.

Please refactor the code in the folder `1_refactoring`.

You are allowed to change everything. Focus on refactoring the code, use state of the art javascript (ECMAScript) and make sure that the feature set is exactly the same as before.

### 2. Build a static web page (~60 min)

In preparation for building a marketplace application (task 3), your task now is to develop a static ad detail page with **handmade** **HTML5** and **CSS3**.

Put your markup and css in the folder `2_static_page`.

Your page layout should be based on the following wireframe mockup: [Detail page](./mockups/detail-page.png)

You don't need to code the given mockup pixel perfect. We would love to see some "eBay Kleinanzeigen look and feel".

Focus on semantic HTML markup and state of the art CSS. The page should be responsive and support both, desktop and mobile devices but it's not necessary to support old browsers.

### 3. Basic marketplace application (~180 min)

Maybe you already noticed: our website is a bit outdated. So we need your help! Take a look at our website [www.ebay-kleinanzeigen.de](https://www.ebay-kleinanzeigen.de) first and open a detail page by clicking on a classified ad.

Take your chance and show us what you've got. We would love to see that you are dying for ebay Kleinanzeigen and of course some modern JavaScript, CSS and HTML! By the way, we love clean and tested code.

The folder `3_marketplace_app` contains everything you need.

#### API-design

We created a data folder that contains data about ads and users.  A fake server exposes the data as REST API. You can use it by

```ssh
  cd client
  npm run start:fake-server
```

Make sure to apply best practices of efficient API-design to make using a real backend as easy as possible.

#### Build a React application

Your task is to build a **simple** classified ad detail page of a marketplace application, that displays details of an ad.

Try to implement the following user stories for the detail-page:

- As a user, I can see additional similar ads on a detail page and if I am interested in one I can jump to it by clicking on the image or on the title.
- As a user, I can write a message to the poster of an ad to ask questions about the ad.

It's completely up to you, how you design your application and which technologies you use. Find a good balance between a well-designed page and a page with a lot of features.

You can start our React example application by:
```ssh
  cd client
  npm run start
```

## Add your comments / remarks here:

What would you do if you had more time? Which trade-offs did you take? What architecture-layers did you create and why?

- Improvements: Add more tests for task 3.
Add more functionalities like search and filter for task 3.
Make the marketplace website responsive.
Add theme for standard colors, paddings, margins.
- For the 3rd task since the UI was to be reconsidered, I focused more on the design and UX part.
Secondly, I mainly concentrated on keeping the reusability as much as there can be.
The, tests were added to check if the UI is behaving the way it's supposed to be.
Also, the new tools in React were used and the usage of class components was purely avoided.
- Make the marketplace task, since there was a mock api to fetch the data from, using an architecture
with redux saga made more sense in order for more sacalability.

The common components were kept modular and reusable in the common folder.

Also, the Header and SideNav component were grouped together in navigation folder for a clearer picture.

The App.js component is kept minimalistic and without any functionalities happening directly from there itself.

A new Home.js file was created that maintained all the router logic and initial component rendering.

Usage of styled-components has beendone excessively in order to maintain style modularity and much cleaner code.

Have fun!


