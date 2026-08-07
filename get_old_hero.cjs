const fs = require('fs');
const data = fs.readFileSync('C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\2bbed62e-a9c3-44e2-be5e-d5198a85155b\\.system_generated\\logs\\transcript_full.jsonl', 'utf8');
const lines = data.split('\n');
for (const line of lines) {
  if (line.includes('"step_index":769')) {
    const j = JSON.parse(line);
    const tc = j.tool_calls[0].args.TargetContent;
    fs.writeFileSync('C:\\Projects\\ESAC-Website\\old_hero.txt', tc);
    break;
  }
}
