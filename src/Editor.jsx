import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { oneDark } from "@codemirror/theme-one-dark";
import { useState } from "react";
import { code } from "./Initcode";
import { autocompletion } from "@codemirror/autocomplete";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MarkdownPreview from "@uiw/react-markdown-preview";
import Paper from "@mui/material/Paper";
import useWindowSize from "./WindowHook";

const tableTemplate = `| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |`;

const taskTemplate = `- [x] step 1
- [ ] step 2
- [ ] step 3: profit`;

const codeTemplate =
  '```go\npackage main\nimport "fmt"\nfunc main() {\n  fmt.Println("Hello, 世界")\n}\n```';

function mdCompletion(context) {
  // match any string that starts with a / and followed by characters.
  let word = context.matchBefore(/\/\w*/);
  console.log(word);

  if (!word || (word.from === word.to && !context.explicit)) {
    return null;
  }

  return {
    from: word.from,
    options: [
      { label: "/h1", type: "text", apply: "\n# " },
      { label: "/h2", type: "text", apply: "\n## " },
      { label: "/h3", type: "text", apply: "\n### " },
      { label: "/code(short)", type: "text", apply: "```helloworld```" },
      { label: "/code(long)", type: "text", apply: codeTemplate },
      { label: "/quote", type: "text", apply: "\n>\n>\n>" },
      { label: "/list (ordered)", type: "text", apply: "\n1. \n2. \n3." },
      { label: "/list (unordered)", type: "text", apply: "\n- \n- \n-" },
      { label: "/link", type: "text", apply: "[text](url)" },
      { label: "/image", type: "text", apply: "![text](url)" },
      {
        label: "/image (with size)",
        type: "text",
        apply: '<img src="url" width="800"/>',
      },
      { label: "/table", type: "text", apply: tableTemplate },
      { label: "/task", type: "text", apply: taskTemplate },
    ],
  };
}

function MdEditor() {
  const [content, setContent] = useState(code);
  const { height } = useWindowSize({ width: 0, height: 8 });

  const onChange = (value, viewUpdate) => {
    setContent(value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper>
            <CodeMirror
              value={code}
              theme={oneDark}
              onChange={onChange}
              height={height + "px"}
              basicSetup
              extensions={[
                markdown({ base: markdownLanguage, codeLanguages: languages }),
                autocompletion({ override: [mdCompletion] }),
              ]}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ height: { height }, overflow: "auto" }}>
            <MarkdownPreview source={content} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default MdEditor;
