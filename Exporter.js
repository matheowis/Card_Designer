"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var folders = (0, fs_1.readdirSync)("".concat(__dirname, "/src")).filter(function (e) { return !e.includes('.'); });
var appPaths = [];
var recuriveExporter = function (path, folders, paths) {
    for (var i = 0; i < folders.length; i++) {
        var folder = folders[i];
        var newPath = "".concat(path, "/").concat(folder);
        paths.push({ path: newPath, folder: folder });
        var subFolders = (0, fs_1.readdirSync)(newPath).filter(function (e) { return !e.includes('.'); });
        if (subFolders.length == 0)
            continue;
        recuriveExporter(newPath, subFolders, paths);
    }
};
recuriveExporter("".concat(__dirname, "/src"), folders, appPaths);
var needingExport = appPaths.filter(function (e) { return e.folder == 'private' || e.folder == 'public'; });
for (var i = 0; i < needingExport.length; i++) {
    var appPath = needingExport[i];
    var typescriptFiles = (0, fs_1.readdirSync)(appPath.path).filter(function (e) { return e.includes('.ts') && e != 'index.ts'; });
    var text = typescriptFiles.map(function (e) { return "export * from './".concat(e.split('.')[0], "'"); }).join('\n');
    (0, fs_1.writeFile)("".concat(appPath.path, "/index.ts"), text, function (err) {
        if (err)
            return console.log(err);
    });
}
