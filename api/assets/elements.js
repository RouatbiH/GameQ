window.ApiGen?.resolveElements({"namespace":[["GameQ","namespace-GameQ.html"],["GameQ\\Exception","namespace-GameQ.Exception.html"],["GameQ\\Filters","namespace-GameQ.Filters.html"],["GameQ\\Protocols","namespace-GameQ.Protocols.html"],["GameQ\\Query","namespace-GameQ.Query.html"],["","namespace-none.html"]],"classLike":[["Exception","Exception.html",{"method":[["__construct","___construct"],["__wakeup","___wakeup"],["getMessage","_getMessage"],["getCode","_getCode"],["getFile","_getFile"],["getLine","_getLine"],["getTrace","_getTrace"],["getPrevious","_getPrevious"],["getTraceAsString","_getTraceAsString"],["__toString","___toString"]]}],["GameQ\\Buffer","GameQ.Buffer.html",{"constant":[["NUMBER_TYPE_BIGENDIAN","NUMBER_TYPE_BIGENDIAN"],["NUMBER_TYPE_LITTLEENDIAN","NUMBER_TYPE_LITTLEENDIAN"],["NUMBER_TYPE_MACHINE","NUMBER_TYPE_MACHINE"]],"method":[["__construct","___construct"],["getData","_getData"],["getBuffer","_getBuffer"],["getLength","_getLength"],["read","_read"],["readLast","_readLast"],["lookAhead","_lookAhead"],["skip","_skip"],["jumpto","_jumpto"],["getPosition","_getPosition"],["readString","_readString"],["readPascalString","_readPascalString"],["readStringMulti","_readStringMulti"],["readInt8","_readInt8"],["readInt8Signed","_readInt8Signed"],["readInt16","_readInt16"],["readInt16Signed","_readInt16Signed"],["readInt32","_readInt32"],["readInt32Signed","_readInt32Signed"],["readInt64","_readInt64"],["readFloat32","_readFloat32"]]}],["GameQ\\Exception\\Protocol","GameQ.Exception.Protocol.html",[]],["GameQ\\Exception\\Query","GameQ.Exception.Query.html",[]],["GameQ\\Exception\\Server","GameQ.Exception.Server.html",[]],["GameQ\\Filters\\Base","GameQ.Filters.Base.html",{"property":[["options","$options"]],"method":[["__construct","___construct"],["getOptions","_getOptions"],["apply","_apply"]]}],["GameQ\\Filters\\Normalize","GameQ.Filters.Normalize.html",{"property":[["normalize","$normalize"]],"method":[["apply","_apply"],["check","_check"]]}],["GameQ\\Filters\\Secondstohuman","GameQ.Filters.Secondstohuman.html",{"constant":[["OPTION_TIMEKEYS","OPTION_TIMEKEYS"],["RESULT_KEY","RESULT_KEY"]],"property":[["timeKeysDefault","$timeKeysDefault"]],"method":[["__construct","___construct"],["apply","_apply"],["iterate","_iterate"]]}],["GameQ\\Filters\\Stripcolors","GameQ.Filters.Stripcolors.html",{"method":[["apply","_apply"],["stripQuake","_stripQuake"],["stripSource","_stripSource"],["stripUnreal","_stripUnreal"]]}],["GameQ\\Filters\\Test","GameQ.Filters.Test.html",{"method":[["apply","_apply"]]}],["GameQ\\GameQ","GameQ.GameQ.html",{"constant":[["PROTOCOLS_DIRECTORY","PROTOCOLS_DIRECTORY"]],"property":[["instance","$instance"],["options","$options"],["servers","$servers"],["queryLibrary","$queryLibrary"],["query","$query"],["debug","$debug"],["capture_packets_file","$capture_packets_file"],["stream_timeout","$stream_timeout"],["timeout","$timeout"],["write_wait","$write_wait"]],"method":[["factory","_factory"],["__construct","___construct"],["__get","___get"],["__set","___set"],["getServers","_getServers"],["getOptions","_getOptions"],["setOption","_setOption"],["addServer","_addServer"],["addServers","_addServers"],["addServersFromFiles","_addServersFromFiles"],["clearServers","_clearServers"],["addFilter","_addFilter"],["removeFilter","_removeFilter"],["listFilters","_listFilters"],["process","_process"],["doChallenges","_doChallenges"],["doQueries","_doQueries"],["doParseResponse","_doParseResponse"],["doApplyFilters","_doApplyFilters"]]}],["GameQ\\Protocol","GameQ.Protocol.html",{"constant":[["STATE_TESTING","STATE_TESTING"],["STATE_BETA","STATE_BETA"],["STATE_STABLE","STATE_STABLE"],["STATE_DEPRECATED","STATE_DEPRECATED"],["PACKET_ALL","PACKET_ALL"],["PACKET_BASIC","PACKET_BASIC"],["PACKET_CHALLENGE","PACKET_CHALLENGE"],["PACKET_CHANNELS","PACKET_CHANNELS"],["PACKET_DETAILS","PACKET_DETAILS"],["PACKET_INFO","PACKET_INFO"],["PACKET_PLAYERS","PACKET_PLAYERS"],["PACKET_STATUS","PACKET_STATUS"],["PACKET_RULES","PACKET_RULES"],["PACKET_VERSION","PACKET_VERSION"],["TRANSPORT_UDP","TRANSPORT_UDP"],["TRANSPORT_TCP","TRANSPORT_TCP"],["TRANSPORT_SSL","TRANSPORT_SSL"],["TRANSPORT_TLS","TRANSPORT_TLS"]],"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["transport","$transport"],["protocol","$protocol"],["packets","$packets"],["responses","$responses"],["process_methods","$process_methods"],["packets_response","$packets_response"],["result","$result"],["options","$options"],["state","$state"],["normalize","$normalize"],["join_link","$join_link"]],"method":[["__construct","___construct"],["__toString","___toString"],["portDiff","_portDiff"],["findQueryPort","_findQueryPort"],["joinLink","_joinLink"],["name","_name"],["nameLong","_nameLong"],["state","_state"],["getProtocol","_getProtocol"],["transport","_transport"],["options","_options"],["getPacket","_getPacket"],["packetResponse","_packetResponse"],["hasChallenge","_hasChallenge"],["challengeParseAndApply","_challengeParseAndApply"],["challengeApply","_challengeApply"],["getNormalize","_getNormalize"],["beforeSend","_beforeSend"],["processResponse","_processResponse"]]}],["GameQ\\Protocols\\Aa3","GameQ.Protocols.Aa3.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Aapg","GameQ.Protocols.Aapg.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Arkse","GameQ.Protocols.Arkse.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Arma","GameQ.Protocols.Arma.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Arma3","GameQ.Protocols.Arma3.html",{"constant":[["BASE_DLC_KART","BASE_DLC_KART"],["BASE_DLC_MARKSMEN","BASE_DLC_MARKSMEN"],["BASE_DLC_HELI","BASE_DLC_HELI"],["BASE_DLC_CURATOR","BASE_DLC_CURATOR"],["BASE_DLC_EXPANSION","BASE_DLC_EXPANSION"],["BASE_DLC_JETS","BASE_DLC_JETS"],["BASE_DLC_ORANGE","BASE_DLC_ORANGE"],["BASE_DLC_ARGO","BASE_DLC_ARGO"],["BASE_DLC_TACOPS","BASE_DLC_TACOPS"],["BASE_DLC_TANKS","BASE_DLC_TANKS"],["BASE_DLC_CONTACT","BASE_DLC_CONTACT"],["BASE_DLC_ENOCH","BASE_DLC_ENOCH"],["BASE_DLC_AOW","BASE_DLC_AOW"],["CREATOR_DLC_GM","CREATOR_DLC_GM"],["CREATOR_DLC_VN","CREATOR_DLC_VN"],["CREATOR_DLC_CSLA","CREATOR_DLC_CSLA"],["CREATOR_DLC_WS","CREATOR_DLC_WS"]],"property":[["dlcFlags","$dlcFlags"],["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]],"method":[["processRules","_processRules"]]}],["GameQ\\Protocols\\Armedassault2oa","GameQ.Protocols.Armedassault2oa.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Armedassault3","GameQ.Protocols.Armedassault3.html",[]],["GameQ\\Protocols\\Ase","GameQ.Protocols.Ase.html",{"property":[["packets","$packets"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processKeyValuePairs","_processKeyValuePairs"],["processPlayersAndTeams","_processPlayersAndTeams"]]}],["GameQ\\Protocols\\Atlas","GameQ.Protocols.Atlas.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Avorion","GameQ.Protocols.Avorion.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Barotrauma","GameQ.Protocols.Barotrauma.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Batt1944","GameQ.Protocols.Batt1944.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["normalize","$normalize"]]}],["GameQ\\Protocols\\Bf1942","GameQ.Protocols.Bf1942.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["join_link","$join_link"],["normalize","$normalize"]]}],["GameQ\\Protocols\\Bf2","GameQ.Protocols.Bf2.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["join_link","$join_link"],["packets","$packets"],["normalize","$normalize"]]}],["GameQ\\Protocols\\Bf3","GameQ.Protocols.Bf3.html",{"property":[["packets","$packets"],["responses","$responses"],["transport","$transport"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["port_diff","$port_diff"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["decode","_decode"],["processDetails","_processDetails"],["processVersion","_processVersion"],["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Bf4","GameQ.Protocols.Bf4.html",{"property":[["name","$name"],["name_long","$name_long"]],"method":[["processDetails","_processDetails"]]}],["GameQ\\Protocols\\Bfbc2","GameQ.Protocols.Bfbc2.html",{"property":[["packets","$packets"],["responses","$responses"],["transport","$transport"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["port_diff","$port_diff"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["decode","_decode"],["processDetails","_processDetails"],["processVersion","_processVersion"],["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Bfh","GameQ.Protocols.Bfh.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Blackmesa","GameQ.Protocols.Blackmesa.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Brink","GameQ.Protocols.Brink.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Citadel","GameQ.Protocols.Citadel.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Cod","GameQ.Protocols.Cod.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Cod2","GameQ.Protocols.Cod2.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Cod4","GameQ.Protocols.Cod4.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Codmw2","GameQ.Protocols.Codmw2.html",{"property":[["name","$name"],["name_long","$name_long"]],"method":[["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Codmw3","GameQ.Protocols.Codmw3.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Coduo","GameQ.Protocols.Coduo.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Codwaw","GameQ.Protocols.Codwaw.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Conanexiles","GameQ.Protocols.Conanexiles.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Contagion","GameQ.Protocols.Contagion.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Crysis","GameQ.Protocols.Crysis.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Crysis2","GameQ.Protocols.Crysis2.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Crysiswars","GameQ.Protocols.Crysiswars.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Cs15","GameQ.Protocols.Cs15.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Cs16","GameQ.Protocols.Cs16.html",{"property":[["name","$name"],["name_long","$name_long"]],"method":[["processPackets","_processPackets"]]}],["GameQ\\Protocols\\Cs2d","GameQ.Protocols.Cs2d.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processDetails","_processDetails"],["processPlayers","_processPlayers"],["readFlag","_readFlag"]]}],["GameQ\\Protocols\\Cscz","GameQ.Protocols.Cscz.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Csgo","GameQ.Protocols.Csgo.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Css","GameQ.Protocols.Css.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Dal","GameQ.Protocols.Dal.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Dayz","GameQ.Protocols.Dayz.html",{"property":[["name","$name"],["name_long","$name_long"]],"method":[["findQueryPort","_findQueryPort"]]}],["GameQ\\Protocols\\Dayzmod","GameQ.Protocols.Dayzmod.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Dod","GameQ.Protocols.Dod.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Dods","GameQ.Protocols.Dods.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Doom3","GameQ.Protocols.Doom3.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processStatus","_processStatus"],["processServerInfo","_processServerInfo"],["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Dow","GameQ.Protocols.Dow.html",{"property":[["name","$name"],["name_long","$name_long"],["normalize","$normalize"]]}],["GameQ\\Protocols\\Eco","GameQ.Protocols.Eco.html",{"property":[["packets","$packets"],["transport","$transport"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"]]}],["GameQ\\Protocols\\Egs","GameQ.Protocols.Egs.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Et","GameQ.Protocols.Et.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Etqw","GameQ.Protocols.Etqw.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processStatus","_processStatus"],["parsePlayers","_parsePlayers"],["parsePlayersExtra","_parsePlayersExtra"]]}],["GameQ\\Protocols\\Ffe","GameQ.Protocols.Ffe.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Ffow","GameQ.Protocols.Ffow.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["port_diff","$port_diff"],["normalize","$normalize"]],"method":[["challengeParseAndApply","_challengeParseAndApply"],["processResponse","_processResponse"],["processInfo","_processInfo"],["processRules","_processRules"],["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Fof","GameQ.Protocols.Fof.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Gamespy","GameQ.Protocols.Gamespy.html",{"property":[["packets","$packets"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"]],"method":[["processResponse","_processResponse"],["processStatus","_processStatus"]]}],["GameQ\\Protocols\\Gamespy2","GameQ.Protocols.Gamespy2.html",{"property":[["state","$state"],["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processDetails","_processDetails"],["processPlayers","_processPlayers"],["parsePlayerTeam","_parsePlayerTeam"]]}],["GameQ\\Protocols\\Gamespy3","GameQ.Protocols.Gamespy3.html",{"property":[["packets","$packets"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["packetSplit","$packetSplit"]],"method":[["challengeParseAndApply","_challengeParseAndApply"],["processResponse","_processResponse"],["cleanPackets","_cleanPackets"],["processDetails","_processDetails"],["processPlayersAndTeams","_processPlayersAndTeams"]]}],["GameQ\\Protocols\\Gamespy4","GameQ.Protocols.Gamespy4.html",[]],["GameQ\\Protocols\\Gmod","GameQ.Protocols.Gmod.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Grav","GameQ.Protocols.Grav.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Gta5m","GameQ.Protocols.Gta5m.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processStatus","_processStatus"]]}],["GameQ\\Protocols\\Gtan","GameQ.Protocols.Gtan.html",{"property":[["packets","$packets"],["transport","$transport"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["realIp","$realIp"],["realPortQuery","$realPortQuery"],["normalize","$normalize"]],"method":[["beforeSend","_beforeSend"],["processResponse","_processResponse"]]}],["GameQ\\Protocols\\Gtar","GameQ.Protocols.Gtar.html",{"property":[["packets","$packets"],["transport","$transport"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["realIp","$realIp"],["realPortQuery","$realPortQuery"],["normalize","$normalize"]],"method":[["beforeSend","_beforeSend"],["processResponse","_processResponse"]]}],["GameQ\\Protocols\\Had2","GameQ.Protocols.Had2.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["normalize","$normalize"]]}],["GameQ\\Protocols\\Halo","GameQ.Protocols.Halo.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Hl1","GameQ.Protocols.Hl1.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Hl2dm","GameQ.Protocols.Hl2dm.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Hll","GameQ.Protocols.Hll.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Http","GameQ.Protocols.Http.html",{"property":[["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["transport","$transport"],["join_link","$join_link"]]}],["GameQ\\Protocols\\Hurtworld","GameQ.Protocols.Hurtworld.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Insurgency","GameQ.Protocols.Insurgency.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Insurgencysand","GameQ.Protocols.Insurgencysand.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Jediacademy","GameQ.Protocols.Jediacademy.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Jedioutcast","GameQ.Protocols.Jedioutcast.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Justcause2","GameQ.Protocols.Justcause2.html",{"property":[["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["packets","$packets"],["packetSplit","$packetSplit"],["normalize","$normalize"]],"method":[["processDetails","_processDetails"],["processPlayersAndTeams","_processPlayersAndTeams"]]}],["GameQ\\Protocols\\Justcause3","GameQ.Protocols.Justcause3.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Killingfloor","GameQ.Protocols.Killingfloor.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["join_link","$join_link"]],"method":[["processDetails","_processDetails"]]}],["GameQ\\Protocols\\Killingfloor2","GameQ.Protocols.Killingfloor2.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Kingpin","GameQ.Protocols.Kingpin.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\L4d","GameQ.Protocols.L4d.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\L4d2","GameQ.Protocols.L4d2.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Lhmp","GameQ.Protocols.Lhmp.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processDetails","_processDetails"],["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Lifeisfeudal","GameQ.Protocols.Lifeisfeudal.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\M2mp","GameQ.Protocols.M2mp.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["port_diff","$port_diff"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processStatus","_processStatus"],["processServerInfo","_processServerInfo"],["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Minecraft","GameQ.Protocols.Minecraft.html",{"property":[["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]]}],["GameQ\\Protocols\\Minecraftbe","GameQ.Protocols.Minecraftbe.html",{"property":[["name","$name"],["name_long","$name_long"],["normalize","$normalize"]]}],["GameQ\\Protocols\\Minecraftpe","GameQ.Protocols.Minecraftpe.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Miscreated","GameQ.Protocols.Miscreated.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["normalize","$normalize"]]}],["GameQ\\Protocols\\Modiverse","GameQ.Protocols.Modiverse.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Mohaa","GameQ.Protocols.Mohaa.html",{"property":[["name","$name"],["name_long","$name_long"],["normalize","$normalize"]],"method":[["findQueryPort","_findQueryPort"]]}],["GameQ\\Protocols\\Mordhau","GameQ.Protocols.Mordhau.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Mta","GameQ.Protocols.Mta.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["join_link","$join_link"]]}],["GameQ\\Protocols\\Mumble","GameQ.Protocols.Mumble.html",{"property":[["packets","$packets"],["transport","$transport"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["port_diff","$port_diff"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processChannelsAndUsers","_processChannelsAndUsers"]]}],["GameQ\\Protocols\\Nmrih","GameQ.Protocols.Nmrih.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Ns2","GameQ.Protocols.Ns2.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Of","GameQ.Protocols.Of.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Openttd","GameQ.Protocols.Openttd.html",{"property":[["packets","$packets"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processServerInfo","_processServerInfo"]]}],["GameQ\\Protocols\\Pixark","GameQ.Protocols.Pixark.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Postscriptum","GameQ.Protocols.Postscriptum.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Projectrealitybf2","GameQ.Protocols.Projectrealitybf2.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Quake2","GameQ.Protocols.Quake2.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processStatus","_processStatus"],["processServerInfo","_processServerInfo"],["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Quake3","GameQ.Protocols.Quake3.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processStatus","_processStatus"],["processServerInfo","_processServerInfo"],["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Quake4","GameQ.Protocols.Quake4.html",{"property":[["name","$name"],["name_long","$name_long"]],"method":[["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Quakelive","GameQ.Protocols.Quakelive.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Raknet","GameQ.Protocols.Raknet.html",{"constant":[["OFFLINE_MESSAGE_DATA_ID","OFFLINE_MESSAGE_DATA_ID"],["ID_UNCONNECTED_PONG","ID_UNCONNECTED_PONG"]],"property":[["packets","$packets"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"]],"method":[["beforeSend","_beforeSend"],["processResponse","_processResponse"]]}],["GameQ\\Protocols\\Redorchestra2","GameQ.Protocols.Redorchestra2.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Redorchestraostfront","GameQ.Protocols.Redorchestraostfront.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Rf2","GameQ.Protocols.Rf2.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Rfactor","GameQ.Protocols.Rfactor.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Rfactor2","GameQ.Protocols.Rfactor2.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Risingstorm2","GameQ.Protocols.Risingstorm2.html",{"property":[["name","$name"],["name_long","$name_long"]],"method":[["findQueryPort","_findQueryPort"]]}],["GameQ\\Protocols\\Rust","GameQ.Protocols.Rust.html",{"property":[["name","$name"],["name_long","$name_long"]],"method":[["processDetails","_processDetails"]]}],["GameQ\\Protocols\\Samp","GameQ.Protocols.Samp.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["server_code","$server_code"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["beforeSend","_beforeSend"],["processResponse","_processResponse"],["processStatus","_processStatus"],["processPlayers","_processPlayers"],["processRules","_processRules"]]}],["GameQ\\Protocols\\Sco","GameQ.Protocols.Sco.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Serioussam","GameQ.Protocols.Serioussam.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["normalize","$normalize"]]}],["GameQ\\Protocols\\Sevendaystodie","GameQ.Protocols.Sevendaystodie.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Ship","GameQ.Protocols.Ship.html",{"property":[["name","$name"],["name_long","$name_long"]],"method":[["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Sof2","GameQ.Protocols.Sof2.html",{"property":[["name","$name"],["name_long","$name_long"],["join_link","$join_link"]]}],["GameQ\\Protocols\\Soldat","GameQ.Protocols.Soldat.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["join_link","$join_link"]]}],["GameQ\\Protocols\\Source","GameQ.Protocols.Source.html",{"constant":[["SOURCE_ENGINE","SOURCE_ENGINE"],["GOLDSOURCE_ENGINE","GOLDSOURCE_ENGINE"]],"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["source_engine","$source_engine"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["challengeParseAndApply","_challengeParseAndApply"],["processResponse","_processResponse"],["processPackets","_processPackets"],["processDetails","_processDetails"],["processDetailsGoldSource","_processDetailsGoldSource"],["processPlayers","_processPlayers"],["processRules","_processRules"]]}],["GameQ\\Protocols\\Spaceengineers","GameQ.Protocols.Spaceengineers.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Squad","GameQ.Protocols.Squad.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Starmade","GameQ.Protocols.Starmade.html",{"property":[["packets","$packets"],["transport","$transport"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["parseServerParameters","_parseServerParameters"]]}],["GameQ\\Protocols\\Stormworks","GameQ.Protocols.Stormworks.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Swat4","GameQ.Protocols.Swat4.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Teamspeak2","GameQ.Protocols.Teamspeak2.html",{"property":[["packets","$packets"],["transport","$transport"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["beforeSend","_beforeSend"],["processResponse","_processResponse"],["processDetails","_processDetails"],["processChannels","_processChannels"],["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Teamspeak3","GameQ.Protocols.Teamspeak3.html",{"property":[["packets","$packets"],["transport","$transport"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["beforeSend","_beforeSend"],["processResponse","_processResponse"],["processProperties","_processProperties"],["processDetails","_processDetails"],["processChannels","_processChannels"],["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Teeworlds","GameQ.Protocols.Teeworlds.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processAll","_processAll"]]}],["GameQ\\Protocols\\Terraria","GameQ.Protocols.Terraria.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["join_link","$join_link"]]}],["GameQ\\Protocols\\Tf2","GameQ.Protocols.Tf2.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Theforrest","GameQ.Protocols.Theforrest.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Tibia","GameQ.Protocols.Tibia.html",{"property":[["packets","$packets"],["transport","$transport"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"]]}],["GameQ\\Protocols\\Tshock","GameQ.Protocols.Tshock.html",{"property":[["packets","$packets"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"]]}],["GameQ\\Protocols\\Unreal2","GameQ.Protocols.Unreal2.html",{"property":[["packets","$packets"],["responses","$responses"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["processDetails","_processDetails"],["processPlayers","_processPlayers"],["processRules","_processRules"]]}],["GameQ\\Protocols\\Unturned","GameQ.Protocols.Unturned.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Urbanterror","GameQ.Protocols.Urbanterror.html",{"property":[["name","$name"],["name_long","$name_long"],["join_link","$join_link"]]}],["GameQ\\Protocols\\Ut","GameQ.Protocols.Ut.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"],["normalize","$normalize"]]}],["GameQ\\Protocols\\Ut2004","GameQ.Protocols.Ut2004.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Ut3","GameQ.Protocols.Ut3.html",{"property":[["name","$name"],["name_long","$name_long"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["renameResult","_renameResult"],["deleteResult","_deleteResult"]]}],["GameQ\\Protocols\\Valheim","GameQ.Protocols.Valheim.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Ventrilo","GameQ.Protocols.Ventrilo.html",{"property":[["packets","$packets"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"],["join_link","$join_link"],["normalize","$normalize"]],"method":[["processResponse","_processResponse"],["decryptPackets","_decryptPackets"],["processChannel","_processChannel"],["processPlayer","_processPlayer"]]}],["GameQ\\Protocols\\Vrising","GameQ.Protocols.Vrising.html",{"property":[["name","$name"],["name_long","$name_long"],["port_diff","$port_diff"]]}],["GameQ\\Protocols\\Warsow","GameQ.Protocols.Warsow.html",{"property":[["name","$name"],["name_long","$name_long"],["join_link","$join_link"]],"method":[["processPlayers","_processPlayers"]]}],["GameQ\\Protocols\\Won","GameQ.Protocols.Won.html",{"property":[["packets","$packets"],["protocol","$protocol"],["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Wurm","GameQ.Protocols.Wurm.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Protocols\\Zomboid","GameQ.Protocols.Zomboid.html",{"property":[["name","$name"],["name_long","$name_long"]]}],["GameQ\\Query\\Core","GameQ.Query.Core.html",{"property":[["socket","$socket"],["transport","$transport"],["ip","$ip"],["port","$port"],["timeout","$timeout"],["blocking","$blocking"]],"method":[["__clone","___clone"],["set","_set"],["reset","_reset"],["getTransport","_getTransport"],["getIp","_getIp"],["getPort","_getPort"],["getTimeout","_getTimeout"],["getBlocking","_getBlocking"],["create","_create"],["get","_get"],["write","_write"],["close","_close"],["getResponses","_getResponses"]]}],["GameQ\\Query\\Native","GameQ.Query.Native.html",{"method":[["get","_get"],["write","_write"],["close","_close"],["create","_create"],["getResponses","_getResponses"]]}],["GameQ\\Result","GameQ.Result.html",{"property":[["result","$result"]],"method":[["add","_add"],["addPlayer","_addPlayer"],["addTeam","_addTeam"],["addSub","_addSub"],["fetch","_fetch"],["get","_get"]]}],["GameQ\\Server","GameQ.Server.html",{"constant":[["SERVER_TYPE","SERVER_TYPE"],["SERVER_HOST","SERVER_HOST"],["SERVER_ID","SERVER_ID"],["SERVER_OPTIONS","SERVER_OPTIONS"],["SERVER_OPTIONS_QUERY_PORT","SERVER_OPTIONS_QUERY_PORT"]],"property":[["protocol","$protocol"],["id","$id"],["ip","$ip"],["port_client","$port_client"],["port_query","$port_query"],["options","$options"],["sockets","$sockets"]],"method":[["__construct","___construct"],["checkAndSetIpPort","_checkAndSetIpPort"],["checkAndSetServerOptions","_checkAndSetServerOptions"],["setOption","_setOption"],["getOption","_getOption"],["getOptions","_getOptions"],["id","_id"],["ip","_ip"],["portClient","_portClient"],["portQuery","_portQuery"],["protocol","_protocol"],["getJoinLink","_getJoinLink"],["socketAdd","_socketAdd"],["socketGet","_socketGet"],["socketCleanse","_socketCleanse"]]}],["Stringable","Stringable.html",{"method":[["__toString","___toString"]]}],["Throwable","Throwable.html",{"method":[["getMessage","_getMessage"],["getCode","_getCode"],["getFile","_getFile"],["getLine","_getLine"],["getTrace","_getTrace"],["getPrevious","_getPrevious"],["getTraceAsString","_getTraceAsString"]]}]]})