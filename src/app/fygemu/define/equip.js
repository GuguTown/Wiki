/*
Project: fygemu
Authors: hirakana@kf
*/

class Equip {
    
    constructor () {
        this.mKind = 0;
        this.mLevel = 0;
        this.mQuality = [0, 0, 0, 0];
        this.mStats = [0, 0, 0, 0];
        this.mSpecial = 0;
        this.mRank = 1;
        this.clr();
    }

    clr () {
        ;
    }

    set () {
        const A = gEmuEquipKind[this.mKind], L = this.mLevel, Q = this.mQuality, R = this.mStats;
        this.clr();
        for (const i in Q) {
            const [attrKind, attrMul, attrAdd, attrRat] = A[i];
            R[i] = gNumberCast(gNumberCast(attrMul * L + attrAdd) * attrRat * (Q[i] * 0.01));
        }
    }

    fromJson (data) {

        for (const k in data) {
            if (k in this) { this[k] = data[k]; }
        }

        return this;
    }

    toJson () {
        return this;
    }
};

