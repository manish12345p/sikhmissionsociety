const fs = require('fs');
const path = require('path');

const mdPath = 'C:\\Users\\manis\\.gemini\\antigravity\\brain\\84c988fd-a2e4-43ca-bc57-58e0b0f35719\\profile-restructure-plan.md';
const targetDir = 'C:\\Users\\manis\\Sikh-mission-society\\src\\features\\profile';

const content = fs.readFileSync(mdPath, 'utf8');
const fileRegex = /## File \d+ — `profile\/([^`]+)`\n\n```(?:js|jsx)\n([\s\S]*?)```/g;

let match;
while ((match = fileRegex.exec(content)) !== null) {
  const relPath = match[1];
  const fileContent = match[2];
  const absPath = path.join(targetDir, relPath);
  fs.mkdirSync(path.dirname(absPath), { recursive: true });
  fs.writeFileSync(absPath, fileContent.trim() + '\n');
  console.log(`Wrote ${relPath}`);
}
