const MainPage = require('../pageobjects/mainPage');
const moment = require('moment');

let mainPage = new MainPage();
let date = new Date();
let formattedDate = moment(date).format('DD/MM/YY');
console.log("Date =  " + formattedDate);

describe('Add/Remove Elements', function () {
    it('Add element and Delete', function () {
        browser.maximizeWindow();
        mainPage.navigate('https://the-internet.herokuapp.com/');
        mainPage.clickElementByText("Add/Remove Elements");
        mainPage.clickElementByText("Add Element");
        mainPage.clickElementByText("Delete");
        mainPage.validateNotExistence("Delete");
    });

});