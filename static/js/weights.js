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
    if($('#active').val()) {
        gtag('event', 'Active', {
          'event_category': 'Active',
          'event_action': 'Set',
          'event_label': $('#active').val(),
        });
    } else { gtag('event', 'Fail', { 'event_category' : 'Fail', 'event_action' : 'Active', 'event_label' : window.localStorage.getItem('active') });}
    $.each(origWeights, function(k,v) {
        artifacts[k].rating = v.rating;
    });
    switch($('#tree').val()) {
        case 'knight':
           artifacts.dh.rating += 5;
           artifacts.ss.rating += 5;
           artifacts.hb.rating += 5;
           artifacts.foe.rating += 5;
           artifacts.ao.rating += 5;
           artifacts.rt.rating += 5;
           artifacts.bor.rating += 5;
           artifacts.pof.rating += 5;
           artifacts.fs.rating += 5;
           artifacts.ga.rating += 5;
           artifacts.a.rating += 5;
           artifacts.gok.rating += 5;
           artifacts.os.rating += 5;
           artifacts.tac.rating += 5;
           artifacts.sor.rating += 5;
           break;
        case 'warlord':
           artifacts.coc.rating += 5;
           artifacts.hb.rating += 5;
           artifacts.ie.rating += 5;
           artifacts.pof.rating += 5;
           artifacts.a.rating += 5;
           artifacts.tac.rating += 5;
           artifacts.eof.rating += 5;
           artifacts.sor.rating += 5;
           break;
        case 'sorcerer':
           artifacts.gfm.rating += 5;
           artifacts.coe.rating += 5;
           artifacts.dh.rating += 5;
           artifacts.ss.rating += 5;
           artifacts.hb.rating += 5;
           artifacts.crh.rating += 5;
           artifacts.tm.rating += 5;
           artifacts.lp.rating += 5;
           artifacts.bor.rating += 5;
           artifacts.pof.rating += 5;
           artifacts.eoe.rating += 5;
           artifacts.hoti.rating += 5;
           artifacts.pt.rating += 5;
           artifacts.rof.rating += 5;
           artifacts.ga.rating += 5;
           artifacts.a.rating += 5;
           artifacts.sg.rating += 5;
           artifacts.ip.rating += 5;
           artifacts.ts.rating += 5;
           artifacts.os.rating += 5;
           artifacts.tac.rating += 5;
           artifacts.ho.rating += 5;
           artifacts.ae.rating += 5;
           artifacts.ms.rating += 5;
           artifacts.is.rating += 5;
           artifacts.sor.rating += 5;
           break;
        case 'rogue':
           artifacts.bop.rating += 5;
           artifacts.zc.rating += 5;
           artifacts.tr.rating += 5;
           artifacts.rt.rating += 5;
           artifacts.fs.rating += 5;
           artifacts.gok.rating += 5;
           artifacts.aom.rating += 5;
           break;
    }
    switch($('#hero').val()) {
        case 'melee':
           artifacts.tsos.rating += 5;
           break;
        case 'ranged':
           artifacts.fb.rating += 5;
           break;
        case 'spell':
           artifacts.cota.rating += 5;
           break;
    }
    switch($('#hero2').val()) {
        case 'ground':
           artifacts.ttt.rating += 5;
           break;
        case 'flying':
           artifacts.hh.rating += 5;
           break;
    }
    switch($('#spell').val()) {
        case 'hs':
           artifacts.coe.rating += 5;
           artifacts.dh.rating += 5;
           artifacts.ss.rating += 5;
           artifacts.hb.rating += 5;
           artifacts.crh.rating += 5;
           artifacts.tm.rating += 5;
           artifacts.rt.rating += 5;
           artifacts.bor.rating += 5;
           artifacts.pof.rating += 5;
           artifacts.fs.rating += 5;
           artifacts.ga.rating += 5;
           artifacts.a.rating += 5;
           artifacts.ip.rating += 5;
           artifacts.gok.rating += 5;
           artifacts.os.rating += 5;
           artifacts.tac.rating += 5;
           artifacts.sor.rating += 5;
           break;
        case 'ds':
           artifacts.dh.rating += 5;
           artifacts.ss.rating += 5;
           artifacts.tr.rating += 5;
           artifacts.rt.rating += 5;
           artifacts.fs.rating += 5;
           artifacts.gok.rating += 5;
           artifacts.aom.rating += 5;
           break;
        case 'hom':
           artifacts.bop.rating += 5;
           artifacts.gfm.rating += 5;
           artifacts.lp.rating += 5;
           artifacts.rof.rating += 5;
           artifacts.ts.rating += 5;
           artifacts.is.rating += 5;
           break;
        case 'fs':
           artifacts.dh.rating += 5;
           artifacts.ss.rating += 5;
           artifacts.hb.rating += 5;
           artifacts.bor.rating += 5;
           artifacts.ga.rating += 5;
           artifacts.os.rating += 5;
           break;
        case 'wc':
           artifacts.hb.rating += 5;
           artifacts.pof.rating += 5;
           artifacts.a.rating += 5;
           artifacts.tac.rating += 5;
           artifacts.sor.rating += 5;
           break;
        case 'sc':
           artifacts.dh.rating += 5;
           artifacts.ss.rating += 5;
           artifacts.hb.rating += 5;
           artifacts.rt.rating += 5;
           artifacts.bor.rating += 5;
           artifacts.pof.rating += 5;
           artifacts.eoe.rating += 5;
           artifacts.fs.rating += 5;
           artifacts.ga.rating += 5;
           artifacts.a.rating += 5;
           artifacts.sg.rating += 5;
           artifacts.gok.rating += 5;
           artifacts.os.rating += 5;
           artifacts.tac.rating += 5;
           artifacts.ho.rating += 5;
           artifacts.sor.rating += 5;
           break;
    }
    switch($('#sword').val()) {
        case 'all':
           artifacts.dr.rating += 5;
           break;
        case 'hero':
           artifacts.hb.rating += 5;
           artifacts.sor.rating += 5;
           break;
        case 'crit':
           artifacts.tr.rating += 5;
           artifacts.rt.rating += 5;
           artifacts.fs.rating += 5;
           artifacts.gok.rating += 5;
           artifacts.aom.rating += 5;
           break;
    }
    switch($('#helmet').val()) {
        case 'melee':
           artifacts.tsos.rating += 5;
           break;
        case 'ranged':
           artifacts.fb.rating += 5;
           break;
        case 'spell':
           artifacts.cota.rating += 5;
           break;
        case 'tap':
           artifacts.dh.rating += 5;
           artifacts.ss.rating += 5;
           artifacts.tr.rating += 5;
           artifacts.bor.rating += 5;
           artifacts.pof.rating += 5;
           artifacts.ga.rating += 5;
           artifacts.a.rating += 5;
           artifacts.os.rating += 5;
           artifacts.tac.rating += 5;
           break;
    }
    switch($('#chest').val()) {
        case 'all':
           artifacts.sov.rating += 5;
           artifacts.td.rating += 5;
           artifacts.as2.rating += 5;
           break;
        case 'boss':
           artifacts.hs.rating += 5;
           artifacts.zc.rating += 5;
           artifacts.hs2.rating += 5;
           artifacts.wod.rating += 5;
           break;
        case 'chest':
           artifacts.coc.rating += 5;
           artifacts.td.rating += 5;
           artifacts.eof.rating += 5;
           artifacts.as2.rating += 5;
           break;
    }
    switch($('#aura').val()) {
        case 'multi':
           artifacts.eotk.rating += 5;
           break;
        case 'chest':
           artifacts.coc.rating += 5;
           artifacts.eof.rating += 5;
           break;
        case 'crit':
           artifacts.tr.rating += 5;
           artifacts.rt.rating += 5;
           artifacts.fs.rating += 5;
           artifacts.gok.rating += 5;
           artifacts.aom.rating += 5;
           break;
    }
    switch($('#slash').val()) {
        case 'pet':
           artifacts.dh.rating += 5;
           artifacts.foe.rating += 5;
           break;
        case 'clan':
           artifacts.ie.rating += 5;
           break;
        case 'sc':
           artifacts.dh.rating += 5;
           artifacts.ss.rating += 5;
           artifacts.bor.rating += 5;
           artifacts.eoe.rating += 5;
           artifacts.ga.rating += 5;
           artifacts.sg.rating += 5;
           artifacts.os.rating += 5;
           artifacts.ho.rating += 5;
           break;
    }
    switch($('#pet').val()) {
        case 'all':
           artifacts.hsw.rating += 5;
           artifacts.dr.rating += 5;
           break;
        case 'hero':
           artifacts.hb.rating += 5;
           artifacts.pof.rating += 5;
           artifacts.a.rating += 5;
           artifacts.tac.rating += 5;
           artifacts.sor.rating += 5;
           break;
        case 'melee':
           artifacts.tsos.rating += 5;
           break;
        case 'ranged':
           artifacts.fb.rating += 5;
           break;
        case 'spell':
           artifacts.cota.rating += 5;
           break;
        case 'tap':
           artifacts.dh.rating += 5;
           artifacts.ss.rating += 5;
           artifacts.hb.rating += 5;
           artifacts.bor.rating += 5;
           artifacts.pof.rating += 5;
           artifacts.ga.rating += 5;
           artifacts.a.rating += 5;
           artifacts.os.rating += 5;
           artifacts.tac.rating += 5;
           artifacts.sor.rating += 5;
           break;
        case 'gold':
           artifacts.sov.rating += 5;
           artifacts.coc.rating += 5;
           artifacts.hs.rating += 5;
           artifacts.bop.rating += 5;
           artifacts.zc.rating += 5;
           artifacts.gfm.rating += 5;
           artifacts.coe.rating += 5;
           artifacts.ao.rating += 5;
           artifacts.lp.rating += 5;
           artifacts.rof.rating += 5;
           artifacts.ts.rating += 5;
           artifacts.eof.rating += 5;
           artifacts.dc.rating += 5;
           break;
        case 'mana':
           artifacts.ig.rating += 5;
           artifacts.tm.rating += 5;
           artifacts.rt.rating += 5;
           artifacts.lp.rating += 5;
           artifacts.bor.rating += 5;
           artifacts.pof.rating += 5;
           artifacts.eoe.rating += 5;
           artifacts.hoti.rating += 5;
           artifacts.pt.rating += 5;
           artifacts.fs.rating += 5;
           artifacts.rof.rating += 5;
           artifacts.ga.rating += 5;
           artifacts.a.rating += 5;
           artifacts.sg.rating += 5;
           artifacts.ip.rating += 5;
           artifacts.gok.rating += 5;
           artifacts.os.rating += 5;
           artifacts.ts.rating += 5;
           artifacts.tac.rating += 5;
           artifacts.ho.rating += 5;
           artifacts.ae.rating += 5;
           artifacts.ms.rating += 5;
           break;
    }
    switch($('#active').val()) {
        case 'offline':
           artifacts.zc.rating += 50;
           artifacts.af.rating += 50;
           break;
    }
    // Cascading Weight Boost
    artifacts.hsw.rating += 25;
    artifacts.dr.rating += 25;
    artifacts.roc.rating += 25;
    artifacts.bod.rating += 25;
    artifacts.hom.rating += 25;
    artifacts.tp.rating += 25;
    artifacts.as.rating += 25;
    // End Cascading Weight Boost
    
    calculate(artifacts, true);
}


