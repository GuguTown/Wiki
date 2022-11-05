/*
Project: fygemu
Authors: hirakana@kf
*/

class BattleObject {

    constructor (u, i) {

        const 
            cflags = u.nFlags, clevel = u.nLevel,
            mPowMulP = u.nPowMulP, mPowAddP = u.nPowAddP,
            mPowMulM = u.nPowMulM, mPowAddM = u.nPowAddM,
            mPowMulA = u.nPowMulA, mPowAddA = u.nPowAddA
        ;

        let 
            mHpMax = u.nHpMaxMul + u.nHpMaxAdd, mHpRat = u.nAmulHp,
            mSdMax = u.nSdMaxMul + u.nSdMaxAdd, mSdRat = u.nAmulSd,
            mRecRat = u.nAmulRec,
            mPowP = mPowMulP + mPowAddP, mPowRatP = u.nAmulPowP,
            mPowM = mPowMulM + mPowAddM, mPowRatM = u.nAmulPowM,
            mPowA = mPowMulA + mPowAddA,
            mResP = u.nResMulP + u.nResAddP, mResM = u.nResMulM + u.nResAddM,
            mSpdRat = u.nAmulSpd, _mSpdRat = 1,
            _mBrcRatPRat = 1, _mBrcFixPRat = 1,
            _mBrcRatMRat = 1, _mBrcFixMRat = 1,
            mDefP = u.nDefMulP, _mDefPRat1 = 1, _mDefPRat2 = 1,
            mDefM = u.nDefMulM, _mDefMRat1 = 1, _mDefMRat2 = 1,
            mSklRat = u.nAmulSkl, mCrtRat = u.nAmulCrt,
            mLchRat = u.nLch + u.nAmulLch, mRflRat = u.nRfl + u.nAmulRfl
        ;

        this.mId = i; this.mName = u.mName; this.mActor = u.nActor;
        this.mFlags = cflags; this.mLevel = u.nLevel;
        this.mGrowth = u.nGrowth; this.mIsPVE = u.nIsPVE;
        this.mHpPot = u.nWishHpPot; this.mSdPot = u.nWishSdPot;

        this.mHpHealRat = u.nHpHealRat; this.mHpHealFix = u.nHpHealMul + u.nHpHealAdd;
        this.mSdHealRat = u.nSdHealRat; this.mSdHealFix = u.nSdHealMul + u.nSdHealAdd;
        this.mPowMulP = mPowMulP; this.mPowAddP = mPowAddP; 
        this.mPowMulM = mPowMulM; this.mPowAddP = mPowAddM; 
        this.mPowMulA = mPowMulA; this.mPowAddP = mPowAddA; 
        this.mBrcRatP = u.nBrcRatP; this.mBrcFixP = u.nBrcMulP + u.nBrcAddP;
        this.mBrcRatM = u.nBrcRatM; this.mBrcFixM = u.nBrcMulM + u.nBrcAddM;
        this.mBrcRatC = u.nBrcRatC; this.mBrcFixC = u.nBrcMulC + u.nBrcAddC;
        this.mDefPRat = u.nAmulDefP; this.mDefMRat = u.nAmulDefM;
        this.mSpd = u.nSpdAdd + u.nSpdMul;
        this.mSklMul = u.nSklMul; this.mSklAdd = u.nSklAdd; 
        this.mCrtMul = u.nCrtMul; this.mCrtAdd = u.nCrtAdd;


        // XUE
        if (cflags.has(204)) { mRecRat += 10; mLchRat += 10; }

        // CLOAK
        if (cflags.has(2304)) { mSdRat += 50; }

        // THORN
        if (cflags.has(2305)) { mRflRat += 30; }

        // SHI
        if (cflags.has(101)) {
            const t = clevel * 2 * (1 + u.nWishAura101 * 0.05);
            mResP += t; mResM += t;
        }

        // XIN
        if (cflags.has(102)) {
            const t = clevel * 10 * (1 + u.nWishAura102 * 0.05);
            mHpMax += t; mSdMax += t;
        }

        // FENG
        if (cflags.has(103)) {
            const t = clevel * 5 * (1 + u.nWishAura103 * 0.05);
            mPowP += t; mPowM += t;
        }

        // CI
        if (cflags.has(303)) {
            mDefP = gNumberCast(mDefP * 1.1);
            mDefM = gNumberCast(mDefM * 1.1);
            mRflRat += 20;
        }

        // BI
        if (cflags.has(201)) {
            _mBrcRatPRat = _mBrcFixPRat = 1.15;
        }

        // MO
        if (cflags.has(202)) {
            _mBrcRatMRat = _mBrcFixMRat = 1.15;
        }

        // JU
        if (cflags.has(403)) {
            _mSpdRat = 1.3;
        }

        // WU
        if (cflags.has(3000)) {
            mDefP = gNumberCast(mDefP * 1.15);
            mDefM = gNumberCast(mDefM * 1.15);
            mHpRat += 30;
            mSdRat += 30;
            mPowRatP += 30;
            mPowRatM += 30;
            mSpdRat += 30;
        }

        // MO
        if (cflags.has(3001)) {
            mSdMax += gNumberCast(mPowMulM * 1.8);
            mSdRat += 35;
        }

        // LIN
        if (cflags.has(3002)) { mHpRat += 30; }

        // AI
        if (cflags.has(3003)) { mLchRat += 15; }

        // MENG (TIARA)
        if (cflags.has(3004)) { mSdRat += cflags.has(2402) ? 45 : 30; }

        // WEI
        if (cflags.has(3005)) { mSklRat += 10; }

        // MING
        if (cflags.has(3007)) {
            _mDefPRat1 = _mDefMRat1 = 0.3;
            mHpRat += 90;
        }

        // XI
        if (cflags.has(3009)) {
            mHpRat += 10;
            mHpMax += u.nGrowth;
        }

        // DIAN
        if (cflags.has(306)) {
            _mDefPRat2 = _mDefMRat2 = 1.3;
        }
        
        // DUN
        this.mDmgPSdRat = cflags.has(203) ? 1.25 : 1.5;
        this.mDmgMSdRat = this.mDmgASdRat = 1.0;

        // SHENG
        this.mDefRatFull = cflags.has(206) ? 0.95 : 0.9;

        // ZHI
        this.mDefRatNegHp = 1.3; this.mDefRatNegSd = 1.6;
        if (cflags.has(308)) {
            this.mDefRatNegHp = this.mDefRatNegSd = 1.0;
        }
        this.mDefRatMulSd = 0.4;

        // JUE
        this.mDmgPRat = this.mDmgMRat = this.mDmgARat = 1.0;
        if (cflags.has(405)) {
            this.mDmgPRat = 0.8;
            this.mDmgMRat = 0.8;
            this.mDmgARat = 0.7;
        }

        // Wish
        if (u.nIsPVE) {
            const m = u.nWishPowBuf * 5, n = u.nWishLifeBuf * 5;

            mPowRatP += m; mPowRatM += m;
            mHpRat += n; mSdRat += n;
        }

        this.mHpNow = this.mHpMax = mHpMax = gNumberCast(mHpMax * (1 + mHpRat * 0.01));
        this.mSdNow = this.mSdMax = mSdMax = gNumberCast(mSdMax * (1 + mSdRat * 0.01)); 
        this.mLifeMax = mHpMax + mSdMax;
        this.mHpRecRat = this.mSdRecRat = mRecRat;
        this.mPowP = mPowP; this.mPowM = mPowM; this.mPowA = mPowA;
        this.mPowRatP = mPowRatP; this.mPowRatM = mPowRatM;
        this.mResP = mResP; this.mResM = mResM;
        this.mSpdRat = mSpdRat;
        this.mDefP = mDefP + u.nDefAddP; this.mDefM = mDefM + u.nDefAddM;
        this.mSklRat = mSklRat; this.mCrtRat = mCrtRat;
        this.mLchRat = mLchRat; this.mRflRat = mRflRat;

        this._mBrcRatPRat = _mBrcRatPRat; this._mBrcFixPRat = _mBrcFixPRat;
        this._mBrcRatMRat = _mBrcRatMRat; this._mBrcFixMRat = _mBrcFixMRat;
        this._mSpdRat = _mSpdRat;
        this._mDefPRat1 = _mDefPRat1; this._mDefPRat2 = _mDefPRat2;
        this._mDefMRat1 = _mDefMRat1; this._mDefMRat2 = _mDefMRat2;
        
        this.mPowPM = this.mSpdNow = 0;
        
        this.mStats = {};
        this.mStatus = Object.keys(gEmuStatusKind).map((t) => 0);
        this.mTurn = this.mWait = this.mRound = 0;

        this.nHpMin = this.nSdMin = -Infinity;
        this.nHpNow = this.nSdNow = 
        this.nPowP = this.nPowM = this.nPowA =
        this.nDmgH = this.nDmgS = this.nRecH = this.nRecS =
        this.nBrcRatP = this.nBrcRatM = this.nBrcRatC = 
        this.nBrcFixP = this.nBrcFixM = this.nBrcFixC = 
        this.nIsAct = this.nIsSkl = this.nIsCrt = this.nIs2202 = this.nIs2307 = this.nIs207 = 0;
        
    }

