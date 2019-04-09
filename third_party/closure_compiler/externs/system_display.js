// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// This file was generated by:
//   ./tools/json_schema_compiler/compiler.py.
// NOTE: The format of types has changed. 'FooType' is now
//   'chrome.system.display.FooType'.
// Please run the closure compiler before committing changes.
// See https://chromium.googlesource.com/chromium/src/+/master/docs/closure_compilation.md

// This was modified to add 'chrome.system = {};'

/** @fileoverview Externs generated from namespace: system.display */

/** @const */
chrome.system = {};

/**
 * @const
 */
chrome.system.display = {};

/**
 * @typedef {{
 *   left: number,
 *   top: number,
 *   width: number,
 *   height: number
 * }}
 * @see https://developer.chrome.com/extensions/system.display#type-Bounds
 */
chrome.system.display.Bounds;

/**
 * @typedef {{
 *   left: number,
 *   top: number,
 *   right: number,
 *   bottom: number
 * }}
 * @see https://developer.chrome.com/extensions/system.display#type-Insets
 */
chrome.system.display.Insets;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 * @see https://developer.chrome.com/extensions/system.display#type-Point
 */
chrome.system.display.Point;

/**
 * @typedef {{
 *   displayPoint: !chrome.system.display.Point,
 *   touchPoint: !chrome.system.display.Point
 * }}
 * @see https://developer.chrome.com/extensions/system.display#type-TouchCalibrationPair
 */
chrome.system.display.TouchCalibrationPair;

/**
 * @typedef {{
 *   pair1: !chrome.system.display.TouchCalibrationPair,
 *   pair2: !chrome.system.display.TouchCalibrationPair,
 *   pair3: !chrome.system.display.TouchCalibrationPair,
 *   pair4: !chrome.system.display.TouchCalibrationPair
 * }}
 * @see https://developer.chrome.com/extensions/system.display#type-TouchCalibrationPairQuad
 */
chrome.system.display.TouchCalibrationPairQuad;

/**
 * @typedef {{
 *   width: number,
 *   height: number,
 *   widthInNativePixels: number,
 *   heightInNativePixels: number,
 *   uiScale: number,
 *   deviceScaleFactor: number,
 *   refreshRate: number,
 *   isNative: boolean,
 *   isSelected: boolean
 * }}
 * @see https://developer.chrome.com/extensions/system.display#type-DisplayMode
 */
chrome.system.display.DisplayMode;

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/system.display#type-LayoutPosition
 */
chrome.system.display.LayoutPosition = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
};

/**
 * @typedef {{
 *   id: string,
 *   parentId: string,
 *   position: !chrome.system.display.LayoutPosition,
 *   offset: number
 * }}
 * @see https://developer.chrome.com/extensions/system.display#type-DisplayLayout
 */
chrome.system.display.DisplayLayout;

/**
 * @typedef {{
 *   id: string,
 *   name: string,
 *   mirroringSourceId: string,
 *   mirroringDestinationIds: !Array<string>,
 *   isPrimary: boolean,
 *   isInternal: boolean,
 *   isEnabled: boolean,
 *   isUnified: boolean,
 *   isTabletMode: (boolean|undefined),
 *   dpiX: number,
 *   dpiY: number,
 *   rotation: number,
 *   bounds: !chrome.system.display.Bounds,
 *   overscan: !chrome.system.display.Insets,
 *   workArea: !chrome.system.display.Bounds,
 *   modes: !Array<!chrome.system.display.DisplayMode>,
 *   hasTouchSupport: boolean,
 *   hasAccelerometerSupport: boolean,
 *   availableDisplayZoomFactors: !Array<number>,
 *   displayZoomFactor: number
 * }}
 * @see https://developer.chrome.com/extensions/system.display#type-DisplayUnitInfo
 */
chrome.system.display.DisplayUnitInfo;

/**
 * @typedef {{
 *   isUnified: (boolean|undefined),
 *   mirroringSourceId: (string|undefined),
 *   isPrimary: (boolean|undefined),
 *   overscan: (!chrome.system.display.Insets|undefined),
 *   rotation: (number|undefined),
 *   boundsOriginX: (number|undefined),
 *   boundsOriginY: (number|undefined),
 *   displayMode: (!chrome.system.display.DisplayMode|undefined),
 *   displayZoomFactor: (number|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/system.display#type-DisplayProperties
 */
