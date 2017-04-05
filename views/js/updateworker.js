this.onmessage = function(e) {
  var base = e.data.base;
  var itemsArray = e.data.itemsArray;

  try {
    for (var i = 0; i < itemsArray.length; i++) {
    // Use precalculated mod value
    var phase = Math.sin(base + itemsArray[i].mod);
    var change = 100 * phase;
    itemsArray[i].style.transform = 'translateX('+change+'px)';
    }
    // postMessage(items);
  } catch (e) {
    function itemsException(messsage) {
      this.name = 'itemsException';
      this.message = message;
    };
    throw new itemsException('Items Error');
    postMessage(undefined);
  }
}
