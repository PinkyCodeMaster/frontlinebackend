import { loadEnv, defineConfig } from '@medusajs/framework/utils'

// Load environment variables depending on the environment
loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL, // Database connection URL
    redisUrl: process.env.REDIS_URL,       // Redis connection URL
    http: {
      storeCors: process.env.STORE_CORS!,  // Storefront CORS URL
      adminCors: process.env.ADMIN_CORS!,  // Admin CORS URL
      authCors: process.env.AUTH_CORS!,    // Auth CORS URLs (comma-separated)
      jwtSecret: process.env.JWT_SECRET || "supersecret",   // JWT secret for authentication
      cookieSecret: process.env.COOKIE_SECRET || "supersecret", // Secret for cookies
    }
  },
  admin: {
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
  }
})
