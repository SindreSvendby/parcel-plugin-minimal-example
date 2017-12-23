module.exports = function (bundler) {
    console.log('The problem: This is never executed')
    bundler.addAssetType('.js', require.resolve('./assets'));
    // bundler.addPackager('foo', require.resolve('./MyPackager'));
  };