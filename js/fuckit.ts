// Copyright 2018-2019 the Deno authors. All rights reserved. MIT license.
import * as msg from "gen/msg_generated";
import * as flatbuffers from "./flatbuffers";
import * as dispatch from "./dispatch";


/** fuckits.
 *
 *       import { fuckitSync } from "deno";
 *
 *       fuckitSync();
 */
export function fuckitSync(): void {
  dispatch.sendSync(...req());
}

/**
 * fuckits.
 *
 *       import { fuckit } from "deno";
 *
 *       await fuckit();
 */
export async function fuckit(): Promise<void> {
  await dispatch.sendAsync(...req());
}

function req(): [flatbuffers.Builder, msg.Any, flatbuffers.Offset] {
  const builder = flatbuffers.createBuilder();
  msg.Fuckit.startFuckit(builder);
  const inner = msg.Fuckit.endFuckit(builder);
  return [builder, msg.Any.Fuckit, inner];
}