    ally (t) {
        ;
    }

    enemy (that) {

        if (that.mId in this.mStats) { return; }
        
        const 
            stat = {},
            cflags = this.mFlags, tflags = that.mFlags
        ;

        this.mStats[that.mId] = stat;

        // Skill / Critical offset
        {
            let mSkl = this.mSklMul + this.mSklAdd, mCrt = this.mCrtMul + this.mCrtAdd;
            mSkl -= gNumberCast((mSkl + that.mSklMul + that.mSklAdd) * gRules.SklOffset),
            mCrt -= gNumberCast((mCrt + that.mCrtMul + that.mCrtAdd) * gRules.CrtOffset);
            mSkl = Math.max(mSkl, 0);
            mCrt = Math.max(mCrt, 0);
            stat.mSklRat = this.mSklRat + gNumberCast(100 * mSkl / (mSkl + gRules.SklAdd));
            stat.mCrtRat = this.mCrtRat + gNumberCast(100 * mCrt / (mCrt + gRules.CrtAdd));
        }


        // SHANG
        if (tflags.has(301)) { this.mHpRecRat -= 75; }

        // SHEN
        if (tflags.has(302)) { this.mSdRecRat -= 75; }

        // SHIELD
        if (tflags.has(2108)) {
            this.mHpRecRat -= 40; this.mSdRecRat -= 40;
        }

        // Level different based

        // TIAO
        if (cflags.has(104)) {
            let t = Math.max(that.mLevel - this.mLevel, 0);
            if (this.mIsPVE) { t = Math.min(t, 100)}

            let t1 = t * 2, t2 = t * 10;
            this.mBrcFixP += t1; this.mBrcFixM += t1;
            this.mPowP += t2; this.mPowM += t2; 
        }

        // YA
        if (cflags.has(105)) {
            let t = Math.max(this.mLevel - that.mLevel, 0);
            if (this.mIsPVE) { t = Math.min(t, 100)}
            this.mDefP += t; this.mDefM += t;
            this.mSpd += t;
        }

    }

