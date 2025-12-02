# My MCP Server

A Model Context Protocol (MCP) server that provides example tools for AI assistants.

## Features

This MCP server provides the following tools:

- **add**: Add two numbers together
- **multiply**: Multiply two numbers together
- **greet**: Generate a personalized greeting

## Installation

```bash
npm install
```

## Usage

### Starting the Server

First, start the HTTP server:

```bash
npm start
```

Or manually:

```bash
node build/index.js
```

The server will start on `http://localhost:3000` with the following endpoints:
- SSE endpoint: `http://localhost:3000/sse`
- Health check: `http://localhost:3000/health`

### With Claude Desktop

To use this server with Claude Desktop, add it to your Claude configuration file:

**macOS/Linux:** `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

Add the following to your config:

```json
{
  "mcpServers": {
    "my-mcp-server": {
      "url": "http://localhost:3000/sse"
    }
  }
}
```

### With VS Code

1. Start the MCP server (see above)
2. The server is already configured in `.vscode/mcp.json`
3. VS Code will automatically connect to `http://localhost:3000/sse`

Alternatively, add it manually:

1. Press `Cmd/Ctrl + Shift + P`
2. Select **MCP: Add server...**
3. Choose **HTTP** as the transport type
4. Enter the URL: `http://localhost:3000/sse`
5. Give it a name like "my-mcp-server"

## Development

### Build

```bash
npm run build
```

### Watch Mode

```bash
npm run watch
```

## Available Tools

### add
- **Description**: Add two numbers together
- **Parameters**:
  - `a` (number): First number to add
  - `b` (number): Second number to add
- **Returns**: The sum of the two numbers

### multiply
- **Description**: Multiply two numbers together
- **Parameters**:
  - `x` (number): First number to multiply
  - `y` (number): Second number to multiply
- **Returns**: The product of the two numbers

### greet
- **Description**: Generate a personalized greeting
- **Parameters**:
  - `name` (string): Name of the person to greet
- **Returns**: A personalized greeting message

## Project Structure

```
MY WEBSITE/
├── src/
│   └── index.ts          # Main server implementation
├── build/                 # Compiled JavaScript output
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Learn More

- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [MCP TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk)
- [MCP Specification](https://spec.modelcontextprotocol.io)

## License

MIT
