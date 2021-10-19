import fs from 'fs';
import path from 'path';

import remark from 'remark';
import html from 'remark-html';

const projectsDirectory = path.join(process.cwd(), './src/content');

export async function getBiographyData() {
  const fullPath = path.join(projectsDirectory, 'bio.md');
  const fileContent = fs.readFileSync(fullPath, 'utf8');

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(fileContent);
  const contentHtml = processedContent.contents.toString();

  return {
    contentHtml,
  };
}
