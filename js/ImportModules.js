async function addScript(src) {
  let script = document.createElement("script");
  script.src = src;
  let j = 2;
  for (let i = 1; i < 5000; i++) {
    j *= j;
  }

  await new Promise((resolve) => {
    setTimeout(() => resolve(), 3);
  });
  document.body.appendChild(script);
}

async function addScripstByDirectory(directory, path) {
  path += directory.name + "/";

  let subDirectory = async () => {
    if (directory.subDirectories != undefined) {
      for (const subDirectory of directory.subDirectories) {
        await addScripstByDirectory(subDirectory, path);
      }
    }
  };
  let files = async () => {
    if (directory.files != undefined) {
      for (const file of directory.files) {
        await addScript(path + file);
      }
    }
  };
  if (directory.firstFiles != undefined) {
    if (directory.firstFiles) {
      await files();
      await subDirectory();
    }
  } else {
    await subDirectory();
    await files();
  }
}
