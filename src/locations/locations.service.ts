import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {

  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>
  ){}

  create(createLocationDto: CreateLocationDto) {
    return this.locationRepository.save(createLocationDto);
  }

  findAll() {
    return this.locationRepository.find();
  }

  findOne(id: number) {
    const location = this.locationRepository.findOneBy({
      locationId: id
    })
    if(!location) throw new NotFoundException("Location not found")
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    const locationToUpdate = await this.locationRepository.preload({
      locationId: id,
      ...updateLocationDto,
    })
    if(!locationToUpdate) throw new BadRequestException()
    return this.locationRepository.save(locationToUpdate)
  }

  remove(id: number) {
    return this.locationRepository.delete({
      locationId: id
    })
  }
}
