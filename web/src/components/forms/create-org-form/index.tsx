"use client";

import React, { Suspense } from "react";
import {
  CoreOrganizationFragmentDoc,
  OrganizationCreateInput,
  User_Role,
} from "@/api/__generated__/graphql/graphql";
import { useAuth } from "@/hooks/useAuth";
import { translate } from "@/lib/locales/translate";
import { FieldProps, Form, Formik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import InputField from "@/components/ui/input-field";
import Skeleton from "@/components/ui/skeleton";

import { slugify } from "@/lib/helpers/slugify";
import { createOrg } from "@/api/server-actions/org-actions";
import { useRouter } from "next/navigation";
import routes from "@/lib/routes";
import Image from "next/image";
import { useRouteModal } from "@/components/ui/modal/context";

const CreateOrgForm : React.FC<{ showCloseIcon? : boolean}>= ({ showCloseIcon = false  }) => {
const { user } = useAuth();
  const router = useRouter();
  const initialValues: Pick<OrganizationCreateInput, "name" | "slug"> = {
    name: "",
    slug: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(translate("form.validation.required", "name")),
    slug: Yup.string().required(translate("form.validation.required", "Slug")),
  });

  const handleSubmit = async (
    values: Pick<OrganizationCreateInput, "name" | "slug">
  ) => {
    try {
      // const res = await createOrg(values);

      const res = await createOrg({
        slug: values.slug,
        name: values.name,
        user_organizations: {
          create: [
            {
              role: User_Role.Owner,
              user: { connect: { id: Number(user?.id) } },
            },
          ],
        },
      });
      if (res.errors) {
        res.errors.forEach((err) => {
          toast.error(err.message);
        });
        return;
      }
      if (res.data?.createOneOrganization.id) {
        toast.success(
          translate(
            "orgs.create.success",
            res.data?.createOneOrganization?.name
          )
        );
        void router.push(
          routes.org({ data: { org: res.data?.createOneOrganization.id } })
        );
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };
  const { close } = useRouteModal()
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        isSubmitting,
        values,
        setFieldValue,
        touched,
        /* and other goodies */
      }) => {
        return (
          <Form className=" text-left  w-full">
              {showCloseIcon && <div className='absolute right-4 top-4 cursor-pointer' onClick={close}>
                 <Image className="" src="/images/delete-cross.png" alt="Profile Image" width={20} height={20} />
             </div>}
            <h3 className="text-black text-[18px] em:text-[22px] sm:text-[26px] md:text-[2rem] font-semibold leading-[28px] text-center w-full  mb-4 em:mb-8">
              {translate("org.create.form.heading")}
            </h3>
            <div className="max-w-[98%] sm:max-w-[90%] lg:max-w-[70%] mx-auto [&>*:nth-child(1)]:mb-6">
              <InputField
                id="name"
                placeholder="Name"
                type="text"
                inputProps={{
                  render: ({ field }: FieldProps) => {
                    return (
                      <input
                        className="appearance-none border rounded w-full  px-3 text-black font-semibold leading-tight focus:outline-none focus:shadow-outline placeholder:text-[12px] text-xs py-[12px] placeholder:font-semibold placeholder:text-black placeholder:capitalize"
                        {...field}
                        placeholder="name"
                        onChange={(e) => {
                          if (!touched.slug) {
                            setFieldValue("slug", slugify(e.target.value));
                          }
                          return field.onChange(e);
                        }}
                      />
                    );
                  },
                }}
              />
              <InputField
                id="slug"
                placeholder="Slug"
                type="text"
                inputProps={{
                  render: ({ field }: FieldProps) => {
                    return (
                      <input
                        className="appearance-none border rounded w-full  px-3 text-black text-semibold leading-tight focus:outline-none focus:shadow-outline placeholder:text-[12px] text-xs py-[12px] placeholder:text-black placeholder:font-semibold "
                        {...field}
                        placeholder="slug"
                        onChange={(e) => {
                          e.target.value = slugify(e.target.value);
                          e.currentTarget.value = slugify(
                            e.currentTarget.value
                          );
                          return field.onChange(e);
                        }}
                      />
                    );
                  },
                }}
              />
              <div className="flex items-center justify-center w-full">
                <Button
                  loading={isSubmitting}
                  type="submit"
                  className="bg-[#393939]  text-white py-[10px] px-4 rounded focus:outline-none focus:shadow-outline w-full text-[22px] font-semibold hover:shadow-xl uppercase"
                >
                  Create
                </Button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default CreateOrgForm;
