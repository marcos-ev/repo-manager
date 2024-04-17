import amqp from 'amqplib';

const RABBITMQ_URL = 'amqp://localhost';

async function processFromQueue() {
  const connection = await amqp.connect(RABBITMQ_URL);
  const channel = await connection.createChannel();
  const queue = 'repo_import_queue';

  await channel.assertQueue(queue, { durable: true });

  console.log("Waiting for messages in", queue);
  channel.consume(queue, (msg) => {
    if (msg) {
      const data = JSON.parse(msg.content.toString());
      console.log("Received:", data);

      // Aqui você adicionaria lógica para processar a mensagem

      channel.ack(msg);
    }
  });
}

processFromQueue();
