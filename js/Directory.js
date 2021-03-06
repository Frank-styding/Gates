let DIRECTORY = {
  name: "js",
  files: ["index.js"],
  subDirectories: [
    {
      name: "Modules",
      subDirectories: [
        {
          name: "EventHandler",
          files: ["EventHandler.js"],
        },
        {
          name: "Engine",
          subDirectories: [
            {
              name: "State",
              files: ["State.js"],
            },
            {
              name: "Math",
              files: ["Vector2.js", "Matrix3x3.js", "Transform.js"],
            },
            {
              name: "Controller",
              files: [
                "KeyboardController.js",
                "MouseController.js",
                "InputController.js",
              ],
            },
            {
              name: "Display",
              files: ["Display.js"],
              subDirectories: [
                {
                  name: "DisplayStyle",
                  files: [
                    "Color.js",
                    "Compositing.js",
                    "LineStyle.js",
                    "LinearGradient.js",
                    "RadialGradient.js",
                    "Shadow.js",
                    "TextStyle.js",
                    "DisplayStyle.js",
                  ],
                },
              ],
            },
            {
              name: "Colliders",
              files: [
                "Collider.js",
                "CircleCollider.js",
                "PathCollider.js",
                "RectCollider.js",
                "RoundedRectCollider.js",
              ],
            },
            {
              name: "Components",
              files: ["Component.js"],
              firstFiles: true,
              subDirectories: [
                {
                  name: "UI",
                  files: ["Scene.js", "Conection.js", "BoxConections.js"],
                  subDirectories: [
                    {
                      name: "Shapes",
                      files: ["Circle.js", "RoundedRect.js"],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "DOMTemplate",
          files: ["DOMTemplate.js"],
          firstFiles: true,
          subDirectories: [
            {
              name: "Panel",
              files: ["Panel.js"],
            },
            {
              name: "Components",
              files: [
                "Component.js",
                "ComponentContainer.js",
                "ComponentOptions.js",
                "ComponentsContainer.js",
              ],
            },
            {
              name: "CanvasContainer",
              files: ["CanvasContainer.js"],
            },
          ],
        },
      ],
    },
  ],
};
addScripstByDirectory(DIRECTORY, "");
