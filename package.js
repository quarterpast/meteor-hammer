Package.describe({
  summary: "A javascript library for multi-touch gestures",
  version: "2.0.3.1",
  git: "https://github.com/quarterto/meteor-hammer.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');
  api.addFiles('hammer/hammer.js', 'client');
});

