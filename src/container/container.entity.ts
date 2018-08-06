import {
	Entity,
	Column,
	ManyToOne,
	OneToMany,
	OneToOne,
	JoinColumn,
	Tree,
	TreeChildren,
	TreeParent,
	PrimaryGeneratedColumn,
	TableInheritance,
} from 'typeorm';

@Tree('nested-set')
@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } })
export class Container {
	@Column() name: string;

	@Column() type: string;

	@PrimaryGeneratedColumn('uuid') id: string;

	@TreeParent()
	parent: Container;

	@TreeChildren()
	children: Container[];
}
