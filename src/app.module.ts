import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { StationsModule } from './stations/stations.module';

@Module({
  imports: [StationsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
