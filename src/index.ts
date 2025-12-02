#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { z } from "zod";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3846;
const HOST = process.env.HOST || "127.0.0.1";
const app = express();

// Enable CORS for all origins
app.use(cors());

// Create MCP server instance
const server = new McpServer({
  name: "my-mcp-server",
  version: "1.0.0",
});

// Register a simple addition tool
server.registerTool(
  "add",
  {
    title: "Addition Tool",
    description: "Add two numbers together",
    inputSchema: {
      a: z.number().describe("First number to add"),
      b: z.number().describe("Second number to add"),
    },
  },
  async ({ a, b }) => ({
    content: [{ type: "text", text: `${a} + ${b} = ${a + b}` }],
  })
);

// Register a multiplication tool
server.registerTool(
  "multiply",
  {
    title: "Multiplication Tool",
    description: "Multiply two numbers together",
    inputSchema: {
      x: z.number().describe("First number to multiply"),
      y: z.number().describe("Second number to multiply"),
    },
  },
  async ({ x, y }) => ({
    content: [{ type: "text", text: `${x} × ${y} = ${x * y}` }],
  })
);

// Register a greeting tool
server.registerTool(
  "greet",
  {
    title: "Greeting Tool",
    description: "Generate a personalized greeting",
    inputSchema: {
      name: z.string().describe("Name of the person to greet"),
    },
  },
  async ({ name }) => ({
    content: [{ type: "text", text: `Hello, ${name}! Welcome to MCP!` }],
  })
);

// SSE endpoint for MCP
app.get("/mcp", async (req, res) => {
  console.log("New SSE connection established");
  
  const transport = new SSEServerTransport("/mcp/message", res);
  await server.connect(transport);
  
  // Handle client disconnect
  req.on("close", () => {
    console.log("SSE connection closed");
  });
});

// Message endpoint for client-to-server messages
app.post("/mcp/message", async (req, res) => {
  // Messages are handled by the SSE transport
  res.sendStatus(200);
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", server: "my-mcp-server" });
});

// Start the HTTP server
app.listen(PORT, HOST, () => {
  console.log(`MCP Server running on http://${HOST}:${PORT}`);
  console.log(`SSE endpoint: http://${HOST}:${PORT}/mcp`);
  console.log(`Health check: http://${HOST}:${PORT}/health`);
});
