Package.describe({
  summary: "Provides Makrdown adding to a clientside js object",
  version: "0.1.0",
  name: "napsy:mkdadder",
  git: "https://github.com/mhhf/meteor-solitidy.git"
});

Package.registerBuildPlugin({
  name: "markdownAdd",
  use: [
    "underscore@1.0.0",
    "ecmascript@0.4.0-beta.12"
  ],
  sources: [
    "handler.js",
    "init.js"
  ]
});

Package.onUse(function(api) {
  api.export(['mkd'], ['client', 'server']);
  api.addFiles("init.js", ['client', 'server']);
});
