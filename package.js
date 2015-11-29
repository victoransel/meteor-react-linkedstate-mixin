Package.describe({
  name: 'victoransel:react-linkedstate-mixin',
  version: '0.13.2',
  summary: 'ReactLink is an easy way to express two-way binding with React.',
  git: 'https://github.com/victoransel/meteor-react-linkedstate-mixin',
  documentation: 'README.md'
});

Npm.depends({
  "react-addons-linked-state-mixin": "0.14.3"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use('cosmos:browserify@0.8.3');
  api.addFiles('react-linkedstate-mixin.browserify.js');

  api.export('LinkedStateMixin');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('react@0.14.1');
  api.use('jsx@0.2.3');
  api.use('victoransel:react-linkedstate-mixin');
  api.addFiles('react-linkedstate-mixin-tests.jsx', 'client');
});