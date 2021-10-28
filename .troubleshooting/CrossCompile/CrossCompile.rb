#!/usr/bin/env ruby

require_relative "../Troubleshooter.rb"

class Builder < Troubleshooter
   def initialize()
      super(File.expand_path(File.dirname(__FILE__)))
      @cmd = <<EOM
      /usr/bin/swiftc -frontend -c
      -primary-file #{@sourceRoot}/Hello.swift
      -color-diagnostics -disable-objc-interop
      -Xcc -v
      -module-name hello
      -o #{@build}/Hello.o

      -target armv7-none-linux-androideabi
      -resource-dir #{@installs}/darwin-armv7a/swift/usr/local/lib/swift
      # -Xclang-linker -fuse-ld=gold
      # -tools-directory #{@ndk}/toolchains/llvm/prebuilt/darwin-x86_64/bin

      # -target arm64-apple-ios12.0-simulator
      # -sdk /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS12.2.sdk

      # -Xcc -I#{@ndk}/toolchains/llvm/prebuilt/darwin-x86_64/sysroot/usr/include
      # -Xcc -I#{@ndk}/toolchains/llvm/prebuilt/darwin-x86_64/sysroot/usr/include/arm-linux-androideabi
      # -L /Users/vova/Repositories/GitHub/Projects/swift-everywhere-toolchain/ToolChain/swift-android-toolchain/lib/swift/android/armv7
EOM

      @cmd = <<EOM
      /usr/bin/swiftc
      -v
      -Xcc -v
      -o #{@build}/Hello

      -target armv7-none-linux-androideabi
      -resource-dir #{@installs}/darwin-armv7a/swift/usr/local/lib/swift
      -sdk #{@ndk}/sysroot

      -use-ld=gold
      -tools-directory #{@ndk}/toolchains/llvm/prebuilt/darwin-x86_64/bin

      #{@sourceRoot}/Hello.swift

EOM
   end

   def build()
      super()
      # execute "nm -a #{@build}/Hello.o"
   end
end

Builder.new().build()


      # mainFile = "#{@builds}/main.o"

      # # Swift
      # cmd = ["cd #{@builds} &&"]
      # cmd << "#{@swift.installs}/bin/swift -frontend -c"
      # cmd << "-primary-file #{@sources}/hello.swift"
      # cmd << "-target armv7-none-linux-android -disable-objc-interop"
      # cmd << "-color-diagnostics -module-name hello -o #{mainFile}"
      # cmd << "-Xcc -I#{@ndk.toolchain}/sysroot/usr/include -Xcc -I#{@ndk.toolchain}/sysroot/usr/include/arm-linux-androideabi"
      # cmd << "-Xcc -DDEPLOYMENT_TARGET_ANDROID -Xcc -DDEPLOYMENT_TARGET_LINUX -Xcc -DDEPLOYMENT_RUNTIME_SWIFT"
      # execute cmd.join(" ")
      # execute "file #{mainFile}"

      # # Clang
      # cmd = ["cd #{@builds} &&"]
      # cmd << "#{@ndk.toolchain}/bin/armv7a-linux-androideabi#{@ndk.api}-clang -fuse-ld=gold -pie"
      # cmd << "-v"
      # cmd << "-B #{@ndk.toolchain}/bin"
      # cmd << "#{@swift.installs}/lib/swift/android/armv7/swiftrt.o"
      # cmd << mainFile
      # # cmd << "-Xlinker --verbose"
      # cmd << "-lswiftCore"
      # cmd << "-lswiftGlibc"
      # cmd << "-lswiftSwiftOnoneSupport"
      # cmd << "-lBlocksRuntime"
      # cmd << "-lc++_shared"
      # cmd << "-L #{@ndk.toolchain}/lib/gcc/arm-linux-androideabi/4.9.x" # Link the Android NDK's libc++ and libgcc.
      # cmd << "-L #{@swift.installs}/lib/swift/android/armv7"

      # cmd << "-o #{@binary}"
      # execute cmd.join(" ")
      # execute "file #{@binary}"
