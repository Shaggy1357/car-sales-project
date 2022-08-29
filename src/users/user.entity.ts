import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  OneToMany,
} from 'typeorm';
import { ReportEntity } from '../reports/reports.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => ReportEntity, (reports) => reports.user)
  reports: ReportEntity[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted user with id:', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updates user with id:', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed user with id:', this.id);
  }
}
