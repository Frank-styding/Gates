let DIRECTORY = {
  name: "js",
  subDirectories: [
    {
      name: "App",
      files: ["index.js"],
      subDirectories: [
        {
          name: "math",
          files: ["Vector2.js", "Matrix3x3.js", "Transform.js"],
        },
        {
          name: "colliders",
          files: [
            "Collider.js",
            "CircleCollider.js",
            "PathCollider.js",
            "RectCollider.js",
          ],
        },
        { name: "state", files: ["State.js"] },
        {
          name: "controller",
          files: ["MouseController.js", "Controller.js"],
        },
        {
          name: "display",
          files: ["Color.js", "Display.js"],
        },
        {
          name: "components",
          files: ["Component.js"],
          firstSubDirectory: true,
          subDirectories: [
            {
              name: "UI",
              files: ["Button.js"],
            },
          ],
        },
      ],
    },
  ],
};
addScripstByDirectory(DIRECTORY, "");
