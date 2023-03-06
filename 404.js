import * as fs from "fs";

const htmlContent = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>404 Not Found</title>
    </head>
    <body>
      <script>
        window.location.href = '/test-router';
      </script>
    </body>
  </html>
`;

const create404Page = () => {
  const distDirectory = "./dist";
  const notFoundPagePath = `${distDirectory}/404.html`;

  // Create the dist directory if it does not exist
  if (!fs.existsSync(distDirectory)) {
    fs.mkdirSync(distDirectory);
  }

  // Write the 404 HTML content to the 404.html file
  fs.writeFileSync(notFoundPagePath, htmlContent);

  console.log(`Created ${notFoundPagePath}`);
};

create404Page();
