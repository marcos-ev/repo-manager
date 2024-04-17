"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = __importDefault(require("amqplib"));
const RABBITMQ_URL = 'amqp://localhost';
async function processFromQueue() {
    const connection = await amqplib_1.default.connect(RABBITMQ_URL);
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
