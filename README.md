# example-mcp-server

Example code for Anthropic MCP server.

https://modelcontextprotocol.io/quickstart/server

## How to build

```bash
npm install
npm run build
```

## Run on Claude for Desktop

To use this server with Claude Desktop, you need to configure it in your Claude Desktop configuration file. This file is located at:

```bash
~/Library/Application Support/Claude/claude_desktop_config.json
```

Example configuration:

```json
{
  "mcpServers": {
    "time": {
      "command": "/path/to/node",
      "args": [
        "/path/to/example-mcp-server/build/index.js"
      ]
    }
  }
}
```

This configuration registers an MCP server named "time" that runs the built JavaScript code from this repository using Node.js.
