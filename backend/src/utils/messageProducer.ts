import amqp from 'amqplib';

const RABBITMQ_URL = 'amqp://localhost'; // Ou a URL para o seu RabbitMQ Docker container

async function sendToQueue(data: any) {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();
  const queue = 'repo_import_queue';

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)), { persistent: true });

  console.log("Sent to queue:", data);
  await channel.close();
  await connection.close();
}

export default sendToQueue;
