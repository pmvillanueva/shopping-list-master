$(document).ready(function () {
console.log("hello world");
  //single state object
    var state = {
      items: []
    };

    // State modification functions
    var addItem = function(state, item) {
        state.items.push(item);
    };

    // Render functions
    var renderList = function(state, element) {
        var itemsHTML = state.items.map(function(item) {
            return '<li>' + item + '</li>';
        });
        element.html(itemsHTML);
    };

    // Event listeners
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        addItem(state, $("#shopping-list-entry").val());
        renderList(state, $('.shopping-list'));
  });
});
