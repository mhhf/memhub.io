var fileModeHandler = function ( compileStep ) {

  var content = compileStep.read().toString('utf8');
  var name = compileStep.pathForSourceMap.split('.')[0];
  var obj = {[name]: content};

  compileStep.addJavaScript({
    path: compileStep.inputPath + '.js',
    sourcePath: compileStep.inputPath,
    data: `_.extend(mkd,${JSON.stringify(obj)});`
  });
}

Plugin.registerSourceHandler( "md", fileModeHandler );
