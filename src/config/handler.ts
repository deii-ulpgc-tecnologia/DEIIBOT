import fs from 'node:fs';
import path from 'node:path';


export interface BotSettings {
    prefix: string;
    clientId: string;
    guildId?: string;
    owners: string[];
}

function isValidSettings(data: unknown): data is BotSettings {
    if (typeof data !== 'object' || data === null) return false;

    const obj = data as Record<string, unknown>;

    return (
    typeof obj.prefix === 'string' &&
    obj.prefix.trim().length > 0 &&
    typeof obj.clientId === 'string' &&
    obj.clientId.trim().length > 0 &&
    Array.isArray(obj.owners) &&
    obj.owners.every((id) => typeof id === 'string')
  );
}

export function loadSettings(relativePath = 'settings.json'): BotSettings {
  const fullPath = path.resolve(process.cwd(), relativePath);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`[Config] No se encontró el archivo de configuración en: ${fullPath}`);
  }

  let rawContent: string;
  try {
    rawContent = fs.readFileSync(fullPath, 'utf-8');
  } catch (error) {
    throw new Error(`[Config] Error al leer el archivo ${relativePath}: ${(error as Error).message}`);
  }

  let parsedData: unknown;
  try {
    parsedData = JSON.parse(rawContent);
  } catch {
    throw new Error(`[Config] El archivo ${relativePath} no contiene un JSON válido.`);
  }

  if (!isValidSettings(parsedData)) {
    throw new Error(`[Config] La estructura o los tipos de ${relativePath} son inválidos.`);
  }

  return parsedData;
}