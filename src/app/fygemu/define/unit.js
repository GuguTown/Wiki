/*
Project: fygemu
Authors: hirakana@kf
*/

class Unit extends ObjBase {
    
    constructor () {
        super();
        this.mName = gUsrJson.ID || "";
        this.mCard = new Card();
        this.mEquips = [new Equip(), new Equip(), new Equip(), new Equip()];
        this.mAmulet = new Amulet();
        this.mWishs = new Wish();
        this.mAuras = new Aura();
        this.mIsPVE = 0;
        this.clr();
    }

    clr () {

        this.nHpMaxMul = this.nHpMaxAdd = this.nHpHealRat = this.nHpHealMul = this.nHpHealAdd = 
        this.nSdMaxMul = this.nSdMaxAdd = this.nSdHealRat = this.nSdHealMul = this.nSdHealAdd =
        this.nPowMulP = this.nPowAddP = this.nPowMulM = this.nPowAddM = this.nPowMulA = this.nPowAddA = this.nSpdMul = this.nSpdAdd = 
        this.nBrcRatP = this.nBrcMulP = this.nBrcAddP = this.nBrcRatM = this.nBrcMulM = this.nBrcAddM = this.nBrcRatC = this.nBrcMulC = this.nBrcAddC =
        this.nDefMulP = this.nDefAddP = this.nDefMulM = this.nDefAddM = this.nResMulP = this.nResAddP = this.nResMulM = this.nResAddM =
        this.nSklMul = this.nSklAdd = this.nCrtMul = this.nCrtAdd = this.nSkl = this.nCrt = this.nLch = this.nRfl = 

        this.nLevel = this.nActor = this.nQuality = this.nSkill = this.nGrowth = 
        this.nStr = this.nAgi = this.nInt = this.nVit = this.nSpr = this.nMnd = 

        this.nAmulStr = this.nAmulAgi = this.nAmulInt = this.nAmulVit = this.nAmulSpr = this.nAmulMnd =
        this.nAmulPowP = this.nAmulPowM = this.nAmulSpd = this.nAmulRec = this.nAmulHp = this.nAmulSd = 
        this.nAmulLch = this.nAmulRfl = this.nAmulCrt = this.nAmulSkl = this.nAmulDefP = this.nAmulDefM = 

        this.nWishHpPot = this.nWishSdPot = this.nWishAura101 = this.nWishAura102 = this.nWishAura103 = this.nWishPowBuf = this.nWishLifeBuf = 0;
        this.nFlags = new Set();
    }

    setCard () {
        const c = this.mCard, a = this.mAmulet, l = c.mLevel;
        this.nLevel = l; this.nActor = c.mActor; this.nQuality = c.mQuality; this.nSkill = c.mSkill; this.nGrowth = c.mGrowth;
        this.nStr = gNumberCast(c.mStr + a.mStr); this.nAgi = gNumberCast(c.mAgi + a.mAgi); this.nInt = gNumberCast(c.mInt + a.mInt);
        this.nVit = gNumberCast(c.mVit + a.mVit); this.nSpr = gNumberCast(c.mSpr + a.mSpr); this.nMnd = gNumberCast(c.mMnd + a.mMnd);
        
        const T = {...this};

        for (const attr in gBaseStatAdd) {
            const x = T[attr], A = gBaseStatAdd[attr];
            if (x === undefined) { continue; }
            for (const stat in A) { this[stat] += gNumberCast(A[stat] * x); }
        }

        for (const attr in gBaseStatMul) {
            const x = T[attr], A = gBaseStatMul[attr];
            if (x === undefined) { continue; }
            for (const stat in A) {
                const a = this[stat];
                if (a === undefined) { continue; }
                this[stat] = gNumberCast(a * (1 + A[stat] * x));
            }
        }

        const actor = gEmuActorKind[this.nActor];
        for (const attr in actor) {
            const [m, a] = actor[attr];
            if (attr in this) { this[attr] += gNumberCast(m * l) + a; }
        }

        this.nFlags.add(this.nActor);
    }

    setEquip () {
        const stats = {...this}, equips = this.mEquips, flags = this.nFlags;

        equips.forEach((e) => {
            e.set();

            const R = e.mStats;

            gEmuEquipKind[e.mKind].forEach((a, i) => {
                const k = a[0], M = gEmuEquipStatMul[k] || {}, A = gEmuEquipStatAdd[k] || {}, r = R[i];

                for (const k1 in M) {
                    const N = M[k1];

                    for (const k2 in N) {
                        this[k1] += gNumberCast(r * N[k2] * stats[k2]);
                    }
                }

                for (const k1 in A) {
                    this[k1] += gNumberCast(r * A[k1]);
                }

            })

            if (e.mSpecial) { flags.add(e.mKind); }
        });
    }

    setAmulet () {
        const a = this.mAmulet;
        this.nAmulStr = a.mStr; this.nAmulAgi = a.mAgi; this.nAmulInt = a.mInt; this.nAmulVit = a.mVit; this.nAmulSpr = a.mSpr; this.nAmulMnd = a.mMnd;
        this.nAmulPowP = a.mPowP; this.nAmulPowM = a.mPowM; this.nAmulSpd = a.mSpd; this.nAmulRec = a.mRec; this.nAmulHp = a.mHp; this.nAmulSd = a.mSd;
        this.nAmulLch = a.mLch; this.nAmulRfl = a.mRfl; this.nAmulCrt = a.mCrt; this.nAmulSkl = a.mSkl; this.nAmulDefP = a.mDefP; this.nAmulDefM = a.mDefM; 
    }

    setWish () {
        const w = this.mWishs;
        this.nWishHpPot = w.mHpPot; this.nWishSdPot = w.mSdPot;
        this.nWishAura101 = w.mAura101; this.nWishAura102 = w.mAura102; this.nWishAura103 = w.mAura103;
        this.nWishPowBuf = w.mPowBuf; this.nWishLifeBuf = w.mLifeBuf;
    }

    setAura () {
        this.mAuras.forEach((i) => this.nFlags.add(i));
    }

    set () {
        this.clr();
        this.setCard();
        this.setEquip();
        this.setAmulet();
        this.setWish();
        this.setAura();
    }

    flip (flag) {
        const flags = this.nFlags, r = flags.has(flag);
        (r) ? flags.delete(flag) : flags.add(flag);
        return r;
    }

    fromJson (data) {
        for (const k in data) {
            const v = data[k];

            if (!(k in this)) { continue; }
            
            switch (k) {
            case "mCard":
            case "mAmulet":
            case "mWishs":
                this[k].fromJson(v);
                continue;

            case "mEquips":
                this.mEquips = v.map((e) => new Equip().fromJson(e));
                continue;
                
            case "mAuras":
                this.mAuras = new Aura(v);
                continue;

            case "nFlags":
                this.nFlags = new Set(v);
                continue;

            default:
                this[k] = v;
            }
        }

        return this;
    }

    toJson () {
        const R = {...this};
        
        R.mAuras = [...this.mAuras]; R.nFlags = [...this.nFlags];
        return R;
    }

    flipAura (aura) {
        const auras = this.mAuras, r = auras.has(aura);
        (r) ? auras.delete(aura) : auras.add(aura);
        return r;
    }

    flipFlag (flag) {
        const flags = this.nFlags, r = flags.has(flag);
        (r) ? flags.delete(flag) : flags.add(flag);
        return r;
    }
};
