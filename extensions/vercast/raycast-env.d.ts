/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Access Token - Your Vercel access token */
  "accessToken": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-projects` command */
  export type SearchProjects = ExtensionPreferences & {}
  /** Preferences accessible in the `search-deployments` command */
  export type SearchDeployments = ExtensionPreferences & {}
  /** Preferences accessible in the `search-components` command */
  export type SearchComponents = ExtensionPreferences & {}
  /** Preferences accessible in the `menubar-list-deployments` command */
  export type MenubarListDeployments = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-projects` command */
  export type SearchProjects = {}
  /** Arguments passed to the `search-deployments` command */
  export type SearchDeployments = {}
  /** Arguments passed to the `search-components` command */
  export type SearchComponents = {}
  /** Arguments passed to the `menubar-list-deployments` command */
  export type MenubarListDeployments = {}
}

