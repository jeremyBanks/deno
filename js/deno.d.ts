// Copyright 2018 the Deno authors. All rights reserved. MIT license.
// Prototype https://github.com/denoland/deno/blob/golang/deno.d.ts

declare module "deno" {
  function readFileSync(filename: string): Uint8Array;
}
