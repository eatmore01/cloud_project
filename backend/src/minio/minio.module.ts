import { Module } from '@nestjs/common';
import { NestMinioClientController } from './minio.controller';
import { NestMinioModule } from 'nestjs-minio';

@Module({
  controllers: [NestMinioClientController],
  imports: [
    NestMinioModule.register({
      isGlobal: true,
      endPoint: '165.232.95.114',
      port: 9000,
      useSSL: false,
      accessKey: 'minio_test',
      secretKey: 'password123',
    }),
  ],
})
export class NestMinioClientModule {}
