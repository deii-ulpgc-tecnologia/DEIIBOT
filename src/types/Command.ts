import type { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import { BotData } from "@/types/BotData";

export interface Command {
    data: SlashCommandBuilder;
    permission?: string[];
    run(botData: BotData, interaction: ChatInputCommandInteraction): Promise<void>;
    autocomplete?(botData: BotData, interaction: ChatInputCommandInteraction): Promise<void>;
}
