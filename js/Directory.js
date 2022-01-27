let DIRECTORY = {
  name: "js",
  files: ["index.js"],
  subDirectories: [
    {
      name: "Engine",

      subDirectories: [
        {
          name: "Thread",
          files: ["Thread.js"],
        },
        {
          name: "Math",
          files: ["Vector2.js", "Matrix3x3.js", "Transform.js"],
        },
        {
          name: "Colliders",
          files: [
            "Collider.js",
            "CircleCollider.js",
            "PathCollider.js",
            "RectCollider.js",
          ],
        },
        { name: "State", files: ["State.js"] },
        {
          name: "Controller",
          files: [
            "KeyboardController.js",
            "MouseController.js",
            "Controller.js",
          ],
        },
        {
          name: "Display",
          files: [
            "Color.js",
            "Shadow.js",
            "Pattern.js",
            "LineStyle.js",
            "LinearGradient.js",
            "RadialGradient.js",
            "Compositing.js",
            "TextStyle.js",
            "DisplayStyle.js",
            "Display.js",
          ],
        },
        {
          name: "Components",
          files: ["Component.js"],
        },
      ],
    },
    {
      name: "App",
      files: ["App.js"],
      subDirectories: [
        {
          name: "Components",
          subDirectories: [],
        },
      ],
    },
  ],
};
addScripstByDirectory(DIRECTORY, "");
