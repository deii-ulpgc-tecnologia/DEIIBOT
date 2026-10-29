import { ModalBuilder, ModalSubmitInteraction } from "discord.js";
import { BotData } from "./BotData.js";

export interface Modal {
    data: ModalBuilder;
    run(botData: BotData, interaction: ModalSubmitInteraction): Promise<void>;
}
