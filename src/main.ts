import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ApiInterceptor } from './api.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new ApiInterceptor());

  const config = new DocumentBuilder()
  .setTitle('Nest API')
  .setDescription('the description of the Nest API')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app,config);

  SwaggerModule.setup('/',app,document);
  
  await app.listen(3000);
}
bootstrap();
