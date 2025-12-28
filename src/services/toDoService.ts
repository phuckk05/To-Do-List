import { db } from '../database/sqlite';
import { Job } from '../models/job';
const toDoTable = 'jobs';



export const addToDo = async (job: Job): Promise<void> => {
    await db.runAsync(
        `INSERT INTO ${toDoTable} (id, title, date) VALUES (?, ?, ?);`,
        [job.id, job.title, job.date]
    );
}

export const removeToDo = async (jobId: string): Promise<void> => {
    await db.runAsync(
        `DELETE FROM ${toDoTable} WHERE id = ?;`,
        [jobId]
    );
}

export const getAllToDos = async (): Promise<Job[]> => {
    const rows = await db.getAllAsync(
        `SELECT * FROM ${toDoTable};`
    );
    return rows.map((row: any) => ({
        id: row.id,
        title: row.title,
        date: row.date
    }));
}