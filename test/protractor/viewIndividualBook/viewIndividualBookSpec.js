describe('View Individual Book', function() {

    var books = [];
    var first = 0;
    var middle;
    var last;
    var titleHeader = element(by.id('title-header'));
    var request = require('request');
    var book = element.all(by.repeater('book in books'));
    var home = element(by.className('navbar-brand'));
    var title = element(by.id('individualBookTitle'));
    var isbnTen = element(by.id('individualBookISBNTen'));
    var isbnThirteen = element(by.id('individualBookISBNThirteen'));
    var authors = element.all(by.repeater('author in bookInfo.authors'));
    var language = element(by.id('individualBookLanguage'));
    var pages = element(by.id('individualBookPages'));
    var publisher = element(by.id('individualBookPublisher'));
    var publishDate = element(by.id('individualBookPublishDate'));
    var description = element(by.id('individualBookDescription'));
    var cover = element(by.id('book-cover'));
    var loginRequired = element(by.id('loginRequiredText'));
    var email = element(by.model('email'));
    var password = element(by.model('password'));
    var submit = element(by.id('submitB'));
    var login = element(by.id('loginNav'));
    // var loggedIn = element(by.id('loggedIn'));


    beforeEach(function() {
        browser.get('/#/');
    });

    request('https://bookieservice.herokuapp.com/api/books', function (error, response, body) {
        if (!error) {
            books = JSON.parse(body).books;
            middle = Math.round(books.length/2);
            last = books.length - 1;
        }
    });

    var urlChanged = function(url) {
        return function () {
            return browser.getCurrentUrl().then(function(actualUrl) {
                return url != actualUrl;
            });
        };
    };

    it('should match title tab', function() {
        expect(browser.getTitle()).toEqual('Home');
        book.get(first).click();
        expect(browser.getTitle()).toEqual('Book Profile');
    });

    it('should match with url', function(){
        book.get(first).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/book/' + books[first].id);
        home.click();

        book.get(middle).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/book/' + books[middle].id);
        home.click();

        book.get(last).click();
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/book/' + books[last].id);
        home.click();
    });

    it('should match title', function() {
        book.get(first).click();
        expect(title.getText()).toEqual(books[first].title);
        home.click();

        book.get(middle).click();
        expect(title.getText()).toEqual(books[middle].title);
        home.click();

        book.get(last).click();
        expect(title.getText()).toEqual(books[last].title);
        home.click();
    });

    it('should match ISBN 10', function() {
         //check the first book
        book.get(first).click();
        if(books[first].ISBN10 == null){
            expect(isbnTen.getText()).toEqual('-');
        }
        else{
            expect(isbnTen.getText()).toEqual(books[first].ISBN10);
        }
        home.click();

       //check the middle book
        book.get(middle).click();
        if(books[middle].ISBN10 == null){
            expect(isbnTen.getText()).toEqual('-');
        }
        else{
            expect(isbnTen.getText()).toEqual(books[middle].ISBN10);
        }
        home.click();

        // check the last book
        book.get(last).click();
        if(books[last].ISBN10 == null){
            expect(isbnTen.getText()).toEqual('-');
        }
        else{
            expect(isbnTen.getText()).toEqual(books[last].ISBN10);
        }
        home.click();
    });

    it('should match ISBN 13', function() {
        //check the first book
        book.get(first).click();
        if(books[first].ISBN13 == null){
            expect(isbnThirteen.getText()).toEqual('-');
        }
        else{
            expect(isbnThirteen.getText()).toEqual(books[first].ISBN13);
        }
        home.click();

       //check the middle book
        book.get(middle).click();
        if(books[middle].ISBN13 == null){
            expect(isbnThirteen.getText()).toEqual('-');
        }
        else{
            expect(isbnThirteen.getText()).toEqual(books[middle].ISBN13);
        }
        home.click();

        // check the last book
        book.get(last).click();
        if(books[last].ISBN13 == null){
            expect(isbnThirteen.getText()).toEqual('-');
        }
        else{
            expect(isbnThirteen.getText()).toEqual(books[last].ISBN13);
        }
        home.click();

    });

    // it('should match author', function() {
    //     book.get(last - 2).click();
    //     browser.waitForAngular();
    //     console.log(authors.get(0));
    //     // console.log(books[last - 2].authors);
    //     // browser.waitForAngular();
        
    //     // author.get(1).getText().then(function(a) {
    //     //     console.log('author : ' + a);
    //     // });

    //     // browser.wait(authors.get(0).isPresent()).then( function() {
    //     //     // expect(allProduct.count()).toEqual(furnitureAll.length)
    //     //     authors.get(0).getText().then(function(text) {
    //     //         console.log(text);
    //     //     });
    //     // });
    // });


    it('should match language', function() {
        //check the first book
        book.get(first).click();
        if(books[first].language == null){
            expect(language.getText()).toEqual('-');
        }
        else{
            expect(language.getText()).toEqual(books[first].language);
        }
        home.click();

        //check the middle book
        book.get(middle).click();
        if(books[middle].language == null){
            expect(language.getText()).toEqual('-');
        }
        else{
            expect(language.getText()).toEqual(books[middle].language);
        }
        home.click();

        // check the last book
        book.get(last).click();
        if(books[last].language == null){
            expect(language.getText()).toEqual('-');
        }
        else{
            expect(language.getText()).toEqual(books[last].language);
        }
        home.click();
    });

    it('should match pages', function() {
        //check the first book
        book.get(first).click();
        if(books[first].pages == null){
            expect(pages.getText()).toEqual('-');
        }
        else{
            expect(pages.getText()).toEqual(books[first].pages + '');
        }
        home.click();

        //check the middle book
        book.get(middle).click();
        if(books[middle].pages == null){
            expect(pages.getText()).toEqual('-');
        }
        else{
            expect(pages.getText()).toEqual(books[middle].pages + '');
        }
        home.click();

        // check the last book
        book.get(last).click();
        if(books[last].pages == null){
            expect(pages.getText()).toEqual('-');
        }
        else{
            expect(pages.getText()).toEqual(books[last].pages + '');
        }
        home.click();
    });

    it('should match publisher', function() {
        //check the first book
        book.get(first).click();
        if(books[first].publisher == null){
            expect(publisher.getText()).toEqual('-');
        }
        else{
            expect(publisher.getText()).toEqual(books[first].publisher + '');
        }
        home.click();

        //check the middle book
        book.get(middle).click();
        if(books[middle].publisher == null){
            expect(publisher.getText()).toEqual('-');
        }
        else{
            expect(publisher.getText()).toEqual(books[middle].publisher + '');
        }
        home.click();

        // check the last book
        book.get(last).click();
        if(books[last].publisher == null){
            expect(publisher.getText()).toEqual('-');
        }
        else{
            expect(publisher.getText()).toEqual(books[last].publisher + '');
        }
        home.click();
    });

    it('should match publish date', function() {
        //check the first book
        book.get(first).click();
        if(books[first].publish_date == null){
            expect(publishDate.getText()).toEqual('-');
        }
        else{
            expect(publishDate.getText()).toEqual(books[first].publish_date);
        }
        home.click();

        //check the middle book
        book.get(middle).click();
        if(books[middle].publish_date == null){
            expect(publishDate.getText()).toEqual('-');
        }
        else{
            expect(publishDate.getText()).toEqual(books[middle].publish_date);
        }
        home.click();

        //check the last book
        book.get(last).click();
        if(books[last].publish_date == null){
            expect(publishDate.getText()).toEqual('-');
        }
        else{
            expect(publishDate.getText()).toEqual(books[last].publish_date);
        }
        home.click();
    });

    it('should match description', function() {
        //check the first book
        book.get(first).click();
        if(books[first].description == null){
            expect(description.getText()).toEqual('-');
        }
        else{
            expect(description.getText()).toEqual(books[first].description);
        }
        home.click();

        //check the middle book
        book.get(middle).click();
        if(books[middle].description == null){
            expect(description.getText()).toEqual('-');
        }
        else{
            expect(description.getText()).toEqual(books[middle].description);
        }
        home.click();

        //check the last book
        book.get(last).click();
        if(books[last].description == null){
            expect(description.getText()).toEqual('-');
        }
        else{
            expect(description.getText()).toEqual(books[last].description);
        }
        home.click();
    });

    // it('should match book cover', function() {
    //     book.get(first).click();
        
    //     browser.wait(cover.isPresent);
    //     console.log(cover.isPresent());

    //     // console.log(cover.getAttribute('src'));
    //     // console.log(books[first].cover_image_url);
    // });

    it('should show login required message if not login', function() {
        book.get(first).click();
        expect(loginRequired.isDisplayed()).toBe(true);
    });

    // it('shold not show login required message if already login', function() {
    //     login.click();
    //     email.sendKeys('mint@test.com');
    //     password.sendKeys('11111111');
    //     submit.click();
    //     book.get(first).click();
    //     // expect(loggedIn.isDisplayed()).toBe(true);
    // });


    

    afterAll(function(done) {
        process.nextTick(done);
    });
});


