import { Controller, Get, Post, Req, Param, Body } from '@nestjs/common';
import { ContainerService } from './container.service';
import { BuildingService } from './building.service';

let num = 0;

@Controller('api/container')
export class ContainerController {
	constructor(
		private readonly containerService: ContainerService,
		private readonly buildingService: BuildingService,
	) {}

	@Get()
	async findAll(@Req() req: Request): Promise<any> {
		const containers = await this.containerService.findAll();
		return containers;
	}

	@Post('building')
	async createBuilding(@Req() req: Request, @Body() body: any): Promise<any> {
		const buildingNum = num++;
		body.type = 'building' + buildingNum;
		body.name = 'my building';
		body.address = 'my address' + buildingNum;
		const container = await this.buildingService.create(body);
		return container;
	}

	@Post(':parent')
	async create(
		@Req() req: Request,
		@Body() body: any,
		@Param('parent') parent: string,
	): Promise<any> {
		body.type = 'leaf';
		body.name = 'leaf' + num++;
		const container = await this.containerService.create(
			body,
			parent,
		);
		return container;
	}
}
