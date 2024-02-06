"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function loader(text = "", chars = ["⠙", "⠘", "⠰", "⠴", "⠤", "⠦", "⠆", "⠃", "⠋", "⠉"], delay = 100) {
    let x = 0;
    return setInterval(function () {
        process.stdout.write("\r" + chars[x++] + " " + text);
        x = x % chars.length;
    }, delay);
}
exports.default = loader;
//# sourceMappingURL=loader.js.map