import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestMinioClientModule } from './minio/minio.module';
import { FileModule } from './files/file.module';
import { BucketModule } from './bucket/bucket.module';

@Module({
  imports: [NestMinioClientModule, FileModule, BucketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
