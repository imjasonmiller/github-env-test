import pc from "picocolors"

if (process.argv[2]) {
  console.log(`Passed argument was: ${pc.yellow([...`${process.argv[2]}`].reverse().join(""))}`);
}
