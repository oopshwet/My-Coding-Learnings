# 🟩 commit-graph-art

> ✨ A creative experiment to generate custom patterns on the GitHub contribution graph using Git, Node.js, and a bit of automation.

---

## 🎨 What is this?

This project uses scripts to generate realistic Git commits on specific dates to "draw" shapes and patterns on the GitHub contribution calendar. Think of it as terminal-based pixel art made of commits.

---

## 🚀 Features

- Custom commit patterns (random, dense, letters, symbols)
- Realistic commit timestamps (1–10 per day)
- Uses Node.js, `simple-git`, `moment`, and `random`
- Can run locally and generate commits across 7–12 months
- Good for learning Git automation and scripting

---

## 🛠 Tech Stack

- [Node.js](https://nodejs.org/)
- [simple-git](https://www.npmjs.com/package/simple-git)
- [moment.js](https://momentjs.com/)
- [random](https://www.npmjs.com/package/random)
- [jsonfile](https://www.npmjs.com/package/jsonfile)

---

## 📂 Folder Structure

```bash
commit-graph-art/
├── data.json          # Commit marker file
├── index.js           # Main script for generating commits
├── patterns/          # (Optional) Predefined art patterns
└── README.md          # You're here!
