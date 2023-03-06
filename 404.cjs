"use strict";
exports.__esModule = true;
var fs = require("fs");
var htmlContent = "\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <title>404 Not Found</title>\n    </head>\n    <body>\n      <script>\n        window.location.href = '/';\n      </script>\n    </body>\n  </html>\n";
var create404Page = function () {
    var distDirectory = "./dist";
    var notFoundPagePath = "".concat(distDirectory, "/404.html");
    // Create the dist directory if it does not exist
    if (!fs.existsSync(distDirectory)) {
        fs.mkdirSync(distDirectory);
    }
    // Write the 404 HTML content to the 404.html file
    fs.writeFileSync(notFoundPagePath, htmlContent);
    console.log("Created ".concat(notFoundPagePath));
};
create404Page();
