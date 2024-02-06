import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organization_teamCreateManyUser_organizationInput } from "../inputs/User_organization_teamCreateManyUser_organizationInput";

@TypeGraphQL.InputType(
  "User_organization_teamCreateManyUser_organizationInputEnvelope",
  {},
)
export class User_organization_teamCreateManyUser_organizationInputEnvelope {
  @TypeGraphQL.Field(
    (_type) => [User_organization_teamCreateManyUser_organizationInput],
    {
      nullable: false,
    },
  )
  data!: User_organization_teamCreateManyUser_organizationInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
