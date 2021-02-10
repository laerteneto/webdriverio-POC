const MainPage = require('../pageobjects/mainPage');
const moment = require('moment');

let mainPage = new MainPage();
let date = new Date();
let formattedDate = moment(date).format('DD/MM/YY');
console.log("Date =  " + formattedDate);

describe('Validate page A/B Testing', function () {
    it('Access page', function () {
        browser.maximizeWindow();
        mainPage.navigate('https://the-internet.herokuapp.com/');
        mainPage.clickElementByText("A/B Testing");
        mainPage.validateElementByText("A/B Test Control");
    });

});