chrome.system.display.DisplayProperties;

/**
 * @typedef {{
 *   singleUnified: (boolean|undefined)
 * }}
 * @see https://developer.chrome.com/extensions/system.display#type-GetInfoFlags
 */
chrome.system.display.GetInfoFlags;

/**
 * @enum {string}
 * @see https://developer.chrome.com/extensions/system.display#type-MirrorMode
 */
chrome.system.display.MirrorMode = {
  OFF: 'off',
  NORMAL: 'normal',
  MIXED: 'mixed',
};

/**
 * @typedef {{
 *   mode: !chrome.system.display.MirrorMode,
 *   mirroringSourceId: (string|undefined),
 *   mirroringDestinationIds: (!Array<string>|undefined),
 * }}
 * @see https://developer.chrome.com/extensions/system.display#type-MirrorModeInfo
 */
chrome.system.display.MirrorModeInfo;

/**
 * Requests the information for all attached display devices.
 * @param {!chrome.system.display.GetInfoFlags} flags Options affecting how the
 *     information is returned.
 * @param {function(!Array<!chrome.system.display.DisplayUnitInfo>):void}
 *     callback The callback to invoke with the results.
 * @see https://developer.chrome.com/extensions/system.display#method-getInfo
 */
chrome.system.display.getInfo = function(flags, callback) {};

/**
 * Requests the layout info for all displays. NOTE: This is only available to
 * Chrome OS Kiosk apps and Web UI.
 * @param {function(!Array<!chrome.system.display.DisplayLayout>):void} callback
 *     The callback to invoke with the results.
 * @see https://developer.chrome.com/extensions/system.display#method-getDisplayLayout
 */
chrome.system.display.getDisplayLayout = function(callback) {};

/**
 * Updates the properties for the display specified by |id|, according to the
 * information provided in |info|. On failure, $(ref:runtime.lastError) will be
 * set. NOTE: This is only available to Chrome OS Kiosk apps and Web UI.
 * @param {string} id The display's unique identifier.
 * @param {!chrome.system.display.DisplayProperties} info The information about
 *     display properties that should be changed.     A property will be changed
 *     only if a new value for it is specified in     |info|.
 * @param {function():void=} callback Empty function called when the function
 *     finishes. To find out     whether the function succeeded,
 *     $(ref:runtime.lastError) should be     queried.
 * @see https://developer.chrome.com/extensions/system.display#method-setDisplayProperties
 */
chrome.system.display.setDisplayProperties = function(id, info, callback) {};

/**
 * Set the layout for all displays. Any display not included will use the
 * default layout. If a layout would overlap or be otherwise invalid it will be
 * adjusted to a valid layout. After layout is resolved, an onDisplayChanged
 * event will be triggered. NOTE: This is only available to Chrome OS Kiosk apps
 * and Web UI.
 * @param {!Array<!chrome.system.display.DisplayLayout>} layouts The layout
 *     information, required for all displays except     the primary display.
 * @param {function():void=} callback Empty function called when the function
 *     finishes. To find out     whether the function succeeded,
 *     $(ref:runtime.lastError) should be     queried.
 * @see https://developer.chrome.com/extensions/system.display#method-setDisplayLayout
 */
chrome.system.display.setDisplayLayout = function(layouts, callback) {};

/**
 * Enables/disables the unified desktop feature. Note that this simply enables
 * the feature, but will not change the actual desktop mode. (That is, if the
 * desktop is in mirror mode, it will stay in mirror mode) NOTE: This is only
 * available to Chrome OS Kiosk apps and Web UI.
 * @param {boolean} enabled True if unified desktop should be enabled.
 * @see https://developer.chrome.com/extensions/system.display#method-enableUnifiedDesktop
 */
chrome.system.display.enableUnifiedDesktop = function(enabled) {};

/**
 * Starts overscan calibration for a display. This will show an overlay on the
 * screen indicating the current overscan insets. If overscan calibration for
 * display |id| is in progress this will reset calibration.
 * @param {string} id The display's unique identifier.
 * @see https://developer.chrome.com/extensions/system.display#method-overscanCalibrationStart
 */
chrome.system.display.overscanCalibrationStart = function(id) {};

