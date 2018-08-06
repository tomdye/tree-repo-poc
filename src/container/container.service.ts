import { Injectable, Inject } from '@nestjs/common';
import { Container } from './container.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContainerService {
	constructor(
		@Inject('ContainerRepositoryToken')
		private readonly containerRepository: Repository<Container>,
	) {}

	async create(
		body: any,
		parent?: string,
	): Promise<Container> {
		const repo = this.containerRepository;
		const container = new Container();

		container.name = body.name;
		container.type = body.type;

		if (parent) {
			const parentContainer = await repo.findOne(parent);
			if (parentContainer) {
				container.parent = parentContainer;
			}
		}

		return repo.save(container);
	}

	async findAll(): Promise<Container[]> {
		const repo = this.containerRepository.manager.getTreeRepository(Container);
		return repo.findTrees();
	}
}
