import type { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { BotData } from "./BotData.js";

export interface Command {
    data: SlashCommandBuilder;
    permission?: string[];
    run(botData: BotData, interaction: ChatInputCommandInteraction): Promise<void>;
    autocomplete?(botData: BotData, interaction: ChatInputCommandInteraction): Promise<void>;
}
