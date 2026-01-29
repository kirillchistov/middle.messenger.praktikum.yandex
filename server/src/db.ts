import sqlite3 from 'sqlite3';
import path from 'path';

sqlite3.verbose();

const dbPath = path.resolve(__dirname, '../data.db');

export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error('[DB] connection error', err);
  } else {
    // eslint-disable-next-line no-console
    console.log('[DB] connected at', dbPath);
  }
});

// промисы-обёртки
export const run = (sql: string, params: unknown[] = []): Promise<void> => new Promise((resolve, reject) => {
  db.run(sql, params, (err) => {
    if (err) reject(err);
    else resolve();
  });
});

export const get = <T = unknown>(sql: string, params: unknown[] = []): Promise<T | undefined> => new Promise((resolve, reject) => {
  db.get(sql, params, (err, row) => {
    if (err) reject(err);
    else resolve(row as T | undefined);
  });
});

export const all = <T = unknown>(sql: string, params: unknown[] = []): Promise<T[]> => new Promise((resolve, reject) => {
  db.all(sql, params, (err, rows) => {
    if (err) reject(err);
    else resolve(rows as T[]);
  });
});
