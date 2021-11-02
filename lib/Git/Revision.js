/*
 * The MIT License
 *
 * Copyright (c) 2019 Volodymyr Gorlov (https://github.com/vgorloff)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

// See also: $ToolChain/Sources/swift/utils/update_checkout/update-checkout-config.json

module.exports = {
  // 1.0.74 - d2054e1c741f549caffbe1f286a9b11066b5c696 - tag:swift-5.5-RELEASE
  // 1.0.73 - 282fe25d1757ff9974ade028d92111acdae6876a - tag:swift-5.4.3-RELEASE
  // 1.0.71 - b666aa622e73a4f6d826a10d7ba8e5db302d1ec1 - tag:swift-5.4.2-RELEASE @ Thu Jun 24 23:34:53 2021 -0700
  // 1.0.70 - 5cfadf128e58cd0bff99d09b17eb05fa39311e95 - tag:swift-5.4.1-RELEASE @ Mon May 17 09:16:50 2021 -0700
  // 1.0.68 - 3e4fab9bb6a56fc30d43e72eaff5b096cf160c55 - tag:swift-5.4-RELEASE @ Apr 24 22:11:07 2021 -0700
  // 1.0.66 - a51d2fefc70a41cf765853739c5037c182bdaad9 - tag:swift-5.3.3-RELEASE @ 25. January 2021 at 10:31:21 CET
  // 1.0.62 - 253ea65ba72933c92850803f0c26aa768757b3ab - tag:swift-5.3.1-RELEASE @ 12. November 2020 at 09:17:14 CET
  // 1.0.56 - e7c2f897ad2766b1664b56f3a77d939b844dd135 - tag:swift-5.3-RELEASE @ 11. September 2020 at 03:51:47 CEST
  // 1.0.54 - 443e9a41d1a7c1fcae280490144fcbf8461d3499 - tag:swift-5.2-RELEASE @ 24. March 2020 at 19:15:32 CET
  swift: "d2054e1c741f549caffbe1f286a9b11066b5c696",

  // 1.0.74 - fbf00809f11885f819457563beb069a2298b368f - tag:swift-5.5-RELEASE
  // 1.0.73 - 8ee67e3af469eb38c9616f971abd5a47fe8d6405 - tag:swift-5.4.3-RELEASE
  // 1.0.71 - 8ee67e3af469eb38c9616f971abd5a47fe8d6405 - tag:swift-5.4.2-RELEASE @ Thu May 27 16:18:16 2021 -0700
  // 1.0.70 - cf0195a2f45d22e5e4487152f78fc077e5100dae - tag:swift-5.4.1-RELEASE @ Thu May 6 14:48:03 2021 -0700
  // 1.0.67 - 439a44695a0534a26557cc34b4fe650dccb46aed - tag:swift-5.4-RELEASE @ 13. April 2021 at 19:37:22 CEST
  // 1.0.62 - 3093af41dd65ad466dcd5603e9289244edfee4f5 - tag:swift-5.3.1-RELEASE @ 21. October 2020 at 01:10:23 CEST
  // 1.0.56 - c39a810ec308dd4a8d93c5011fb73a5c987e8680 - tag:swift-5.3-RELEASE @ 10. September 2020 at 08:07:01 CEST
  llvm: "fbf00809f11885f819457563beb069a2298b368f",

  // 1.0.74 - 9c8096a23f44794bde297452d87c455fc4f76d42 - tag:swift-5.5-RELEASE
  // 1.0.73 - 9c8096a23f44794bde297452d87c455fc4f76d42 - tag:swift-5.4.3-RELEASE
  // 1.0.71 - 9c8096a23f44794bde297452d87c455fc4f76d42 - tag:swift-5.4.2-RELEASE @ Mon May 4 10:27:35 2020 -0700
  // 1.0.70 - 9c8096a23f44794bde297452d87c455fc4f76d42 - tag:swift-5.4.1-RELEASE @ Mon May 4 10:27:35 2020 -0700
  // 1.0.68 - 9c8096a23f44794bde297452d87c455fc4f76d42 - tag:swift-5.4-RELEASE @ 4. May 2020 at 19:27:35 CEST
  // 1.0.62 - 1168665f6b36be747ffe6b7b90bc54cfc17f42b7 - tag:swift-5.3.1-RELEASE @ 27. January 2020 at 22:00:52 CET
  // 1.0.56 - 1168665f6b36be747ffe6b7b90bc54cfc17f42b7 - tag:swift-5.3-RELEASE @ 27. January 2020 at 22:00:52 CET
  // 1.0.54 - bfa95d55b535fa178f75484b5e8f82ae3d8517af - tag:swift-5.2-RELEASE @ 10. October 2019 at 06:08:52 CEST
  cmark: "9c8096a23f44794bde297452d87c455fc4f76d42",

  // 1.0.74 - 519aa4a70db7d49e894ed83ea61d2a4d24c098f0 - tag:swift-5.5-RELEASE
  // 1.0.73 - 374cdb42d7b146837de70489a04c5df956092685 - tag:swift-5.4.3-RELEASE
  // 1.0.71 - 374cdb42d7b146837de70489a04c5df956092685 - tag:swift-5.4.2-RELEASE @ Fri May 14 13:05:34 2021 -0700
  // 1.0.70 - 374cdb42d7b146837de70489a04c5df956092685 - tag:swift-5.4.1-RELEASE @ Fri May 14 13:05:34 2021 -0700
  // 1.0.68 - 7cd58d6cc1945b14db1346792b39af609ce17fe9 - tag:swift-5.4-RELEASE @ Apr 24 21:40:37 2021 -0700
  // 1.0.66 - 06d96d033ffdcbf97b741ed79d62127c4fe419b3 - tag:swift-5.3.3-RELEASE @ 6. January 2021 at 19:38:25 CET
  // 1.0.62 - 2bec212061295719620c7f4cf2d2e257a95aab39 - tag:swift-5.3.1-RELEASE @ 21. September 2020 at 23:23:26 CEST
  // 1.0.56 - 91bdc78dbd4595e69a45654d1e80eb334e1977c4 - tag:swift-5.3-RELEASE @ 10. September 2020 at 19:12:36 CEST
  spm: "519aa4a70db7d49e894ed83ea61d2a4d24c098f0",

  // 1.0.74 - b5d9b4a9995c05688ae5f3b87a0d7ac0dc45c6c6 - tag:swift-5.5-RELEASE
  // 1.0.73 - eb56a00ed9dfd62c2ce4ec86183ff0bc0afda997 - tag:swift-5.4.3-RELEASE
  // 1.0.71 - eb56a00ed9dfd62c2ce4ec86183ff0bc0afda997 - tag:swift-5.4.2-RELEASE @ Mon Dec 14 14:36:23 2020 -0800
  // 1.0.68 - eb56a00ed9dfd62c2ce4ec86183ff0bc0afda997 - tag:swift-5.4-RELEASE @ 14. December 2020 at 23:36:23 CET
  // 1.0.62 - ef2e9ba657fd0a4e6e25fff05051b328bf27aeaf - tag:swift-5.3.1-RELEASE @ 10. September 2020 at 18:55:53 CEST
  // 1.0.57 - ef2e9ba657fd0a4e6e25fff05051b328bf27aeaf - tag:swift-5.3-RELEASE @ 10. September 2020 at 18:55:53 CEST
  llb: "b5d9b4a9995c05688ae5f3b87a0d7ac0dc45c6c6",

  // 1.0.74 - 1b21e2ce36891ed4f458421a83b5d9e886acd4cd - tag:swift-5.5-RELEASE
  // 1.0.73 - d7bd4375c26e7dab2c17791cfa06f9b981d02339 - tag:swift-5.4.3-RELEASE
  // 1.0.71 - e95add83fc1042a0a0e260d342f9fc5608df9a84 - tag:swift-5.4.2-RELEASE @ Jan 20 21:58:15 2021 -0800
  // 1.0.68 - e95add83fc1042a0a0e260d342f9fc5608df9a84 - tag:swift-5.4-RELEASE @ Jan 20 21:58:15 2021 -0800
  // 1.0.57 - 8c3dfd42a36d0416345143eae4567d9314c12246 - branch:origin/release/5.3 @ 16. September 2020 at 21:54:27 CEST
  tsc: "1b21e2ce36891ed4f458421a83b5d9e886acd4cd",

  // 1.0.71 - 986d191f94cec88f6350056da59c2e59e83d1229 - tag:0.4.3
  // 1.0.70 - 986d191f94cec88f6350056da59c2e59e83d1229 - tag:0.4.3
  // 1.0.69 - 831ed5e860a70e745bc1337830af4786b2576881 - tag:0.4.1
  sap: "986d191f94cec88f6350056da59c2e59e83d1229",

  // 1.0.71 - 9ff1cc9327586db4e0c8f46f064b6a82ec1566fa - tag:4.0.6
  // 1.0.70 - 9ff1cc9327586db4e0c8f46f064b6a82ec1566fa - tag:4.0.6
  // 1.0.69 - 81a65c4069c28011ee432f2858ba0de49b086677 - tag:3.0.1
  yams: "9ff1cc9327586db4e0c8f46f064b6a82ec1566fa",

  // 1.0.74 - 12cd468c8182b4e1038268c664354005803fcdef - tag:swift-5.5-RELEASE
  // 1.0.73 - 93e8b927225a62b963ebe13ab11e04192fa8a67b - tag:swift-5.4.3-RELEASE
  // 1.0.71 - 93e8b927225a62b963ebe13ab11e04192fa8a67b - tag:swift-5.4.2-RELEASE @ Sat Apr 24 21:40:11 2021 -0700
  // 1.0.69 - 93e8b927225a62b963ebe13ab11e04192fa8a67b - tag:swift-5.4-RELEASE
  sd: "12cd468c8182b4e1038268c664354005803fcdef",
};
