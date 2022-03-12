/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";
import Application from "@ioc:Adonis/Core/Application";
import { cloudinary } from "App/Services/Cloudinary";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.post("/upload", async ({ request, response }) => {
  const image = request.file("image", {
    size: "5mb",
    extnames: ["jpg", "png"],
  });

  if (!image) {
    return response.status(404).send({ error: "Not found" });
  }

  if (!image.isValid) {
    return response.status(422).send(image.errors);
  }

  await image.move(Application.tmpPath("uploads"));

  if (image.fileName) {
    try {
      const cloudinaryResponse = await cloudinary.uploader.upload(
        `${Application.tmpPath("uploads")}/${image.fileName}`
      );
      return response.send(cloudinaryResponse);
    } catch (error) {
      return response.status(500).send({ error });
    }
  }
});

Route.any("*", async () => {
  return { message: "It's working" };
});
