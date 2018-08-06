import {
	Column,
	ChildEntity,
} from 'typeorm';
import { Container } from './container.entity';

@ChildEntity()
export class Building extends Container {
	@Column() address: string;
}
