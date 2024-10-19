export const data = {
  header: {
    title: "Welcome to ZIG - <a href='/'>Tiny Book</a>",
  },
  navbar: [
    {
      label: "Description",
      url: "#description",
    },
    {
      label: "Getting Started",
      url: "#getting-started",
    },
    {
      label: "The Code",
      url: "/docs",
    },
    {
      label: "Team",
      url: "/team",
    },
  ],
  description: {
    title: "Description",
    paragraphs: [
      "The aim of this project is to develop a Zig library designed to optimize the training and inference of ML models on embedded systems and edge devices. Embedded systems and edge devices typically have limited computational resources, power constraints, and often operate in real-time environments. This library will address these challenges by providing optimized algorithms, efficient memory management, and low-level hardware interfacing tailored to the needs of AI model training on these constrained devices. Key Features",
      "<strong>Lightweight and High-Performance:</strong> The library leverages Zig's low-level programming capabilities to deliver high-performance solutions while maintaining a small footprint, crucial for resource-constrained environments.",
      "<strong>Hardware Acceleration Support:</strong> The library will include support for various hardware acceleration techniques, such as SIMD (Single Instruction, Multiple Data) and GPU offloading, where applicable, to maximize the efficiency of AI model training.",
      "<strong>Efficient Memory Management:</strong> Given the limited memory availability in embedded systems, the library will incorporate advanced memory management techniques, including memory pooling, static memory allocation, and efficient buffer management.",
      "<strong>Optimized Algorithms:</strong> The library will provide a set of optimized algorithms specifically designed for AI model training on embedded devices. This includes quantization techniques, model pruning, and lightweight neural network architectures that reduce the computational load.",
      "<strong>Cross-Platform Support:</strong> The library will be designed to be cross-platform, supporting a variety of embedded systems, including ARM Cortex-M, RISC-V, and other popular microcontroller architectures.",
      "<strong>Ease of Integration:</strong> The library will be modular and easy to integrate into existing projects, with clear documentation, examples, and APIs that make it straightforward for developers to incorporate AI training capabilities into their embedded or edge devices.",
    ],
  },
  gettingStarted: {
    title: "Getting Started",
    subtitle: "Prerequisites",
    paragraphs: [
      "<strong>Zig Compiler:</strong> Ensure you have the latest version of the Zig compiler installed. Follow the guide on the official website. Zig knowledge: To better understand the library is necessary a solid knowledge of zig language. We reccomend you a hands-on learning approach, try to solve those excercises... <a href='https://codeberg.org/ziglings/exercises' target='_blank'>(ziglings/exercises)</a>",
    ],
  },
  docs: {
    title: "Docs Page",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis neque molestie, interdum nisi nec, lacinia velit. Vivamus feugiat tincidunt accumsan. Vivamus pretium sed massa id vulputate. Quisque id metus est. Morbi ultrices eu nisi sed convallis. Nullam aliquam placerat venenatis. Nunc tristique mattis mauris ut ultrices. Donec in ligula neque.  ",
      "Donec in ligula neque. Donec aliquam, quam a rutrum dapibus, felis justo mollis erat, eu dignissim nisl metus at risus. Nulla in sapien blandit, bibendum arcu vel, porta augue.",
    ],
  },
  team: {
    title: "Team",
    profiles: [
      {
        name: "Mario Rossi",
        role: "Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis neque molestie, interdum nisi nec, lacinia velit.",
        image: "https://placehold.co/400x600",
      },
      {
        name: "Mario Rossi",
        role: "Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis neque molestie, interdum nisi nec, lacinia velit.",
        image: "https://placehold.co/400x600",
      },
      {
        name: "Mario Rossi",
        role: "Developer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis neque molestie, interdum nisi nec, lacinia velit.",
        image: "https://placehold.co/400x600",
      },
    ],
  },
  footer: {
    title: "Get in touch",
    url: "example@mail.com",
  },
};
