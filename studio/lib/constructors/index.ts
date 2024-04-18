import { FieldDefinition } from "sanity";

import { taxonomy } from "./taxonomies"
import { document } from "./document"

export default { taxonomy, document }

export type fields = FieldDefinition<"string" | "number" | "boolean" | "object" | "array" | "block" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "reference" | "crossDatasetReference" | "slug" | "text" | "url" | "email" | "color", undefined>[]