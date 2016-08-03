exports.trip3 = function () {
    return {
        name: function () {
            return 3;
        },
        overview: function () {
            var s0 = {};
            var s1 = 0;
            s0.code = s1;
            var s2 = "Km";
            s0.lengthUnit = s2;
            var s3 = null;
            s0.msg = s3;
            var s4 = [];
            var s5 = {};
            var s6 = "The event could be clearly detected; however, the signal strength of the GPS was a bit weak at this moment.";
            s5['QUALITY'] = s6;
            var s7 = "170787395776";
            s5['idmsg_start'] = s7;
            var s8 = "11555691";
            s5['lon'] = s8;
            var s9 = "48178073";
            s5['lat'] = s9;
            var s10 = "Max. acceleration 320 mG*";
            s5['summary'] = s10;
            var s11 = "11555691";
            s5['lon_dev'] = s11;
            var s12 = "11555691";
            s5['lon_end'] = s12;
            var s13 = "A";
            s5['mark_type'] = s13;
            var s14 = "170787395776";
            s5['idmsg_deviation'] = s14;
            var s15 = "";
            s5['deviation_speed_limit'] = s15;
            var s16 = "1";
            s5['eventSeverity'] = s16;
            var s17 = "Braking<span style=\"display:none\">15929397617</span>";
            s5['descr'] = s17;
            var s18 = "1.2  Seconds";
            s5['hours'] = s18;
            var s19 = "48178073";
            s5['lat_dev'] = s19;
            var s20 = "48178073";
            s5['lat_end'] = s20;
            s5['deviation_speed'] = s15;
            var s21 = "15:32";
            s5['d_start'] = s21;
            var s22 = "170787395776";
            s5['idmsg_end'] = s22;
            s4[0] = s5;
            s0.resultData = s4;
            var s23 = {};
            var s24 = "[missing: fms.colums.label.QUALITY]";
            s23['QUALITY'] = s24;
            var s25 = "[missing: fms.colums.label.idmsg_start]";
            s23['idmsg_start'] = s25;
            var s26 = "[missing: fms.colums.label.lon]";
            s23['lon'] = s26;
            var s27 = "[missing: fms.colums.label.lat]";
            s23['lat'] = s27;
            var s28 = "[missing: fms.colums.label.summary]";
            s23['summary'] = s28;
            var s29 = "[missing: fms.colums.label.lon_dev]";
            s23['lon_dev'] = s29;
            var s30 = "[missing: fms.colums.label.lon_end]";
            s23['lon_end'] = s30;
            var s31 = "[missing: fms.colums.label.mark_type]";
            s23['mark_type'] = s31;
            var s32 = "[missing: fms.colums.label.idmsg_deviation]";
            s23['idmsg_deviation'] = s32;
            var s33 = "[missing: fms.colums.label.deviation_speed_limit]";
            s23['deviation_speed_limit'] = s33;
            var s34 = "[missing: fms.colums.label.eventSeverity]";
            s23['eventSeverity'] = s34;
            var s35 = "[missing: fms.colums.label.descr]";
            s23['descr'] = s35;
            var s36 = "[missing: fms.colums.label.hours]";
            s23['hours'] = s36;
            var s37 = "[missing: fms.colums.label.lat_dev]";
            s23['lat_dev'] = s37;
            var s38 = "[missing: fms.colums.label.lat_end]";
            s23['lat_end'] = s38;
            var s39 = "[missing: fms.colums.label.deviation_speed]";
            s23['deviation_speed'] = s39;
            var s40 = "[missing: fms.colums.label.d_start]";
            s23['d_start'] = s40;
            var s41 = "[missing: fms.colums.label.idmsg_end]";
            s23['idmsg_end'] = s41;
            s0.resultHeader = s23;
            var s42 = null;
            s0.resultListHeader = s42;
            var s43 = "Km/h";
            s0.speedUnit = s43;
            var s44 = 0.0;
            s0.totDistance = s44;
            var s45 = 0;
            s0.totSeconds = s45;
            var s46 = null;
            s0.totTime = s46;
            return s0;
        },
        positions: function () {
            var s0 = {};
            var s1 = 0;
            s0.code = s1;
            var s2 = null;
            s0.lastPosition = s2;
            var s3 = "OK";
            s0.msg = s3;
            var s4 = [];
            var s5 = {};
            var s6 = 170787395696;
            s5.id_msgins = s6;
            var s7 = 11.555691;
            s5.x = s7;
            var s8 = 48.178073;
            s5.y = s8;
            s4[0] = s5;
            var s9 = {};
            var s10 = 170787395735;
            s9.id_msgins = s10;
            var s11 = 11.555691;
            s9.x = s11;
            var s12 = 48.178073;
            s9.y = s12;
            s4[1] = s9;
            var s13 = {};
            var s14 = 170787395756;
            s13.id_msgins = s14;
            var s15 = 11.555691;
            s13.x = s15;
            var s16 = 48.178073;
            s13.y = s16;
            s4[2] = s13;
            var s17 = {};
            var s18 = 170787395776;
            s17.id_msgins = s18;
            var s19 = 11.555691;
            s17.x = s19;
            var s20 = 48.178073;
            s17.y = s20;
            s4[3] = s17;
            var s21 = {};
            var s22 = 170787395796;
            s21.id_msgins = s22;
            var s23 = 11.555691;
            s21.x = s23;
            var s24 = 48.178073;
            s21.y = s24;
            s4[4] = s21;
            var s25 = {};
            var s26 = 170787395808;
            s25.id_msgins = s26;
            var s27 = 11.555691;
            s25.x = s27;
            var s28 = 48.178073;
            s25.y = s28;
            s4[5] = s25;
            var s29 = {};
            var s30 = 170787395887;
            s29.id_msgins = s30;
            var s31 = 11.557127;
            s29.x = s31;
            var s32 = 48.177231;
            s29.y = s32;
            s4[6] = s29;
            var s33 = {};
            var s34 = 170787395913;
            s33.id_msgins = s34;
            var s35 = 11.5586;
            s33.x = s35;
            var s36 = 48.175903;
            s33.y = s36;
            s4[7] = s33;
            var s37 = {};
            var s38 = 170787395973;
            s37.id_msgins = s38;
            var s39 = 11.590327;
            s37.x = s39;
            var s40 = 48.176627;
            s37.y = s40;
            s4[8] = s37;
            var s41 = {};
            var s42 = 170787395974;
            s41.id_msgins = s42;
            var s43 = 11.597181;
            s41.x = s43;
            var s44 = 48.162595;
            s41.y = s44;
            s4[9] = s41;
            var s45 = {};
            var s46 = 170787395980;
            s45.id_msgins = s46;
            var s47 = 11.603225;
            s45.x = s47;
            var s48 = 48.157615;
            s45.y = s48;
            s4[10] = s45;
            var s49 = {};
            var s50 = 170823892379;
            s49.id_msgins = s50;
            var s51 = 11.595297;
            s49.x = s51;
            var s52 = 48.147309;
            s49.y = s52;
            s4[11] = s49;
            var s53 = {};
            var s54 = 170823892569;
            s53.id_msgins = s54;
            var s55 = 11.589716;
            s53.x = s55;
            var s56 = 48.138132;
            s53.y = s56;
            s4[12] = s53;
            var s57 = {};
            var s58 = 170823892649;
            s57.id_msgins = s58;
            var s59 = 11.585283;
            s57.x = s59;
            var s60 = 48.132717;
            s57.y = s60;
            s4[13] = s57;
            var s61 = {};
            var s62 = 170823892659;
            s61.id_msgins = s62;
            var s63 = 11.583466;
            s61.x = s63;
            var s64 = 48.131482;
            s61.y = s64;
            s4[14] = s61;
            var s65 = {};
            var s66 = 170823892661;
            s65.id_msgins = s66;
            var s67 = 11.576931;
            s65.x = s67;
            var s68 = 48.128279;
            s65.y = s68;
            s4[15] = s65;
            var s69 = {};
            var s70 = 170823892664;
            s69.id_msgins = s70;
            var s71 = 11.576331;
            s69.x = s71;
            var s72 = 48.127987;
            s69.y = s72;
            s4[16] = s69;
            var s73 = {};
            var s74 = 170823892672;
            s73.id_msgins = s74;
            var s75 = 11.577729;
            s73.x = s75;
            var s76 = 48.126756;
            s73.y = s76;
            s4[17] = s73;
            var s77 = {};
            var s78 = 170823892676;
            s77.id_msgins = s78;
            var s79 = 11.577964;
            s77.x = s79;
            var s80 = 48.126592;
            s77.y = s80;
            s4[18] = s77;
            var s81 = {};
            var s82 = 170823892687;
            s81.id_msgins = s82;
            var s83 = 11.580851;
            s81.x = s83;
            var s84 = 48.124482;
            s81.y = s84;
            s4[19] = s81;
            var s85 = {};
            var s86 = 170823892689;
            s85.id_msgins = s86;
            var s87 = 11.580846;
            s85.x = s87;
            var s88 = 48.12434;
            s85.y = s88;
            s4[20] = s85;
            var s89 = {};
            var s90 = 170823892697;
            s89.id_msgins = s90;
            var s91 = 11.580184;
            s89.x = s91;
            var s92 = 48.120986;
            s89.y = s92;
            s4[21] = s89;
            var s93 = {};
            var s94 = 170823892702;
            s93.id_msgins = s94;
            var s95 = 11.579785;
            s93.x = s95;
            var s96 = 48.120222;
            s93.y = s96;
            s4[22] = s93;
            var s97 = {};
            var s98 = 170823892709;
            s97.id_msgins = s98;
            var s99 = 11.579629;
            s97.x = s99;
            var s100 = 48.120126;
            s97.y = s100;
            s4[23] = s97;
            s0.positions = s4;
            return s0;
        }
    };
};