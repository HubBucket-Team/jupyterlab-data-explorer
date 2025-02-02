/**
 * @license BSD-3-Clause
 *
 * Copyright (c) 2019 Project Jupyter Contributors.
 * Distributed under the terms of the 3-Clause BSD License.
 */

import { JupyterFrontEndPlugin } from "@jupyterlab/application";
import { Token } from "@phosphor/coreutils";
import { Registry, relativeNestedURLConverter } from "@jupyterlab/dataregistry";

export interface IRegistry extends Registry {}
export const IRegistry = new Token<IRegistry>(
  "@jupyterlab/dataregistry:Registry"
);

/**
 * The converter registry extension.
 */
export default {
  activate,
  id: "@jupyterlab/dataregistry-extension:data-registry",
  requires: [],
  provides: IRegistry,
  autoStart: true
} as JupyterFrontEndPlugin<Registry>;

function activate(): Registry {
  const r = new Registry();
  r.addConverter(relativeNestedURLConverter);
  return r;
}