    setup () {
        this.mPowPM = this.mPowP + this.mPowM;
        this.mSpd = gNumberCast(this.mSpd * this._mSpdRat);
        this.mBrcRatP = gNumberCast(this.mBrcRatP * this._mBrcRatPRat);
        this.mBrcFixP = gNumberCast(this.mBrcFixP * this._mBrcFixPRat);
        this.mBrcRatM = gNumberCast(this.mBrcRatM * this._mBrcRatMRat);
        this.mBrcFixM = gNumberCast(this.mBrcFixM * this._mBrcFixMRat);
        this.mDefP = gNumberCast(gNumberCast(this.mDefP * this._mDefPRat1) * this._mDefPRat2);
        this.mDefM = gNumberCast(gNumberCast(this.mDefM * this._mDefMRat1) * this._mDefMRat2);

        // LIN
        if (this.mFlags.has(3002)) { this.mStatus[0] = 1; }
        
        this.mSpdNow = Math.max(gNumberCast(this.mSpd * (1 + this.mSpdRat * 0.01)), gNumberMin);
    }

    turnStart () {
        const cflags = this.mFlags;

        this.uiClear();
        
        this.nHpNow = this.mHpNow; this.nSdNow = this.mSdNow;
        this.nPowP = this.nPowM = this.nPowA =
        this.nDmgH = this.nDmgS = this.nRecH = this.nRecS =
        this.nIsAct = this.nIsSkl = this.nIsCrt = this.nIs2202 = this.nIs2307 = this.nIs207 = 0;

        // DI
        if (cflags.has(901)) {
            this.nHpMin = gNumberCast(this.mHpNow - this.mHpMax * 0.3);
            this.nSdMin = gNumberCast(this.mSdNow - this.mSdMax * 0.3);
        }

        // YI
        if (cflags.has(3006)) {
            this.mHpRecRat = Math.max(this.mHpRecRat, 100);
            this.mSdRecRat = Math.max(this.mSdRecRat, 100);
            this.mSpdRat = Math.max(this.mSpdRat, 100);
        }
        else {
            this.mSpdRat = Math.max(this.mSpdRat, gRules.SpdRatMin);
        }
        
        // Potion
        if (this.mHpPot && gNumberCast(this.mHpMax * 0.8) > this.mHpNow) {
            this.nRecH += gNumberCast(this.mHpMax * this.mHpPot * 0.02);
            this.mHpPot = 0;
            this.uiAddHpPot();
        }
        if (this.mSdPot && gNumberCast(this.mSdMax * 0.8) > this.mSdNow) {
            this.nRecS += gNumberCast(this.mSdMax * this.mSdPot * 0.02);
            this.mSdPot = 0;
            this.uiAddSdPot();
        }
        
        // Breach
        this.nBrcRatP = this.mBrcRatP;
        this.nBrcRatM = this.mBrcRatM;
        this.nBrcRatC = this.mBrcRatC;
        this.nBrcFixP = this.mBrcFixP;
        this.nBrcFixM = this.mBrcFixM;
        this.nBrcFixC = this.mBrcFixC;

        // BO
        if (cflags.has(402) && (this.mHpNow >= this.mHpMax)) {
            this.nBrcRatM += 32;
            this.uiAddAura(402);
        }

        // HONG
        if (cflags.has(404)) {
            const t = gNumberCast(this.mLevel * 0.5);

            if (this.nBrcRatP < 40) {
                this.nBrcRatP = 40;
            }
            else {
                this.nBrcFixP += t;
            }

            if (this.nBrcRatM < 40) {
                this.nBrcRatM = 40;
            }
            else {
                this.nBrcFixM += t;
            }
        }

        // Next round
        this.mRound++;
    }

