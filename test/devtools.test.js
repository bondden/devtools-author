/*
 * Background page tests
 * app/devtools.js
 */

describe('devtools.js', function() {

  // sometimes it takes time to start phantomjs
//   this.timeout(4000);

  // empty html page aka generated background page
  var FILENAME = 'test/empty.html';

  it('should get theme and font size from storage', function(done) {
    page.open(FILENAME, function() {
     
      // stub `chrome.storage.sync` & with fake data
      page.evaluate(function(storage) {
        chrome.storage.sync.get.yields(JSON.parse(storage));
      }, fs.read('test/data/storage.json'));

//       page.evaluate(function(panel) {
//         chrome.devtools.panels.yields(JSON.parse(panel));
//       }, fs.read('test/data/panel.json'));
      
      // run background js
      page.injectJs('app/scripts/devtools.js');
      
      // assert
      page.evaluate(function() {
        
      });
      done();
    });
  });

//   it('should inject theme in to html page', function(done) {
//     page.open(FILENAME, function() {
//       // stub `http://httpbin.org/ip` with fake data
//       page.evaluate(function(response) {
//         server = sinon.fakeServer.create();
//         server.respondWith("http://httpbin.org/ip", [
//             200,
//             { "Content-Type": "application/json" },
//             response
//         ]);
//       }, fs.read('test/data/ip-ok.json'));

//       // run background js
//       page.injectJs('src/background.js');

//       // trigger `get-ip` event
//       page.evaluate(function() {
//         sendResponse = sinon.spy();
//         chrome.runtime.onMessage.trigger('get-ip', {}, sendResponse);
//         server.respond();
//       });

//       // assert
//       page.evaluate(function() {
//         sinon.assert.calledOnce(sendResponse);
//         sinon.assert.calledWith(sendResponse, '1.2.3.4');
//       });
//       done();
//     });
//   });

});