import * as fs from 'fs';

export function readData(): any {
  const data = fs.readFileSync('./src/data.json', 'utf-8');
  return JSON.parse(data);
}
