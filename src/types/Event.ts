import { ClientEvents } from "discord.js";
import { BotData } from "./BotData.js";

export interface Event {
    once?: boolean;
    run<EventName extends keyof ClientEvents>(
        botData: BotData,
        ...args: ClientEvents[EventName]
    ): Promise<void>;
}
