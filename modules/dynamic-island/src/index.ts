// Stub for EAS install. Full native module is in the original source.
export function hasNativeIsland() { return false; }
export function getPermissionStatus() { return Promise.resolve({ available: false, overlay: false, notificationAccess: false, enabled: false }); }
export function openOverlaySettings() {}
export function openNotificationSettings() {}
export function setNativeMode() {}
export function startNativeOverlay() { return Promise.resolve(false); }
export function stopNativeOverlay() {}
export function showNativePreview() {}
export type IslandMode = "classic" | "dynamic" | "short";
export type IslandPermissionStatus = { available: boolean; overlay: boolean; notificationAccess: boolean; enabled: boolean; };