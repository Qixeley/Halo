# Orbit for Android

Orbit is an independent Android notification-style utility inspired by the user's reference clip. It includes Classic, Dynamic and Short presentation modes, a local editable preview, and an Android-native notification-listener/overlay implementation for a native build. It is not affiliated with Apple, and exact iOS layout parity cannot be guaranteed because Samsung cutout geometry, Android version and system window policies vary.

## Build and install

This project uses the managed Expo mobile starter and its local module at `modules/dynamic-island`. The Manus mobile workflow creates an APK from an accepted project checkpoint through the project's Dashboard Android build action. Select the Android APK artifact type there. An APK is not part of this source tree until that build completes and returns the actual artifact. The Sandbox has no Android SDK/Gradle toolchain; `expo prebuild --platform android --no-install` was used only to validate native project configuration and did not compile or package an APK.

Expo Go/Web preview can demonstrate the app screen and island preview, but the local Kotlin module is app-specific and cannot provide a cross-app overlay in Expo Go.

## First-run Android setup

1. Open Orbit and select Classic, Dynamic or Short.
2. Tap **Allow** beside **Notification access** and enable Orbit in Android's Notification access settings. This grants access to notification title/text so Orbit can display them.
3. Tap **Allow** beside **Display over other apps** and allow Orbit in Android settings.
4. Return to Orbit and tap **Enable notification overlay**. Android keeps a low-priority “Orbit is active” notification while it is enabled. Use **Stop overlay** to pause it and remove that notification.
5. Use the editable sender/message fields and **Play preview** to try a notification. The built-in examples include the reference's compact “Bro” / “Hi” treatment.
6. With the overlay enabled, connect or disconnect a charger to see a brief island alert with battery percentage and the detected USB, AC or wireless power source. The **Charging** sample chip previews this without connecting a charger.

Both system permissions are optional; the in-app preview remains available without them. Battery state uses Android's local sticky battery broadcast and asks for no extra runtime permission. Android Settings remains the system of record for permission status. Samsung battery/background restrictions or OS policies can still affect when notification listeners are run; validate on the target device after building.

## Implementation notes

`app/(tabs)/index.tsx` is the setup and preview screen. `components/island-preview.tsx` animates the preview with Reanimated. `lib/dynamic-island.ts` exposes a defensive JS bridge. The local Expo module supplies `DynamicIslandModule`, `OrbitNotificationListenerService`, and `OrbitOverlayService`; it stores the selected mode locally and uses Android display-cutout bounds when available. App bundle identifiers and Expo scheme from the generated starter are preserved.