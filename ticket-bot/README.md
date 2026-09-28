# Walmart Ticket Bot

Cloudflare Workers + D1 + Durable Objects Discord moderation/ticket bot for the Walmart community.

## What is implemented in this foundation

- Discord interaction endpoint with Ed25519 request verification.
- Report-a-user intake with category/subcategory routing.
- Common factual intake: accused user, location, timing, summary, evidence.
- Requested-resolution step kept separate from factual allegations.
- Universal witness branch: regular user or specific moderator.
- Witnesses are designed to receive ticket access + one in-ticket ping + DM notice.
- Proactive safety/self-help step (block/mute/save evidence/report to Discord/etc.).
- Mod/Admin routing tiers and protected staff/safety architecture.
- Anonymous one-vote-per-staff ModPoll database model with 24h closure support.
- Ban appeal offer through DM when the Gateway observes `GUILD_BAN_ADD`.
- Appeal click temporarily unbans the user, creates an **Admin-only** appeal channel, and sends a one-use invite.
- On appeal re-entry, the Gateway immediately replaces all assignable roles with **APPEAL only**.
- While the appeal is open, `GUILD_MEMBER_UPDATE` enforces the role lock again if another autorole bot adds anything.
- Appeal application uses a modal and posts the answers into the private appeal channel for all admins to review.

## Required setup

Enable Discord's privileged **Server Members Intent**. Set Cloudflare secrets/vars for `DISCORD_PUBLIC_KEY`, `DISCORD_APPLICATION_ID`, `DISCORD_BOT_TOKEN`, `GUILD_ID`, `MOD_ROLE_ID`, `ADMIN_ROLE_ID`, `APPEAL_ROLE_ID`, `TICKET_CATEGORY_ID`, `APPEAL_CATEGORY_ID`, and `MODPOLL_CHANNEL_ID`.

Create D1 with `npx wrangler d1 create walmart-moderation`, replace the D1 ID in `wrangler.jsonc`, apply migrations, then deploy.

The bot token is intentionally never committed.
