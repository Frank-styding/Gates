let DIRECTORY = {
  name: "js",
  files: ["index.js"],
  subDirectories: [
    {
      name: "Engine",
      //files: ["index.js"],
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
        {
          name: "Thread",
          files: ["Tread.js"],
        },
        { name: "state", files: ["State.js"] },
        {
          name: "controller",
          files: ["MouseController.js", "Controller.js"],
        },
        {
          name: "display",
          files: [
            "Color.js",
            "Shadow.js",
            "Pattern.js",
            "LineStyle.js",
            "LinearGradient.js",
            "RadialGradient.js",
            "Compositing.js",
            "DisplayStyle.js",
            "Display.js",
          ],
        },
        {
          name: "components",
          files: ["Component.js"],
          firstFiles: true,
          subDirectories: [
            {
              name: "UI",
              files: [],
            },
          ],
        },
      ],
    },
    {
      name: "App",
      files: [],
    },
  ],
};
addScripstByDirectory(DIRECTORY, "");
