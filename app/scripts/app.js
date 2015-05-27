(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');  

  app.appName = 'DeployR Demo';
  app.config = {};
  
  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function () {
    //console.log('Our app is ready to rock!');
  });

  window.sharedMixin = {    
    outputs: {
      rscript: null,
      rcode: null,
      routput: null
    },
    
    inputs: {
      rscript: null,
      rcode: null,
      rinput: null
    }
  };
  
  // wrap document so it plays nice with other libraries
  // http://www.polymer-project.org/platform/shadow-dom.html#wrappers 
})(wrap(document));
