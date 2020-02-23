# Weatherapp

There was a beautiful idea of building an app that would show the upcoming weather. The developers wrote a nice backend and a frontend following the latest principles and - to be honest - bells and whistles. However, the developers did not remember to add any information about the infrastructure or even setup instructions in the source code.

Luckily we now have [docker compose](https://docs.docker.com/compose/) saving us from installing the tools on our computer, and making sure the app looks (and is) the same in development and in production. All we need is someone to add the few missing files!

## Prerequisites

* An [openweathermap](http://openweathermap.org/) API key.

## Returning your solution

### Via github

* Make a copy of this repository in your own github account (do not fork unless you really want to be public).
* Create a personal repository in github.
* Make changes, commit them, and push them in your own repository.
* Send us the url where to find the code.

#### Run the app locally

1. **cd server** dir and run `npm i && npm run dev`
2. **cd client** dir then run `npm i && npm start`

## Exercises

Here are some things in different categories that you can do to make the app better. Before starting you need to get yourself an API key to make queries in the [openweathermap](http://openweathermap.org/).

### Docker

*Docker containers are central to any modern development initiative. By knowing how to set up your application into containers and make them interact with each other, you have learned a highly useful skill.*

* Add **Dockerfile**'s in the *frontend* and the *backend* directories to run them virtually on any environment having [docker](https://www.docker.com/) installed. It should work by saying e.g.
+
* In the docker-compose.yml file:

```json
build:
    #dockerfile: Dockerfile.dev # Uncomment run the docker locally
    dockerfile: Dockerfile # uncomment run the docker locally
```

1. **cd server** dir and run `docker build -t weatherapp_backend . && docker run --rm -i -p 9000:9000 --name weatherapp_backend -t weatherapp_backend` Or `docker build -t weather-app-backend .` and then `docker run weatherapp_backend`

2. **cd client** dir then run `docker build -t weatherapp_frontend . && docker run --rm -i --name weatherapp_frontend -t weatherapp_frontend`

. If it doesn't, remember to check your api key first.

* Add a **docker-compose.yml** -file connecting the frontend and the backend, enabling running the app in a connected set of containers.

* The developers are still keen to run the app and its pipeline on their own computers. Share the development files for the container by using volumes, and make sure the containers are started with a command enabling hot reload.

### Weatherapp - Dockerized
Final result - uses Docker

1. Make sure you have docker installed and running on your computer
2. Run `docker-compose up` ( you may have to run `docker-compose up --build` for the first setup phase)
3. You must add your own API key in the `docker-compose.yml` file under environment to connect to OpenWeatherMap API.
4. You will also need to update Line 9 in backend/src/index.js to your client app port (i.e. 3001)

**Important:** if you are getting conflict erros, you should run `docker stop <container name>` that is already running in the background.
**Important:** if you are getting other erros, you should run `docker-compose down` to bring everything down, and start over.

To access backend's bash:
Run `docker-compose exec <container name> bash`

To access frontend's bash:
Run `docker-compose exec <container name> bash`

You can grab OpenWeatherMap API key [here](http://openweathermap.org/)

### Node Express and React development *The app has been re-designed.

*Node and React applications are highly popular technologies. Understanding them will give you an advantage in front- and back-end development projects.*

* The application now only reports the current weather. It should probably report the forecast e.g. a few hours from now. (tip: [openweathermap api](https://openweathermap.org/forecast5))

* There are [eslint](http://eslint.org/) errors. Sloppy coding it seems. Please help.

* The app currently reports the weather only for location defined in the *backend*. Shouldn't it check the browser location and use that as the reference for making a forecast? (tip: [geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation))

### Testing

*Test automation is key in developing good quality applications. Finding bugs in early stages of development is valuable in any software development project. With Robot Framework you can create integration tests that also serve as feature descriptions, making them exceptionally useful.*

* Create automated tests for the application. (tip: [mocha](https://mochajs.org/))

* Create [Robot Framework](http://robotframework.org/) integration tests. Hint: Start by creating a third container that gives expected weather data and direct the backend queries there by redefining the **MAP_ENDPOINT**.

* I went with [CircleCI](https://circleci.com) and used [Travis CI](https://travis-ci.org) that would test.

### Cloud AWS

*The biggest trend of recent times is developing, deploying and hosting your applications in cloud. Knowing cloud -related technologies is essential for modern IT specialists.*

* The weather app is deployed to a cloud hosting service [AWS working link](http://weatherapp-env.h8cxvgifqe.us-east-2.elasticbeanstalk.com).

### Travis CI & CircleCI

* [See Travis CI job logs](https://travis-ci.org/Rodcode47/weather_app)

*Automating deployment processes saves a lot of valuable time and reduces chances of costly errors. Infrastructure as Code removes manual steps and allows people to concentrate on core activities.*

* I used [Travis CI](https://travis-ci.org) that would only deploy once all the checks have passed. It will run docker-compose up --build and also create a build folder for the frontend.

# robofriends-ci
Continuous Integration for weatherapp with CircleCI

…or create a new repository on the command line
echo "# weatherapp-dockerized" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:Rodcode47/weatherapp-dockerized.git
git push -u origin master
…or push an existing repository from the command line
git remote add origin git@github.com:Rodcode47/weatherapp-dockerized.git
git push -u origin master