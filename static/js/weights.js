function adjustWeights() {
    if($('#tree').val()) {
        gtag('event', 'Skill Tree', {
          'event_category': 'Skill Tree',
          'event_action': 'Set',
          'event_label': $('#tree').val(),
        });
    } else { gtag('event', 'Fail', { 'event_category' : 'Fail', 'event_action' : 'Skill Tree', 'event_label' : window.localStorage.getItem('tree') });}
    if($('#hero').val()) {
        gtag('event', 'Hero Type', {
          'event_category': 'Hero Type',
          'event_action': 'Set',
          'event_label': $('#hero').val(),
        });
    } else { gtag('event', 'Fail', { 'event_category' : 'Fail', 'event_action' : 'Hero', 'event_label' : window.localStorage.getItem('hero') });}
    if($('#hero2').val()) {
        gtag('event', 'Hero Super Type', {
          'event_category': 'Hero Super Type',
          'event_action': 'Set',
          'event_label': $('#hero2').val(),
        });
    } else { gtag('event', 'Fail', { 'event_category' : 'Fail', 'event_action' : 'Hero Super', 'event_label' : window.localStorage.getItem('hero2') });}
    if($('#spell').val()) {
        gtag('event', 'Spell', {
          'event_category': 'Spell',
          'event_action': 'Set',
          'event_label': $('#spell').val(),
        });
    } else { gtag('event', 'Fail', { 'event_category' : 'Fail', 'event_action' : 'Spell', 'event_label' : window.localStorage.getItem('spell') });}
    if($('#sword').val()) {
        gtag('event', 'Equipment', {
          'event_category': 'Equipment',
          'event_action': 'Sword',
          'event_label': $('#sword').val(),
        });
    } else { gtag('event', 'Fail', { 'event_category' : 'Fail', 'event_action' : 'Sword', 'event_label' : window.localStorage.getItem('sword') });}
    if($('#helmet').val()) {
        gtag('event', 'Equipment', {
          'event_category': 'Equipment',
          'event_action': 'Helmet',
          'event_label': $('#helmet').val(),
        });
    } else { gtag('event', 'Fail', { 'event_category' : 'Fail', 'event_action' : 'Helmet', 'event_label' : window.localStorage.getItem('helmet') });}
    if($('#chest').val()) {
        gtag('event', 'Equipment', {
          'event_category': 'Equipment',
          'event_action': 'Chest',
          'event_label': $('#chest').val(),
        });
    } else { gtag('event', 'Fail', { 'event_category' : 'Fail', 'event_action' : 'Chest', 'event_label' : window.localStorage.getItem('chest') });}
    if($('#aura').val()) {
        gtag('event', 'Equipment', {
          'event_category': 'Equipment',
          'event_action': 'Aura',
          'event_label': $('#aura').val(),
        });
    } else { gtag('event', 'Fail', { 'event_category' : 'Fail', 'event_action' : 'Aura', 'event_label' : window.localStorage.getItem('aura') });}
    if($('#slash').val()) {
        gtag('event', 'Equipment', {
          'event_category': 'Equipment',
          'event_action': 'Slash',
          'event_label': $('#slash').val(),
        });
    } else { gtag('event', 'Fail', { 'event_category' : 'Fail', 'event_action' : 'Slash', 'event_label' : window.localStorage.getItem('slash') });}
    if($('#pet').val()) {
        gtag('event', 'Equipment', {
          'event_category': 'Equipment',
          'event_action': 'Pet',
          'event_label': $('#pet').val(),
        });
    } else { gtag('event', 'Fail', { 'event_category' : 'Fail', 'event_action' : 'Pet', 'event_label' : window.localStorage.getItem('pet') });}
    $.each(origWeights, function(k,v) {
        artifacts[k].rating = v.rating;
    });
    switch($('#tree').val()) {
        case 'knight':
            artifacts.dh.rating += 20;
            artifacts.hb.rating += 5;
            artifacts.aom.rating += 10;
            artifacts.foe.rating += 15;
            artifacts.bor.rating += 10;
            artifacts.ga.rating += 10;
            artifacts.os.rating += 10;
            artifacts.ss.rating += 15;
            artifacts.tr.rating += 20;
            artifacts.tms.rating += 10;
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.hos2.rating += 10;
            artifacts.roc.rating += 10;
            artifacts.eoe.rating += 10;
            artifacts.ga.rating += 10;
            artifacts.orc.rating += 15;
            artifacts.lkm.rating += 10;
            break;
        case 'warlord':
            artifacts.hb.rating += 20;
            artifacts.coc.rating += 10;
            artifacts.pof.rating += 10;
            artifacts.a.rating += 10;
            artifacts.tac.rating += 10;
            artifacts.ie.rating += 15;
            artifacts.sor.rating += 10;
            artifacts.lkm.rating += 10;
            artifacts.ig.rating += 10;
            artifacts.coe.rating += 10;
            artifacts.hos.rating += 10;
            artifacts.roc.rating += 10;
            artifacts.orc.rating += 15;
           break;
        case 'sorcerer':
            artifacts.dh.rating += 20;
            artifacts.is.rating += 10;
            artifacts.tm.rating += 15;
            artifacts.lp.rating += 15;
            artifacts.eoe.rating += 15;
            artifacts.rof.rating += 15;
            artifacts.sg.rating += 15;
            artifacts.ip.rating += 15;
            artifacts.ts.rating += 15;
            artifacts.ho.rating += 15;
            artifacts.ig.rating += 5;
            artifacts.coe.rating += 10;
            artifacts.ss.rating += 15;
            artifacts.hos.rating += 10;
            artifacts.pt.rating += 15;
            artifacts.hoti.rating += 15;
            artifacts.gfa.rating += 15;
            artifacts.ae.rating += 15;
            artifacts.ms.rating += 15;
            artifacts.tr.rating += 20;
            artifacts.roc.rating += 10;
            artifacts.bor.rating += 5;
            artifacts.ga.rating += 10;
            artifacts.os.rating += 5;
            artifacts.orc.rating += 15;
            artifacts.lkm.rating += 10;
            break;
        case 'rogue':
            artifacts.tr.rating += 20;
            artifacts.aom.rating += 10;
            artifacts.bop.rating += 10;
            artifacts.hs.rating += 10;
            artifacts.sov.rating += 10;
            artifacts.hsw.rating += 5;
            artifacts.dr.rating += 5;
            artifacts.rt.rating += 10;
            artifacts.fs.rating += 10;
            artifacts.gok.rating += 10;
            artifacts.foe.rating += 5;
            artifacts.hos2.rating += 5;
            artifacts.ie.rating += 5;
            artifacts.eoe.rating += 5;
            artifacts.ig.rating += 5;
            artifacts.zc.rating += 15;
            artifacts.af.rating += 20;
            artifacts.eotk.rating += 10;
            artifacts.orc.rating += 5;
            artifacts.lkm.rating += 10;
            break;
    }
    switch($('#hero').val()) {
        case 'melee':
            artifacts.tsos.rating += 20;
            break;
        case 'ranged':
            artifacts.fb.rating += 20;
            break;
        case 'spell':
            artifacts.cota.rating += 20;
            break;
    }
    switch($('#hero2').val()) {
        case 'ground':
            artifacts.ttt.rating += 50;
            break;
        case 'flying':
            artifacts.hh.rating += 50;
            break;
    }
    switch($('#spell').val()) {
        case 'hs':
            artifacts.tr.rating += 20;
            artifacts.dh.rating += 15;
            artifacts.tm.rating += 15;
            artifacts.ip.rating += 15;
            artifacts.coe.rating += 15;
            artifacts.ss.rating += 15;
            artifacts.hos.rating += 15;
            artifacts.pt.rating += 15;
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.rt.rating += 5;
            artifacts.fs.rating += 5;
            artifacts.gok.rating += 5;
            artifacts.aom.rating += 5;
            artifacts.bor.rating += 5;
            artifacts.ga.rating += 5;
            artifacts.os.rating += 10;          
            artifacts.eoe.rating += 5;
            artifacts.lkm.rating += 10;
           break;
        case 'ds':
            artifacts.rt.rating += 15;
            artifacts.fs.rating += 15;
            artifacts.gok.rating += 15;
            artifacts.pt.rating += 15;
            artifacts.hoti.rating += 15;
            artifacts.tr.rating += 20;
            artifacts.aom.rating += 15;
            artifacts.eoe.rating += 5;
            artifacts.lkm.rating += 10;
            break;
        case 'hom':
            artifacts.lp.rating += 15;
            artifacts.rof.rating += 15;
            artifacts.ts.rating += 15;
            artifacts.pt.rating += 15;
            artifacts.hoti.rating += 15;
            artifacts.coc.rating += 5;
            artifacts.sov.rating += 5;
            artifacts.hs.rating += 5;
            artifacts.bop.rating += 5;
            artifacts.ao.rating += 5;
            artifacts.gfa.rating += 5;
            artifacts.zc.rating += 5;
            artifacts.coe.rating += 5;
            artifacts.eof.rating += 5;
            artifacts.dc.rating += 5;
            artifacts.is.rating += 5;
            artifacts.lkm.rating += 10;
          break;
        case 'fs':
            artifacts.bor.rating += 15;
            artifacts.ga.rating += 15;
            artifacts.os.rating += 15;
            artifacts.pt.rating += 15;
            artifacts.hoti.rating += 15;
            artifacts.aom.rating += 5;
            artifacts.lkm.rating += 10;
            break;
        case 'wc':
            artifacts.pof.rating += 15;
            artifacts.a.rating += 15;
            artifacts.tac.rating += 15;
            artifacts.pt.rating += 15;
            artifacts.hoti.rating += 15;
            artifacts.coe.rating += 10;
            artifacts.lkm.rating += 10;
            break;
        case 'sc':
            artifacts.eoe.rating += 15;
            artifacts.sg.rating += 15;
            artifacts.ho.rating += 15;
            artifacts.dh.rating += 15;
            artifacts.ss.rating += 15;
            artifacts.pt.rating += 15;
            artifacts.hoti.rating += 15;
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.rt.rating += 5;
            artifacts.fs.rating += 5;
            artifacts.gok.rating += 5;
            artifacts.tr.rating += 20;
            artifacts.aom.rating += 5;
            artifacts.bor.rating += 5;
            artifacts.ga.rating += 5;
            artifacts.os.rating += 10;
            artifacts.roc.rating += 15;
            artifacts.bor.rating += 5;
            artifacts.orc.rating += 20;
            artifacts.lkm.rating += 10;
            break;
    }
    switch($('#sword').val()) {
        case 'all':
            artifacts.dr.rating += 20;
            artifacts.hsw.rating += 20;
            artifacts.af.rating += 10;
            artifacts.hs2.rating += 10;
            artifacts.td.rating += 10;
            break;
        case 'hero':
            artifacts.hb.rating += 20;
            artifacts.tsos.rating += 10;
            artifacts.fb.rating += 10;
            artifacts.cota.rating += 10;
            artifacts.ttt.rating += 20;
            artifacts.hh.rating += 10;
            break;
        case 'crit':
            artifacts.aom.rating += 20;
            artifacts.tr.rating += 20;
            artifacts.rt.rating += 10;
            artifacts.fs.rating += 10;
            artifacts.gok.rating += 10;
            artifacts.ss.rating += 10;
            artifacts.bor.rating += 5;
            artifacts.ga.rating += 5;
            artifacts.os.rating += 5;
            break;
    }
    switch($('#helmet').val()) {
        case 'melee':
            artifacts.tsos.rating += 20;
            artifacts.hb.rating += 10;
            break;
        case 'ranged':
            artifacts.fb.rating += 20;
            artifacts.hb.rating += 10;
            break;
        case 'spell':
            artifacts.cota.rating += 20;
            artifacts.hb.rating += 10;
            break;
        case 'tap':
            artifacts.dh.rating += 20;
            artifacts.ss.rating += 20;
            artifacts.tms.rating += 10;
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.bor.rating += 5;
            artifacts.eoe.rating += 5;
            artifacts.ga.rating += 5;
            artifacts.os.rating += 10;
            artifacts.aom.rating += 5;
            break;
    }
    switch($('#chest').val()) {
        case 'all':
            artifacts.bop.rating += 20;
            artifacts.sov.rating += 10;
            artifacts.coc.rating += 10;
            artifacts.hs.rating += 10;
            artifacts.eof.rating += 10;
            artifacts.dc.rating += 10;
            artifacts.gfa.rating += 10;
            artifacts.zc.rating += 10;
            artifacts.ao.rating += 5;
            artifacts.td.rating += 5;
            break;
        case 'boss':
            artifacts.hs.rating += 20;
            artifacts.hs2.rating += 5;
            break;
        case 'chest':
            artifacts.coc.rating += 20;
            artifacts.eof.rating += 20;
            break;
    }
    switch($('#aura').val()) {
        case 'multi':
            artifacts.eotk.rating += 20;
            break;
        case 'chest':
            artifacts.coc.rating += 20;
            artifacts.eof.rating += 20;
            break;
        case 'crit':
            artifacts.aom.rating += 20;
            artifacts.tr.rating += 20;
            artifacts.rt.rating += 10;
            artifacts.fs.rating += 10;
            artifacts.gok.rating += 10;
            artifacts.ss.rating += 10;
            artifacts.os.rating += 5;
            break;
    }
    switch($('#slash').val()) {
        case 'pet':
            artifacts.foe.rating += 20;
            artifacts.hos2.rating += 20;
            artifacts.dh.rating += 20;
            artifacts.ss.rating += 15;
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.rt.rating += 5;
            artifacts.fs.rating += 5;
            artifacts.gok.rating += 5;
            artifacts.tr.rating += 20;
            artifacts.aom.rating += 5;
            artifacts.ao.rating += 5;
            artifacts.hos2.rating += 10;
            artifacts.roc.rating += 10;
            artifacts.bor.rating += 5;
            artifacts.ga.rating += 5;
            artifacts.os.rating += 5;
            artifacts.orc.rating += 20;
           break;
        case 'clan':
            artifacts.ie.rating += 20;
            artifacts.dh.rating += 10;
            artifacts.ig.rating += 15;
            artifacts.hos.rating += 15;
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.rt.rating += 5;
            artifacts.fs.rating += 5;
            artifacts.gok.rating += 5;
            artifacts.coe.rating += 10;
            artifacts.roc.rating += 10;
            artifacts.orc.rating += 20;
           break;
        case 'sc':
            artifacts.eoe.rating += 20;
            artifacts.sg.rating += 10;
            artifacts.ho.rating += 10;
            artifacts.dh.rating += 20;
            artifacts.ig.rating += 15;
            artifacts.ss.rating += 15;
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.rt.rating += 5;
            artifacts.fs.rating += 5;
            artifacts.gok.rating += 5;
            artifacts.tr.rating += 20;
            artifacts.aom.rating += 5;
            artifacts.bor.rating += 5;
            artifacts.ga.rating += 5;
            artifacts.os.rating += 5;
            artifacts.ms.rating += 10;         
            artifacts.roc.rating += 10;
            artifacts.bor.rating += 5;
            artifacts.orc.rating += 20;
            break;
    }
    switch($('#pet').val()) {
        case 'all':
            artifacts.dr.rating += 20;
            artifacts.hsw.rating += 20;
            artifacts.af.rating += 10;
            artifacts.hs2.rating += 10;
            artifacts.td.rating += 10;
            artifacts.roc.rating += 10;
            break;
        case 'hero':
            artifacts.hb.rating += 20;
            artifacts.tsos.rating += 10;
            artifacts.fb.rating += 10;
            artifacts.cota.rating += 10;
            artifacts.ttt.rating += 20;
            artifacts.hh.rating += 10;
            artifacts.lkm.rating += 10;
            artifacts.sor.rating += 10;
            break;
        case 'melee':
            artifacts.tsos.rating += 20;
            artifacts.hb.rating += 10;
            artifacts.lkm.rating += 10;
            artifacts.sor.rating += 10;
            break;
        case 'ranged':
            artifacts.fb.rating += 20;
            artifacts.hb.rating += 10;
            artifacts.lkm.rating += 10;
            artifacts.sor.rating += 10;
            break;
        case 'spell':
            artifacts.cota.rating += 20;
            artifacts.hb.rating += 10;
            artifacts.lkm.rating += 10;
            artifacts.sor.rating += 10;
            break;
        case 'tap':
            artifacts.dh.rating += 20;
            artifacts.dh.rating += 15;
            artifacts.ss.rating += 20;
            artifacts.tms.rating += 10;
            artifacts.pof.rating += 5;
            artifacts.a.rating += 5;
            artifacts.tac.rating += 5;
            artifacts.hb.rating += 5;
            artifacts.bor.rating += 5;
            artifacts.eoe.rating += 5;
            artifacts.ga.rating += 5;
            artifacts.os.rating += 5;
            artifacts.lkm.rating += 10;
           break;
        case 'gold':
            artifacts.bop.rating += 20;
            artifacts.sov.rating += 10;
            artifacts.coc.rating += 10;
            artifacts.hs.rating += 10;
            artifacts.eof.rating += 10;
            artifacts.dc.rating += 10;
            artifacts.coe.rating += 10;
            artifacts.gfa.rating += 10;
            artifacts.zc.rating += 10;
            artifacts.ao.rating += 10;
            artifacts.lkm.rating += 5;
            break;
        case 'mana':
            artifacts.tm.rating += 15;
            artifacts.ip.rating += 15;
            artifacts.rt.rating += 15;
            artifacts.fs.rating += 15;
            artifacts.gok.rating += 15;
            artifacts.lp.rating += 15;
            artifacts.rof.rating += 15;
            artifacts.ts.rating += 15;
            artifacts.bor.rating += 15;
            artifacts.ga.rating += 15;
            artifacts.os.rating += 15;
            artifacts.pof.rating += 15;
            artifacts.a.rating += 15;
            artifacts.tac.rating += 15;
            artifacts.eoe.rating += 15;
            artifacts.sg.rating += 15;
            artifacts.ho.rating += 15;
            artifacts.ig.rating += 15;
            artifacts.pt.rating += 15;
            artifacts.hoti.rating += 15;
            artifacts.ae.rating += 15;
            artifacts.ms.rating += 15;
            artifacts.lkm.rating += 10;
            break;
    }
    // Cascading Weight Boost
    artifacts.roc.rating += 50;
    artifacts.bod.rating += 50;
    artifacts.hom.rating += 50;
    artifacts.tp.rating += 50;
    artifacts.as.rating += 50;
    artifacts.pt.rating += 50;
    artifacts.orc.rating += 50;
    // End Cascading Weight Boost
    
    calculate(artifacts, true);
}


