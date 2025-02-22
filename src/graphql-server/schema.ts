import { makeSchema, asNexusMethod } from "nexus";
import { DateTimeResolver } from "graphql-scalars";
import path from "path";
import * as custom_types from "./index";

export const DateTime = asNexusMethod(DateTimeResolver, "date");

export const schema = makeSchema({
  types: [DateTime, custom_types],
  outputs: {
    schema: path.join(process.cwd(), "src", "graphql-server", "schema.graphql"),
    typegen: path.join(process.cwd(), "src", "graphql-server", "types.ts"),
  },
  contextType: {
    module: path.join(process.cwd(), "src", "graphql-server", "context.ts"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
});
