# wattos-spaceship-emporium
A simple eCommerce site built using Node, NextJS, React/Redux and Styled Components, https://wattos-spaceship-emporium-store.now.sh/.

### Prerequisites

This app was developed using Node.js(v10.9.0+). It is recommended that you install or update to the lastest version of node.
It is also recommended that yarn(v1.3.2+) be used as the package manager. It has not been tested with npm but its should also work.

### Installing

First, lets clone the repo:

```
$ git clone https://github.com/Antham22/wattos-spaceship-emporium.git
$ cd wattos-spaceship-emporium
```

Next install the dependencies..

```
$ yarn
```

then build the app and navigate to [https://localhost:3000]

```
$ yarn dev
```

Finally, shop around Watto's Spaceship Emporium by adding items to the cart and clicking the cart icon on the right corner of
the navbar to checkout. I went ahead and put some credits in your account so you can start building your fleet. 
Watto's inventory is very limited so make sure you take advantage of any good deals.

*NOTE: The app is not saving any purchases to a database so all changes will be lost on page refresh. 

## Running the tests

Unfortunately this version does not have any test but it is in the backlog. Feel free to log any issues in the meantime.

## Deployment

In order to deploy, you will need to build the project by running:
```
$ yarn run build
```
The build output is located in the .next directory and can be ran by running the following script in the main directory:

```
$ yarn start
```

## Built With

* [Next.js](https://nextjs.org) -  A minimalistic framework for server-rendered React applications.
* [React](https://reactjs.org) - A JavaScript library for building user interfaces.
* [Redux](https://redux.js.org) - A predictable state container for JavaScript apps.
* [Styled Components](https://www.styled-components.com) - A JavaScript library utilizing ES6 and CSS to style.
* [Express](https://expressjs.com) - Fast, unopinionated, minimalist web framework for Node.js
* [Yarn](https://yarnpkg.com/en/) - Dependency management.
* [Node.js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.

## Authors

* **Anthony A. Marin** - [Antham22](https://github.com/Antham22)
## TDD
* Add testing using [Jest](https://jestjs.io/)
* Connect to app to [Firebase](https://firebase.google.com/)
* Refactor...

## Feedback
Please let us know on our
[issues page](https://github.com/Antham22/wattos-spaceship-emporium/issues) if you have any
question or comment.

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Special thanks to [Magic Leap](https://www.magicleap.com) for the opportunity.
