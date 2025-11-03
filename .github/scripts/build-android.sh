#!/bin/bash
set -e

echo "🛠️ Building Android APK (Release)..."

cd 

# Ensure Gradle wrapper is executable
chmod +x ./gradlew

./gradlew clean assembleRelease

echo "✅ APK build complete."
