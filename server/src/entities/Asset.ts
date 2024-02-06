import { Entity, PrimaryKey, ManyToOne, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";
import { Trace } from "./Trace";
@ObjectType()
@Entity()
export class Asset {
  @Field()
  @PrimaryKey()
  id: number;

  @Field(() => String, { nullable: true })
  @Property({ type: "text", nullable: true })
  url : string;
  
  @Field(() => String, {nullable : true})
  @Property({ type: "date" })
  date : Date;
  
  @Field(() => Trace)
  @ManyToOne(() => Trace)
  trace?: Trace;
}
