"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = __importDefault(require("amqplib"));
const RABBITMQ_URL = 'amqp://localhost'; // Ou a URL para o seu RabbitMQ Docker container
async function sendToQueue(data) {
    const connection = await amqplib_1.default.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();
    const queue = 'repo_import_queue';
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)), { persistent: true });
    console.log("Sent to queue:", data);
    await channel.close();
    await connection.close();
}
exports.default = sendToQueue;
