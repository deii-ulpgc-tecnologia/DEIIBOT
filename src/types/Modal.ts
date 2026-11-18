import { ModalBuilder, ModalSubmitInteraction } from "discord.js";
import { BotData } from "@/types/BotData";

export interface Modal {
    data: ModalBuilder;
    run(botData: BotData, interaction: ModalSubmitInteraction): Promise<void>;
}
