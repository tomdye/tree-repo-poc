import { Connection, Repository } from 'typeorm';
import { Building } from './building.entity';

export const buildingProviders = [
  {
    provide: 'BuildingRepositoryToken',
    useFactory: (connection: Connection) => connection.getRepository(Building),
    inject: ['DbConnectionToken'],
  },
];
