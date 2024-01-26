import { Module } from '@nestjs/common';
import { StationsService } from './stations.service';
import { StationsController } from './stations.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StationsController],
  providers: [StationsService, PrismaService],
})
export class StationsModule {}
