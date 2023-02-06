import path from "path";
import fs from "fs";
import createConnection from "./connection";

async function runMigrations() {
  const client = await createConnection();
  console.log("Start Migrations", new Date());

  // Caminho da pasta migration
  const fileDatabaseDir = path.join(__dirname, "migrations");

  // le a pasta migration
  fs.readdir(fileDatabaseDir, (err, files) => {
    if (err) console.error(err);

    // para cada arquivo
    files.forEach((file) => {
      fs.readFile(path.join(fileDatabaseDir, file), async (err, content) => {
        if (err) console.error(err);

        const runMigrationQuery = content.toString();
        await client.query(runMigrationQuery);
      });
    });
  });
  console.log("Finish Migrations", new Date());
}

runMigrations();
