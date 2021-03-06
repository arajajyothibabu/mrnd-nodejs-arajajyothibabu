
describe("Contacts Test Suite", function(){

	//var request = require('request');
	var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
	var base_url = "http://localhost:3000";
	var contacts_url = base_url + "/contacts";

	describe("hello world", function(){

		it("hello world",function(done){
		    
		    request.get(base_url, function(error, response, body){
				expect(response.statusCode).toBe(200);
				//expect(body).toBe("Hello World");
				done();
		    });
		});

	});

	describe("create update contact", function(){
		var idCreated;
        var msgIdCreated;

		it("should create contact",function(done){

			var contact = new Object();
			contact.firstName = "jagan";
			contact.lastName = "peri";
			contact.phone = "23002300";

			//console.log(JSON.stringify(contact));
		    
		    request.post({url: contacts_url,
		    			  body: contact,
		    			  json: true
		    			}, 
		    		    function(error, response, body){
                            //console.log(response.status);
							expect(response.statusCode).toBe(200);
							//console.log(body);
                            //console.log(response.statusCode);
							idCreated = body;
							done();
					    });
		});

		it("should retrieve contact",function(done){

			request.get({
							url: contacts_url + "/" + idCreated,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							//console.log(idCreated);
							expect(body.firstName).toBe("jagan");
							done();
					    });
		});
		it("should update contact",function(done){

			var updatedContact = new Object();
			updatedContact.firstName = "jagan-updated";
			request.put({
							url: contacts_url + "/" + idCreated,
							body: updatedContact,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							//console.log(body);
							expect(body.firstName).toBe("jagan-updated");
							expect(body.phone).toBe("23002300");
							done();
					    });
		});
    //TODO: Fill out the test case below that posts a message to a contact
	// and retrieves it back.
//	describe("post and get message to contact", function(){

		it("should create msg for contact",function(done){

			var msg = new Object();
			msg.text = "mrnd";
		    
		    request.post({url: contacts_url + "/" + idCreated,
		    			  body: msg,
		    			  json: true
		    			}, function(error, response, body){
                           
							expect(response.statusCode).toBe(200);
							//console.log(body);
                            //console.log(response.statusCode);
							msgIdCreated = body;						
			done();

        });
    });
            it("should retrieve messages",function(done){

			request.get({
							url: contacts_url + "/" + idCreated+"/messages",
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							//console.log(idCreated);
                            var msgArray = [];
                            var expmsg = new Object();
                            expmsg.text = "mrnd";
                            msgArray.push(expmsg);							                   expect(JSON.stringify(body)).toBe(JSON.stringify(msgArray));
			done();

		  });
	   });
			it("should retrieve message",function(done){

			request.get({
							url: contacts_url + "/" + idCreated+"/messages/"+msgIdCreated,
							json: true
						},
		    		    function(error, response, body){

							expect(response.statusCode).toBe(200);
							//console.log(idCreated);
							expect(body.text).toBe("mrnd");
			done();

		  });
	   });
    });
});