import { Trace } from "../entities/Trace";
import { MyContext } from "../types";
import { Arg, Ctx, Field, ObjectType, Query, Resolver } from "type-graphql";
import { BaseResponse } from "./user";
import { Collection, Loaded } from "@mikro-orm/core";
import { Asset } from "../entities/Asset";
import { Part } from "../entities/Part";
import moment from "moment-timezone";
@ObjectType()
class TraceResponse extends BaseResponse {
  @Field(() => Trace, { nullable: true })
  trace?: Trace;
}
@ObjectType()
class TracesResponse extends BaseResponse {
  @Field(() => [Trace], { nullable: true })
  traces?: Trace[];
}
@Resolver()
export class TraceResolver {
  @Query(() => TraceResponse)
  async trace(
    @Arg("userId", { nullable: true }) userId: number,
    @Arg("date", { nullable: true }) date: number,
    @Arg("imageCount", { nullable: true }) imageCount: number,
    @Arg("imageOffset", { nullable: true }) imageOffset: number,
    @Arg("startTime", { nullable: true }) startTime: Date,
    @Arg("endTime", { nullable: true }) endTime: Date,
    @Ctx() { em }: MyContext
  ): Promise<TraceResponse> {
    let trace_date;
    try {
      if (date) {
        trace_date = moment
          .unix(date)
          .tz("Asia/Calcutta")
          .hour(0)
          .minute(0)
          .second(0)
          .millisecond(0)
          .toDate();
      } else {
        trace_date = moment
          .tz(moment(), "Asia/Calcutta")
          .hour(0)
          .minute(0)
          .second(0)
          .millisecond(0)
          .toDate();
      }
    } catch (err) {
      trace_date = moment
        .tz(moment(), "Asia/Calcutta")
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(0)
        .toDate();
    }
    if (!userId) {
      return {
        errors: [{ field: "userId", message: "Please select a user." }],
      };
    }
    const trace = await em.findOne(
      Trace,
      userId
        ? { date: { $eq: trace_date }, user: { id: { $eq: userId } } }
        : { date: { $eq: trace_date } },
      { populate: ["images", "parts", "user.name", "logs"] }
    );
    if (!trace) {
      return {
        errors: [
          {
            field: "date",
            message: "No trace found for this date for this user",
          },
        ],
      };
    }

    if (startTime && endTime) {
      const images = imageCount
        ? ((await trace.images.matching({
            where: { date: { $gte: startTime, $lte: endTime } },
            limit: imageCount,
            offset: imageOffset,
          })) as unknown as Collection<Asset, object>)
        : ((await trace.images.matching({
            where: { date: { $gte: startTime, $lte: endTime } },
          })) as unknown as Collection<Asset, object>);

      const parts = (await trace.parts.matching({
        where: { createdAt: { $gte: startTime, $lte: endTime } },
      })) as unknown as Collection<Part, object>;
      return { trace: { ...trace, images, parts } };
    } else if (startTime) {
      const images = imageCount
        ? ((await trace.images.matching({
            where: { date: { $gte: startTime } },
            limit: imageCount,
            offset: imageOffset,
          })) as unknown as Collection<Asset, object>)
        : ((await trace.images.matching({
            where: { date: { $gte: startTime, $lte: endTime } },
          })) as unknown as Collection<Asset, object>);

      const parts = (await trace.parts.matching({
        where: { createdAt: { $gte: startTime, $lte: endTime } },
      })) as unknown as Collection<Part, object>;
      return { trace: { ...trace, images, parts } };
    } else if (endTime) {
      const images = imageCount
        ? ((await trace.images.matching({
            where: { date: { $lte: endTime } },
            limit: imageCount,
            offset: imageOffset,
          })) as unknown as Collection<Asset, object>)
        : ((await trace.images.matching({
            where: { date: { $gte: startTime, $lte: endTime } },
          })) as unknown as Collection<Asset, object>);

      const parts = (await trace.parts.matching({
        where: { createdAt: { $gte: startTime, $lte: endTime } },
      })) as unknown as Collection<Part, object>;
      return { trace: { ...trace, images, parts } };
    }
    if (imageCount) {
      const images = (await trace.images.matching({
        limit: imageCount,
        offset: imageOffset,
      })) as unknown as Collection<Asset, object>;
      return { trace: { ...trace, images } };
    }
    return { trace };
  }
  @Query(() => TracesResponse)
  async traces(
    @Arg("userId", { nullable: true }) userId: number,
    @Arg("startDate", { nullable: true }) startDate: number,
    @Arg("endDate", { nullable: true }) endDate: number,
    @Arg("imageCount", { nullable: true }) imageCount: number,
    @Arg("imageOffset", { nullable: true }) imageOffset: number,
    // @Arg("startTime", { nullable: true }) startTime: Date,
    // @Arg("endTime", { nullable: true }) endTime: Date,
    @Ctx() { em }: MyContext
  ): Promise<TracesResponse> {
    let trace_start_date;
    let trace_end_date;
    /**
     * Determine start-end dates. Making sure to reset to 00:00:00 to get data from start of date.
     */
    try {
      trace_start_date = moment
        .unix(startDate)
        .tz("Asia/Calcutta")
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(0)
        .toDate();
      trace_end_date = moment
        .unix(endDate ?? startDate)
        .tz("Asia/Calcutta")
        .hour(23)
        .minute(59)
        .second(59)
        .millisecond(0)
        .toDate();
    } catch (err) {
      trace_start_date = moment
        .tz(moment(), "Asia/Calcutta")
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(0)
        .toDate();
      trace_end_date = moment
        .tz(moment(), "Asia/Calcutta")
        .hour(0)
        .minute(0)
        .second(0)
        .millisecond(0)
        .toDate();
    }
    if (!userId) {
      return {
        errors: [{ field: "userId", message: "Please select a user." }],
      };
    }
    const traces = await em.find(
      Trace,
      endDate
        ? {
            date: { $gte: trace_start_date, $lte: trace_end_date },
            user: { id: { $eq: userId } },
          }
        : { date: { $gte: trace_start_date }, user: { id: { $eq: userId } } },
      {
        populate: ["images", "parts", "user.name", "logs"],
        orderBy: { date: "DESC" },
      }
    );
    if (!(traces.length > 0)) {
      return {
        errors: [
          {
            field: "date",
            message: "No trace found for this date for this user",
          },
        ],
      };
    }
    let augmentedTraces:
      | Loaded<Trace, "images" | "parts" | "user.name" | "logs">[]
      | (Omit<
          Loaded<Trace, "images" | "parts" | "user.name" | "logs">,
          "images"
        > & { images: Collection<Asset, object> })[] = traces;
    if (imageCount) {
      augmentedTraces = await Promise.all(
        traces.map(async (trace) => {
          const images = (await trace.images.matching({
            limit: imageOffset + imageCount,
          })) as unknown as Collection<Asset, object>;
          return { ...trace, images };
        }) as unknown as Loaded<
          Trace,
          "images" | "parts" | "user.name" | "logs"
        >[]
      );
    }
    return { traces: augmentedTraces };
  }
}
