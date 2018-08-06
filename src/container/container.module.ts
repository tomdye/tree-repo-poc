import { Module } from '@nestjs/common';
import { ContainerService } from './container.service';
import { ContainerController } from './container.controller';
import { Container } from './container.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { containerProviders } from './container.providers';
import { DatabaseModule } from '../database.module';
import { BuildingService } from './building.service';
import { buildingProviders } from './building.providers';

@Module({
	imports: [DatabaseModule],
	controllers: [ContainerController],
	providers: [
		...containerProviders,
		...buildingProviders,
		ContainerService,
		BuildingService,
	],
  })
export class ContainerModule {}
