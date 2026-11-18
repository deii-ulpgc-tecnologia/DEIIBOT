import { Client, Collection } from "discord.js";
import { Command } from "@/types/Command";
import { Event } from "@/types/Event";
import { Button } from "@/types/Button";
import { Modal } from "@/types/Modal";

export interface BotData {
    client: Client;
    collections: {
        commands: Collection<string, Command>;
        events: Collection<string, Event>;
        buttons: Collection<string, Button>;
        modals: Collection<string, Modal>;
    };
    config: {
        [key: string]: unknown;
    };
}
