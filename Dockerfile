# Use the official Node.js Debian image as base to match distroless
FROM node:24-alpine AS base

# Install pnpm
RUN npm install -g pnpm

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json  ./
RUN pnpm install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variable to skip env validation during build
ENV SKIP_ENV_VALIDATION=1
# Build the application using the build:solo script
RUN pnpm run build:solo

# Production image using distroless for minimal attack surface
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

# Copy the standalone build (includes static files and public folder)
# Distroless images run as non-root by default (user ID 65532)
COPY --from=builder --chown=65532:65532 /app/.next/standalone ./

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
CMD ["server.js"]