    turnEnd () {
        ;
    }

    restStart () {
        this.turnStart();

        const n = ++this.mWait;

        // WOOD
        if (this.mFlags.has(2306)) {
            this.nRecH += gNumberCast(this.mHpMax * 0.1);
        }

        // REN
        if (this.mFlags.has(304) && n > 2) {
            this.uiAddAura(304);
            return 1;
        }

        return 0;
    }

    restEnd () {
        this.turnEnd();

        this.mSpdNow = Math.max(gNumberCast(this.mSpd * (1 + this.mSpdRat * 0.01)), gNumberMin);
    }

    actStart (that) {
        this.turnStart();

        const cflags = this.mFlags, stat = this.mStats[that.mId];

        this.nIsAct = 1;
        this.nIsSkl = (!this.mTurn && cflags.has(2107) && cflags.has(3001)) ||
                (this.rand() * 100 < stat.mSklRat);
        this.nIsCrt = cflags.has(2109) ||
                (cflags.has(3009) && (that.mHpNow + that.mSdNow < gNumberCast(that.mLifeMax * 0.5))) || 
                (this.rand() * 100 < stat.mCrtRat);
        this.nIs2202 = cflags.has(2202) && (this.rand() * 100 < 20);
        this.nIs207 = cflags.has(207) && (this.rand() * 100 < 1);

        this.mTurn++;
    }

    actEnd () {
        this.turnEnd();

        this.mWait = 0;
    }

