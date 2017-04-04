this.onmessage = function(e) {
  var items = e.data;

  try {
    for (var i = 0; i < items.length; i++) {
      // Use precalculated mod value
      var phase = Math.sin(base + items[i].mod);
      // items[i].style.left = items[i].basicLeft + 100 * phase + 'px';

      var change = items[i].basicLeft + 100 * phase - parseInt(items[i].basicLeft,10);
      items[i].style.transform = 'translateX('+change+'px)';
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
