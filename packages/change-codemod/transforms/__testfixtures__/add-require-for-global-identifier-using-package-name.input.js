context('when called in the context of a test function', () => {
  it('calls the handler, passing in the attempt count', function () {
    const obj = { random: 'property' };
    const handler = sinon.stub();
    getRetryFunction(handler).call(this);
    expect(handler).to.have.been.calledWith(_.values(obj));
  });
});