    attack (that) {
        const cflags = this.mFlags, tflags = that.mFlags, tstatus = that.mStatus;
        let pa = this.mPowP, ma = this.mPowM, aa = this.mPowA, hra = this.nRecH, sra = this.nRecS;

        // AI
        if (cflags.has(3003)) {
            let n = that.mStatus[1] + 1, d = this.mPowPM * 9;
            if (cflags.has(2106)) {
                d *= 20 + ++n * 3;
            }
            else {
                d *= 20;
            }
            aa += gNumberCast(d * 0.0025);
            that.mStatus[1] = n;
        }

        // MENG
        if (cflags.has(3004)) {
            let n = that.mStatus[2] + 2;
            that.mStatus[2] = n;
            ma += gNumberCast(this.mSdMax * 0.03 * n);
            that.mSpdRat--;
        }

        // WU + RING
        if (cflags.has(3000) && cflags.has(2204)) {
            const n = gNumberCast((this.mGrowth * 2 + 100) * 0.2)
            pa += n; ma += n;
        }

        // XI
        if (cflags.has(3009)) {
            const m = this.mHpMax, n = this.mHpNow;
            
            if (gNumberCast(m * 0.5) > n) { pa += m - n; }
        }
        
        // XIAO
        if (cflags.has(205)) {
            aa += gNumberCast(that.mHpMax * 0.015) + gNumberCast(that.mSdMax * 0.015);
        }

        // WU
        if (cflags.has(307) && this.mRound > 14) {
            aa += gNumberCast((this.mPowP + this.mPowM) * 0.15);
            this.uiAddAura(307);
        }

        // FEI
        if (cflags.has(401)) {
            pa += gNumberCast(this.mHpMax * 0.18);
            this.uiAddAura(401);
        }

        // ASSBOW
        if (cflags.has(2105)) {
            pa += gNumberCast(that.mSdNow * 0.3);
        }

        // SPEAR
        if (cflags.has(2110)) {
            ma += gNumberCast(that.mHpNow * 0.3);
        }

        // E
        if (this.nIs207) {
            pa += this.mPowP * 30;
            ma += this.mPowM * 30;
            this.uiAddAura(207);
        }

        // Critical
        if (this.nIsCrt) {
            pa += pa;
            ma += gNumberCast(ma * 0.5);
            aa += aa;

            // MIN
            if (cflags.has(3008)) {
                pa += gNumberCast(pa * 0.5);
                ma += gNumberCast(ma * 0.5);
                aa += gNumberCast(aa * 0.5);
            }

            // JU
            if (cflags.has(403)) {
                const 
                    m = gNumberCast(this.mSpd * (1 + this.mSpdRat * 0.01)),
                    n = gNumberCast(that.mSpd * (1 + that.mSpdRat * 0.01));

                aa += gNumberCast(m * ((m > n * 3) ? 12 : 9) * 0.2);
                
                this.uiAddAura(403);
            }

            // BLADE
            if (cflags.has(2104)) {
                aa += gNumberCast((this.mPowMulP + this.mPowAddP) * 0.5);
            }

            this.uiAddActInfo("Crt");
        }

        for (const i in tstatus) {
            const n = tstatus[i];
            if (n && gEmuStatusKind[i].show) { that.uiAddStatus(i, n); }
        }

        // Skill
        if (this.nIsSkl) {

            // WU
            if (cflags.has(3000)) {
                const n = this.mGrowth * 2 + 100;
                pa += n; ma += n;
                this.uiAddSkl1(3000, "+" + n);
            }

            // MO
            if (cflags.has(3001)) {
                const n = gNumberCast(
                    Math.max(Math.min(this.mPowMulM - that.mPowMulM, 7000), 0) * 0.1
                ), m = (gNumberCast(this.mPowM * 0.6) + gNumberCast(this.mSdMax * 0.04)) * (1 + n * 0.01);

                ma += gNumberCast(m);
                if (cflags.has(2107)) { ma += gNumberCast(m * 0.6); }
                this.uiAddSkl1(3001);
            }

            // LIN
            if (cflags.has(3002)) {
                const n = this.mPowP * 3;

                pa += n; hra += n; sra += n;
                this.uiAddSkl1(3002);
            }
            
            // AI
            if (cflags.has(3003)) {
                const n = gNumberCast((that.mHpMax + that.mSdMax) * 0.13 * that.mStatus[1]);

                aa += n;
                that.mStatus[1] = 0;
                this.uiAddSkl1(3003);
            }
            
            // MENG
            if (cflags.has(3004)) {
                const n = that.mStatus[2] + 7;

                ma += gNumberCast(this.mPowM * n * 0.2);
                that.mSpdRat = Math.max(that.mSpdRat - (n >> 1), 0);
                that.mStatus[2] = n;
                this.uiAddSkl1(3004);
            }
            
            // WEI
            if (cflags.has(3005)) {
                this.mStatus[3] = 1;
                this.uiAddSkl1(3005);
            }
            
            // YI
            if (cflags.has(3006)) {
                const sd = that.mSdNow, hp = that.mHpNow,
                    n = gNumberCast(((sd > hp) ? sd : hp) * 0.15);
                aa += n;
                hra += n;
                this.uiAddSkl1(3006);
            }
            
            // MING
            if (cflags.has(3007)) {
                const n = this.mHpMax - this.mHpNow;
                ma += n;
                hra += n;
                this.uiAddSkl1(3007);
            }
            
            // MIN
            if (cflags.has(3008)) {
                const n = Math.floor(this.rand() * 3);

                this.mStatus[4] = n + 1;
                this.uiAddSkl1(3008, this.uiGetActInfo("Skill3008")[n]);
            }
            
            // XI
            if (cflags.has(3009)) {
                pa += gNumberCast(this.mHpNow * 0.5);
                this.mHpRecRat += 30;
                this.uiAddSkl1(3009);
            }

            // MU
            if (cflags.has(3901)) {
                pa += this.mPowP * 5;
                this.uiAddSkl1(3901);
            }

            // ZHU
            if (cflags.has(3902)) {
                ma += this.mPowM * 5;
                this.uiAddSkl1(3902);
            }

            // DENG
            if (cflags.has(3903)) {
                ma += gNumberCast(this.mSdMax * 0.4);
                this.uiAddSkl1(3903);
            }

            // SHOU
            if (cflags.has(3904)) {
                pa += gNumberCast(this.mHpMax * 0.4);
                this.uiAddSkl1(3904);
            }

            // YU
            if (cflags.has(3905)) {
                pa += this.mPowP * 5;
                this.uiAddSkl1(3905);
            }

            // HAO
            if (cflags.has(3906)) {
                pa += gNumberCast(this.mHpMax * 0.4);
                this.uiAddSkl1(3906);
            }

        }

        // WEI
        if (cflags.has(3005)) {
            pa += gNumberCast(that.mLifeMax * 0.14);
            ma = gNumberCast(ma * 0.3);
        }
        if (this.mStatus[3]) { pa = gNumberCast(pa * 1.4); }

        // BRACELET
        if (this.nIs2202) {
            ma = ma + ma;
            this.uiAddActInfo("Equip2202");
        }

        // HOU
        if (cflags.has(406) && this.mWait > 0) {
            const n = 1 + this.mWait * 0.24;

            pa = gNumberCast(pa * n);
            ma = gNumberCast(ma * n);
            aa = gNumberCast(aa * n);

            this.uiAddAura(406);
        }

        pa = gNumberCast(pa * (1 + this.mPowRatP * 0.01));
        ma = gNumberCast(ma * (1 + this.mPowRatM * 0.01));

        // RE
        if (cflags.has(305)) { this.mSpdRat += 9; }

        this.nPowP = pa; this.nPowM = ma, this.nPowA = aa; this.nRecH = hra; this.nRecS = sra;

    }

