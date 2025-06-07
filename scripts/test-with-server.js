#!/usr/bin/env node

/**
 * Script pour lancer les tests avec le serveur de développement
 * Usage: node scripts/test-with-server.js [--with-server] [--jest-args...]
 */

const { spawn } = require('child_process');
const { createServer } = require('http');

const SERVER_PORT = 3001; // Port différent pour éviter les conflits
const SERVER_URL = `http://localhost:${SERVER_PORT}`;

let serverProcess = null;

// Fonction pour vérifier si un port est disponible
function isPortAvailable(port) {
  return new Promise((resolve) => {
    const server = createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on('error', () => resolve(false));
  });
}

// Fonction pour vérifier si le serveur répond
async function waitForServer(url, maxAttempts = 30) {
  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        console.log(`✅ Serveur disponible à ${url}`);
        return true;
      }
    } catch (error) {
      // Ignorer l'erreur et réessayer
    }
    
    console.log(`⏳ Attente du serveur (tentative ${attempt + 1}/${maxAttempts})...`);
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  throw new Error(`❌ Serveur non accessible après ${maxAttempts} tentatives`);
}

// Fonction pour démarrer le serveur de développement
async function startServer() {
  console.log('🚀 Démarrage du serveur de développement...');
  
  const isAvailable = await isPortAvailable(SERVER_PORT);
  if (!isAvailable) {
    console.log(`⚠️  Port ${SERVER_PORT} déjà utilisé, tentative de connexion...`);
    try {
      await waitForServer(SERVER_URL, 3);
      return null; // Serveur déjà en cours
    } catch {
      throw new Error(`Port ${SERVER_PORT} occupé mais serveur non accessible`);
    }
  }

  serverProcess = spawn('pnpm', ['dev'], {
    stdio: 'pipe',
    env: { ...process.env, PORT: SERVER_PORT.toString() },
    shell: true
  });

  // Capturer les logs du serveur
  serverProcess.stdout.on('data', (data) => {
    const output = data.toString();
    if (output.includes('Ready')) {
      console.log('✅ Serveur Next.js prêt');
    }
  });

  serverProcess.stderr.on('data', (data) => {
    console.error('Server error:', data.toString());
  });

  // Attendre que le serveur soit prêt
  await waitForServer(SERVER_URL);
  
  return serverProcess;
}

// Fonction pour arrêter le serveur
function stopServer() {
  if (serverProcess) {
    console.log('🛑 Arrêt du serveur de développement...');
    serverProcess.kill('SIGTERM');
    serverProcess = null;
  }
}

// Fonction pour lancer Jest
function runJest(args = []) {
  return new Promise((resolve, reject) => {
    console.log('🧪 Lancement des tests Jest...');
    
    const jestProcess = spawn('pnpm', ['test', ...args], {
      stdio: 'inherit',
      shell: true,
      env: {
        ...process.env,
        RUN_INTEGRATION_TESTS: 'true',
        TEST_SERVER_URL: SERVER_URL
      }
    });

    jestProcess.on('close', (code) => {
      if (code === 0) {
        console.log('✅ Tests terminés avec succès');
        resolve(code);
      } else {
        console.log('❌ Échec des tests');
        reject(new Error(`Jest exited with code ${code}`));
      }
    });

    jestProcess.on('error', reject);
  });
}

// Fonction principale
async function main() {
  const args = process.argv.slice(2);
  const withServer = args.includes('--with-server');
  const jestArgs = args.filter(arg => arg !== '--with-server');

  // Gestion propre de l'arrêt
  process.on('SIGINT', () => {
    console.log('\\n🛑 Interruption détectée...');
    stopServer();
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    stopServer();
    process.exit(0);
  });

  try {
    if (withServer) {
      // Démarrer le serveur
      await startServer();
    }

    // Lancer les tests
    await runJest(jestArgs);

  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  } finally {
    // Nettoyer
    stopServer();
  }
}

// Lancer le script uniquement s'il est exécuté directement
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Erreur fatale:', error);
    stopServer();
    process.exit(1);
  });
}

module.exports = { startServer, stopServer, runJest };