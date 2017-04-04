this.onmessage = function(e) {
  var items = e.data;

  try {
    for (var i = 0; i < items.length; i++) {
    // var phase = Math.sin((document.body.scrollTop / 1250) + (i % 5));
    // Use precalculated mod value
    // var phase = Math.sin(scrollTop + (i % 5));
    var phase = Math.sin(basePosition + items[i].mod);
    items[i].style.left = items[i].basicLeft + 100 * phase + 'px';
    }
    postMessage(items);
  } catch (e) {
    function itemsException(messsage) {
      this.name = 'itemsException';
      this.message = message;
    };
    throw new itemsException('Items Error');
    postMessage(undefined);
  }
}
