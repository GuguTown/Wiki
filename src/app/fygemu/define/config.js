/*
Project: fygemu
Authors: hirakana@kf
*/

const 

    // Emulator
    gRules = gEmuJson.Rule,
    gBaseStatAdd = gEmuJson.BaseStat.Add,
    gBaseStatMul = gEmuJson.BaseStat.Mul,
    gEmuActorKind = gEmuJson.Actors,
    gEmuStatusKind = gEmuJson.Status,
    gEmuEquipKind = gEmuJson.Equips,
    gEmuEquipStatAdd = gEmuJson.EquipStats.Add,
    gEmuEquipStatMul = gEmuJson.EquipStats.Mul,
    gEmuEquipRankKind = gEmuJson.EquipRanks,
    gEmuAuraKind = gEmuJson.Auras,

    gNumberCast = gRules.UseIntegers ? Math.floor : (x) => x,
    gNumberMin = gRules.UseIntegers ? 1 : Number.MIN_VALUE,

    // User
    gUsrPath = gUsrJson.AssetRoot || "assets/",
    gUsrActorDir = gUsrPath + (gUsrJson.ActorDir || ""),
    gUsrEquipDir = gUsrPath + (gUsrJson.EquipDir || ""),
    gUsrActorExt = gUsrJson.ActorExt || "",
    gUsrEquipExt = gUsrJson.EquipExt || "",
    gUsrActorMap = gUsrJson.ActorMap || {},
    gUsrEquipMap = gUsrJson.EquipMap || {},
    gUsrEquipRankMap = gUsrJson.EquipRankMap || {},

    // Loader
    gEmuActorKeys = gEmuJson.ActorKeys,

    // Messages
    gMsgJsons = {
        "zz": gMsgZzJson,
        "cs": gMsgCsJson,
        "ct": gMsgCtJson,
        "jp": gMsgJpJson
    }
    
;
