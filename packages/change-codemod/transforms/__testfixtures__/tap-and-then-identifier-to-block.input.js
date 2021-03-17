// Tap at end of chain
          SubscriptionProgram.where({ id: 1 })
            .fetch({ require: false })
            .tap((program) => {
              expect(program.get('name')).to.equal(reqBody.name);
            });

// Tap within chain
        SubscriptionProgram.where({ id: 1 })
            .fetch({ require: false })
            .tap((program) => {
              expect(program.get('name')).to.equal(reqBody.name);
            }).then((response) => { return console(response); });

// Tap with inline expression
          SubscriptionProgram.where({ id: 1 })
            .fetch({ require: false })
            .tap((program) => expect(program.get('name')).to.equal(reqBody.name));


      request(app)
        .post(endpoint)
        .set('Content-Type', 'text/plain')
        .set('Auth-Type', 'app')
        .set('App-Id', 'fe')
        .send(JSON.stringify(notification))
        .expect(415)
        .expect('Error-Type', 'UnsupportedContentType')
    .tap(validateResponse)
        .then(validateResponse);
