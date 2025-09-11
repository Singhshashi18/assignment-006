export function getUserCount(): number {
  const data = readData();
  return data.users.length;
}
import * as fs from 'fs';

export function readData(): any {
  const data = fs.readFileSync('./src/data.json', 'utf-8');
  return JSON.parse(data);
}

export function getUserNames(): string[] {
  const data = readData();
  return data.users.map((u: any) => u.name);
}
