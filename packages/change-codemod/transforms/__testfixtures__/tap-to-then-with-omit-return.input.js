someOperation
  .then(result => {
    return 'new-result';
  })
  .tap(result => {
    // do something
  })
  .tap(inlineIdentifier)
  .tap(() => inlineBlock())
  .tap(function() {
    // second to last in chain
    callFunction();
  })
  .tap(function() {
    // last in chain
    callFunction();
  });
