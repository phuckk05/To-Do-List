import { db } from './sqlite';

export const createTable = async (): Promise<void> => {
    await db.execAsync(`
    CREATE TABLE IF NOT EXISTS jobs (
      id TEXT PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      date TEXT NOT NULL
    );
  `);
};
