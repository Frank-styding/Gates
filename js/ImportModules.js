function addScript(src) {
  let script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
  let j = 0;
  for (let i = 1; i < 10000; i++) {
    j *= i;
  }
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
  if (directory.firstFiles != undefined) {
    if (directory.firstFiles) {
      files();
      subDirectory();
    }
  } else {
    subDirectory();
    files();
  }
}
