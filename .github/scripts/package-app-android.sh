#!/bin/bash
mkdir android/app/build/outputs/apk/release
cd android/app/build/outputs/apk/release
mv app-release.apk "$GITHUB_WORKSPACE/"
