/*
Project: fygemu
Authors: hirakana@kf
*/

(() => {

    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // * Constants *
    // --------------------------------------------------------------------------------------------------------------------------------------------------------

    let
        gMsgJson,
        gMsgMetaData,
        gMsgPanelName,
        gMsgPanelDesc,
        gMsgAttrName,
        gMsgAttrInfo,
        gMsgActUIInfo,
        gMsgActorName,
        gMsgSkill1Name,
        gMsgSkill2Name,
        gMsgSkill3Name,
        gMsgStatusName,
        gMsgEquipName,
        gMsgEquipDesc,
        gMsgEquipMyst,
        gMsgEquipAttrName,
        gMsgEquipRankName,
        gMsgAuraName,
        gMsgAuraDesc
    ;
    
    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // * Conponents Renderer *
    // --------------------------------------------------------------------------------------------------------------------------------------------------------

    const 
        elIoBar = document.createElement("div"),
        elIoReader = document.createElement("input"),
        elIoWriter = document.createElement("a"),
        elRoot = document.createElement("div"),
        elHeader = document.createElement("div"),
        elModal = document.createElement("div"),
        elFooter = document.createElement("div"),
        elDummy = document.createElement("div"),
        elPkBoard = document.createElement("div"),
        elPkConfig = document.createElement("div"),
        elPkConfigPanel = document.createElement("div"),
        elPkConfigHead = document.createElement("div"),
        elPkConfigBody = document.createElement("div"),
        elPkConfigLeft = document.createElement("div"),
        elPkConfigLeftHead = document.createElement("div"),
        elPkConfigLeftUnit = document.createElement("div"),
        elPkConfigRight = document.createElement("div"),
        elPkConfigRightHead = document.createElement("div"),
        elPkConfigRightUnit = document.createElement("div"),
        elPkEditor = document.createElement("div"),
        elPkEditorTool = document.createElement("div"),
        elPkEditorImage = document.createElement("img"),
        elPkEditorConfirm = document.createElement("button"),
        elPkEditorClose = document.createElement("button"),
        elPkEditorMeta = document.createElement("div"),
        elPkEditorActor = document.createElement("details"),
        elPkEditorEquip = document.createElement("details"),
        elPkEditorEquipList = document.createElement("div"),
        elPkEditorAura = document.createElement("details"),
        elPkEditorWish = document.createElement("details"),
        elPkEditorAmulet = document.createElement("details"),
        elPkOutput = document.createElement("div"),
        elPkOutputPanel = document.createElement("div"),
        elPkOutputHead = document.createElement("div"),
        elPkOutputBody = document.createElement("div"),
        elPkManual = document.createElement("div"),
        elBack = document.createElement("div"),

        
    // Import single
    emuPkImport = (el) => {
        elIoReader.onchange = () => elIoReader.files[0].text().then(
            (d) => {
                let a = JSON.parse(d);

                // In case input is an array, import the very first object
                if (a.length) { a = a[0]; }

                // Import
                el._unit.fromJson(a);
                emuPkUpdate(el);
            }
        );
        elIoReader.click();
    },

    // Export single
    emuPkExport = (el) => {
        elIoWriter.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(el._unit.toJson(), null, 4));
        elIoWriter.download = ".json";
        elIoWriter.click();
    },

    // Update single
    emuPkUpdate = (el) => {
        const unit = el._unit, flag = unit.nFlags;

        el._summary.innerHTML = `${unit.mName} ${gMsgActorName[unit.nActor]}`;

        el._status.innerHTML = `
<summary>${gMsgPanelName.Stats}</summary>
<div class="row"><span>${gMsgAttrName.mName}：</span><span style="float: right"><input type="string" value=${unit.mName} onchange="this._unit.mName=this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.mActor}：</span><span style="float: right"><input type="number" value=${unit.nActor} onchange="this._unit.nActor=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.mLevel}：</span><span style="float: right"><input type="number" value=${unit.nLevel} onchange="this._unit.nLevel=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.mQuality}：</span><span style="float: right"><input type="number" value=${unit.nQuality} onchange="this._unit.nQuality=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.mSkill}：</span><span style="float: right"><input type="number" value=${unit.nSkill} onchange="this._unit.nSkill=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.mGrowth}：</span><span style="float: right"><input type="number" value=${unit.nGrowth} onchange="this._unit.nGrowth=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nHpMax}：</span><span style="float: right"><input type="number" value=${unit.nHpMaxMul} onchange="this._unit.nHpMaxMul=+this.value;" width=25%></input>+<input type="number" value=${unit.nHpMaxAdd} onchange="this._unit.nHpMaxAdd=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nHpHealRat}：</span><span style="float: right"><input type="number" value=${unit.nHpHealRat} onchange="this._unit.nHpHealRat=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nHpHealFix}：</span><span style="float: right"><input type="number" value=${unit.nHpHealMul} onchange="this._unit.nHpHealMul=+this.value;" width=25%></input>+<input type="number" value=${unit.nHpHealAdd} onchange="this._unit.nHpHealAdd=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nSdMax}：</span><span style="float: right"><input type="number" value=${unit.nSdMaxMul} onchange="this._unit.nSdMaxMul=+this.value;" width=25%></input>+<input type="number" value=${unit.nSdMaxAdd} onchange="this._unit.nSdMaxAdd=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nSdHealRat}：</span><span style="float: right"><input type="number" value=${unit.nSdHealRat} onchange="this._unit.nSdHealRat=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nSdHealFix}：</span><span style="float: right"><input type="number" value=${unit.nSdHealMul} onchange="this._unit.nSdHealMul=+this.value;" width=25%></input>+<input type="number" value=${unit.nSdHealAdd} onchange="this._unit.nSdHealAdd=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nPowP}：</span><span style="float: right"><input type="number" value=${unit.nPowMulP} onchange="this._unit.nPowMulP=+this.value;" width=25%></input>+<input type="number" value=${unit.nPowAddP} onchange="this._unit.nPowAddP=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nPowM}：</span><span style="float: right"><input type="number" value=${unit.nPowMulM} onchange="this._unit.nPowMulM=+this.value;" width=25%></input>+<input type="number" value=${unit.nPowAddM} onchange="this._unit.nPowAddM=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nPowA}：</span><span style="float: right"><input type="number" value=${unit.nPowMulA} onchange="this._unit.nPowMulA=+this.value;" width=25%></input>+<input type="number" value=${unit.nPowAddA} onchange="this._unit.nPowAddA=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nSpd}：</span><span style="float: right"><input type="number" value=${unit.nSpdMul} onchange="this._unit.nSpdMul=+this.value;" width=25%></input>+<input type="number" value=${unit.nSpdAdd} onchange="this._unit.nSpdAdd=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nBrcRatP}：</span><span style="float: right"><input type="number" value=${unit.nBrcRatP} onchange="this._unit.nBrcRatP=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nBrcRatM}：</span><span style="float: right"><input type="number" value=${unit.nBrcRatM} onchange="this._unit.nBrcRatM=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nBrcRatC}：</span><span style="float: right"><input type="number" value=${unit.nBrcRatC} onchange="this._unit.nBrcRatC=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nBrcAddP}：</span><span style="float: right"><input type="number" value=${unit.nBrcMulP} onchange="this._unit.nBrcMulP=+this.value;" width=25%></input>+<input type="number" value=${unit.nBrcAddP} onchange="this._unit.nBrcAddP=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nBrcAddM}：</span><span style="float: right"><input type="number" value=${unit.nBrcMulM} onchange="this._unit.nBrcMulM=+this.value;" width=25%></input>+<input type="number" value=${unit.nBrcAddM} onchange="this._unit.nBrcAddM=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nBrcAddC}：</span><span style="float: right"><input type="number" value=${unit.nBrcMulC} onchange="this._unit.nBrcMulC=+this.value;" width=25%></input>+<input type="number" value=${unit.nBrcAddC} onchange="this._unit.nBrcAddC=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nDefP}：</span><span style="float: right"><input type="number" value=${unit.nDefMulP} onchange="this._unit.nDefMulP=+this.value;" width=25%></input>+<input type="number" value=${unit.nDefAddP} onchange="this._unit.nDefAddP=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nDefM}：</span><span style="float: right"><input type="number" value=${unit.nDefMulM} onchange="this._unit.nDefMulM=+this.value;" width=25%></input>+<input type="number" value=${unit.nDefAddM} onchange="this._unit.nDefAddM=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nSklAdd}：</span><span style="float: right"><input type="number" value=${unit.nSklMul} onchange="this._unit.nSklMul=+this.value;" width=25%></input>+<input type="number" value=${unit.nSklAdd} onchange="this._unit.nSklAdd=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nCrtAdd}：</span><span style="float: right"><input type="number" value=${unit.nCrtMul} onchange="this._unit.nCrtMul=+this.value;" width=25%></input>+<input type="number" value=${unit.nCrtAdd} onchange="this._unit.nCrtAdd=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nResP}：</span><span style="float: right"><input type="number" value=${unit.nResMulP} onchange="this._unit.nResMulP=+this.value;" width=25%></input>+<input type="number" value=${unit.nResAddP} onchange="this._unit.nResAddP=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nResM}：</span><span style="float: right"><input type="number" value=${unit.nResMulM} onchange="this._unit.nResMulM=+this.value;" width=25%></input>+<input type="number" value=${unit.nResAddM} onchange="this._unit.nResAddM=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nLch}：</span><span style="float: right"><input type="number" value=${unit.nLch} onchange="this._unit.nLch=+this.value;" width=25%></input></span></div>
<div class="row"><span>${gMsgAttrName.nRfl}：</span><span style="float: right"><input type="number" value=${unit.nRfl} onchange="this._unit.nRfl=+this.value;" width=25%></input></span></div>
<div class="row">
    <div class="col" style="width: 33%;">
        ${Object.keys(gEmuActorKind).slice(1).map((k) => `
        <div data-toggle="tooltip" data-tip-class="tooltip-info" class="btn${flag.has(+k) ? " btn-primary" : ""}" onclick="(this._unit.flip(${k})) ? this.classList.remove('btn-primary') : this.classList.add('btn-primary')" style="padding:1px;margin:1px;">${gMsgActorName[k]}<br></div>
        `).join("")}
    </div>
    <div class="col" style="width: 33%;">
        ${Object.keys(gEmuEquipKind).slice(1).map((k) => `
        <div data-toggle="tooltip" data-tip-class="tooltip-info" class="btn${flag.has(+k) ? " btn-primary" : ""}" onclick="(this._unit.flip(${k})) ? this.classList.remove('btn-primary') : this.classList.add('btn-primary')" style="padding:1px;margin:1px;">${gMsgEquipName[k]}<br></div>
        `).join("")}
    </div>
    <div class="col" style="width: 33%;">
        ${Object.keys(gEmuAuraKind).map((k) => `
        <div data-toggle="tooltip" data-tip-class="tooltip-info" class="btn${flag.has(+k) ? " btn-primary" : ""}" onclick="(this._unit.flip(${k})) ? this.classList.remove('btn-primary') : this.classList.add('btn-primary')" style="padding:1px;margin:1px;">${gMsgAuraName[k]}<br></div>
        `).join("")}
    </div>
</div>
`
        ;
        
        el._wish.innerHTML = `
<summary>${gMsgPanelName.Wish}</summary>
<div class="row">
<div class="col-md-12"><div class="col-xs-6">${gMsgAttrName.mHpPot}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${unit.nWishHpPot} onchange="this._unit.nWishHpPot=+this.value;"></div></div>
<div class="col-md-12"><div class="col-xs-6">${gMsgAttrName.mSdPot}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${unit.nWishSdPot} onchange="this._unit.nWishSdPot=+this.value;"></div></div>
<div class="col-md-12"><div class="col-xs-6">${gMsgAttrName.mAura101}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${unit.nWishAura101} onchange="this._unit.nWishAura101=+this.value;"></div></div>
<div class="col-md-12"><div class="col-xs-6">${gMsgAttrName.mAura102}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${unit.nWishAura102} onchange="this._unit.nWishAura102=+this.value;"></div></div>
<div class="col-md-12"><div class="col-xs-6">${gMsgAttrName.mAura103}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${unit.nWishAura103} onchange="this._unit.nWishAura103=+this.value;"></div></div>
<div class="col-md-12"><div class="col-xs-6">${gMsgAttrName.mPowBuf}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${unit.nWishPowBuf} onchange="this._unit.nWishLifeBuf=+this.value;"></div></div>
<div class="col-md-12"><div class="col-xs-6">${gMsgAttrName.mLifeBuf}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${unit.nWishLifeBuf} onchange="this._unit.nWishPowBuf=+this.value;"></div></div>
</div>
`
        ;
        
        el._amulet.innerHTML = `
<summary>${gMsgPanelName.Amulet}</summary>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulStr}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulStr} onchange="this._unit.nAmulStr=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulAgi}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulAgi} onchange="this._unit.nAmulAgi=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulInt}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulInt} onchange="this._unit.nAmulInt=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulVit}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulVit} onchange="this._unit.nAmulVit=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulSpr}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulSpr} onchange="this._unit.nAmulSpr=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulMnd}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulMnd} onchange="this._unit.nAmulMnd=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulPowP}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulPowP} onchange="this._unit.nAmulPowP=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulPowM}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulPowM} onchange="this._unit.nAmulPowM=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulSpd}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulSpd} onchange="this._unit.nAmulSpd=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulRec}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulRec} onchange="this._unit.nAmulRec=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulHp}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulHp} onchange="this._unit.nAmulHp=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulSd}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulSd} onchange="this._unit.nAmulSd=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulLch}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulLch} onchange="this._unit.nAmulLch=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulRfl}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulRfl} onchange="this._unit.nAmulRfl=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulCrt}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulCrt} onchange="this._unit.nAmulCrt=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulSkl}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulSkl} onchange="this._unit.nAmulSkl=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulDefP}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulDefP} onchange="this._unit.nAmulDefP=+this.value;"></input></div></div>
<div class="col-md-4"><div class="col-xs-4">${gMsgAttrName.mAmulDefM}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${unit.nAmulDefM} onchange="this._unit.nAmulDefM=+this.value;"></input></div></div>
`
        ;
        
        el._right.innerHTML = `
<img class="col-xs-12" src="${gUsrActorDir}Z${gUsrActorMap[unit.nActor] || unit.nActor}${gUsrActorExt}" style="cursor: pointer;"></img>
PVE: <input type="checkbox"${unit.mIsPVE ? " checked" : ""} onchange="this._unit.mIsPVE=+this.checked;"></input><br>
<button style="width: 100%; padding:5px 0 5px 0; margin:5px 0 5px 0;" onclick="this.parentElement._import();">${gMsgPanelName.Import}</button><br>
<button style="width: 100%; padding:5px 0 5px 0; margin:5px 0 5px 0;" onclick="this.parentElement._export();">${gMsgPanelName.Export}</button><br>
<button style="width: 100%; padding:5px 0 5px 0; margin:5px 0 5px 0;" onclick="this.parentElement._config();">${gMsgPanelName.Editor}</button><br>
<button style="width: 100%; padding:5px 0 5px 0; margin:5px 0 5px 0;" onclick="this.parentElement._remove();">${gMsgPanelName.Remove}</button><br>
        `
        ;

        [...el.getElementsByTagName("input"), ...el.getElementsByTagName("checkbox"), ...el.getElementsByTagName("div")].forEach((e) => { e._unit = unit; e._elem = el; e._summary = el._summary; });

    },

    // Update the editor
    emuPkEditorShow = () => {
        const unit = elPkEditor._unit,
            card = unit.mCard,
            equips = unit.mEquips,
            aura = unit.mAuras,
            amulet = unit.mAmulet,
            wish = unit.mWishs
        ;

        window.emuPkEditorSetActor("","");

        elPkEditorActor.innerHTML = `
<summary>${gMsgPanelName.Card}</summary>
<div class="col-md-1">${gMsgAttrName.mStr}:</div><div class="col-md-3"><input type="number" style="width: 100%;" value=${card.mStr} onblur="emuPkEditorSetActor('mStr',+this.value);"></input></div>
<div class="col-md-1">${gMsgAttrName.mAgi}:</div><div class="col-md-3"><input type="number" style="width: 100%;" value=${card.mAgi} onblur="emuPkEditorSetActor('mAgi',+this.value);"></input></div>
<div class="col-md-1">${gMsgAttrName.mInt}:</div><div class="col-md-3"><input type="number" style="width: 100%;" value=${card.mInt} onblur="emuPkEditorSetActor('mInt',+this.value);"></input></div>
<div class="col-md-1">${gMsgAttrName.mVit}:</div><div class="col-md-3"><input type="number" style="width: 100%;" value=${card.mVit} onblur="emuPkEditorSetActor('mVit',+this.value);"></input></div>
<div class="col-md-1">${gMsgAttrName.mSpr}:</div><div class="col-md-3"><input type="number" style="width: 100%;" value=${card.mSpr} onblur="emuPkEditorSetActor('mSpr',+this.value);"></input></div>
<div class="col-md-1">${gMsgAttrName.mMnd}:</div><div class="col-md-3"><input type="number" style="width: 100%;" value=${card.mMnd} onblur="emuPkEditorSetActor('mMnd',+this.value);"></input></div>
`
        ;

        elPkEditorEquip.innerHTML = `<summary>${gMsgPanelName.Equip}</summary>`;
        elPkEditorEquip.append(elPkEditorEquipList);
        equips.forEach((e, i) => {
            elPkEditorEquipList.append(document.createElement("div"));
            window.emuPkEditorSetEquip(i, null, null);
        });

        elPkEditorAura.innerHTML = `
        <summary>${gMsgPanelName.Aura}</summary>
        ${Object.keys(gEmuAuraKind).map((k) => {
            const v = gEmuAuraKind[k];
            return `<div data-toggle="tooltip" data-tip-class="tooltip-info" data-placement="top" title="" class="btn${aura.has(+k) ? " btn-primary" : ""}" onclick="(this._d.flip(${k}))?this.classList.remove('btn-primary'):this.classList.add('btn-primary'); emuPkEditorSetActor('','');" style="padding: 1%; margin: 1%;" data-original-title="${gMsgAuraDesc[k]}"><i class="icon icon-bookmark-empty"></i>&nbsp;${gMsgAuraName[k]}<br><span class="label label-badge">${gMsgPanelName.Require} ${v.cost} ${gMsgPanelName.Point}</span></div>`;
        }).join("")}
`
        ;
        [...elPkEditorAura.getElementsByTagName("div")].forEach((e) => {e._d = aura;});

        elPkEditorAmulet.innerHTML = `
<summary>${gMsgPanelName.Amulet}</summary>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulStr}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mStr} onchange="this._d.mStr=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulAgi}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mAgi} onchange="this._d.mAgi=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulInt}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mInt} onchange="this._d.mInt=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulVit}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mVit} onchange="this._d.mVit=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulSpr}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mSpr} onchange="this._d.mSpr=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulMnd}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mMnd} onchange="this._d.mMnd=+this.value;"></input></div></div><br>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulPowP}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mPowP} onchange="this._d.mPowP=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulPowM}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mPowM} onchange="this._d.mPowM=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulSpd}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mSpd} onchange="this._d.mSpd=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulRec}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mRec} onchange="this._d.mRec=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulHp}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mHp} onchange="this._d.mHp=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulSd}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mSd} onchange="this._d.mSd=+this.value;"></input></div></div><br>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulLch}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mLch} onchange="this._d.mLch=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulRfl}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mRfl} onchange="this._d.mRfl=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulCrt}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mCrt} onchange="this._d.mCrt=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulSkl}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mSkl} onchange="this._d.mSkl=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulDefP}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mDefP} onchange="this._d.mDefP=+this.value;"></input></div></div>
<div class="col-md-2"><div class="col-xs-3">${gMsgAttrName.mAmulDefM}:</div><div class="col-xs-9"><input type="number" style="width: 100%;" value=${amulet.mDefM} onchange="this._d.mDefM=+this.value;"></input></div></div>
<br><br>
`
        ;
        [...elPkEditorAmulet.getElementsByTagName("input")].forEach((e) => {e._d = amulet;});

        elPkEditorWish.innerHTML = `
<summary>${gMsgPanelName.Wish}</summary>
<div class="row">
<div class="col-md-6"><div class="col-xs-6">${gMsgAttrName.mHpPot}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${wish.mHpPot} onchange="this._d.mHpPot=+this.value;"></div></div>
<div class="col-md-6"><div class="col-xs-6">${gMsgAttrName.mSdPot}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${wish.mSdPot} onchange="this._d.mSdPot=+this.value;"></div></div>
<div class="col-md-6"><div class="col-xs-6">${gMsgAttrName.mAura101}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${wish.mAura101} onchange="this._d.mAura101=+this.value;"></div></div>
<div class="col-md-6"><div class="col-xs-6">${gMsgAttrName.mAura102}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${wish.mAura102} onchange="this._d.mAura102=+this.value;"></div></div>
<div class="col-md-6"><div class="col-xs-6">${gMsgAttrName.mAura103}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${wish.mAura103} onchange="this._d.mAura103=+this.value;"></div></div>
<div class="col-md-6"><div class="col-xs-6">${gMsgAttrName.mPowBuf}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${wish.mPowBuf} onchange="this._d.mLifeBuf=+this.value;"></div></div>
<div class="col-md-6"><div class="col-xs-6">${gMsgAttrName.mLifeBuf}</div><div class="col-xs-6"><input type="number" style="width: 100%;" value=${wish.mLifeBuf} onchange="this._d.mPowBuf=+this.value;"></div></div>
</div>
`
        ;
        [...elPkEditorWish.getElementsByTagName("input")].forEach((e) => {e._d = wish;});
    },

    // Open the editor
    emuPkEditorOpen = (e) => {
        elPkEditor._unit = e._unit;
        elPkEditor._elem = e;
        emuPkEditorShow();
        elPkConfigBody.innerHTML = "";
        elPkConfigBody.append(elPkEditor);
    },

    // Close the editor
    emuPkEditorClose = () => {
        elPkConfigBody.innerHTML = "";
        elPkConfigBody.append(elPkConfigLeft, elPkConfigRight);
    },

    // Close the editor, with writting to card stats
    emuPkEditorConfirm = () => {
        elPkEditor._unit.set();
        emuPkUpdate(elPkEditor._elem);
        emuPkEditorClose();
    },
    
    // Add a card to array
    emuPkCardCtor = (E, d) => {
        const
            unit = new Unit(),
            el = document.createElement("div"),
            _left = document.createElement("div"),
            _right = document.createElement("div"),
            _head = document.createElement("div"),
            _main = document.createElement("details"),
            _summary = document.createElement("summary"),
            _status = document.createElement("details"),
            _wish = document.createElement("details"),
            _amulet = document.createElement("details")
        ;

        el.classList = "row fygemu_cc";
        el.style = "margin: 1% 0 1% 0;"
        el._selected = !0;
        el._head = _head;
        el._main = _main;
        el._summary = _summary;
        el._status = _status;
        el._wish = _wish;
        el._amulet = _amulet;
        el._left = _left;
        el._right = _right;
        el.append(_head, _main);
        _head.classList = "col-xs-12 col-md-1 btn btn-primary";
        _head.innerHTML = "Fight";
        _head.onclick = () => { el._selected = el._selected ? (_head.classList.remove('btn-primary'), !!0) : (_head.classList.add('btn-primary'), !0); } ;
        _main.classList = "col-xs-12 col-md-11";
        _main.append(_summary, _right, _left);
        _summary.classList = "fyg_lh30";
        _left.classList = "col-md-9";
        _right.classList = "col-md-3";
        _right._import = () => emuPkImport(el);
        _right._export = () => emuPkExport(el);
        _right._config = () => emuPkEditorOpen(el);
        _right._remove = () => emuPkCardDtor(E, el);
        _left.append(_status, document.createElement("hr"), _wish, document.createElement("hr"), _amulet, document.createElement("br"));
        
        el._unit = unit;

        if (d) { unit.fromJson(d); }
        emuPkUpdate(el);
        E.append(el);

        return el;
    },

    // Remove a card from array
    emuPkCardDtor = (E, el) => {
        E.removeChild(el);
    },

    // Import from array
    emuPkImportAll = (E) => {
        elIoReader.onchange = () => elIoReader.files[0].text().then(
            (d) => {
                const A = JSON.parse(d);

                // Import single card
                if (!A.length) { return emuPkCardCtor(E, A); }

                // Replace whole array
                E.innerHTML = "";
                A.forEach((a) => emuPkCardCtor(E, a));
            }
        );
        elIoReader.click();
    },

    // Export to array
    emuPkExportAll = (E) => {
        elIoWriter.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify([...E.children].map((e) => e._unit.toJson()), null, 4));
        elIoWriter.download = ".json";
        elIoWriter.click();
    }
    
    ;

    elRoot.style = `width:95%;${gUsrJson.ScreenWidth > 0 ? ` max-width:${gUsrJson.ScreenWidth}px;` : "" } margin: 0 auto;`;

    elHeader.classList = "row";
    elModal.classList = "modal fade load-indicator";
    elFooter.classList = "row fyg_lh60 fyg_tc";

    elIoBar.style = "display: none;";
    elIoBar.append(elIoReader, elIoWriter);
    elIoReader.type = "file";

    elPkBoard.classList = "row";

    elPkConfig.classList = "row";
    elPkConfig.append(elPkConfigPanel);
    elPkConfigPanel.classList = "panel panel-primary";
    elPkConfigPanel.append(elPkConfigHead, elPkConfigBody);
    elPkConfigHead.classList = "panel-heading";
    elPkConfigHead.onclick = () => { elPkConfigBody.style.display = elPkConfigBody.style.display ? "" : "none"; };
    elPkConfigBody.classList = "panel-body";
    elPkConfigBody.style = "display: none;";
    elPkConfigBody.append(elPkConfigLeft, elPkConfigRight);
    elPkConfigLeft.classList = "col-xs-12 col-md-6 alert alert-danger fygemu_cl";
    elPkConfigRight.classList = "col-xs-12 col-md-6 alert alert-info fygemu_cr";
    elPkConfigLeftHead._import = () => emuPkImportAll(elPkConfigLeftUnit);
    elPkConfigLeftHead._export = () => emuPkExportAll(elPkConfigLeftUnit);
    elPkConfigLeftHead._create = () => emuPkCardCtor(elPkConfigLeftUnit, null);
    elPkConfigRightHead._import = () => emuPkImportAll(elPkConfigRightUnit);
    elPkConfigRightHead._export = () => emuPkExportAll(elPkConfigRightUnit);
    elPkConfigRightHead._create = () => emuPkCardCtor(elPkConfigRightUnit, null);
    elPkConfigLeft.append(elPkConfigLeftHead, elPkConfigLeftUnit);
    elPkConfigRight.append(elPkConfigRightHead, elPkConfigRightUnit);

    elPkEditor.append(
        elPkEditorTool, document.createElement("hr"),
        elPkEditorActor, document.createElement("hr"),
        elPkEditorEquip, document.createElement("hr"),
        elPkEditorAura, document.createElement("hr"),
        elPkEditorAmulet, document.createElement("hr"),
        elPkEditorWish
    );
    elPkEditorActor.open = elPkEditorEquip.open = elPkEditorAmulet.open = elPkEditorWish.open = elPkEditorAura.open = !0;
    elPkEditorTool.classList = "row";
    elPkEditorTool.append(elPkEditorImage, elPkEditorConfirm, elPkEditorClose, elPkEditorMeta);
    elPkEditorImage.classList = "col-xs-12 col-md-2";
    elPkEditorConfirm.classList = "col-xs-12 col-md-4 fyg_lh40";
    elPkEditorConfirm.style = `padding: 1% 1%; margin: 1% 4%;`;
    elPkEditorConfirm.onclick = emuPkEditorConfirm;
    elPkEditorClose.classList = "col-xs-12 col-md-4 fyg_lh40";
    elPkEditorClose.style = `padding: 1% 1%; margin: 1% 4%;`;
    elPkEditorClose.onclick = emuPkEditorClose;
    elPkEditorMeta.classList = "col-xs-12 col-md-10 fyg_lh24";
    elPkEditorActor.classList = "row";
    elPkEditorEquip.classList = "row";
    elPkEditorAura.classList = "row";
    elPkEditorAmulet.classList = "row";
    elPkEditorWish.classList = "row";

    elPkOutput.classList = "row";
    elPkOutput.append(elPkOutputPanel);
    elPkOutputPanel.classList = "panel panel-primary";
    elPkOutputPanel.append(elPkOutputHead, elPkOutputBody);
    elPkOutputHead.classList = "panel-heading";
    elPkOutputHead.onclick = () => { elPkOutputBody.style.display = elPkOutputBody.style.display ? "" : "none"; };
    elPkOutputBody.classList = "panel-body";
    elPkOutputBody.style = "display: none";
    elPkManual.classList = "row";
    
    elBack.classList = "modal-backdrop fade";
    elBack.style = "display: none;";

    window.gLocale = gUsrJson.Locale || "zz";
    window.gPage = gUsrJson.Page || "index";
    window.elIoBar = elIoBar;
    window.elIoReader = elIoReader;
    window.elIoWriter = elIoWriter;

    document.body.append(elIoBar, elRoot, elBack);
    
    // API : Editor (Actor)
    window.emuPkEditorSetActor = (attr, value) => {
        const unit = elPkEditor._unit, card = unit.mCard;

        if (attr in card) { card[attr] = value; }

        const 
            kind = card.mActor, quality = card.mQuality,
            snow = unit.mAuras.size, smax = card.mSkill,
            pnow = card.mStr + card.mAgi + card.mInt + card.mVit + card.mSpr + card.mMnd,
            pmax = gNumberCast((card.mLevel * 3 + 6) * (1 + quality * 0.01))
        ;

        elPkEditorImage.style = `margin: 0;`;
        elPkEditorImage.src = `${gUsrActorDir}N${card.mActor[kind] || kind}${gUsrActorExt}`;
        elPkEditorImage.onload = () => {
            elPkEditorImage.style = `margin: ${(elPkEditorTool.clientHeight - elPkEditorImage.clientHeight) >> 1}px 0;`;
        }

        elPkEditorMeta.innerHTML = `
<hr>
<div class="col-md-12"><div class="col-xs-4">${gMsgAttrName.mActor}:</div><div class="col-xs-8"><select style="width: 100%;" onchange="emuPkEditorSetActor('mActor',+this.value);">${
    Object.keys(gEmuActorKind).map((k) => `<option value=${k}${(+k == kind) ? " selected" : ""}>${gMsgActorName[k]}</option>`).join("")
}</select></div></div>
<div class="col-md-12"><div class="col-xs-4">${gMsgAttrName.mLevel}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${card.mLevel} onblur="emuPkEditorSetActor('mLevel',+this.value);"></input></div></div>
<div class="col-md-12"><div class="col-xs-4">${gMsgAttrName.mQuality}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${quality} onblur="emuPkEditorSetActor('mQuality',+this.value);"></input></div></div>
<div class="col-md-12"><div class="col-xs-4">${gMsgAttrName.mGrowth}:</div><div class="col-xs-8"><input type="number" style="width: 100%;" value=${card.mGrowth} onblur="emuPkEditorSetActor('mGrowth',+this.value);"></input></div></div>
<div class="col-md-12"><div class="col-xs-4">${gMsgAttrName.mSkill}:</div><div class="col-xs-4"><input type="number" class="${(snow > smax) ? "bg-danger" : "bg-success"}" style="width: 100%;" value=${snow} disabled></input></div><div class="col-xs-4"><input type="number" style="width: 100%;" value=${smax} onblur="emuPkEditorSetActor('mSkill',+this.value);"></input></div></div>
<div class="col-md-12"><div class="col-xs-4">${gMsgAttrName.mPoint}:</div><div class="col-xs-4"><input type="number" class="${(pnow > pmax) ? "bg-danger" : "bg-success"}" style="width: 100%;" value=${pnow} disabled></input></div><div class="col-xs-4"><input type="number" style="width: 100%;" value=${pmax} disabled></input></div></div>
`
        ;

    };

    // API : Editor (Equip)
    window.emuPkEditorSetEquip = (i, attr, value) => {
        const equip = elPkEditor._unit.mEquips[i], el = elPkEditorEquipList.children[i];

        if (typeof(attr) == "number") {
            equip.mQuality[attr] = value;
        }
        else if (attr in equip) {
            equip[attr] = value;
        }
        equip.set();

        const kind = equip.mKind, rank = equip.mRank, Q = equip.mQuality, R = equip.mStats;

        el.classList = "col-md-3";
        el.innerHTML = `
<div class="alert alert-primary">
<div class="row"><button type="button" class="btn fyg_colpzbg fyg_mp3" data-toggle="tooltip" data-placement="bottom" style="width: 47px; height: 47px; background-image: url('${gUsrEquipDir}${gUsrEquipMap[equip.mKind] || equip.mKind}${gUsrEquipRankMap[equip.mRank] || "_"+equip.mRank}${gUsrEquipExt}');" onclick=""><br>${equip.mLevel}</button></div>
<div class="row"><br></div>
<div class="row"><p class="with-padding fyg_colpz0${rank}bg">
Lv.<input type="number" style="width: 25%;" value=${equip.mLevel} onblur="window.emuPkEditorSetEquip(${i},'mLevel',this.value);">
<select onchange="window.emuPkEditorSetEquip(${i},'mRank',+this.value);">${
Object.keys(gEmuEquipRankKind).map(
    (k) => `<option value=${k}${(+k == rank) ? " selected" : ""}>${gMsgEquipRankName[k]}</option>`).join("")
}</select>
<select onchange="window.emuPkEditorSetEquip(${i},'mKind',+this.value);">${
Object.keys(gEmuEquipKind).map(
    (k) => `<option value=${k}${(+k == kind) ? " selected" : ""}>${gMsgEquipName[k]}</option>`).join("")
}</select>
</p></div>
${gEmuEquipKind[kind].map((a, t) => {
    const k = a[0], q = Q[t], x = (q > 100) ? (q > 130) ? "danger" : (q > 120) ? "warning" : "success" : (q > 80) ? "info" : "primary";
    return `<p class="fyg_xlxx${x}">${gMsgEquipAttrName[k]} ${R[t]}<span class="pull-right bg-${x}" style="width: 33%; float: right;">&nbsp;<input type="number" style="width: 75%;" value=${q} onblur="window.emuPkEditorSetEquip(${i},${t},+this.value);">%&nbsp;</span></p>`;
}).join("")}
${
    equip.mSpecial ?
    `<p class="bg-danger with-padding" onclick="window.emuPkEditorSetEquip(${i},'mSpecial',0);">${gMsgEquipMyst[kind]}</p>`:
    `<p class="bg-info with-padding" onclick="window.emuPkEditorSetEquip(${i},'mSpecial',1);">${gMsgEquipDesc[kind]}</p>`
}
</div>
`
        ;
    };

    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // * Page Renderer *
    // --------------------------------------------------------------------------------------------------------------------------------------------------------

    const 

    uiPageClear = () => {
        elRoot.innerHTML = "";
    }
    
    uiPageHeader = () => {
        const gLocale = window.gLocale;
        const gPage = window.gPage;

        elHeader.innerHTML = `
<div class="panel">
    <div class="panel-body">
        <div class="row">
            <div class="col-xs-10">
                <div style="letter-spacing:2px;">
                    <span class="fyg_colpz06 fyg_f24">${gUsrJson.ID}</span>
                    <span class="label label-primary">${gMsgPanelName.fygRank}：${gUsrJson.Rank}</span>
                    <span class="label label-primary">${gMsgPanelName.fygLevel}：${gUsrJson.Level}</span>
                    <span class="label label-danger">${gUsrJson.SVip}</span>
                    <span class="label label-warning">${gUsrJson.BVip}</span>			
                </div>
                <hr>
                <div class="btn-group">
                    <button type="button" class="btn btn-lg${gLocale == "zz" ? " btn-primary" : ""}" onclick="window.gLocale='zz'; reload();">DEBUG</button>
                    <button type="button" class="btn btn-lg${gLocale == "cs" ? " btn-primary" : ""}" onclick="window.gLocale='cs'; reload();">簡體中文</button>
                    <button type="button" class="btn btn-lg${gLocale == "ct" ? " btn-primary" : ""}" onclick="window.gLocale='ct'; reload();">繁體中文</button>
                    <button type="button" class="btn btn-lg${gLocale == "jp" ? " btn-primary" : ""}" onclick="window.gLocale='jp'; reload();">日本語</button>
                </div>
                <hr>
                <div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-lg${(gPage == "pk") ? " btn-primary" : ""}" onclick="window.gPage='pk'; reload();">${gMsgPanelName.fygPk}</button>&nbsp;
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn btn-lg${(gPage == "equip") ? " btn-primary" : ""}" onclick="window.gPage='equip'; reload();">${gMsgPanelName.fygEquip}</button>
                        <button type="button" class="btn btn-lg${(gPage == "wish") ? " btn-primary" : ""}" onclick="window.gPage='wish'; reload();">${gMsgPanelName.fygWish}</button>
                        <button type="button" class="btn btn-lg${(gPage == "beach") ? " btn-primary" : ""}" onclick="window.gPage='beach'; reload();">${gMsgPanelName.fygBeach}</button>
                        <button type="button" class="btn btn-lg${(gPage == "gift") ? " btn-primary" : ""}" onclick="window.gPage='gift'; reload();">${gMsgPanelName.fygGift}</button>
                        <button type="button" class="btn btn-lg${(gPage == "shop") ? " btn-primary" : ""}" onclick="window.gPage='shop'; reload();">${gMsgPanelName.fygShop}</button>
                    </div>
                </div>
            </div>
            <div class="col-xs-2" style="letter-spacing:1px;">
                <h5 class="with-padding hl-gray">${gMsgPanelName.fygCoin1}：<span class="fyg_f14">${gUsrJson.Coin1}</span></h5>
                <h5 class="with-padding hl-gray">${gMsgPanelName.fygCoin2}：<span class="fyg_f14">${gUsrJson.Coin2}</span></h5>
                <h5 class="with-padding hl-gray">${gMsgPanelName.fygCoin3}：<span class="fyg_f14">${gUsrJson.Coin3}</span></h5>
            </div>
        </div>
    </div>
</div>
        `;

        elRoot.append(elHeader);
    },

    uiPageBody = {
        "index": () => {
            elDummy.innerHTML = "<p>fyg_index</p>";
            elRoot.append(elDummy);
        },

        "pk": () => {
            elPkBoard.innerHTML = `
<div class="panel panel-primary">
    <div class="panel-body">
        <div class="load-indicator" id="pklist">
            <div class="row">
                <div class="col-md-2 fyg_tc">
                    ${gMsgPanelName.Rank}<br>
                    <span class="fyg_colpz05" style="font-size:48px;font-weight:900;">${gUsrJson.Rank}</span><br><br>
                    ${gMsgPanelName.Prog}<br>
                    <span class="fyg_colpz02" style="font-size:32px;font-weight:900;">${gUsrJson.Prog}</span>
                </div>
                <div class="col-md-8">
                    <button type="button" class="btn btn-block fyg_lh30" onclick="this.blur(); emuStartBattle();"><span class="fyg_f18">${gMsgPanelName.PkButton1}</span><br>${gMsgPanelDesc.PkButton1}</button>
                    <button type="button" class="btn btn-block fyg_lh30" onclick="this.blur(); elIoReader.onchange=()=>elIoReader.files[0].text().then(logLoader); elIoReader.click();"><span class="fyg_f18">${gMsgPanelName.PkButton2}</span><br>${gMsgPanelDesc.PkButton2}</button>
                </div>
                <div class="col-md-2 fyg_tc">
                    ${gMsgPanelName.Fuel}<br>
                    <span class="fyg_colpz03" style="font-size:32px;font-weight:900;">${gUsrJson.Fuel}</span><br>
                    <div class="btn-group">
                        <button type="button" class="btn btn-success btn-lg dropdown-toggle" data-toggle="dropdown">${gMsgPanelName.Recover}</button>
                        <ul class="dropdown-menu" role="menu"><li><a style="color:#EA644A;" onclick=";">${gMsgPanelName.RecoverA}${gUsrJson.Cost}${gMsgPanelName.RecoverB}</a></li></ul>
                    </div>
                    <br><br>
                    ${gMsgPanelName.NpcStr}<br>
                    <span class="fyg_colpz04" style="font-size:32px;font-weight:900;">${gUsrJson.NpcLv}</span><br><br>
                </div>
            </div>
        </div>
    </div>
</div>
            `;

            elPkConfigHead.innerHTML = gMsgPanelName.Config;
            elPkOutputHead.innerHTML = gMsgPanelName.Output;

            elPkManual.innerHTML = `
<div class="panel panel-info">
    <div class="panel-heading">
        ${gMsgPanelName.Manual}
    </div>
    <div class="panel-body">
        <i class="icon icon-bolt text-danger">${gMsgPanelDesc.ManPowerP}</i>&nbsp;&nbsp;
        <i class="icon icon-bolt text-primary">${gMsgPanelDesc.ManPowerM}</i>&nbsp;&nbsp;
        <i class="icon icon-bolt text-warning">${gMsgPanelDesc.ManPowerA}</i>&nbsp;&nbsp;
        <i class="icon icon-minus text-danger">${gMsgPanelDesc.ManDamageH}</i>&nbsp;&nbsp;
        <i class="icon icon-minus text-info">${gMsgPanelDesc.ManDamageS}</i>&nbsp;&nbsp;
        <i class="icon icon-plus text-danger">${gMsgPanelDesc.ManRecoverH}</i>&nbsp;&nbsp;
        <i class="icon icon-plus text-info">${gMsgPanelDesc.ManRecoverS}</i>
        <br><br>
        ${gMsgPanelDesc.Manual}
    </div>
</div>
            `;
            
            elPkConfigLeftHead.innerHTML = elPkConfigRightHead.innerHTML = `
<button style="width: 100%; padding:5px 0 5px 0; margin:5px 0 5px 0;" onclick="this.parentElement._import();">${gMsgPanelName.Import}</button><br>
<button style="width: 100%; padding:5px 0 5px 0; margin:5px 0 5px 0;" onclick="this.parentElement._export();">${gMsgPanelName.Export}</button><br>
<button style="width: 100%; padding:5px 0 5px 0; margin:5px 0 5px 0;" onclick="this.parentElement._create();">${gMsgPanelName.Create}</button><br>
<hr><br>
            `;
            
            elPkEditorConfirm.innerHTML = gMsgPanelName.Confirm;
            elPkEditorClose.innerHTML = gMsgPanelName.Close;

            [...elPkConfigLeftUnit.children].forEach(emuPkUpdate);
            [...elPkConfigRightUnit.children].forEach(emuPkUpdate);
            emuPkEditorShow();

            elRoot.append(elPkBoard, elPkConfig, elPkOutput, elPkManual);
            
        },

        "equip": () => {
            elDummy.innerHTML = "<p>fyg_equip</p>";
            elRoot.append(elDummy);
        },

        "wish": () => {
            elDummy.innerHTML = "<p>fyg_wish</p>";
            elRoot.append(elDummy);
        },

        "beach": () => {
            elDummy.innerHTML = "<p>fyg_beach</p>";
            elRoot.append(elDummy);
        },
        
        "gift": () => {
            elDummy.innerHTML = "<p>fyg_gift</p>";
            elRoot.append(elDummy);
        },
        
        "shop": () => {
            elDummy.innerHTML = "<p>fyg_shop</p>";
            elRoot.append(elDummy);
        }
    },

    uiPageFooter = () => {
        
        /*
        elModal.innerHTML = `
    <div class="modal-dialog" style="width:600px;">
        <div class="modal-content">
            <div class="modal-body fyg_f14"></div>
        <div class="modal-footer"><button type="button" class="btn btn-block" data-dismiss="modal">${gMsgPanelName.Close}</button></div>
    </div>
`
        ;

        elModal.innerHTML = `<div class="modal fade load-indicator in" id="mymessage" style="display: block;" aria-hidden="false">
  <div class="modal-dialog" style="width: 600px; top: 172px;">
    <div class="modal-content">
        <div class="modal-body fyg_f14" id="mymessagehtml" style="max-height: initial; overflow: visible;"></div>
      <div class="modal-footer"><button type="button" class="btn btn-block" data-dismiss="modal">${gMsgPanelName.Close}</button></div>
    </div>
  </div>
</div>
`
        ;
        */
        elFooter.innerHTML = `
<a class="label label-primary label-outline" onclick="window.gPage='index'; reload();">${gMsgPanelName.fygLogout}</a>
<a class="label label-outline" onclick="window.gPage='index'; reload();">${gMsgPanelName.fygNews}</a>
`
        ;

        // elRoot.append(elModal);
        elRoot.append(elFooter);
    }

    ;

    window.reload = () => {

        gMsgJson = gMsgJsons[window.gLocale] || gMsgZzJson;
        gMsgMetaData = gMsgJson.MetaData,
        gMsgPanelName = gMsgJson.PanelName;
        gMsgPanelDesc = gMsgJson.PanelDesc;
        gMsgAttrName = gMsgJson.AttrName;
        gMsgAttrInfo = gMsgJson.AttrInfo;
        gMsgActUIInfo = gMsgJson.ActUIInfo;
        gMsgActorName = gMsgJson.ActorName;
        gMsgSkill1Name = gMsgJson.Skill1Name;
        gMsgSkill2Name = gMsgJson.Skill2Name;
        gMsgSkill3Name = gMsgJson.Skill3Name;
        gMsgStatusName = gMsgJson.StatusName;
        gMsgEquipName = gMsgJson.EquipName;
        gMsgEquipDesc = gMsgJson.EquipDesc;
        gMsgEquipMyst = gMsgJson.EquipMyst;
        gMsgEquipAttrName = gMsgJson.EquipAttrName;
        gMsgEquipRankName = gMsgJson.EquipRankName;
        gMsgAuraName = gMsgJson.AuraName;
        gMsgAuraDesc = gMsgJson.AuraDesc;

        document.title = gMsgMetaData.Title;
        {
            const meta = document.getElementsByTagName("meta");
            meta.keywords.content = gMsgMetaData.Keywords;
            meta.description.content = gMsgMetaData.Description;
        }

        uiPageClear();
        uiPageHeader();
        (uiPageBody[window.gPage] || (() => elRoot.append(elDummy)))();
        uiPageFooter();
    
    }

    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // * Battle Loader *
    // --------------------------------------------------------------------------------------------------------------------------------------------------------

    window.logLoader = (msg) => {
        elPkOutputBody.innerHTML = msg.replaceAll("ys/icon/z/z", gUsrEquipDir).replaceAll(".gif", gUsrEquipExt).replaceAll("col-md", "col-xs");
        const elPanelR = document.getElementsByClassName("col-xs-7 fyg_tr")[0], elPanelL = document.getElementsByClassName("col-xs-7 fyg_tl")[0];
        const 
            nameR = elPanelR.children[0].innerText.split("（"), nameL = elPanelL.children[0].innerText.split("（"),
            kindR = gEmuActorKeys[nameR[1].includes("野怪") ? nameR[0] : nameR[1].at(-2)],
            kindL = gEmuActorKeys[nameL[1].includes("野怪") ? nameL[0] : nameL[1][0]]
        ;
        elPanelR.style.backgroundImage = `url("${gUsrActorDir}R${gUsrActorMap[kindR] || kindR}${gUsrActorExt}")`;
        elPanelL.style.backgroundImage = `url("${gUsrActorDir}/L${gUsrActorMap[kindL] || kindL}${gUsrActorExt}")`;
        elPanelL.style.backgroundPosition = elPanelR.style.backgroundPosition = "center";
        elPanelL.style.backgroundSize = elPanelR.style.backgroundSize = "contain";
        elPanelL.style.backgroundRepeat = elPanelR.style.backgroundRepeat = "no-repeat";
    };

    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // * Battle Engine *
    // --------------------------------------------------------------------------------------------------------------------------------------------------------

    class Fighter extends BattleObject {

        constructor (c, i) {
            super(c, i);
            this.nUiBuffer = [];
        }

        uiClear () {
            this.nUiBuffer = [];
        }

        uiGetActInfo (i) {
            return gMsgActUIInfo[i];
        }

        uiAddActInfo (i) {
            this.nUiBuffer.unshift(
                `<i class="icon icon-location-arrow"><b>${gMsgActUIInfo[i]}</b></i>`
            );
        }
    
        uiAddHpPot () {
            this.nUiBuffer.unshift(
                `<i class="icon icon-bookmark-empty text-success"><b>${gMsgActUIInfo.HpPot}</b></i>`
            );
        }
    
        uiAddSdPot () {
            this.nUiBuffer.unshift(
                `<i class="icon icon-bookmark-empty text-success"><b>${gMsgActUIInfo.SdPot}</b></i>`
            );
        }
    
        uiAddStatus (i, m = "") {
            this.nUiBuffer.unshift(
                `<i class="icon icon-unlink"><b>${gMsgStatusName[i]}${gMsgActUIInfo.StatusPrefix}${m}${gMsgActUIInfo.StatusSuffix}</b></i>`
            );
        }
    
        uiAddSkl1 (i, m = "") {
            this.nUiBuffer.unshift(
                `<i class="icon icon-location-arrow"><b>${gMsgSkill1Name[i]}${gMsgActUIInfo.SkillPrefix}${m}${gMsgActUIInfo.SkillSuffix}</b></i>`
            );
        }
    
        uiAddSkl2 (i, m = "") {
            this.nUiBuffer.unshift(
                `<i class="icon icon-location-arrow"><b>${gMsgSkill2Name[i]}${gMsgActUIInfo.SkillPrefix}${m}${gMsgActUIInfo.SkillSuffix}</b></i>`
            );
        }
    
        uiAddSkl3 (i, m = "") {
            this.nUiBuffer.unshift(
                `<i class="icon icon-location-arrow"><b>${gMsgSkill3Name[i]}${gMsgActUIInfo.SkillPrefix}${m}${gMsgActUIInfo.SkillSuffix}</b></i>`
            );
        }
    
        uiAddAura (i, m = "") {
            this.nUiBuffer.unshift(
                `<i class="icon icon-bookmark-empty"><b>${gMsgAuraName[i]}${gMsgActUIInfo.AuraPrefix}${m}${gMsgActUIInfo.AuraSuffix}</b></i>`
            );
        }
    
        uiShow () {
            return this.nUiBuffer.join("&nbsp")
        }
    
        uiDrawDmg () {
            const pa = this.nPowP, ma = this.nPowM, aa = this.nPowA, hd = this.nDmgH, hr = this.nRecH, sd = this.nDmgS, sr = this.nRecS;
    
            return `
            ${(pa > 0) ? `<i class="icon icon-bolt text-danger fyg_f14">${Math.floor(pa)}</i>&nbsp;&nbsp;` : ""}
            ${(ma > 0) ? `<i class="icon icon-bolt text-primary fyg_f14">${Math.floor(ma)}</i>&nbsp;&nbsp;` : ""}
            ${(aa > 0) ? `<i class="icon icon-bolt text-warning fyg_f14">${Math.floor(aa)}</i>&nbsp;&nbsp;` : ""}
            ${(hd > 0) ? `<i class="icon icon-minus text-danger fyg_f14">${Math.floor(hd)}</i>&nbsp;&nbsp;` : ""}
            ${(hr > 0) ? `<i class="icon icon-plus text-danger fyg_f14">${Math.floor(hr)}</i>&nbsp;&nbsp;` : ""}
            ${(sd > 0) ? `<i class="icon icon-minus text-info fyg_f14">${Math.floor(sd)}</i>&nbsp;&nbsp;` : ""}
            ${(sr > 0) ? `<i class="icon icon-plus text-info fyg_f14">${Math.floor(sr)}</i>&nbsp;&nbsp;` : ""}
            `
        }
    
        uiDrawLife () {
            return `<span class="fyg_f14 text-info">${Math.ceil(this.mSdNow)}</span> | <span class="fyg_f14 text-danger">${Math.ceil(this.mHpNow)}</span>`
        }
    }

    // Dummy card for battle in case no card was selected
    const gUnitDummy = new Unit();
    elPkEditor._unit = gUnitDummy;
    
    // Start battle with current configurations
    window.emuStartBattle = () => {

        // Find first fighter
        let unitA = gUnitDummy, unitB = gUnitDummy;

        for (const el of elPkConfigLeftUnit.children) {
            const c = el._unit;
            if (c && el._selected) { unitA = c; break; }
        }
        for (const el of elPkConfigRightUnit.children) {
            const c = el._unit;
            if (c && el._selected) { unitB = c; break; }
        }

        const
            nRoundMax = gRules.RoundMax,
            T = [],
            A = new Fighter(unitA, "A"), B = new Fighter(unitB, "B")
        ;

        let nRoundNow = 1, nAttacker = A, nDefender = B;

        // Setup battle
        A.enemy(B);
        B.enemy(A);
        A.setup();
        B.setup();

        // Show Versus Message
        {
            
            const aflags = A.mFlags, bflags = B.mFlags;
            let anum = 0, bnum = 0;

            T.push(
`
        <div class="row"><div class="row">
    <div class="col-md-6" style="width: 50%; float: left;"><div class="alert alert-danger" style="background-color:#ffffff;border:1px #EA644A solid;"><div class="row">
    <div class="col-md-7 fyg_tr" style="float: right; background-image: url(&quot;${gUsrActorDir}R${gUsrActorMap[A.mActor] || A.mActor}${gUsrActorExt}&quot;); background-position: center; background-size: contain; background-repeat:no-repeat;">
    <span class="fyg_f18">${B.mIsPVE ? `${gMsgActorName[A.mActor]}（Lv.${unitA.nLevel} ${gMsgAttrInfo.mIsPVE}）` : `${unitA.mName}（Lv.${unitA.nLevel} ${gMsgActorName[A.mActor]}）`}</span><br>
        [${gMsgAttrInfo.mHpMax}:${Math.ceil(A.mHpMax)}] [${gMsgAttrInfo.mSdMax}:${Math.ceil(A.mSdMax)}]<br>
        [${gMsgAttrInfo.mSpd}:${Math.ceil(A.mSpd)}]<br>
        [${gMsgAttrInfo.mPowP}:${Math.ceil(A.mPowP)}] [${gMsgAttrInfo.mPowM}:${Math.ceil(A.mPowM)}]<br>
        [${gMsgAttrInfo.mDefP}:${Math.ceil(A.mDefP)}] [${gMsgAttrInfo.mDefM}:${Math.ceil(A.mDefM)}]<br>
        <br>
    </div>
    <div class="col-md-5 fyg_tl">
        <div${unitB.mIsPVE ? ` style="visibility: hidden;"` : ""}>
            ${unitA.mEquips.map(
                (e) => `<button type="button" class="btn fyg_colpzbg fyg_mp3" data-toggle="tooltip" data-placement="bottom" style="width: 47px; height: 47px; background-image: url('${gUsrEquipDir}${gUsrEquipMap[e.mKind] || e.mKind}${gUsrEquipRankMap[e.mRank] || "_"+e.mRank}${gUsrEquipExt}');" ><br>${e.mLevel}</button>`
            ).join("")}
        </div><br>
        ${Object.keys(gEmuAuraKind).map(
            (n) => aflags.has(+n) ? `|${gMsgAuraName[n]}|${(++anum % 3) ? "" : "<br>"}` : ""
        ).join("")}
    </div>
    </div></div></div>
    <div class="col-md-6" style="width: 50%; float: right;"><div class="alert alert-info" style="background-color:#ffffff;border:1px #03B8CF solid;">
    <div class="row"><div class="col-md-7 fyg_tl" style="float: left; background-image: url(&quot;${gUsrActorDir}L${gUsrActorMap[B.mActor] || B.mActor}${gUsrActorExt}&quot;); background-position: center; background-size: contain; background-repeat:no-repeat;">
    <span class="fyg_f18">${A.mIsPVE ? `${gMsgActorName[B.mActor]}（${gMsgAttrInfo.mIsPVE} Lv.${unitB.nLevel}）` : `${unitB.mName}（${gMsgActorName[B.mActor]} Lv.${unitB.nLevel}）`}</span><br>
        [${gMsgAttrInfo.mHpMax}:${Math.ceil(B.mHpMax)}] [${gMsgAttrInfo.mSdMax}:${Math.ceil(B.mSdMax)}]<br>
        [${gMsgAttrInfo.mSpd}:${Math.ceil(B.mSpd)}]<br>
        [${gMsgAttrInfo.mPowP}:${Math.ceil(B.mPowP)}] [${gMsgAttrInfo.mPowM}:${Math.ceil(B.mPowM)}]<br>
        [${gMsgAttrInfo.mDefP}:${Math.ceil(B.mDefP)}] [${gMsgAttrInfo.mDefM}:${Math.ceil(B.mDefM)}]<br>
        <br>
    </div>
    <div class="col-md-5 fyg_tr">
        <div${unitA.mIsPVE ? ` style="visibility: hidden;"` : ""}>
        ${unitB.mEquips.map(
            (e) => `<button type="button" class="btn fyg_colpzbg fyg_mp3" data-toggle="tooltip" data-placement="bottom" style="width: 47px; height: 47px; background-image: url('${gUsrEquipDir}${gUsrEquipMap[e.mKind] || e.mKind}${gUsrEquipRankMap[e.mRank] || "_"+e.mRank}${gUsrEquipExt}');" ><br>${e.mLevel}</button>`
        ).join("")}
        </div><br>
    ${Object.keys(gEmuAuraKind).map(
        (n) => bflags.has(+n) ? `|${gMsgAuraName[n]}|${(++bnum % 3) ? "" : "<br>"}` : ""
    ).join("")}
    </div></div></div></div></div>
`
            );
        }

        // Battle start
        let winner = 3;
        do {

            // Timer
            {
                let t = A.mSpdNow - B.mSpdNow;
                if (t < 0) {
                    nAttacker = B; nDefender = A; t = -t;
                }
                else {
                    nAttacker = A; nDefender = B;
                }
                nAttacker.mSpdNow = t;

                if (nDefender.restStart()) { nAttacker.mSpdNow = 0; }
            }

            nAttacker.actStart(nDefender);
            nAttacker.attack(nDefender);
            nDefender.defend(nAttacker);
            nAttacker.adjust();
            nDefender.adjust();
            nDefender.damage(nAttacker);
            nAttacker.damage(nDefender);
            A.heal();
            B.heal();
            A.check();
            B.check();
            nAttacker.link(nDefender);
            nDefender.link(nAttacker);
            winner = (+A.apply() << 1 | +B.apply());
            nAttacker.actEnd();
            nDefender.restEnd();

            T.push(`
            <div class="row"><div class="col-xs-6 fyg_tr fyg_fl"><p class="fyg_mp0 fyg_nw fyg_lh30${A.nIsAct ? " with-padding bg-special" : ""}" style="border-radius:0 20px 20px 0;">&nbsp;${A.uiShow()}&nbsp;&nbsp;&nbsp;</p></div><div class="col-xs-6 fyg_fr"><p class="fyg_mp0 fyg_nw fyg_lh30${B.nIsAct ? " with-padding bg-special" : ""}" style="border-radius:20px 0 0 20px;">&nbsp;${B.uiShow()}&nbsp;&nbsp;&nbsp;</p></div></div>
            <div class="row">
            <div class="col-xs-6"><div class="col-md-3 fyg_tc fyg_fr">${A.uiDrawLife()}</div><div class="col-md-9 fyg_fl"><p class="fyg_mp0 fyg_nw fyg_lh30 fyg_tr">&nbsp;${A.uiDrawDmg()}</p></div></div>
            <div class="col-xs-6"><div class="col-md-3 fyg_tc fyg_fl">${B.uiDrawLife()}</div><div class="col-md-9 fyg_fr"><p class="fyg_mp0 fyg_nw fyg_lh30 fyg_tl">&nbsp;${B.uiDrawDmg()}</p></div></div>
            </div>
            <div class="row" style="margin-bottom:10px;">
            <div class="col-xs-6 fyg_fl"><p class="bg-blue fyg_pvedt fyg_mp0 fyg_fr" style="width:${Math.ceil(100 * A.mSdNow / Math.max(A.mSdMax, 1))}%;"></p></div>
            <div class="col-xs-6 fyg_fr"><p class="bg-blue fyg_pvedt fyg_mp0" style="width:${Math.ceil(100 * B.mSdNow / Math.max(B.mSdMax, 1))}%;"></p></div>
            <div class="col-xs-6 fyg_fl"><p class="bg-red fyg_pvedt fyg_mp0 fyg_fr" style="width:${Math.ceil(100 * A.mHpNow / Math.max(A.mHpMax, 1))}%;"></p></div>
            <div class="col-xs-6 fyg_fr"><p class="bg-red fyg_pvedt fyg_mp0" style="width:${Math.ceil(100 * B.mHpNow / Math.max(B.mHpMax, 1))}%;"></p></div>
            </div>
            `);
            
        } while (winner > 2 && nRoundNow++ < nRoundMax);

        switch (winner) {

        // Round over
        case 3:
            T.push(`
            <div class="row">
        <div class="col-xs-12">&nbsp;</div>
        <div class="col-xs-12"><div class="alert alert-info with-icon" style="border:1px #03B8CF solid;"><h4>${gMsgPanelDesc.PKRoundOver}</h4></div></div>
        </div>
            `);

        // Draw
        case 0:

        // Attacker died
        case 1:
            T.push(`
            <div class="row">
    <div class="col-xs-12">&nbsp;</div>
    <div class="col-xs-12"><div class="alert alert-info with-icon fyg_tc" style="border:1px #03B8CF solid;"><i class="icon icon-frown"></i><h2>${unitA.mIsPVE ? gMsgActorName[unitB.nActor] : B.mName}${gMsgPanelDesc.PKWinner}</h2></div></div>
    </div>
            `);
            break;

        // Defender died
        case 2:
            T.push(`
            <div class="row">
    <div class="col-xs-12">&nbsp;</div>
    <div class="col-xs-12"><div class="alert alert-danger with-icon fyg_tc" style="border:1px #EA644A solid;"><i class="icon icon-smile"></i><h2>${unitB.mIsPVE ? gMsgActorName[unitA.nActor] : A.mName}${gMsgPanelDesc.PKWinner}</h2></div></div>
    </div>
            `);
        }

        T.push(`
        </div></div>
        `)

        // Fill results to the battle log.
        elPkOutputBody.innerHTML = T.join("");
    };

    // API: Console Debug
    window.emuSelfTest = () => {

        elPkConfigLeftUnit.innerHTML = "";
        elPkConfigRightUnit.innerHTML = "";
        const l = emuPkCardCtor(elPkConfigLeftUnit);
        const r = emuPkCardCtor(elPkConfigRightUnit);

        const 
            unitA = l._unit, unitB = r._unit,
            cardA = unitA.mCard, cardB = unitB.mCard,
            amuletA = unitA.mAmulet, amuletB = unitB.mAmulet,
            wishA = unitA.mWishs, wishB = unitB.mWishs
        ;

        unitA.mGrowth = 1000000;
        cardA.mStr = cardA.mAgi = cardA.mInt = cardA.mVit = cardA.mSpr = cardA.mMnd = 
        amuletA.mStr = amuletA.mAgi = amuletA.mInt = amuletA.mVit = amuletA.mSpr = amuletA.mMnd =
        amuletA.mPowP = amuletA.mPowM = amuletA.mSpd = amuletA.mRec = amuletA.mHp = amuletA.mSd = 
        amuletA.mLch = amuletA.mRfl = amuletA.mCrt = amuletA.mSkl = amuletA.mDefP = amuletA.mDefM =
        wishA.mHpPot = wishA.mSdPot = wishA.mAura101 = wishA.mAura102 = wishA.mAura103 = wishA.mLifeBuf = wishA.mPowBuf = 9999;
        
        cardB.mSpr = cardB.mVit = 999999;

        unitA.set();
        unitB.set();

        Object.keys(gEmuActorKind).forEach((k) => unitA.nFlags.add(+k));
        Object.keys(gEmuEquipKind).forEach((k) => unitA.nFlags.add(+k));
        Object.keys(gEmuAuraKind).forEach((k) => unitA.nFlags.add(+k));
        Object.keys(gEmuAuraKind).forEach((k) => unitB.nFlags.add(+k));
        unitB.nFlags.add(3008);

        emuPkUpdate(l);
        emuPkUpdate(r);

        emuStartBattle();
    }

    // --------------------------------------------------------------------------------------------------------------------------------------------------------
    // * Initialization *
    // --------------------------------------------------------------------------------------------------------------------------------------------------------

    reload();

})();
