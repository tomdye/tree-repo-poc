import {
	ChildEntity,
	Tree,
	Column,
} from 'typeorm';
import { Container } from './container.entity';

@ChildEntity()
export class Floor extends Container {
	@Column() floor: number;
}
