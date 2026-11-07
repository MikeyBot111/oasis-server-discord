# oasis-server-discord

> **⚠️ Archived – old project, no longer maintained.**
> Written in 2023 for the **Oasis** Unturned servers' Discord. It's kept here for reference only.

A small **Discord bot** (discord.js v14) that shows the live status of the Oasis game server in the names of Discord channels.

## What it does

Every 60 seconds the bot queries the game server with the Valve/Steam server query protocol and renames three channels:

- 🌍 **current map**
- 🎮 **players online / max players**
- 🛬 **server address**

If the server doesn't respond within 3 seconds, the bot skips that update.

## Configuration

Create a `.env` file (not included):

```env
CLIENT_TOKEN=your-discord-bot-token
PRIV_IP=game-server-ip
PRIV_PORT=game-server-query-port
```

The channel IDs to rename are set at the top of `index.js`.

## Running

```bash
npm install
npm start
```

## Tech

Node.js, discord.js, @fabricio-191/valve-server-query, dotenv

## Part of the Oasis project

[OasisEssential](https://github.com/MikeyBot111/OasisEssential) · [OasisTeleport](https://github.com/MikeyBot111/OasisTeleport) · [OasisKits](https://github.com/MikeyBot111/OasisKits) · [OasisRanks](https://github.com/MikeyBot111/OasisRanks) · [OasisVault](https://github.com/MikeyBot111/OasisVault) · [OasisDiscord](https://github.com/MikeyBot111/OasisDiscord) · [OasisCustomCommands](https://github.com/MikeyBot111/OasisCustomCommands) · [WebsiteOasis](https://github.com/MikeyBot111/WebsiteOasis) · [oasis-server-discord](https://github.com/MikeyBot111/oasis-server-discord)
