import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { App } from './app.entity';
import { Organization } from './organization.entity';
import { Comment } from './comment.entity';

@Entity({ name: 'threads' })
export class Thread extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'x' })
  x: number;

  @Column({ name: 'y' })
  y: number;

  @Column({ name: 'app_id' })
  appId: string;

  @Column({ name: 'app_versions_id' })
  appVersionsId: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'organization_id' })
  organizationId: string;

  @Column({ default: false, name: 'is_resolved' })
  isResolved: boolean;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => App, (app) => app.id)
  @JoinColumn({ name: 'app_id' })
  app: App;

  @ManyToOne(() => Organization, (app) => app.id)
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;

  @OneToMany(() => Comment, (comment) => comment.thread, { onDelete: 'CASCADE' })
  comments: Comment[];
}
