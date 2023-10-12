import fastify from 'fastify';
import { readFile, writeFile } from 'fs/promises';

const server = fastify({
  logger: true,
});

server.addSchema({
  $id: 'incomingTasks',
  type: 'object',
  properties: {
    task: { type: 'string' },
  },
});

server.addSchema({
  $id: 'deleteTask',
  type: 'object',
  properties: {
    id: { type: 'number' },
  },
});

server.get('/api/tasks', async (req, rep) => {
  const data = await readFile('./data.json', 'utf-8');
  return data;
});

server.post('/api/tasks', {
  async handler(req, rep) {
    const data = await readFile('./data.json', 'utf-8');
    const parsed = JSON.parse(data);
    const findTask = parsed.find((e) => e.task === req.body.task);

    if (!findTask && req.body.task) {
      const dataToWrite = { id: new Date().getTime(), ...req.body };
      await writeFile('./data.json', JSON.stringify([...parsed, dataToWrite]));
      return [...parsed, dataToWrite];
    } else {
      return false;
    }
  },
  schema: {
    body: { $ref: 'incomingTasks#' },
  },
});

server.delete('/api/tasks', {
  async handler(req, rep) {
    try {
      const data = await readFile('./data.json', 'utf-8');
      const parsed = JSON.parse(data);
      const revised = parsed.filter((d) => d.id !== req.body.id);
      await writeFile('./data.json', JSON.stringify(revised));
      return revised;
    } catch (err) {
      return [];
    }
  },
  schema: {
    body: { $ref: 'deleteTask#' },
  },
});

(async () => {
  try {
    await server.listen(8080);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
})();
