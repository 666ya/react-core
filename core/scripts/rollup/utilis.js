import path from "path";
import fs from "fs";
const pkgPath = path.resolve(__dirname, "../../packages");
const distPath = path.resolve(__dirname, "../../dist/node_modules");
function resolvePkgPath(pkgName, isDist) {
  if (isDist) {
    return `${distPath}/${pkgName}`;
  }
  return `${pkgPath}/${pkgName}`;
}
function getPackageJson(pkgName) {
  const path = `${resolvePkgPath(pkgName)}.package.json`;
  const str = fs.readFile;
}
