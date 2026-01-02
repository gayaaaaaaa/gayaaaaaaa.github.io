import { readdir, readFile, writeFile, stat } from "fs/promises";
import { resolve } from "path";
import yaml from "js-yaml";

interface ContentData {
  notes: any[];
  categories: any[];
}

async function generateContent() {
  const contentPath = resolve(process.cwd(), "content");
  const outputPath = resolve(process.cwd(), "client", "src", "data", "content.json");
  const data: ContentData = {
    notes: [],
    categories: [
      { id: '1', name: '數學', color: 'hsl(280, 65%, 58%)' },
      { id: '2', name: '英文', color: 'hsl(320, 70%, 70%)' },
      { id: '3', name: '歷史', color: 'hsl(200, 75%, 60%)' },
      { id: '4', name: '科學', color: 'hsl(160, 70%, 55%)' },
      { id: '5', name: '地理', color: 'hsl(40, 85%, 65%)' },
    ],
  };

  // Load notes
  try {
    const notesDir = resolve(contentPath, "notes");
    const noteFiles = await readdir(notesDir);
    for (const file of noteFiles) {
      if (file.endsWith(".yaml") || file.endsWith(".yml")) {
        const filePath = resolve(notesDir, file);
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          const content = await readFile(filePath, "utf-8");
          const note = yaml.load(content) as any;
          // 從檔案名稱生成 slug（移除副檔名）
          const slug = file.replace(/\.(yaml|yml)$/, "");
          note.slug = slug;
          data.notes.push(note);
        }
      }
    }
    // Sort by date descending
    data.notes.sort((a, b) => {
      try {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      } catch {
        return 0;
      }
    });
  } catch (error) {
    console.warn("Failed to load notes:", error);
  }

  // Write to JSON file
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  console.log(`Content generated successfully: ${outputPath}`);
  console.log(`  - Notes: ${data.notes.length}`);
  console.log(`  - Categories: ${data.categories.length}`);
}

generateContent().catch(console.error);

