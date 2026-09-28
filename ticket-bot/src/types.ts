export interface D1Result<T = unknown> {
  results?: T[];
  success: boolean;
  meta?: Record<string, unknown>;
}

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  all<T = Record<string, unknown>>(): Promise<D1Result<T>>;
  run(): Promise<D1Result>;
}

export interface D1Database {
  prepare(sql: string): D1PreparedStatement;
  batch(statements: D1PreparedStatement[]): Promise<D1Result[]>;
}

export interface DurableObjectId {}
export interface DurableObjectStub { fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>; }
export interface DurableObjectNamespace {
  idFromName(name: string): DurableObjectId;
  get(id: DurableObjectId): DurableObjectStub;
}
export interface DurableObjectState {}

export interface Env {
  MOD_DB: D1Database;
  GATEWAY: DurableObjectNamespace;
  DISCORD_PUBLIC_KEY: string;
  DISCORD_APPLICATION_ID: string;
  DISCORD_BOT_TOKEN: string;
  GUILD_ID: string;
  MOD_ROLE_ID: string;
  ADMIN_ROLE_ID: string;
  APPEAL_ROLE_ID: string;
  TICKET_CATEGORY_ID: string;
  APPEAL_CATEGORY_ID: string;
  MODPOLL_CHANNEL_ID: string;
  STAFF_LOG_CHANNEL_ID?: string;
}

export interface DiscordInteraction {
  id: string;
  application_id: string;
  type: number;
  token: string;
  guild_id?: string;
  channel_id?: string;
  member?: { user?: DiscordUser; roles?: string[] };
  user?: DiscordUser;
  data?: {
    custom_id?: string;
    component_type?: number;
    values?: string[];
    name?: string;
    options?: Array<{ name: string; value?: string; options?: unknown[] }>;
    components?: Array<{ components?: Array<{ custom_id?: string; value?: string }> }>;
  };
  message?: { id: string; channel_id: string };
}

export interface DiscordUser {
  id: string;
  username: string;
  global_name?: string | null;
  discriminator?: string;
}
