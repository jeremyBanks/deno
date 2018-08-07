// Copyright 2018 the Deno authors. All rights reserved. MIT license.

// Typescript already includes type definitions in lib.dom.d.ts
/// <reference lib="dom" />
// To avoid redudancy, @types/text-encoding is not included.
// Instead declares the module and forwards type from lib.dom.d.ts.

declare module "text-encoding" {
  export var TextEncoder: TextEncoder;
  export var TextDecoder: TextDecoder;
}
