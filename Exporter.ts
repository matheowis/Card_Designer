import {readdirSync,writeFile} from 'fs';


interface IAppPath{
    folder:string,
    path:string
}

var folders = readdirSync(`${__dirname}/src`).filter(e => !e.includes('.'))

var appPaths:IAppPath[] = [];

var recuriveExporter = (path:string,folders:string[],paths:IAppPath[]) => {
    for(var i =0;i< folders.length;i++){
        var folder = folders[i]
        var newPath = `${path}/${folder}`;
        paths.push({path:newPath,folder});
        var subFolders = readdirSync(newPath).filter(e => !e.includes('.'));
        if(subFolders.length == 0) continue;
        recuriveExporter(newPath, subFolders, paths);
    }
}

recuriveExporter(`${__dirname}/src`, folders,appPaths);

var needingExport = appPaths.filter(e => e.folder == 'private' || e.folder == 'public');

for(var i = 0;i< needingExport.length;i++){
    var appPath = needingExport[i];
    var typescriptFiles = readdirSync(appPath.path).filter(e => e.includes('.ts') && e != 'index.ts');
    var text = typescriptFiles.map(e => `export * from './${e.split('.')[0]}'`).join('\n');
    writeFile(`${appPath.path}/index.ts`, text, function (err) {
        if (err) return console.log(err);
      });
}