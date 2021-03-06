/*
	Syscall map for firmware 3.20
*/

function syscallOffsets()
{
	var tmp = { 
		SceJpegArm:[ 
		],
		SceNpMessageDlgImplPlugin:[ 
		],
		SceLibft2:[ 
			0xb2d4 ,
			0xb2e4 
		],
		ScePhotoReviewDialogPlugin:[ 
		],
		SceDbrecoveryUtility:[ 
		],
		SceDrmPsmKdc:[ 
			0x4efc ,
			0x4f0c ,
			0x4f1c ,
			//0x4f2c //Already in other module.. ,
			//0x4f3c //Already in other module.. ,
			0x4f4c ,
			0x4f5c ,
			0x4f6c ,
			0x4fdc ,
			0x4fec ,
			0x4ffc ,
			0x500c ,
			0x501c ,
			0x502c ,
			0x503c 
		],
		SceLibHttp:[ 
			0x16e38 ,
			0x16e48 ,
			0x16e58 ,
			0x17068 ,
			0x17078 ,
			0x17088 ,
			0x17098 ,
			0x170a8 ,
			0x170b8 ,
			0x170d8 ,
			0x170e8 ,
			0x170f8 ,
			0x17108 
		],
		ScebXCe:[ 
			//0x9340 //Already in other module.. 
			//0x9350 //Already in other module.. 
			//0x9360 //Already in other module.. 
		],
		SceSqliteVsh:[ 
			0x47d10 ,
			0x47d20 ,
			//0x47d30 //Already in other module.. ,
			0x47d40 ,
			0x47d50 ,
			0x47d60 ,
			//0x47d70 //Already in other module.. ,
			0x47d80 ,
			0x47d90 ,
			//0x47da0 //Already in other module.. ,
			0x47db0 ,
			0x47dc0 ,
			0x47dd0 ,
			0x47de0 ,
			//0x47df0 //Already in other module.. ,
			0x47e00 
		],
		SceNpActivityNet:[ 
		],
		SceNpMessageDialogPlugin:[ 
		],
		SceWebKit:[ 
		],
		ScePhotoImportDialogPlugin:[ 
		],
		ScePaf:[ 
			0x2675f8 ,
			//0x267608 //Already in other module.. ,
			0x267618 ,
			0x267628 ,
			0x267638 ,
			//0x267648 //Already in other module.. ,
			0x267658 ,
			0x267668 ,
			0x267678 ,
			0x267688 ,
			0x267698 ,
			0x2676a8 ,
			0x2676b8 ,
			0x267878 ,
			0x267888 ,
			0x267898 ,
			0x2678a8 ,
			0x2678b8 ,
			0x2678c8 ,
			0x2678d8 ,
			0x2678e8 ,
			0x2678f8 ,
			0x267908 ,
			0x267918 ,
			0x267928 ,
			0x2679a8 ,
			0x2679b8 ,
			0x2679c8 ,
			0x267be8 ,
			0x267bf8 ,
			0x267c08 ,
			0x267c18 ,
			0x267c28 ,
			0x267c38 ,
			0x267c48 ,
			0x267c58 ,
			0x267c68 ,
			0x267c78 ,
			0x267c88 ,
			0x267c98 ,
			0x267ca8 ,
			0x267cb8 ,
			0x267cc8 ,
			0x267cd8 ,
			0x267ce8 ,
			0x267cf8 ,
			0x268348 ,
			0x268358 ,
			0x268368 ,
			0x268378 ,
			0x268388 ,
			0x268398 ,
			//0x2683a8 //Already in other module.. ,
			//0x268718 //Already in other module.. ,
			0x268728 ,
			//0x268738 //Already in other module.. ,
			//0x268748 //Already in other module.. ,
			0x268758 ,
			0x268768 ,
			0x268778 ,
			0x268788 ,
			//0x268798 //Already in other module.. ,
			0x2687a8 ,
			0x2687b8 ,
			0x2687c8 ,
			//0x2687d8 //Already in other module.. ,
			//0x2687e8 //Already in other module.. ,
			0x2687f8 ,
			0x268808 ,
			0x268818 ,
			0x268828 ,
			0x268838 ,
			//0x268848 //Already in other module.. ,
			0x268858 ,
			//0x268868 //Already in other module.. ,
			//0x268878 //Already in other module.. ,
			0x268888 ,
			//0x268898 //Already in other module.. ,
			//0x2688a8 //Already in other module.. ,
			//0x2688b8 //Already in other module.. ,
			0x2688c8 ,
			0x2688d8 ,
			0x2688e8 ,
			//0x2688f8 //Already in other module.. ,
			0x268908 ,
			//0x268918 //Already in other module.. ,
			//0x268928 //Already in other module.. ,
			0x268938 ,
			0x268948 ,
			0x268958 ,
			0x268998 ,
			0x2689a8 ,
			0x2689c8 ,
			0x2689d8 ,
			0x2689e8 ,
			0x2689f8 ,
			0x268a08 ,
			0x268a18 
		],
		SceVideoExport:[ 
			//0x1c98 //Already in other module.. 
			//0x1ca8 //Already in other module.. 
			//0x1cb8 //Already in other module.. 
			//0x1cc8 //Already in other module.. 
			//0x1cd8 //Already in other module.. 
			//0x1ce8 //Already in other module.. 
			//0x1cf8 //Already in other module.. 
			//0x1d08 //Already in other module.. 
			//0x1d18 //Already in other module.. 
			//0x1d28 //Already in other module.. 
			//0x1d38 //Already in other module.. 
			//0x1d68 //Already in other module.. 
		],
		SceJpegEncArm:[ 
		],
		SceFriendListDialogPlugin:[ 
		],
		SceUlt:[ 
			//0xf7e8 //Already in other module.. 
			0xf7f8 ,
			0xf808 ,
			0xf818 
		],
		SceNpFriendPrivacyLevel:[ 
			//0x525c //Already in other module.. 
			//0x526c //Already in other module.. 
			//0x527c //Already in other module.. 
		],
		SceWebFiltering:[ 
			//0x3b84 //Already in other module.. 
			0x3b94 ,
			0x3ba4 ,
			0x3bb4 
		],
		SceNet:[ 
			0x9a74 ,
			0x9a84 ,
			0x9a94 ,
			0x9aa4 ,
			0x9ab4 ,
			0x9ac4 ,
			0x9ad4 ,
			0x9ae4 ,
			0x9af4 ,
			0x9b04 ,
			0x9b14 ,
			0x9b24 ,
			0x9b34 ,
			0x9b44 ,
			0x9b54 ,
			0x9b64 ,
			0x9b74 ,
			0x9b84 ,
			0x9b94 ,
			0x9ba4 ,
			0x9bb4 ,
			0x9bc4 ,
			0x9bd4 ,
			0x9be4 ,
			0x9bf4 ,
			0x9c04 ,
			0x9c14 ,
			0x9c24 ,
			0x9c34 ,
			0x9c44 ,
			0x9c54 ,
			0x9c64 ,
			0x9c74 ,
			0x9c84 ,
			//0x9db4 //Already in other module.. ,
			//0x9dc4 //Already in other module.. ,
			//0x9dd4 //Already in other module.. ,
			0x9de4 ,
			//0x9df4 //Already in other module.. ,
			//0x9e04 //Already in other module.. ,
			//0x9e14 //Already in other module.. ,
			//0x9e24 //Already in other module.. 
		],
		SceLibFios2:[ 
			//0x22204 //Already in other module.. 
			//0x22214 //Already in other module.. 
			//0x22224 //Already in other module.. 
			//0x22234 //Already in other module.. 
			//0x22244 //Already in other module.. 
			0x22254 ,
			//0x22264 //Already in other module.. ,
			//0x22274 //Already in other module.. ,
			//0x22284 //Already in other module.. ,
			0x22294 ,
			0x222a4 ,
			//0x222b4 //Already in other module.. ,
			//0x222c4 //Already in other module.. ,
			//0x222d4 //Already in other module.. 
		],
		SceNpKdc:[ 
			0x1c04 ,
			0x1c14 ,
			0x1c24 ,
			0x1c34 ,
			0x1c44 ,
			0x1c54 ,
			0x1c64 ,
			0x1c74 
		],
		SceGxm:[ 
			0x550 ,
			//0x560 //Already in other module.. ,
			//0x570 //Already in other module.. ,
			//0x580 //Already in other module.. ,
			0x590 ,
			//0x5a0 //Already in other module.. ,
			//0x5b0 //Already in other module.. ,
			//0x5c0 //Already in other module.. ,
			0x5e0 ,
			0x5f0 ,
			0x600 
		],
		SceDbutil:[ 
			//0xf3b8 //Already in other module.. 
		],
		SceFiber:[ 
			0x12fc ,
			0x130c 
		],
		SceActivityDb:[ 
			//0x1ef48 //Already in other module.. 
			//0x1ef58 //Already in other module.. 
			0x1f888 
		],
		SceStoreCheckoutPlugin:[ 
		],
		SceCommonGuiDialog:[ 
		],
		SceLibKernel:[ 
			0x54bc ,
			//0x54cc //Already in other module.. ,
			//0x54dc //Already in other module.. ,
			//0x54ec //Already in other module.. ,
			0x54fc ,
			0x550c ,
			0x551c ,
			0x552c ,
			0x553c ,
			0x554c ,
			0x555c ,
			0x556c ,
			0x557c ,
			0x558c ,
			0x559c ,
			0x55ac ,
			//0x55bc //Already in other module.. ,
			0x55cc ,
			//0x55dc //Already in other module.. ,
			0x55ec ,
			0x55fc ,
			0x560c ,
			0x561c ,
			0x562c ,
			0x563c ,
			0x564c ,
			0x565c ,
			0x566c ,
			0x567c ,
			0x568c ,
			0x569c ,
			0x56ac ,
			0x56bc ,
			0x56cc ,
			0x56dc ,
			0x56ec ,
			0x56fc ,
			0x570c ,
			0x571c ,
			0x572c ,
			0x573c ,
			0x574c ,
			0x575c ,
			0x576c ,
			0x577c ,
			0x578c ,
			0x579c ,
			0x57ac ,
			0x57bc ,
			0x57cc ,
			0x57dc ,
			0x57ec ,
			0x57fc ,
			0x580c ,
			0x581c ,
			0x582c ,
			0x583c ,
			0x584c ,
			0x585c ,
			0x586c ,
			0x587c ,
			0x588c ,
			0x589c ,
			0x58ac ,
			0x58bc ,
			0x58cc ,
			0x58dc ,
			0x58ec ,
			//0x58fc //Already in other module.. ,
			0x590c ,
			0x591c ,
			0x592c ,
			0x593c ,
			0x594c ,
			0x595c ,
			0x596c ,
			0x597c ,
			0x598c ,
			0x599c ,
			0x59ac ,
			0x59bc ,
			0x59cc ,
			0x59dc ,
			0x59ec ,
			0x59fc ,
			0x5a0c ,
			0x5a1c ,
			0x5a2c ,
			0x5a3c ,
			0x5a4c ,
			0x5a5c ,
			0x5a6c ,
			0x5a7c ,
			0x5a8c ,
			0x5a9c ,
			0x5aac ,
			0x5abc ,
			0x5acc ,
			0x5adc ,
			0x5aec ,
			0x5afc ,
			0x5b0c ,
			//0x5b1c //Already in other module.. ,
			0x5b2c ,
			0x5b3c ,
			0x5b4c ,
			0x5b5c ,
			0x5b6c ,
			0x5b7c ,
			0x5b8c ,
			0x5b9c ,
			0x5bac ,
			0x5bbc ,
			0x5bcc ,
			0x5bdc ,
			0x5bec ,
			0x5bfc ,
			0x5c0c ,
			0x5c1c ,
			0x5c2c ,
			0x5c3c ,
			//0x5c4c //Already in other module.. ,
			0x5c5c ,
			0x5c6c ,
			0x5c7c ,
			0x5c8c ,
			0x5c9c ,
			0x5cac ,
			//0x5cbc //Already in other module.. ,
			0x5ccc ,
			0x5cdc ,
			0x5cec ,
			0x5cfc ,
			0x5d0c ,
			0x5d1c ,
			0x5d2c ,
			0x5d3c ,
			0x5d4c ,
			0x5d5c ,
			0x5d6c ,
			0x5d7c ,
			0x5d8c ,
			0x5d9c ,
			0x5dac ,
			0x5dbc ,
			0x5dcc ,
			0x5ddc ,
			//0x5dec //Already in other module.. ,
			0x5dfc ,
			0x5e0c ,
			0x5e1c ,
			0x5e2c ,
			0x5e3c ,
			0x5e4c ,
			0x5e5c ,
			0x5e6c ,
			//0x5e7c //Already in other module.. ,
			0x5e8c ,
			0x5e9c ,
			0x5eac ,
			0x5ebc ,
			0x5ecc ,
			0x5edc ,
			0x5eec ,
			0x5efc ,
			0x5f0c ,
			0x5f1c ,
			0x5f2c ,
			0x5f3c ,
			0x5f4c ,
			0x5f5c ,
			0x5f6c ,
			0x5f7c ,
			0x5f8c ,
			0x5f9c ,
			0x5fac ,
			0x5fbc ,
			0x5fcc ,
			0x5fdc ,
			0x5fec ,
			0x5ffc ,
			0x600c ,
			0x601c ,
			0x602c ,
			0x603c ,
			0x604c ,
			0x605c ,
			0x606c ,
			0x607c ,
			0x608c ,
			0x609c ,
			0x60ac ,
			0x60bc ,
			0x60cc ,
			0x60dc 
		],
		SceWebKitProcess:[ 
			//0x12518 //Already in other module.. 
			//0x12528 //Already in other module.. 
			//0x12538 //Already in other module.. 
			//0x12548 //Already in other module.. 
			//0x12558 //Already in other module.. 
			//0x12568 //Already in other module.. 
			0x12578 ,
			0x12588 ,
			//0x12598 //Already in other module.. ,
			//0x125a8 //Already in other module.. ,
			0x125b8 ,
			0x125c8 ,
			//0x125d8 //Already in other module.. ,
			//0x125e8 //Already in other module.. ,
			0x125f8 ,
			0x12638 ,
			0x12688 ,
			0x12698 ,
			//0x126a8 //Already in other module.. ,
			//0x126b8 //Already in other module.. ,
			//0x12bc8 //Already in other module.. ,
			//0x12bd8 //Already in other module.. ,
			//0x12be8 //Already in other module.. ,
			//0x12bf8 //Already in other module.. ,
			0x12c08 ,
			//0x12c18 //Already in other module.. ,
			//0x12c28 //Already in other module.. ,
			0x12c38 
		],
		SceIniFileProcessor:[ 
			//0x34e8 //Already in other module.. 
			//0x34f8 //Already in other module.. 
			//0x3508 //Already in other module.. 
			//0x3518 //Already in other module.. 
			//0x3528 //Already in other module.. 
			//0x3538 //Already in other module.. 
			//0x3548 //Already in other module.. 
		],
		SceLibPvf:[ 
			//0x2224 //Already in other module.. 
			//0x2234 //Already in other module.. 
			//0x2244 //Already in other module.. 
			//0x2254 //Already in other module.. 
			//0x2264 //Already in other module.. 
			//0x2274 //Already in other module.. 
		],
		SceGpuEs4User:[ 
			0x17bc ,
			0x17cc ,
			0x17dc ,
			//0x188c //Already in other module.. ,
			//0x189c //Already in other module.. ,
			//0x18ac //Already in other module.. ,
			//0x18bc //Already in other module.. 
		],
		SceLibDbg:[ 
		],
		SceNpCommerce2:[ 
		],
		SceNpMessageContactsPlugin:[ 
		],
		SceNetCheckDialogPlugin:[ 
		],
		ScePromoterUtil:[ 
			//0x145c //Already in other module.. 
		],
		SceDriverUser:[ 
			//0x1214 //Already in other module.. 
			//0x1224 //Already in other module.. 
			//0x1234 //Already in other module.. 
			//0x1244 //Already in other module.. 
			0x1254 ,
			0x1264 ,
			0x1274 ,
			0x1284 ,
			0x1294 ,
			0x12a4 ,
			0x12b4 ,
			0x12c4 ,
			0x12d4 ,
			0x12e4 ,
			0x12f4 ,
			0x1304 ,
			0x1314 ,
			0x1324 ,
			0x1334 ,
			0x1344 ,
			0x1354 ,
			0x1364 ,
			0x1374 ,
			0x1384 ,
			0x1394 ,
			0x13a4 ,
			0x13b4 ,
			0x13c4 ,
			0x13d4 ,
			0x13e4 ,
			0x13f4 ,
			0x1404 ,
			0x1414 ,
			0x1424 ,
			0x1434 ,
			0x1444 ,
			0x1454 ,
			0x1464 ,
			0x1474 ,
			0x1484 ,
			0x1494 ,
			0x14a4 ,
			0x14b4 ,
			0x14c4 ,
			0x14d4 ,
			0x14e4 ,
			0x14f4 ,
			0x1504 ,
			0x1514 ,
			0x1524 ,
			0x1534 ,
			0x1544 ,
			0x1554 ,
			0x1564 ,
			0x1574 ,
			0x1584 ,
			0x1594 ,
			0x15a4 ,
			0x15b4 ,
			0x15c4 ,
			0x15d4 ,
			0x15e4 ,
			0x15f4 ,
			0x1604 ,
			0x1614 ,
			0x1624 ,
			0x1634 ,
			0x1644 ,
			0x1654 ,
			0x1664 ,
			0x1674 ,
			0x1684 ,
			0x1694 ,
			0x16a4 ,
			0x16b4 ,
			0x16c4 ,
			0x16d4 ,
			0x16e4 ,
			0x16f4 ,
			0x1704 ,
			0x1714 ,
			0x1724 ,
			0x1734 ,
			0x1744 ,
			0x1754 ,
			0x1764 ,
			0x1774 ,
			0x1784 ,
			0x1794 ,
			0x17a4 ,
			0x17b4 ,
			0x17c4 ,
			0x17d4 ,
			0x17e4 ,
			0x17f4 ,
			0x1804 ,
			0x1814 ,
			0x1824 ,
			0x1834 ,
			0x1844 ,
			0x1854 ,
			0x1864 ,
			0x1874 ,
			0x1884 ,
			0x1894 ,
			0x18a4 ,
			0x18b4 ,
			0x18c4 ,
			0x18d4 ,
			0x18e4 ,
			0x18f4 ,
			0x1904 ,
			0x1914 ,
			0x1924 ,
			0x1934 ,
			0x1944 ,
			0x1954 ,
			0x1964 ,
			0x1974 ,
			0x1984 ,
			0x1994 ,
			0x19a4 ,
			0x19b4 ,
			0x19c4 ,
			0x19d4 ,
			0x19e4 ,
			0x19f4 ,
			0x1a04 ,
			0x1a14 ,
			0x1a24 ,
			0x1a34 ,
			0x1a44 ,
			0x1a54 ,
			0x1a64 ,
			0x1a74 ,
			0x1a84 ,
			0x1a94 ,
			0x1aa4 ,
			0x1ab4 ,
			0x1ac4 ,
			0x1ad4 ,
			0x1ae4 ,
			0x1af4 ,
			0x1b04 ,
			0x1b14 ,
			0x1b24 ,
			0x1b34 ,
			0x1b44 ,
			0x1b54 ,
			0x1b64 ,
			0x1b74 ,
			0x1b84 ,
			0x1b94 ,
			0x1ba4 ,
			0x1bb4 ,
			0x1bc4 ,
			0x1bd4 ,
			0x1be4 ,
			0x1bf4 ,
			0x1c04 ,
			0x1c14 ,
			0x1c24 ,
			0x1c34 ,
			0x1c44 ,
			0x1c54 ,
			0x1c64 ,
			0x1c74 ,
			0x1c84 ,
			0x1c94 ,
			0x1ca4 ,
			0x1cb4 ,
			0x1cc4 ,
			0x1cd4 ,
			0x1ce4 ,
			0x1cf4 ,
			0x1d04 ,
			0x1d14 ,
			0x1d24 ,
			0x1d34 ,
			0x1d44 ,
			0x1d54 ,
			0x1d64 ,
			0x1d74 ,
			0x1d84 ,
			0x1d94 ,
			0x1da4 ,
			0x1db4 ,
			0x1dc4 ,
			0x1dd4 ,
			0x1de4 ,
			0x1df4 
		],
		SceMsgDialogPlugin:[ 
		],
		SceTrophySetupDialogPlugin:[ 
		],
		SceAppUtil:[ 
			0x7660 ,
			//0x7670 //Already in other module.. ,
			0x7680 ,
			0x7960 ,
			0x7970 ,
			0x7980 ,
			0x7990 ,
			0x79a0 ,
			//0x7b40 //Already in other module.. ,
			//0x7b50 //Already in other module.. ,
			//0x7b60 //Already in other module.. ,
			//0x7b70 //Already in other module.. ,
			//0x7b80 //Already in other module.. ,
			//0x7b90 //Already in other module.. ,
			//0x7ba0 //Already in other module.. ,
			//0x7bb0 //Already in other module.. ,
			//0x7bc0 //Already in other module.. 
		],
		SceLibNetCtl:[ 
			//0x95b4 //Already in other module.. 
			//0x95c4 //Already in other module.. 
			0x95d4 ,
			0x95e4 ,
			//0x95f4 //Already in other module.. ,
			//0x9604 //Already in other module.. ,
			//0x9614 //Already in other module.. ,
			//0x9624 //Already in other module.. ,
			//0x9634 //Already in other module.. ,
			//0x9644 //Already in other module.. ,
			//0x9664 //Already in other module.. ,
			//0x9674 //Already in other module.. ,
			//0x9684 //Already in other module.. ,
			//0x9694 //Already in other module.. ,
			//0x9854 //Already in other module.. 
		],
		SceSaveDataDialogPlugin:[ 
		],
		SceLibVitaJSExtObj:[ 
		],
		SceAvcodecUser:[ 
			0x59c ,
			0x5ac ,
			0x5bc ,
			0x5cc ,
			0x5dc ,
			0x5ec ,
			0x5fc ,
			0x60c ,
			0x61c ,
			0x62c ,
			0x63c ,
			0x64c ,
			0x65c ,
			0x66c ,
			0x67c ,
			0x68c ,
			0x69c ,
			0x6ac ,
			0x6bc ,
			0x6cc ,
			0x6dc ,
			0x6ec ,
			0x6fc ,
			0x70c ,
			0x71c ,
			0x72c ,
			0x73c ,
			0x74c ,
			0x75c ,
			0x76c ,
			0x77c ,
			0x78c ,
			0x79c ,
			0x7ac ,
			0x7bc ,
			0x7cc ,
			0x7dc ,
			0x7ec ,
			0x7fc ,
			0x80c ,
			0x81c ,
			0x82c ,
			0x83c ,
			0x84c ,
			0x85c ,
			0x86c ,
			0x87c ,
			0x88c ,
			0x89c ,
			0x8ac ,
			0x8bc ,
			0x8cc ,
			0x8dc ,
			0x8ec ,
			0x8fc ,
			0x90c ,
			0x91c ,
			0x92c ,
			0x93c ,
			0x94c ,
			0x95c ,
			0x96c ,
			0x97c ,
			0x98c ,
			0x99c ,
			0x9ac ,
			0x9bc ,
			0x9cc ,
			0x9dc ,
			0x9ec ,
			0x9fc ,
			0xa0c ,
			0xa1c ,
			0xa2c ,
			0xa3c ,
			0xa4c ,
			0xa5c ,
			0xa6c ,
			0xa7c ,
			0xa8c ,
			0xa9c ,
			0xaac ,
			0xabc ,
			0xacc ,
			0xadc ,
			0xaec ,
			0xafc ,
			0xb0c ,
			0xb1c ,
			0xb2c ,
			0xb3c ,
			0xb4c ,
			0xb5c ,
			0xb6c ,
			0xb7c ,
			0xb8c ,
			0xb9c ,
			0xbac ,
			0xbbc ,
			0xbcc ,
			0xbdc ,
			0xbec ,
			0xbfc ,
			0xc0c ,
			0xc1c ,
			0xc2c ,
			0xc3c ,
			0xc4c ,
			0xc5c ,
			0xc6c ,
			0xc7c ,
			0xc8c ,
			0xc9c ,
			0xcac ,
			0xcbc ,
			0xccc ,
			0xcdc ,
			0xcec ,
			0xcfc ,
			0xd0c ,
			0xd1c ,
			0xd2c ,
			0xd3c ,
			0xd4c ,
			0xd5c ,
			0xd6c ,
			0xd7c ,
			0xd8c ,
			0xd9c ,
			0xdac ,
			0xdbc ,
			0xdcc ,
			0xddc ,
			0xdec ,
			0xdfc ,
			0xe0c ,
			0xe1c ,
			0xe2c 
		],
		SceLibG729:[ 
		],
		ScePartyMemberListPlugin:[ 
		],
		SceLibc:[ 
			//0x3b288 //Already in other module.. 
			//0x3b298 //Already in other module.. 
			0x3b2a8 ,
			//0x3b2b8 //Already in other module.. ,
			0x3b2c8 ,
			0x3b2d8 ,
			0x3b2e8 ,
			0x3b2f8 ,
			0x3b308 ,
			//0x3b318 //Already in other module.. ,
			//0x3b328 //Already in other module.. ,
			0x3b338 ,
			0x3b348 ,
			//0x3b358 //Already in other module.. ,
			//0x3b368 //Already in other module.. ,
			//0x3b378 //Already in other module.. ,
			//0x3b388 //Already in other module.. ,
			//0x3b398 //Already in other module.. ,
			0x3b3a8 ,
			//0x3b3b8 //Already in other module.. ,
			//0x3b3c8 //Already in other module.. 
		],
		SceImeDialogPlugin:[ 
		],
		SceShellSvc:[ 
			0xf6c4 ,
			//0xf6d4 //Already in other module.. ,
			0xf6e4 ,
			//0xf6f4 //Already in other module.. ,
			0xf704 ,
			//0xf714 //Already in other module.. ,
			//0xf724 //Already in other module.. ,
			//0xf734 //Already in other module.. ,
			//0xf744 //Already in other module.. ,
			//0xf754 //Already in other module.. ,
			//0xf764 //Already in other module.. ,
			//0xf774 //Already in other module.. ,
			//0xf784 //Already in other module.. ,
			//0xf794 //Already in other module.. ,
			//0xf7a4 //Already in other module.. ,
			//0xf7b4 //Already in other module.. ,
			//0xf7c4 //Already in other module.. ,
			0xf7d4 ,
			0xf7e4 ,
			//0xf7f4 //Already in other module.. ,
			//0xf804 //Already in other module.. ,
			//0xf814 //Already in other module.. ,
			0xf824 ,
			//0xf834 //Already in other module.. ,
			//0xf844 //Already in other module.. ,
			//0xf854 //Already in other module.. ,
			0xf864 ,
			//0xf874 //Already in other module.. ,
			//0xf884 //Already in other module.. ,
			//0xf894 //Already in other module.. ,
			//0xf8a4 //Already in other module.. ,
			//0xf8b4 //Already in other module.. ,
			//0xf8c4 //Already in other module.. ,
			0xf8e4 
		],
		ScePsp2Compat:[ 
			//0x2a0114 //Already in other module.. 
			//0x2a0124 //Already in other module.. 
			//0x2a0134 //Already in other module.. 
			//0x2a03f4 //Already in other module.. 
			//0x2a0404 //Already in other module.. 
			//0x2a0414 //Already in other module.. 
			//0x2a0424 //Already in other module.. 
			//0x2a0434 //Already in other module.. 
			//0x2a0444 //Already in other module.. 
			//0x2a0454 //Already in other module.. 
			//0x2a0464 //Already in other module.. 
			//0x2a0474 //Already in other module.. 
			//0x2a0484 //Already in other module.. 
			//0x2a0494 //Already in other module.. 
			//0x2a04a4 //Already in other module.. 
			//0x2a04b4 //Already in other module.. 
			0x2a04c4 ,
			//0x2a04d4 //Already in other module.. ,
			//0x2a04e4 //Already in other module.. ,
			0x2a04f4 ,
			//0x2a0504 //Already in other module.. ,
			//0x2a0514 //Already in other module.. ,
			0x2a0524 ,
			0x2a0534 ,
			//0x2a0544 //Already in other module.. ,
			0x2a0554 ,
			//0x2a06f4 //Already in other module.. ,
			0x2a0744 
		],
		SceAudiocodec:[ 
		],
		SceCheckoutDialogPlugin:[ 
		],
		SceNearProfile:[ 
			0xa954 ,
			//0xa964 //Already in other module.. ,
			//0xa974 //Already in other module.. ,
			0xab54 ,
			0xab64 ,
			0xab74 ,
			0xab84 ,
			0xabe4 ,
			//0xad04 //Already in other module.. ,
			//0xad14 //Already in other module.. ,
			//0xad24 //Already in other module.. ,
			//0xad34 //Already in other module.. ,
			//0xad44 //Already in other module.. ,
			//0xad54 //Already in other module.. ,
			//0xad64 //Already in other module.. 
		],
		SceMusicExport:[ 
			//0x1578 //Already in other module.. 
			//0x1588 //Already in other module.. 
			//0x1598 //Already in other module.. 
			//0x15a8 //Already in other module.. 
			//0x15b8 //Already in other module.. 
			//0x15c8 //Already in other module.. 
			//0x15d8 //Already in other module.. 
			//0x15e8 //Already in other module.. 
			//0x15f8 //Already in other module.. 
			//0x1628 //Already in other module.. 
		],
		SceHafnium:[ 
			//0x4190c //Already in other module.. 
			//0x4191c //Already in other module.. 
			//0x4192c //Already in other module.. 
		],
		SceCommonDialog:[ 
			//0xb6a0 //Already in other module.. 
			0xb6b0 ,
			0xb6c0 ,
			0xb6d0 ,
			//0xb6e0 //Already in other module.. ,
			//0xb6f0 //Already in other module.. ,
			//0xb700 //Already in other module.. ,
			//0xb710 //Already in other module.. ,
			//0xb720 //Already in other module.. ,
			//0xb730 //Already in other module.. ,
			//0xb7e0 //Already in other module.. ,
			//0xb7f0 //Already in other module.. ,
			0xb800 ,
			//0xb810 //Already in other module.. ,
			//0xb820 //Already in other module.. ,
			//0xb830 //Already in other module.. ,
			//0xb840 //Already in other module.. ,
			//0xb850 //Already in other module.. ,
			//0xb860 //Already in other module.. ,
			0xb8b0 ,
			0xb8c0 ,
			//0xb8d0 //Already in other module.. ,
			//0xb8e0 //Already in other module.. ,
			0xb8f0 ,
			0xb900 ,
			//0xb930 //Already in other module.. ,
			0xb940 ,
			0xb950 
		],
	};
	return tmp;
}