import { Injectable, Inject } from '@nestjs/common';
import { Building } from './building.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BuildingService {
	constructor(
		@Inject('BuildingRepositoryToken')
		private readonly buildingRepository: Repository<Building>,
	) {}

	async create(
		body: any,
	): Promise<Building> {
		const repo = this.buildingRepository;
		const building = new Building();

		building.name = body.name;
		building.type = body.type;
		building.address = body.address;

		return repo.save(building);
	}

	async findAll(): Promise<Building[]> {
		const repo = this.buildingRepository.manager.getTreeRepository(Building);
		return repo.findTrees();
	}
}
