# Use the official Apify Node.js image as the base
FROM apify/actor-node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy root package files and shared packages first for better layer caching
COPY package*.json ./
COPY packages/shared-utils/package*.json ./packages/shared-utils/
COPY packages/shared-utils/tsconfig.json ./packages/shared-utils/
COPY packages/shared-utils/src ./packages/shared-utils/src
COPY actors/example-scraper/package*.json ./actors/example-scraper/
COPY actors/example-scraper/tsconfig.json ./actors/example-scraper/

# Install dependencies
RUN npm install

# Copy the actor source code
COPY actors/example-scraper/src ./actors/example-scraper/src

# Build shared packages and the actor
RUN npm run build --workspace=packages/shared-utils && \
    npm run build --workspace=actors/example-scraper

# Set the working directory to the actor for runtime
WORKDIR /usr/src/app/actors/example-scraper

# Run the actor
CMD ["node", "dist/main.js"]
