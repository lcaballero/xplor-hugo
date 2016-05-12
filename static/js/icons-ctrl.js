(function() {

  ready(
    function() {
      var el = document.getElementsByClassName("icons-ctrl");
      console.log("found: icons-ctrl", selections.icons);
      if (el && el.length) {
        el = el[0];
        new Vue({
          el: el,
          data: {
            icons: selections.icons
          }
        })
      }
    }
  );

})();
