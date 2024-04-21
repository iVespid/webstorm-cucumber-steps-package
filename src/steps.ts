import {When} from "@cucumber/cucumber";
When('I run step from npm package with text {string}', function (text) {
    console.log(text)
});