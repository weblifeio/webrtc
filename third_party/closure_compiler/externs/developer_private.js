// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.developerPrivate.FooType'.
// Please run the closure compiler before committing changes.
// See https://chromium.googlesource.com/chromium/src/+/master/docs/closure_compilation.md

/** @fileoverview Externs generated from namespace: developerPrivate */

/**
 * @const
 */
chrome.developerPrivate = {};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ItemType
 */
chrome.developerPrivate.ItemType = {
  HOSTED_APP: 'hosted_app',
  PACKAGED_APP: 'packaged_app',
  LEGACY_PACKAGED_APP: 'legacy_packaged_app',
  EXTENSION: 'extension',
  THEME: 'theme',
};

/**
 * @typedef {{
 *   path: string,
 *   render_process_id: number,
 *   render_view_id: number,
 *   incognito: boolean,
 *   generatedBackgroundPage: boolean
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ItemInspectView
 */
chrome.developerPrivate.ItemInspectView;

/**
 * @typedef {{
 *   extension_id: string,
 *   render_process_id: (string|number),
 *   render_view_id: (string|number),
 *   incognito: boolean
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-InspectOptions
 */
chrome.developerPrivate.InspectOptions;

/**
 * @typedef {{
 *   message: string
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-InstallWarning
 */
chrome.developerPrivate.InstallWarning;

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ExtensionType
 */
