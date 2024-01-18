import express from "express";

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// routes
app.get("/users", async (req, res) => {
  setTimeout(async () => {
    const limit = +req.query.limit || 10;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}`
    );
    const users = await response.json();
    //   const usas = [{ id: 1, name: "jar jar" }];
    res.send(`
      <h1 class="font-bold underline">hello world</h1>
      <ul>
          ${users.map((user) => `<li>${user.name}</li>`).join("")}
      </ul>
    `);
  }, 2000);
});

app.listen(3000, () => {
  console.log("Server listening on port http://localhost:3000");
});
