const { resolve } = require("path");
const buildPath = resolve(__dirname, "build");
const { build } = require("esbuild");
const { obfuscate } = require("javascript-obfuscator");
const fs = require("fs");

async function secureBuild() {
  try {
    // ESBuild
    await build({
      entryPoints: ["./client/*.ts", "./server/*.ts"],
      outdir: resolve(buildPath),
      bundle: true,
      minify: true,
      platform: "browser",
      target: "es2020",
      logLevel: "info",
      splitting: true, // Enable code splitting
      format: "esm",
      sourcemap: process.env.NODE_ENV === "development", // Only generate source maps in development
    });

    // Obfuscate the output
    const files = fs.readdirSync(buildPath);
    for (const file of files) {
      if (file.endsWith(".js")) {
        const filePath = resolve(buildPath, file);
        const code = fs.readFileSync(filePath, "utf8");
        const obfuscatedCode = obfuscate(code, {
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.75,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 0.4,
          debugProtection: true,
          debugProtectionInterval: true,
          disableConsoleOutput: true,
          identifierNamesGenerator: "hexadecimal",
          renameGlobals: true,
          rotateStringArray: true,
          selfDefending: true,
          stringArray: true,
          stringArrayEncoding: ["base64"],
          stringArrayThreshold: 0.75,
          transformObjectKeys: true,
          unicodeEscapeSequence: true,
        }).getObfuscatedCode();
        fs.writeFileSync(filePath, obfuscatedCode);
      }
    }

    console.log("Build and obfuscation completed successfully!");
  } catch (error) {
    console.error("Build failed:", error);
    process.exit(1);
  }
}

secureBuild();