    defend (that) {

        const cflags = this.mFlags, tflags = that.mFlags, tstatus = that.mStatus;
        let pa = that.nPowP, ma = that.nPowM, aa = that.nPowA,
            pd = this.nPowP, md = this.nPowM, ad = this.nPowA;

        // Reflection
        {
            let r = this.mRflRat;
            if (r > 0) {
                if (tflags.has(901)) { r = gNumberCast(r * 0.4); }
                md += gNumberCast(r * 0.01 * (pa + gNumberCast(ma * 0.7) + aa));
                this.uiAddActInfo("Rfl")
            }
        }

        // MO
        if (cflags.has(3001)) {
            md += gNumberCast(this.mSdMax * 0.12 * (1 + this.mPowRatM * 0.01));
            this.uiAddSkl2(3001);
        }

        // MING
        if (tflags.has(3007)) {
            ma += gNumberCast(md * 0.4);
            // that.uiAddSkl3(3007);
        }
        if (cflags.has(3007)) {
            pd += gNumberCast(pa * 0.4);
            md += gNumberCast(ma * 0.4);
            // this.uiAddSkl3(3007);
        }

        // CAPE
        if (!this.nIsAct && cflags.has(2307)) {
            that.nIs2307 = 1;
        }

        // MENG
        if (cflags.has(3004)) {
            that.mStatus[2]++;
            that.mSpdRat -= 2 << cflags.has(2402);
        }

        for (const i in tstatus) {
            const n = tstatus[i];
            if (n && gEmuStatusKind[i].show) { that.uiAddStatus(i, n); }
        }

        this.nPowP = pd; this.nPowM = md, this.nPowA = ad;
        that.nPowP = pa; that.nPowM = ma, that.nPowA = aa;

        // MIN
        if (this.mFlags.has(3008) && (this.mRound < 4) && !this.mTurn) {
            this.nPowP = gNumberCast(pd * 0.45);
            this.nPowM = gNumberCast(md * 0.45);
            this.nPowA = gNumberCast(ad * 0.45);
        }

    }