/**
 * Adjusts the current overscan insets for a display. Typically this should
 * etiher move the display along an axis (e.g. left+right have the same value)
 * or scale it along an axis (e.g. top+bottom have opposite values). Each Adjust
 * call is cumulative with previous calls since Start.
 * @param {string} id The display's unique identifier.
 * @param {!chrome.system.display.Insets} delta The amount to change the
 *     overscan insets.
 * @see https://developer.chrome.com/extensions/system.display#method-overscanCalibrationAdjust
 */
chrome.system.display.overscanCalibrationAdjust = function(id, delta) {};

/**
 * Resets the overscan insets for a display to the last saved value (i.e before
 * Start was called).
 * @param {string} id The display's unique identifier.
 * @see https://developer.chrome.com/extensions/system.display#method-overscanCalibrationReset
 */
chrome.system.display.overscanCalibrationReset = function(id) {};

/**
 * Complete overscan adjustments for a display  by saving the current values and
 * hiding the overlay.
 * @param {string} id The display's unique identifier.
 * @see https://developer.chrome.com/extensions/system.display#method-overscanCalibrationComplete
 */
chrome.system.display.overscanCalibrationComplete = function(id) {};

/**
 * Displays the native touch calibration UX for the display with |id| as display
 * id. This will show an overlay on the screen with required instructions on how
 * to proceed. The callback will be invoked in case of successful calibraion
 * only. If the calibration fails, this will throw an error.
 * @param {string} id The display's unique identifier.
 * @param {function(boolean):void=} callback Optional callback to inform the
 *     caller that the touch      calibration has ended. The argument of the
 *     callback informs if the      calibration was a success or not.
 * @see https://developer.chrome.com/extensions/system.display#method-showNativeTouchCalibration
 */
chrome.system.display.showNativeTouchCalibration = function(id, callback) {};

/**
 * Starts custom touch calibration for a display. This should be called when
 * using a custom UX for collecting calibration data. If another touch
 * calibration is already in progress this will throw an error.
 * @param {string} id The display's unique identifier.
 * @see https://developer.chrome.com/extensions/system.display#method-startCustomTouchCalibration
 */
chrome.system.display.startCustomTouchCalibration = function(id) {};

/**
 * Sets the touch calibration pairs for a display. These |pairs| would be used
 * to calibrate the touch screen for display with |id| called in
 * startCustomTouchCalibration(). Always call |startCustomTouchCalibration|
 * before calling this method. If another touch calibration is already in
 * progress this will throw an error.
 * @param {!chrome.system.display.TouchCalibrationPairQuad} pairs The pairs of
 *     point used to calibrate the display.
 * @param {!chrome.system.display.Bounds} bounds Bounds of the display when the
 *     touch calibration was performed.     |bounds.left| and |bounds.top|
 *     values are ignored.
 * @see https://developer.chrome.com/extensions/system.display#method-completeCustomTouchCalibration
 */
chrome.system.display.completeCustomTouchCalibration = function(pairs, bounds) {};

/**
 * Resets the touch calibration for the display and brings it back to its
 * default state by clearing any touch calibration data associated with the
 * display.
 * @param {string} id The display's unique identifier.
 * @see https://developer.chrome.com/extensions/system.display#method-clearTouchCalibration
 */
chrome.system.display.clearTouchCalibration = function(id) {};

/**
 * Sets the display mode to the specified mirror mode. Each call resets the
 * state from previous calls. Calling setDisplayProperties() will fail for
 * the mirroring destination displays.
 * NOTE: This is only available to Chrome OS Kiosk apps and Web UI.
 * @param {!chrome.system.display.MirrorModeInfo} info The information of the
 *     mirror mode that should be applied to the display mode.
 * @param {function():void=} callback Empty function called when the function
 *     finishes. To find out     whether the function succeeded,
 *     $(ref:runtime.lastError) should be     queried.
 * @see https://developer.chrome.com/extensions/system.display#method-setMirrorMode
 */
chrome.system.display.setMirrorMode = function(info, callback) {};

/**
 * Fired when anything changes to the display configuration.
 * @type {!ChromeEvent}
 * @see https://developer.chrome.com/extensions/system.display#event-onDisplayChanged
 */
chrome.system.display.onDisplayChanged;