chrome.developerPrivate.ExtensionType = {
  HOSTED_APP: 'HOSTED_APP',
  PLATFORM_APP: 'PLATFORM_APP',
  LEGACY_PACKAGED_APP: 'LEGACY_PACKAGED_APP',
  EXTENSION: 'EXTENSION',
  THEME: 'THEME',
  SHARED_MODULE: 'SHARED_MODULE',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-Location
 */
chrome.developerPrivate.Location = {
  FROM_STORE: 'FROM_STORE',
  UNPACKED: 'UNPACKED',
  THIRD_PARTY: 'THIRD_PARTY',
  UNKNOWN: 'UNKNOWN',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ViewType
 */
chrome.developerPrivate.ViewType = {
  APP_WINDOW: 'APP_WINDOW',
  BACKGROUND_CONTENTS: 'BACKGROUND_CONTENTS',
  COMPONENT: 'COMPONENT',
  EXTENSION_BACKGROUND_PAGE: 'EXTENSION_BACKGROUND_PAGE',
  EXTENSION_DIALOG: 'EXTENSION_DIALOG',
  EXTENSION_GUEST: 'EXTENSION_GUEST',
  EXTENSION_POPUP: 'EXTENSION_POPUP',
  PANEL: 'PANEL',
  TAB_CONTENTS: 'TAB_CONTENTS',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ErrorType
 */
chrome.developerPrivate.ErrorType = {
  MANIFEST: 'MANIFEST',
  RUNTIME: 'RUNTIME',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ErrorLevel
 */
chrome.developerPrivate.ErrorLevel = {
  LOG: 'LOG',
  WARN: 'WARN',
  ERROR: 'ERROR',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ExtensionState
 */
chrome.developerPrivate.ExtensionState = {
  ENABLED: 'ENABLED',
  DISABLED: 'DISABLED',
  TERMINATED: 'TERMINATED',
  BLACKLISTED: 'BLACKLISTED',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-CommandScope
 */
chrome.developerPrivate.CommandScope = {
  GLOBAL: 'GLOBAL',
  CHROME: 'CHROME',
};

/**
 * @typedef {{
 *   isEnabled: boolean,
 *   isActive: boolean
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-AccessModifier
 */
chrome.developerPrivate.AccessModifier;

/**
 * @typedef {{
 *   lineNumber: number,
 *   columnNumber: number,
 *   url: string,
 *   functionName: string
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-StackFrame
 */
chrome.developerPrivate.StackFrame;

/**
 * @typedef {{
 *   type: !chrome.developerPrivate.ErrorType,
 *   extensionId: string,
 *   fromIncognito: boolean,
 *   source: string,
 *   message: string,
 *   id: number,
 *   manifestKey: string,
 *   manifestSpecific: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ManifestError
 */
chrome.developerPrivate.ManifestError;

/**
 * @typedef {{
 *   type: !chrome.developerPrivate.ErrorType,
 *   extensionId: string,
 *   fromIncognito: boolean,
 *   source: string,
 *   message: string,
 *   id: number,
 *   severity: !chrome.developerPrivate.ErrorLevel,
 *   contextUrl: string,
 *   occurrences: number,
 *   renderViewId: number,
 *   renderProcessId: number,
 *   canInspect: boolean,
 *   stackTrace: !Array<!chrome.developerPrivate.StackFrame>
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-RuntimeError
 */
chrome.developerPrivate.RuntimeError;

/**
 * @typedef {{
 *   suspiciousInstall: boolean,
 *   corruptInstall: boolean,
 *   updateRequired: boolean
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-DisableReasons
 */
chrome.developerPrivate.DisableReasons;

/**
 * @typedef {{
 *   openInTab: boolean,
 *   url: string
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-OptionsPage
 */
chrome.developerPrivate.OptionsPage;

/**
 * @typedef {{
 *   url: string,
 *   specified: boolean
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-HomePage
 */
chrome.developerPrivate.HomePage;

/**
 * @typedef {{
 *   url: string,
 *   renderProcessId: number,
 *   renderViewId: number,
 *   incognito: boolean,
 *   isIframe: boolean,
 *   type: !chrome.developerPrivate.ViewType
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ExtensionView
 */
chrome.developerPrivate.ExtensionView;

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ControllerType
 */
chrome.developerPrivate.ControllerType = {
  POLICY: 'POLICY',
  CHILD_CUSTODIAN: 'CHILD_CUSTODIAN',
  SUPERVISED_USER_CUSTODIAN: 'SUPERVISED_USER_CUSTODIAN',
};

/**
 * @typedef {{
 *   type: !chrome.developerPrivate.ControllerType,
 *   text: string
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ControlledInfo
 */
chrome.developerPrivate.ControlledInfo;

/**
 * @typedef {{
 *   description: string,
 *   keybinding: string,
 *   name: string,
 *   isActive: boolean,
 *   scope: !chrome.developerPrivate.CommandScope,
 *   isExtensionAction: boolean
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-Command
 */
chrome.developerPrivate.Command;

/**
 * @typedef {{
 *   id: string,
 *   name: string
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-DependentExtension
 */
chrome.developerPrivate.DependentExtension;

/**
 * @typedef {{
 *   message: string,
 *   submessages: !Array<string>
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-Permission
 */
chrome.developerPrivate.Permission;

/**
 * @typedef {{
 *   blacklistText: (string|undefined),
 *   commands: !Array<!chrome.developerPrivate.Command>,
 *   controlledInfo: (!chrome.developerPrivate.ControlledInfo|undefined),
 *   dependentExtensions: !Array<!chrome.developerPrivate.DependentExtension>,
 *   description: string,
 *   disableReasons: !chrome.developerPrivate.DisableReasons,
 *   errorCollection: !chrome.developerPrivate.AccessModifier,
 *   fileAccess: !chrome.developerPrivate.AccessModifier,
 *   homePage: !chrome.developerPrivate.HomePage,
 *   iconUrl: string,
 *   id: string,
 *   incognitoAccess: !chrome.developerPrivate.AccessModifier,
 *   installWarnings: !Array<string>,
 *   launchUrl: (string|undefined),
 *   location: !chrome.developerPrivate.Location,
 *   locationText: (string|undefined),
 *   manifestErrors: !Array<!chrome.developerPrivate.ManifestError>,
 *   manifestHomePageUrl: string,
 *   mustRemainInstalled: boolean,
 *   name: string,
 *   offlineEnabled: boolean,
 *   optionsPage: (!chrome.developerPrivate.OptionsPage|undefined),
 *   path: (string|undefined),
 *   permissions: !Array<!chrome.developerPrivate.Permission>,
 *   prettifiedPath: (string|undefined),
 *   runOnAllUrls: !chrome.developerPrivate.AccessModifier,
 *   runtimeErrors: !Array<!chrome.developerPrivate.RuntimeError>,
 *   runtimeWarnings: !Array<string>,
 *   state: !chrome.developerPrivate.ExtensionState,
 *   type: !chrome.developerPrivate.ExtensionType,
 *   updateUrl: string,
 *   userMayModify: boolean,
 *   version: string,
 *   views: !Array<!chrome.developerPrivate.ExtensionView>,
 *   webStoreUrl: string
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ExtensionInfo
 */
chrome.developerPrivate.ExtensionInfo;

/**
 * @typedef {{
 *   appInfoDialogEnabled: boolean,
 *   canLoadUnpacked: boolean,
 *   inDeveloperMode: boolean,
 *   isDeveloperModeControlledByPolicy: boolean,
 *   isIncognitoAvailable: boolean,
 *   isSupervised: boolean
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ProfileInfo
 */
chrome.developerPrivate.ProfileInfo;

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   version: string,
 *   description: string,
 *   may_disable: boolean,
 *   enabled: boolean,
 *   isApp: boolean,
 *   type: !chrome.developerPrivate.ItemType,
 *   allow_activity: boolean,
 *   allow_file_access: boolean,
 *   wants_file_access: boolean,
 *   incognito_enabled: boolean,
 *   is_unpacked: boolean,
 *   allow_reload: boolean,
 *   terminated: boolean,
 *   allow_incognito: boolean,
 *   icon_url: string,
 *   path: (string|undefined),
 *   options_url: (string|undefined),
 *   app_launch_url: (string|undefined),
 *   homepage_url: (string|undefined),
 *   update_url: (string|undefined),
 *   install_warnings: !Array<!chrome.developerPrivate.InstallWarning>,
 *   manifest_errors: !Array<*>,
 *   runtime_errors: !Array<*>,
 *   offline_enabled: boolean,
 *   views: !Array<!chrome.developerPrivate.ItemInspectView>
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ItemInfo
 */
chrome.developerPrivate.ItemInfo;

/**
 * @typedef {{
 *   includeDisabled: (boolean|undefined),
 *   includeTerminated: (boolean|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-GetExtensionsInfoOptions
 */
chrome.developerPrivate.GetExtensionsInfoOptions;

/**
 * @typedef {{
 *   extensionId: string,
 *   fileAccess: (boolean|undefined),
 *   incognitoAccess: (boolean|undefined),
 *   errorCollection: (boolean|undefined),
 *   runOnAllUrls: (boolean|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ExtensionConfigurationUpdate
 */
chrome.developerPrivate.ExtensionConfigurationUpdate;

/**
 * @typedef {{
 *   inDeveloperMode: (boolean|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ProfileConfigurationUpdate
 */
chrome.developerPrivate.ProfileConfigurationUpdate;

/**
 * @typedef {{
 *   extensionId: string,
 *   commandName: string,
 *   scope: (!chrome.developerPrivate.CommandScope|undefined),
 *   keybinding: (string|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ExtensionCommandUpdate
 */
chrome.developerPrivate.ExtensionCommandUpdate;

/**
 * @typedef {{
 *   failQuietly: (boolean|undefined),
 *   populateErrorForUnpacked: (boolean|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ReloadOptions
 */
chrome.developerPrivate.ReloadOptions;

/**
 * @typedef {{
 *   failQuietly: (boolean|undefined),
 *   populateError: (boolean|undefined),
 *   retryGuid: (string|undefined),
 *   useDraggedPath: (boolean|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-LoadUnpackedOptions
 */
chrome.developerPrivate.LoadUnpackedOptions;

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-PackStatus
 */
chrome.developerPrivate.PackStatus = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-FileType
 */
chrome.developerPrivate.FileType = {
  LOAD: 'LOAD',
  PEM: 'PEM',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-SelectType
 */
chrome.developerPrivate.SelectType = {
  FILE: 'FILE',
  FOLDER: 'FOLDER',
};

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-EventType
 */
chrome.developerPrivate.EventType = {
  INSTALLED: 'INSTALLED',
  UNINSTALLED: 'UNINSTALLED',
  LOADED: 'LOADED',
  UNLOADED: 'UNLOADED',
  VIEW_REGISTERED: 'VIEW_REGISTERED',
  VIEW_UNREGISTERED: 'VIEW_UNREGISTERED',
  ERROR_ADDED: 'ERROR_ADDED',
  ERRORS_REMOVED: 'ERRORS_REMOVED',
  PREFS_CHANGED: 'PREFS_CHANGED',
  WARNINGS_CHANGED: 'WARNINGS_CHANGED',
  COMMAND_ADDED: 'COMMAND_ADDED',
  COMMAND_REMOVED: 'COMMAND_REMOVED',
};

/**
 * @typedef {{
 *   message: string,
 *   item_path: string,
 *   pem_path: string,
 *   override_flags: number,
 *   status: !chrome.developerPrivate.PackStatus
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-PackDirectoryResponse
 */
chrome.developerPrivate.PackDirectoryResponse;

/**
 * @typedef {{
 *   name: string
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ProjectInfo
 */
chrome.developerPrivate.ProjectInfo;

/**
 * @typedef {{
 *   event_type: !chrome.developerPrivate.EventType,
 *   item_id: string,
 *   extensionInfo: (!chrome.developerPrivate.ExtensionInfo|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-EventData
 */
chrome.developerPrivate.EventData;

/**
 * @typedef {{
 *   beforeHighlight: string,
 *   highlight: string,
 *   afterHighlight: string
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-ErrorFileSource
 */
chrome.developerPrivate.ErrorFileSource;

/**
 * @typedef {{
 *   error: string,
 *   path: string,
 *   source: (!chrome.developerPrivate.ErrorFileSource|undefined),
 *   retryGuid: string
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-LoadError
 */
chrome.developerPrivate.LoadError;

/**
 * @typedef {{
 *   extensionId: string,
 *   pathSuffix: string,
 *   message: string,
 *   manifestKey: (string|undefined),
 *   manifestSpecific: (string|undefined),
 *   lineNumber: (number|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-RequestFileSourceProperties
 */
chrome.developerPrivate.RequestFileSourceProperties;

/**
 * @typedef {{
 *   highlight: string,
 *   beforeHighlight: string,
 *   afterHighlight: string,
 *   title: string,
 *   message: string
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-RequestFileSourceResponse
 */
chrome.developerPrivate.RequestFileSourceResponse;

/**
 * @typedef {{
 *   extensionId: (string|undefined),
 *   renderViewId: number,
 *   renderProcessId: number,
 *   incognito: (boolean|undefined),
 *   url: (string|undefined),
 *   lineNumber: (number|undefined),
 *   columnNumber: (number|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-OpenDevToolsProperties
 */
chrome.developerPrivate.OpenDevToolsProperties;

/**
 * @typedef {{
 *   extensionId: string,
 *   errorIds: (!Array<number>|undefined),
 *   type: (!chrome.developerPrivate.ErrorType|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/developerPrivate#type-DeleteExtensionErrorsProperties
 */
chrome.developerPrivate.DeleteExtensionErrorsProperties;

/**
 * Runs auto update for extensions and apps immediately.
 * @param {function():void=} callback Called after update check completes.
 * @see https://developer.chrome.com/extensions/developerPrivate#method-autoUpdate
 */
chrome.developerPrivate.autoUpdate = function(callback) {};

/**
 * Returns information of all the extensions and apps installed.
 * @param {!chrome.developerPrivate.GetExtensionsInfoOptions=} options Options
 *     to restrict the items returned.
 * @param {function(!Array<!chrome.developerPrivate.ExtensionInfo>):void=}
 *     callback Called with extensions info.
 * @see https://developer.chrome.com/extensions/developerPrivate#method-getExtensionsInfo
 */
chrome.developerPrivate.getExtensionsInfo = function(options, callback) {};

/**
 * Returns information of a particular extension.
 * @param {string} id The id of the extension.
 * @param {function(!chrome.developerPrivate.ExtensionInfo):void=} callback
 *     Called with the result.
 * @see https://developer.chrome.com/extensions/developerPrivate#method-getExtensionInfo
 */
chrome.developerPrivate.getExtensionInfo = function(id, callback) {};

/**
 * Returns the size of a particular extension on disk (already formatted).
 * @param {string} id The id of the extension.
 * @param {function(string):void} callback Called with the result.
 * @see https://developer.chrome.com/extensions/developerPrivate#method-getExtensionSize
 */
chrome.developerPrivate.getExtensionSize = function(id, callback) {};

/**
 * Returns information of all the extensions and apps installed.
 * @param {boolean} includeDisabled include disabled items.
 * @param {boolean} includeTerminated include terminated items.
 * @param {function(!Array<!chrome.developerPrivate.ItemInfo>):void} callback
 *     Called with items info.
 * @deprecated Use getExtensionsInfo
 * @see https://developer.chrome.com/extensions/developerPrivate#method-getItemsInfo
 */
chrome.developerPrivate.getItemsInfo = function(includeDisabled, includeTerminated, callback) {};

/**
 * Returns the current profile's configuration.
 * @param {function(!chrome.developerPrivate.ProfileInfo):void} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-getProfileConfiguration
 */
chrome.developerPrivate.getProfileConfiguration = function(callback) {};

/**
 * Updates the active profile.
 * @param {!chrome.developerPrivate.ProfileConfigurationUpdate} update The
 *     parameters for updating the profile's configuration.  Any     properties
 *     omitted from |update| will not be changed.
 * @param {function():void=} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-updateProfileConfiguration
 */
chrome.developerPrivate.updateProfileConfiguration = function(update, callback) {};

/**
 * Opens a permissions dialog.
 * @param {string} extensionId The id of the extension to show permissions for.
 * @param {function():void=} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-showPermissionsDialog
 */
chrome.developerPrivate.showPermissionsDialog = function(extensionId, callback) {};

/**
 * Reloads a given extension.
 * @param {string} extensionId The id of the extension to reload.
 * @param {!chrome.developerPrivate.ReloadOptions=} options Additional
 *     configuration parameters.
 * @param {function((!chrome.developerPrivate.LoadError|undefined)):void=}
 *     callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-reload
 */
chrome.developerPrivate.reload = function(extensionId, options, callback) {};

/**
 * Modifies an extension's current configuration.
 * @param {!chrome.developerPrivate.ExtensionConfigurationUpdate} update The
 *     parameters for updating the extension's configuration.     Any properties
 *     omitted from |update| will not be changed.
 * @param {function():void=} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-updateExtensionConfiguration
 */
chrome.developerPrivate.updateExtensionConfiguration = function(update, callback) {};

/**
 * Loads a user-selected unpacked item.
 * @param {!chrome.developerPrivate.LoadUnpackedOptions=} options Additional
 *     configuration parameters.
 * @param {function((!chrome.developerPrivate.LoadError|undefined)):void=}
 *     callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-loadUnpacked
 */
chrome.developerPrivate.loadUnpacked = function(options, callback) {};

/**
 * Installs the file that was dragged and dropped onto the associated page.
 * @param {function():void=} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-installDroppedFile
 */
chrome.developerPrivate.installDroppedFile = function(callback) {};

/**
 * Notifies the browser that a user began a drag in order to install an
 * extension.
 * @see https://developer.chrome.com/extensions/developerPrivate#method-notifyDragInstallInProgress
 */
chrome.developerPrivate.notifyDragInstallInProgress = function() {};

/**
 * Loads an extension / app.
 * @param {Object} directory The directory to load the extension from.
 * @param {function(string):void} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-loadDirectory
 */
chrome.developerPrivate.loadDirectory = function(directory, callback) {};

/**
 * Open Dialog to browse to an entry.
 * @param {!chrome.developerPrivate.SelectType} selectType Select a file or a
 *     folder.
 * @param {!chrome.developerPrivate.FileType} fileType Required file type. For
 *     example, pem type is for private key and load type is for an unpacked
 *     item.
 * @param {function(string):void} callback called with selected item's path.
 * @see https://developer.chrome.com/extensions/developerPrivate#method-choosePath
 */
chrome.developerPrivate.choosePath = function(selectType, fileType, callback) {};

/**
 * Pack an extension.
 * @param {string} path
 * @param {string=} privateKeyPath The path of the private key, if one is given.
 * @param {number=} flags Special flags to apply to the loading process, if any.
 * @param {function(!chrome.developerPrivate.PackDirectoryResponse):void=}
 *     callback called with the success result string.
 * @see https://developer.chrome.com/extensions/developerPrivate#method-packDirectory
 */
chrome.developerPrivate.packDirectory = function(path, privateKeyPath, flags, callback) {};

/**
 * Returns true if the profile is managed.
 * @param {function(boolean):void} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-isProfileManaged
 */
chrome.developerPrivate.isProfileManaged = function(callback) {};

/**
 * Reads and returns the contents of a file related to an extension which caused
 * an error.
 * @param {!chrome.developerPrivate.RequestFileSourceProperties} properties
 * @param {function(!chrome.developerPrivate.RequestFileSourceResponse):void}
 *     callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-requestFileSource
 */
chrome.developerPrivate.requestFileSource = function(properties, callback) {};

/**
 * Open the developer tools to focus on a particular error.
 * @param {!chrome.developerPrivate.OpenDevToolsProperties} properties
 * @param {function():void=} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-openDevTools
 */
chrome.developerPrivate.openDevTools = function(properties, callback) {};

/**
 * Delete reported extension errors.
 * @param {!chrome.developerPrivate.DeleteExtensionErrorsProperties} properties
 *     The properties specifying the errors to remove.
 * @param {function():void=} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-deleteExtensionErrors
 */
chrome.developerPrivate.deleteExtensionErrors = function(properties, callback) {};

/**
 * Repairs the extension specified.
 * @param {string} extensionId The id of the extension to repair.
 * @param {function():void=} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-repairExtension
 */
chrome.developerPrivate.repairExtension = function(extensionId, callback) {};

/**
 * Shows the options page for the extension specified.
 * @param {string} extensionId The id of the extension to show the options page
 *     for.
 * @param {function():void=} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-showOptions
 */
chrome.developerPrivate.showOptions = function(extensionId, callback) {};

/**
 * Shows the path of the extension specified.
 * @param {string} extensionId The id of the extension to show the path for.
 * @param {function():void=} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-showPath
 */
chrome.developerPrivate.showPath = function(extensionId, callback) {};

/**
 * (Un)suspends global shortcut handling.
 * @param {boolean} isSuspended Whether or not shortcut handling should be
 *     suspended.
 * @param {function():void=} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-setShortcutHandlingSuspended
 */
chrome.developerPrivate.setShortcutHandlingSuspended = function(isSuspended, callback) {};

/**
 * Updates an extension command.
 * @param {!chrome.developerPrivate.ExtensionCommandUpdate} update The
 *     parameters for updating the extension command.
 * @param {function():void=} callback
 * @see https://developer.chrome.com/extensions/developerPrivate#method-updateExtensionCommand
 */
chrome.developerPrivate.updateExtensionCommand = function(update, callback) {};

/**
 * @param {string} id
 * @param {boolean} enabled
 * @param {function():void=} callback
 * @deprecated Use management.setEnabled
 * @see https://developer.chrome.com/extensions/developerPrivate#method-enable
 */
chrome.developerPrivate.enable = function(id, enabled, callback) {};

/**
 * @param {string} extensionId
 * @param {boolean} allow
 * @param {function():void=} callback
 * @deprecated Use updateExtensionConfiguration
 * @see https://developer.chrome.com/extensions/developerPrivate#method-allowIncognito
 */
chrome.developerPrivate.allowIncognito = function(extensionId, allow, callback) {};

/**
 * @param {string} extensionId
 * @param {boolean} allow
 * @param {function():void=} callback
 * @deprecated Use updateExtensionConfiguration
 * @see https://developer.chrome.com/extensions/developerPrivate#method-allowFileAccess
 */
chrome.developerPrivate.allowFileAccess = function(extensionId, allow, callback) {};

/**
 * @param {!chrome.developerPrivate.InspectOptions} options
 * @param {function():void=} callback
 * @deprecated Use openDevTools
 * @see https://developer.chrome.com/extensions/developerPrivate#method-inspect
 */
chrome.developerPrivate.inspect = function(options, callback) {};

/**
 * Fired when a item state is changed.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/developerPrivate#event-onItemStateChanged
 */
chrome.developerPrivate.onItemStateChanged;

/**
 * Fired when the profile's state has changed.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/developerPrivate#event-onProfileStateChanged
 */
chrome.developerPrivate.onProfileStateChanged;
