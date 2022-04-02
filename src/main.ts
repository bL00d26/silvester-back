import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const port = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Silvester Back ver. 1.0')
    .setDescription('En proceso')
    .setVersion('1.0')
    .addTag('silvester')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document, {
    customSiteTitle: 'Documentación API Silvester',
  });
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(port);
}
bootstrap();
