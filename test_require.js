try {
    console.log("Attempting to require caniuse-lite/data/features/background-img-opts");
    const data = require('caniuse-lite/data/features/background-img-opts');
    console.log("Success:", typeof data);
} catch (e) {
    console.error("Failure:", e.message);
    console.error("Code:", e.code);
    console.error("Require stack:", e.requireStack);
}
