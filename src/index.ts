import { loadEnvFile } from "node:process";
import { Client, Events, GatewayIntentBits } from "discord.js";

loadEnvFile(".env");

class Bot {
    private readonly client: Client;
    constructor() {
        this.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.MessageContent,
            ],
        });

        this.registerEvents();
    }

    async start() {
        if (!process.env.TOKEN) {
            throw new Error("TOKEN is not defined in the environment variables.");
        }
        await this.client.login(process.env.TOKEN);
    }

    private registerEvents() {
        this.client.once(Events.ClientReady, (readyClient) => {
            console.log(`Ready! Logged in as ${readyClient.user.tag}`);
        });
    }
}

const bot = new Bot();
bot.start().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
