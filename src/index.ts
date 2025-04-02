#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create server instance
const server = new McpServer({
  name: "time",
  version: "1.0.0",
  capabilities: {
    resources: {},
    tools: {},
  },
});

// Register "get_current_time" tools
server.tool(
  "get_current_time",
  "Get the current time",
  {},
  async () => {
    const currentTime = new Date().toISOString();

    return {
      content: [
        {
          type: "text",
          text: currentTime,
        },
      ],
    };
  },
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Weather MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
