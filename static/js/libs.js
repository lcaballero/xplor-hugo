/**
 * Run event after DOM is ready
 * @param  {Function} fn Callback function
 */
var ready = function ( fn ) {

  // Sanity check
  if ( typeof fn !== 'function' ) return;

  // If document is already loaded, run method
  if ( document.readyState === 'complete'  ) {
    return fn();
  }

  // Otherwise, wait until document is loaded
  document.addEventListener( 'DOMContentLoaded', fn, false );

};

/**
 * Make an ajax request.
 *
 * @param method http GET, POST, etc.
 * @param path the url path to request.
 * @param fn the callback to use once data received.
 * @param data the data to send along with the request.
 */
var doReq = function(method, path, fn, data) {
  axios[method](path, data)
    .then(function(res) {
      fn(res.data)
    })
    .catch(function(ex) {
      console.log(ex)
    })
}