    adjust () {
        const cflags = this.mFlags;
        let pa = this.nPowP, ma = this.nPowM, aa = this.nPowA;

        // CAPE
        if (this.nIs2307) {
            const n = gNumberCast(pa * 0.5);
            pa -= n; ma += n;
        }

        // DIAN
        if (cflags.has(306)) {
            pa = gNumberCast(pa * 0.7);
            ma = gNumberCast(ma * 0.7);
            this.uiAddAura(306);
        }

        // ZI
        if (this.nIsAct && cflags.has(408)) {
            const r = (this.mTurn < 2) ? 1.5 : 0.9;
            
            pa = gNumberCast(pa * r);
            ma = gNumberCast(ma * r);
            aa = gNumberCast(aa * r);
        }
        
        this.nPowP = pa; this.nPowM = ma, this.nPowA = aa;

    }

    damage (that) {

        // MIN
        if (this.mFlags.has(3008) && (this.mRound < 4) && !this.mTurn) {
            this.uiAddSkl2(3008);
            return ;
        }

        const   tflags = that.mFlags,
                mStatus = this.mStatus,
                mStatus4 = mStatus[4],
                isImmP = mStatus4 == 1,
                isImmM = mStatus4 == 2,
                isImmA = mStatus4 == 3
            ;

        let hp = this.nHpNow, sd = this.nSdNow, b = sd > 0,
            p = that.nPowP, m = that.nPowM, a = that.nPowA,
            hpr, hmr, spr, smr, dh, ds
        ;
        

        // Defense ratio calculation
        {
            let nBrcRatP = that.nBrcRatP, nBrcFixP = that.nBrcFixP,
                nBrcRatM = that.nBrcRatM, nBrcFixM = that.nBrcFixM
            ;

            // Critical
            if (that.nIsCrt) {
                const mBrcRatC = that.nBrcRatC, mBrcFixC = that.nBrcFixC;
                nBrcRatP += mBrcRatC; nBrcRatM += mBrcRatC;
                nBrcFixP += mBrcFixC; nBrcFixM += mBrcFixC;
            }

            // DUNH
            if (this.mFlags.has(407)) {
                nBrcRatP = gNumberCast(nBrcRatP * 0.65);
                nBrcRatM = gNumberCast(nBrcRatM * 0.65);
            }

            hpr = gNumberCast((
                gNumberCast(this.mDefP * (100 - nBrcRatP + this.mDefPRat) * 0.01) - nBrcFixP
            ) * gRules.DefMul1) * gRules.DefMul2;
            hmr = gNumberCast((
                gNumberCast(this.mDefM * (100 - nBrcRatM + this.mDefMRat) * 0.01) - nBrcFixM
            ) * gRules.DefMul1) * gRules.DefMul2;

            hpr = Math.min(hpr, this.mDefRatFull);
            hmr = Math.min(hmr, this.mDefRatFull);
            spr = hpr * this.mDefRatMulSd;
            smr = hmr * this.mDefRatMulSd;

            hpr = (hpr < 0) ? this.mDefRatNegHp : 1 - hpr;
            hmr = (hmr < 0) ? this.mDefRatNegHp : 1 - hmr;
            spr = (spr < 0) ? this.mDefRatNegSd : 1 - spr;
            smr = (smr < 0) ? this.mDefRatNegSd : 1 - smr;

            spr *= this.mDmgPSdRat;
            smr *= this.mDmgMSdRat;

        }

        // Damage calculation
        p = gNumberCast(p * this.mDmgPRat);
        m = gNumberCast(m * this.mDmgMRat);
        a = gNumberCast(a * this.mDmgARat);
        
        // WEI
        if (!this.nIsAct && this.mStatus[3]) {
            p = gNumberCast(p * 0.1);
            m = gNumberCast(m * 0.1);
            a = gNumberCast(a * 0.1);
            this.mStatus[3]--;
            this.uiAddSkl2(3005);
        }

        p -= this.mResP;
        m -= this.mResM;

        if ((m > 0) && !isImmM) {
                if (b) {
                m = m * smr;
                if (m < sd) {
                    sd -= gNumberCast(m);
                    m = 0;
                }
                else {
                    m = gNumberCast((m - sd) / smr);
                    sd = 0;
                    b = 0;
                }
            }
            hp -= gNumberCast(m * hmr);
        }
        if ((p > 0) && !isImmP) {
            if (b) {
                p = p * spr;
                if (p < sd) {
                    sd -= gNumberCast(p);
                    p = 0;
                }
                else {
                    p = gNumberCast((p - sd) / spr);
                    sd = 0;
                    b = 0;
                }
            }
            hp -= gNumberCast(p * hpr);
        } 
        if (!isImmA) {
            if (b) {
                if (a < sd) {
                    sd -= a;
                    a = 0;
                }
                else {
                    a -= sd;
                    sd = 0;
                }
            }
            hp -= a;
        }
        
        this.nDmgH = dh = this.nHpNow - hp;
        this.nDmgS = ds = this.nSdNow - sd;
        hp = Math.max(hp, 0, this.nHpMin);
        sd = Math.max(sd, this.nSdMin);
        if (gRules.NoOverkill) {
            dh = this.nHpNow - hp;
            ds = this.nSdNow - sd;
        }
        this.nHpNow = hp;
        this.nSdNow = sd;

        // Leech Calculation
        {
            const mLchRat = that.mLchRat;

            that.nRecH += gNumberCast(dh * mLchRat * 0.01);
            that.nRecS += gNumberCast(ds * mLchRat * 0.01);

            // VULTURE
            if (tflags.has(2203)) {
                that.nRecH += gNumberCast(ds * mLchRat * 0.0016);
            }
        }

    }

