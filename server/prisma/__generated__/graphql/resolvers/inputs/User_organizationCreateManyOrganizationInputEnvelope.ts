import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User_organizationCreateManyOrganizationInput } from "../inputs/User_organizationCreateManyOrganizationInput";

@TypeGraphQL.InputType(
  "User_organizationCreateManyOrganizationInputEnvelope",
  {},
)
export class User_organizationCreateManyOrganizationInputEnvelope {
  @TypeGraphQL.Field(
    (_type) => [User_organizationCreateManyOrganizationInput],
    {
      nullable: false,
    },
  )
  data!: User_organizationCreateManyOrganizationInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
