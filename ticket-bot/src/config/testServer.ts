export const TEST_SERVER = {
  guildId: "1257415456168607865",
  moderatorRoleId: "1257423344127578222",
  adminRoleId: "1502460048314470460",
  appealRoleId: "1554180684803870720",
  normalTicketPanelChannelId: "1506121633373618297",
  appealCategoryId: "1554180970708729978",
  modPollChannelId: "1257701443452801159",
  staffLogChannelId: "1512466680138305597",
  applicationId: "1554166287108935892",
  publicKey: "43b5d2eccf650b0b708e506625f638947bb331a69a232b2fda4249617ee24381",
} as const;

/**
 * Tester-server configuration only.
 *
 * The bot token is intentionally NOT stored here or in GitHub.
 * Keep it as a Cloudflare secret.
 *
 * The supplied "normal ticket channel ID" is treated as the panel/intake
 * channel. Normal ticket channels can be created without a parent category
 * until a dedicated normal-ticket category ID is supplied.
 */