    heal () {
        const cflags = this.mFlags, mHpMax = this.mHpMax, mSdMax = this.mSdMax;

        // LIN
        if (cflags.has(3002)) {
            const n = gNumberCast(mHpMax * ((cflags.has(2403)) ? 0.05 : (this.mHpNow < gNumberCast(mHpMax * 0.3)) ? 0.04 : 0.02));
            this.mHpNow += n;
            this.uiAddSkl3(3002, "+" + Math.floor(n));
        }

        this.nRecH += gNumberCast((gNumberCast(mHpMax * this.mHpHealRat * 0.01) + this.mHpHealFix) * gRules.HpHeal);
        this.nRecS += gNumberCast((gNumberCast(mSdMax * this.mSdHealRat * 0.01) + this.mSdHealFix) * gRules.SdHeal);
    }

    check () {

        let h = this.mHpNow, s = this.mSdNow,
            hd = this.nDmgH, sd = this.nDmgS;

        // DI
        // if (this.mFlags.has(901)) {
        //     this.nDmgH = hd = Math.min(hd, Math.max(gNumberCast(this.mHpMax * 0.3), gNumberMin));
        //     this.nDmgS = sd = Math.min(sd, Math.max(gNumberCast(this.mSdMax * 0.3), gNumberMin));
        // }
            
        this.nDmgH = hd = h - Math.max(h - hd, this.nHpMin);
        this.nDmgS = sd = s - Math.max(s - sd, this.nSdMin);

        // Dead check
        if (hd > h) {
            this.nRecH = 0;
            this.nRecS = 0;
        }
    }

    link (that) {
        const cflags = this.mFlags;

        // MING
        if (cflags.has(3007)) {
            this.nRecH += gNumberCast(that.nRecH * 0.6);
            this.nRecS += gNumberCast(that.nRecS * 0.6);

            // DEVOUR
            if (cflags.has(2205)) {
                this.nRecH += gNumberCast(that.nRecS * 0.3);
            }
        }
    }

    apply () {
        let h = this.mHpNow, s = this.mSdNow,
            hr = this.nRecH, sr = this.nRecS,
            hd = this.nDmgH, sd = this.nDmgS
        ;

        this.nRecH = hr = Math.max(gNumberCast(hr * (1 + this.mHpRecRat * 0.01)), 0);
        this.nRecS = sr = Math.max(gNumberCast(sr * (1 + this.mSdRecRat * 0.01)), 0);
        
        // LIN
        if (this.mStatus[0] && (this.mHpNow <= hd)) {
            this.nDmgH = hd = this.nDmgS = sd = 0; this.mStatus[0]--;
            this.uiAddSkl2(3002);
        }

        h = Math.min(h - hd + hr, this.mHpMax);
        s = Math.min(s - sd + sr, this.mSdMax);

        if (gRules.NoOverkill) { this.nDmgH = Math.min(this.mHpNow, hd); }
        this.mHpNow = Math.max(h, 0);
        this.mSdNow = Math.max(s, 0);


        // Real dead check
        return h > 0;
    }


    rand () {
        return Math.random();
    }

    uiClear () {
        ;
    }

    uiAddAct (m) {
        ;
    }

    uiAddHpPot () {
        ;
    }

    uiAddSdPot () {
        ;
    }

    uiAddStatus (i, m = "") {
        ;
    }

    uiAddSkl1 (i, m = "") {
        ;
    }

    uiAddSkl2 (i, m = "") {
        ;
    }

    uiAddSkl3 (i, m = "") {
        ;
    }

    uiAddAura (i, m = "") {
        ;
    }

    uiShow () {
        return "";
    }

};
