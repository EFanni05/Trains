import { Injectable } from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StationsService {
  constructor(private readonly db :PrismaService) {}
  create(createStationDto: CreateStationDto) {
     return this.db.staions.create({
      data : {
        ...createStationDto,
        ticketsAvalable : createStationDto.ticketsAvalable || false
      }
     });
  }

  findAll() {
    return this.db.staions.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} station`;
  }

  update(id: number, updateStationDto: UpdateStationDto) {
    return this.db.staions.update({
      data : updateStationDto,
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return `This action removes a #${id} station`;
  }
}
