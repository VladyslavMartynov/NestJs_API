import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap(): Promise<void> {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
        .setTitle('Nest Api')
        .setDescription('Documentation RET API')
        .setVersion('1.0.0')
        .build()

    const document = SwaggerModule.createDocument(app,config);
    SwaggerModule.setup('/api/docs', app, document);

    await app.listen(PORT, () => {
        console.log(`Server is started on PORT ${PORT}`);
    })
}

bootstrap();