import express from "express";

const app = express();
app.use(express.json());

app.post("/process", async (req, res) => {
  console.log("Vidéo reçue :", req.body.videoUrl);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Boomly worker actif");
});
