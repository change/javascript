someOperation
  .then(result => {
    return 'new-result';
  })
  .then(result => {
  return result;
})
  .tap(inlineIdentifier)
  .then((result) => inlineBlock())
  .then(function(result) {
  // second to last in chain
  callFunction();
  return result;
})
  .then(function(result) {
  // last in chain
  callFunction();
  return result;
});
