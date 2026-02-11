// Инициализация SQLite

// import sqlite3 from 'sqlite3';
import Database from 'better-sqlite3';
import path from 'path';

// sqlite3.verbose();

const dbPath = path.resolve(__dirname, '../data.db');

export const db = new Database(dbPath);
// eslint-disable-next-line no-console
console.log('[DB] connected at', dbPath);

// export const db = new sqlite3.Database(dbPath, (err) => {
//   if (err) {
//     // eslint-disable-next-line no-console
//     console.error('[DB] connection error', err);
//   } else {
//     // eslint-disable-next-line no-console
//     console.log('[DB] connected at', dbPath);
//   }
// });

// промисы-обёртки над синхронными хелперами
// export const run = (sql: string, params: unknown[] = []): Promise<void> => new Promise((resolve, reject) => {
//   db.run(sql, params, (err) => {
//     if (err) reject(err);
//     else resolve();
//   });
// });
export const run = (sql: string, params: unknown[] = []): Promise<void> => new Promise((resolve, reject) => {
  try {
    db.prepare(sql).run(...params);
    resolve();
  } catch (error) {
    reject(error);
  }
});

// export const get = <T = unknown>(sql: string, params: unknown[] = []): Promise<T | undefined> => new Promise((resolve, reject) => {
//   db.get(sql, params, (err, row) => {
//     if (err) reject(err);
//     else resolve(row as T | undefined);
//   });
// });

export const get = <T = unknown>(sql: string, params: unknown[] = []): Promise<T | undefined> => new Promise((resolve, reject) => {
  try {
    const row = db.prepare(sql).get(...params) as T | undefined;
    resolve(row);
  } catch (error) {
    reject(error);
  }
});

// export const all = <T = unknown>(sql: string, params: unknown[] = []): Promise<T[]> => new Promise((resolve, reject) => {
//   db.all(sql, params, (err, rows) => {
//     if (err) reject(err);
//     else resolve(rows as T[]);
//   });
// });

export const all = <T = unknown>(sql: string, params: unknown[] = []): Promise<T[]> => new Promise((resolve, reject) => {
  try {
    const rows = db.prepare(sql).all(...params) as T[];
    resolve(rows);
  } catch (error) {
    reject(error);
  }
});
