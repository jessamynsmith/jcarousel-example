# jcarousel-example

An example of customizing [jcarousel](http://sorgalla.com/jcarousel/) so slides move at different speeds

This example is based on the basic example in the jcarousel docs.

You can see the example running on heroku here: [https://jcarousel-example.herokuapp.com](https://jcarousel-example.herokuapp.com)


### Heroku setup

    Create heroku app
    
    heroku buildpacks:add https://github.com/hone/heroku-buildpack-static.git
    heroku buildpacks:add heroku/nodejs
