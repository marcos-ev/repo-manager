"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = __importDefault(require("amqplib"));
const RABBITMQ_URL = 'amqp://localhost'; // Ou a URL para o seu RabbitMQ Docker container
function sendToQueue(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield amqplib_1.default.connect(RABBITMQ_URL);
        const channel = yield connection.createChannel();
        const queue = 'repo_import_queue';
        yield channel.assertQueue(queue, { durable: true });
        channel.sendToQueue(queue, Buffer.from(JSON.stringify(data)), { persistent: true });
        console.log("Sent to queue:", data);
        yield channel.close();
        yield connection.close();
    });
}
exports.default = sendToQueue;
