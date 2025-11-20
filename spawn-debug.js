const cp = require("child_process");

console.error("spawn-debug loaded");

const originalSpawn = cp.spawn;
cp.spawn = function patchedSpawn(command, args, options) {
  try {
    // Log potential failing spawn attempts for debugging.
    console.error("spawn:", command, args);
  } catch {
    // ignore logging failures
  }
  const child = originalSpawn.call(cp, command, args, options);
  child.once("error", (err) => {
    console.error("spawn error for", command, args, err);
  });
  return child;
};
