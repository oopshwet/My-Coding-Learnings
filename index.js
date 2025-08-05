import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";

process.env.GIT_AUTHOR_NAME = "oopshwet";
process.env.GIT_AUTHOR_EMAIL = "167511008+oopshwet@users.noreply.github.com";
process.env.GIT_COMMITTER_NAME = "oopshwet";
process.env.GIT_COMMITTER_EMAIL = "167511008+oopshwet@users.noreply.github.com";

const git = simpleGit();
const path = "./data.json";

// 🔥 Use today's timestamp
const date = moment().format();
const data = { date };

console.log("Triggering commit for today:", date);

jsonfile.writeFile(path, data, () => {
  git.add([path])
    .commit(`Force commit on ${date}`, { "--date": date })
    .then(() => git.push())
    .then(() => console.log("✅ Commit pushed — check your GitHub contribution graph!"))
    .catch((err) => console.error("❌ Commit failed:", err));
});
