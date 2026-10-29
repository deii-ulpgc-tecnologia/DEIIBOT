import { ButtonBuilder, ButtonInteraction } from "discord.js";
import { BotData } from "./BotData.js";

export interface Button {
    data: ButtonBuilder;
    run(botData: BotData, interaction: ButtonInteraction, ...args: string[]): Promise<void>;
}
