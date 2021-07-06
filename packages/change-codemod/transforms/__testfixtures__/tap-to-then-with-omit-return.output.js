someOperation.then((result) => {
  return 'new-result';
}).then((result) => {
  // do something
}).tap(inlineIdentifier)
  .then((result) => inlineBlock())
  .then(function(result) {
    // second to last in chain
    callFunction();
  }).then(function() {
  // last in chain
  callFunction();
  return result;
});
