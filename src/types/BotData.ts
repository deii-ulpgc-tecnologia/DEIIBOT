import { Client, Collection } from "discord.js";
import { Command } from "./Command.js";
import { Event } from "./Event.js";
import { Button } from "./Button.js";
import { Modal } from "./Modal.js";

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
