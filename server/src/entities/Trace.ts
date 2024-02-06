import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryKey,
  Property,
} from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { Asset } from "./Asset";
import { User } from "./User";
import { Part } from "./Part";
import { Log } from "./Log";
@ObjectType()
@Entity()
export class Trace {
  @Field()
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property({ type: "date" })
  createdAt? = new Date();

  @Field(() => String)
  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt? = new Date();

  @Field(() => [Asset])
  @OneToMany(() => Asset, "trace", { orphanRemoval: true , orderBy : { date : "DESC"}})
    images = new Collection<Asset>(this);

  @Field(() => Number)
  @Property({ type: "numeric" })
  activeTime?: number;

  @Field(() => Number)
  @Property({ type: "numeric" })
  inActiveTime?: number;

  @Field(() => Number)
  @Property({ type: "numeric" })
  allTime?: number;

  @Field(() => String)
  @Property({ type: "date" })
  date?: Date;

  @Field(() => User)
  @ManyToOne(() => User)
  user?: User;

  @Field(() => [Part], { nullable: true })
  @OneToMany(() => Part, "trace", { orphanRemoval: true })
  parts = new Collection<Part>(this);
  
  @Field(() => [Log], { nullable: true })
  @OneToMany(() => Log, "trace", { orphanRemoval: true })
  logs = new Collection<Log>(this);
  
}
