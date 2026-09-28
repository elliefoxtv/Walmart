import type { Env } from "./types";

export async function discordApi(env: Env, path: string, init: RequestInit = {}) {
  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bot ${env.DISCORD_BOT_TOKEN}`);
  if (init.body) headers.set("Content-Type", "application/json");

  const response = await fetch(`https://discord.com/api/v10${path}`, {
    ...init,
    headers,
  });

  if (!response.ok) {
    throw new Error(`Discord API error ${response.status}: ${await response.text()}`);
  }

  return response;
}
