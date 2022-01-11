function addScript(src) {
  let script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
}

function addScripstByDirectory(directory, path) {
  path += directory.name + "/";

  let subDirectory = () => {
    if (directory.subDirectories != undefined) {
      for (const subDirectory of directory.subDirectories) {
        addScripstByDirectory(subDirectory, path);
      }
    }
  };
  let files = () => {
    if (directory.files != undefined) {
      for (const file of directory.files) {
        addScript(path + file);
      }
    }
  };
  if (directory.firstSubDirectory != undefined) {
    if (directory.firstSubDirectory) {
      files();
      subDirectory();
    }
  } else {
    subDirectory();
    files();
  }
}
