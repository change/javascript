const sinon = require("sinon");
const x = require('something');

// sinon in this comment should be ignored
context('when called in the context of a test function', () => {
  it('calls the handler, passing in the attempt count', function () {
    const handler = sinon.stub();
    getRetryFunction(handler).call(this);
    expect(handler).to.have.been.calledWith(sinon.match({ attemptCount: 1 }));
  });
});
