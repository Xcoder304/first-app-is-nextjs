import * as fs from "fs";

export default async function handler(req, res) {
  let data = await fs.promises.readdir(`blogdata`, "utf-8");
  let files;
  let blogs = [];
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    files = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
    blogs.push(JSON.parse(files));
  }
  res.status(200).json(blogs);
  console.log(blogs);
  //   let data = await fs.promises.readdir(`blogdata`, "utf-8", (err, data) => {
  //     if (err) {
  //       res.status(500).json("this is an error");
  //     }
  //     for (let i = 0; i < data.length; i++) {
  //       console.log(data);
  //     }
  //
  //   });
}
