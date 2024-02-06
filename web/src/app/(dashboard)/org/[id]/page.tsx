import OrganizationDetail from "@/components/sections/organization-detail";
import Skeleton from "@/components/ui/skeleton";
import { OrgDetailsProvider } from "@/hooks/useOrg";
import { withSSRAuth } from "@/lib/helpers/withSSRAuth";
import React, { Suspense } from "react";

const Page = (props: { params: { id: string } }) => {
  return (
    <div className="container">
      <Suspense
        fallback={
          <div>
             <Skeleton height={"30vh"} />
                <div className="flex justify-between">
                    <Skeleton height={"30vh"} />
                    <Skeleton height={"30vh"} />
                </div>
            <Skeleton height={"30vh"} />
          </div>
        }
        >
        <OrgDetailsProvider id={Number(props.params?.id)}>
        <OrganizationDetail />
        </OrgDetailsProvider>
      </Suspense>
    </div>
  );
};

export default withSSRAuth(Page);
