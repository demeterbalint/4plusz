const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'src/assets/buildings');
const outputFile = path.join(__dirname, 'src/app/image-map.ts');

const projects = fs.readdirSync(basePath);

let output = `export const imageMap: Record<string, string[]> = {\n`;

projects.forEach(project => {
  const projectPath = path.join(basePath, project);

  if (fs.lstatSync(projectPath).isDirectory()) {
    const images = fs
      .readdirSync(projectPath)
      .filter(file => file.match(/\.(jpg|jpeg|png|webp)$/))
      .sort()
      .map(file =>
        `assets/buildings/${project}/${file}`
      );

    output += `  '${project}': ${JSON.stringify(images, null, 4)},\n`;
  }
});

output += `};\n`;

fs.writeFileSync(outputFile, output);

console.log('image-map.ts generated successfully!');
