define({
  "name": "Paggcard",
  "version": "2.0.1",
  "description": "A basic Paggcard API example",
  "header": {
    "title": "Paggcard Docs",
    "content": "<p>This document show the basic usage to save/update and charge a card</p>\n<h2>HowTo save a card</h2>\n<p>Save a card it's a pretty simple action, first of all you will need\ncreate Client.\nThis may be doing by calling <a href=\"#api-Client-PostClient\">Create Client</a>\npassing all necessary data. More information is shown below.\nAfter create a client you will receive a Unique Client ID, every time\nyou create a new card this ID will be requested.\nNow with your Client ID you are able to create a Card Token, to do that\nsimpling call <a href=\"#api-Card-PostCard\">Create Card</a> passing your Client ID\non it.\nServer will answer with two token String, the <code>token</code> string will be\nused to make write changes, like create charge or update a card. The\n<code>token_read</code> will be used to make reading routines, like list clients\ncards or check if a card is valid.</p>\n<p>Now that you have a card you can create a new charge. Call\n<a href=\"#api-Charge-PostCharge\">Create Charge</a> with customer data. Server will\nanswer with the Provider message. Pay attention to the result!</p>\n"
  },
  "sampleUrl": false,
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2019-03-13T10:33:21.420Z",
    "url": "http://apidocjs.com",
    "version": "0.16.1"
  }
});
