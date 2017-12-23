const {Asset} = require('parcel-bundler');

class MyAsset extends Asset {
  type = '.js'; // set the main output type.

  parse(code) {
    // parse code to an AST
    return {};
  }

  pretransform() {
    // optional. transform prior to collecting dependencies.
  }

  collectDependencies() {
    // analyze dependencies
    //this.addDependency('my-dep');
  }

  transform() {
    // optional. transform after collecting dependencies.
  }

  generate() {
    // code generate. you can return multiple renditions if needed.
    // results are passed to the appropriate packagers to generate final bundles.
    return {
      foo: 'my stuff here', // main output
      js: 'some javascript' // alternative rendition to be placed in JS bundle if needed
    };
  }
}