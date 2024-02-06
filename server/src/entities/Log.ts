import {
    Entity,
    ManyToOne,
    PrimaryKey,
    Property,
  } from "@mikro-orm/core";
  import { Field, ObjectType } from "type-graphql";
import { Trace } from "./Trace";
  @ObjectType()
  @Entity()
  export class Log {
    @Field()
    @PrimaryKey()
    id!: number;
  
    @Field(() => String)
    @Property({ type: "date" })
    createdAt? = new Date();
  
    @Field(() => String)
    @Property({ type: "date", onUpdate: () => new Date() })
    updatedAt? = new Date();

  
    @Field(() => String)
    @Property({ type: "date" })
    startTime?: Date;
  
    @Field(() => String)
    @Property({ type: "date" })
    endTime?: Date;
  
    @Field(() => Boolean)
    @Property()
    isActive?: boolean;
  
    @Field(() => String)
    @Property()
    status?: string;
    
    @Field(()=>Trace, { nullable : true})
    @ManyToOne(()=> Trace)
    trace? : Trace
  }
  