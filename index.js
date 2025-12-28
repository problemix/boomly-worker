import express from "express";

const app = express();
app.use(express.json());

app.post("/process", async (req, res) => {
  console.log("Vidéo reçue :", req.body.videoUrl);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Boomly worker actif sur le port", PORT);
});

